import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import DesignConfigurator from "./DesignConfigurator";
interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
async function page({ searchParams }: PageProps) {
  const { id } = searchParams;

  if (!id || typeof id != "string") {
    return notFound();
  }

  const configuration = await db.confifuration.findUnique({ where: { id } });

  if (!configuration) {
    return notFound();
  }

  const { imgUrl, width, height } = configuration;
  return (
    <DesignConfigurator
      configId={configuration.id}
      imageDimensions={{ width, height }}
      imgUrl={imgUrl}
    />
  );
}

export default page;
