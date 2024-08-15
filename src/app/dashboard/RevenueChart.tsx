"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { array } from "zod";
import { Order } from "@prisma/client";
const chartData = [
  { date: "2024-08-14", amount: 22 },
  { date: "2024-08-13", amount: 14 },
  { date: "2024-08-12", amount: 14 },
  { date: "2024-08-07", amount: 14 },
  { date: "2024-08-07", amount: 22 },
  { date: "2024-08-06", amount: 14 },
];

const chartConfig = {
  amount: {
    label: "Amount  $",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;
interface orders {
  orders: Array<Order>;
}

export function RevenueChart({ orders }: orders) {
  const formattedData = orders.map((item) => ({
    date: new Date(item.createdAt!).toISOString().split("T")[0],
    amount: item.amount!,
  }));
  return (
    <>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={formattedData.toReversed()}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                `${value.split("-")[1]}-${value.split("-")[2]}`
              }
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="amount"
              type="natural"
              stroke="var(--color-amount)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </>
  );
}
