
import { getUser } from "@/lib/user";
import { validateRequest } from "@/lib/validate-request";

export async function GET() {
const user = await validateRequest()
  return Response.json({ user });
}
