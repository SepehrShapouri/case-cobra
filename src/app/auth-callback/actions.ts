"use server";

import { db } from "@/db";
import { getUser } from "@/lib/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function getAuthStatus() {
  const user = await getUser();
  if (!user?.id || !user?.email) {
    throw new Error("Invalid user data");
  }

  const existingUser = await db.user.findFirst({ where: { id: user.id } });
  if (!existingUser) {
    await db.user.create({ data: { id: user.id, email: user.email ,username:user.username,password_hash:user.password_hash} });
  }

  return {success : true}
}
