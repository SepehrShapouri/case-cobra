"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPaymentStatus } from "./actions";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

function ThankYou() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "";
  const { data } = useQuery({
    queryKey: ["get-payment-status"],
    queryFn: async () => await getPaymentStatus({ orderId }),
    retry: true,
    retryDelay: 500,
  });

  if (data === undefined) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="animate-spin h-8 w-8 text-zinc-500" />
          <h3 className="font-semibold text-xl">Loading your order...</h3>
          <p>This wont take long.</p>
        </div>
      </div>
    );
  }
  if (data === false) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="animate-spin h-8 w-8 text-zinc-500" />
          <h3 className="font-semibold text-xl">Verifying your payment...</h3>
          <p>This might take a moment.</p>
        </div>
      </div>
    );
  }
  const { configuration, billingAddress, shippingAddress, amount } = data;
  const { color } = configuration;
  return <div></div>;
}

export default ThankYou;
