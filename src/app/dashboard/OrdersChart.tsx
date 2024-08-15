"use client";

import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Order } from "@prisma/client";

const chartConfig = {
  amount: {
    label: "Date",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;
interface orders {
  orders: Array<Order>;
}
interface OrderCountByDate {
  [date: string]: number;
}
function OrdersChart({ orders }: orders) {
  const ordersByDate: OrderCountByDate = orders.reduce((acc, item) => {
    const date = new Date(item.createdAt).toISOString().split("T")[0];

    if (acc[date]) {
      acc[date] += 1;
    } else {
      acc[date] = 1;
    }

    return acc;
  }, {} as OrderCountByDate);

  const formattedOrderData = Object.keys(ordersByDate).map((date) => ({
    date,
    totalOrders: ordersByDate[date],
  }));


  return (
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={formattedOrderData.toReversed()}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                `${value.split("-")[1]}-${value.split("-")[2]}`
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="totalOrders" fill="var(--color-amount)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
  );
}

export default OrdersChart;
