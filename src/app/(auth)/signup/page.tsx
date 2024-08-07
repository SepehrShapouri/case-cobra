import Link from "next/link";


import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AuthForm from "../AuthForm";
async function page() {
  return (
    <MaxWidthWrapper>
      <div className="w-full lg:grid lg:min-h-[600px]  ">
        <div className="flex items-center justify-center py-12 w-full">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Create an account</h1>
              <p className=" text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <AuthForm formType="signup" />
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default page;
