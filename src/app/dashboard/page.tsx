import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/db";
import { getUser } from "@/lib/user";
import { fromatPrice } from "@/lib/utils";
import { notFound } from "next/navigation";
import { RevenueChart } from "./RevenueChart";
import OrdersChart from "./OrdersChart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StatusDropdown from "./StatusDropdown";

async function page() {
  const user = await getUser();
  if (!user || user?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return notFound();
  }

  const orders = await db.order.findMany({
    orderBy: { createdAt: "desc" },
    include: { user: true, shippingAddress: true },
  });

  const Sum = await db.order.aggregate({
    where: { isPaid: true },
    _sum: { amount: true },
  });
  console.log(orders);
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4">
        <div className="flex flex-col gap-16">
          <div className="grid gap-4 sm:grid-cols-2 p-4 sm:p-2 md:p-0">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-4xl">
                  {fromatPrice(Sum._sum.amount ?? 0)}
                </CardTitle>
              </CardHeader>
              <div className="mt-4">
                <CardContent>
                  <RevenueChart orders={orders} />
                </CardContent>
              </div>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Total َOrders</CardDescription>
                <CardTitle className="text-4xl">{orders.length}</CardTitle>
              </CardHeader>
              <div className="mt-4">
                <CardContent>
                  <OrdersChart orders={orders} />
                </CardContent>
              </div>
            </Card>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">Incoming orders</h1>

          <Table>
            <TableHeader className="w-full">
              <TableRow className="w-full">
                <TableHead>Customer</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden sm:table-cell">
                  Purchase date
                </TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders.map((order)=>(
                <TableRow key={order.id} className="bg-accent">
                  <TableCell className="">
                    <div className="font-medium">{order.shippingAddress?.name}</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">{order.user.email}</div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <StatusDropdown id={order.id} orderStatus={order.status}/>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {order.createdAt.toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">{fromatPrice(order.amount)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default page;
