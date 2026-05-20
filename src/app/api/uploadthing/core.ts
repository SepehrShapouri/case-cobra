import { createUploadthing, type FileRouter } from "uploadthing/next";
import { z } from "zod";
import sharp from "sharp";
import { db } from "@/db";
const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f(
    { image: { maxFileSize: "16MB", maxFileCount: 1 } },
    { awaitServerData: true }
  )
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => {
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { configId } = metadata.input;
      const fileUrl = file.ufsUrl;

      const res = await fetch(fileUrl);
      if (!res.ok) {
        throw new Error(`Failed to fetch uploaded image: ${res.status}`);
      }

      const buffer = await res.arrayBuffer();

      const imageMetadata = await sharp(buffer).metadata();
      const { width, height } = imageMetadata;
      if (!configId) {
        const configuration = await db.configuration.create({
          data: {
            imgUrl: fileUrl,
            height: height || 500,
            width: width || 500,
          },
        });
        return { configId: configuration.id };
      } else {
        const updatedConfiguration = await db.configuration.update({
          where: { id: configId },
          data: { croppedImgUrl: fileUrl },
        });
        return { configId: updatedConfiguration.id };
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
