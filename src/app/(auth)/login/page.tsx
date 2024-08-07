
import React from "react";
import { login, signup } from "../actions";
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ServerSubmitButton from "@/components/ServerSubmitButton";
import AuthForm from "../AuthForm";
async function page() {
  return (
    // <form action={login}>
    //   <label htmlFor="username">username</label>
    //   <input name="username" id="email" />
    //   <br />
    //   <label htmlFor="password">Password</label>
    //   <input name="password" id="password" />
    //   <br />
    //   <button type="submit">continue</button>
    // </form>
    <MaxWidthWrapper>
          <div className="w-full lg:grid lg:min-h-[600px]  ">
      <div className="flex items-center justify-center py-12 w-full">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <AuthForm formType="login"/>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>

    </div>
    </MaxWidthWrapper>
  )
}

  


export default page;
