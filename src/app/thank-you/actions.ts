"use server";

import { db } from "@/db";
import { getUser } from "@/lib/user";

export async function getPaymentStatus({ orderId }: { orderId: string }) {
  const user = await getUser();
  if (!user?.id || !user.email) {
    throw new Error("You need to be logged in to view this page!");
  }
  const order = await db.order.findFirst({
    where: {
      id: orderId,
      userId: user.id,
    },
    include: {
      billingAddress: true,
      configuration: true,
      shippingAddress: true,
      user: true,
    },
  });
  if (!order) {
    throw new Error("This order does not exist!");
  }
  if (order.isPaid) {
    return order;
  } else {
    return false;
  }
}
