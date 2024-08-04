import { validateRequest } from "@/auth";
import { getUser } from "@/lib/user";

export async function GET() {
    const {user} = await validateRequest()
    console.log(user)
    return Response.json({user})
}
