'use client'
import ServerSubmitButton from "@/components/ServerSubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { useFormState } from 'react-dom';
import { login, signup } from "./actions";
type formType = ["signup", "login"];
type State = any
interface AuthFormTypes {
  formType: "signup" | "login";
}
function AuthForm({ formType}: AuthFormTypes) {
    const [state,formAction] = useFormState<State, FormData>(formType == 'login' ? login : signup,{error:null})
    const {toast} = useToast()
    useEffect(()=>{
        if(state.error){
            toast({
                variant:"destructive",
                title:"Oops!",
                description:state.error
            })
        }
    },[state])
  return (
    <form className="grid gap-4" action={formAction}>
        {formType === 'signup' &&       <div className="grid gap-2">
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
        />
      </div>}
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="username"
          name="username"
          placeholder="Enter your username"
          required
        />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
        </div>
        <Input id="password" name="password" type="password" required />
      </div>
      <ServerSubmitButton title="Sign Up" loadingTitle="redirecting" />
    </form>
  );
}

export default AuthForm;
