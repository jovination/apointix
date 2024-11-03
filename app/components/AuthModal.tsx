import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Logo from "@/public/logo.png"

import { signIn } from "../lib/auth";
import { GithubAuthButton, GoogleAuthButton } from "./SubmitButtons";
import { SignWithEmail } from "./SignWithEmail"

export function AuthModal(){
    return(
        <Dialog>
         <DialogTrigger asChild >
            <Button className="">
                Try For Free
            </Button>
         </DialogTrigger>
         <DialogContent className="sm:max-w-[450px]">
            <DialogHeader >
           
            
            <DialogTitle className="text-2xl font-bold text-center">
            Create your Apointix Account
          </DialogTitle>

            </DialogHeader>
            <div className="flex flex-col mt-5 gap-4">
                 <form action={
                   async () =>{
                    "use server"
                    await signIn("google");
                   }} className="w-full">
                    
                    <GoogleAuthButton />
               
                </form>
                <div className="flex items-center gap-2">
  <div className="flex-1 border-t border-[bg-muted]" />
  <span className="px-2 text-[bg-muted]">or</span>
  <div className="flex-1 border-t border-[bg-muted]" />
</div>


          <form action={
                   async () =>{
                    "use server"
                    await signIn("github");
                   }} className="w-full">
                   
               <GithubAuthButton />
                </form>
                <div className="flex items-center gap-2">
  <div className="flex-1 border-t border-[bg-muted]" />
  <span className="px-2 text-[bg-muted]">or</span>
  <div className="flex-1 border-t border-[bg-muted]" />
</div>
         
         <SignWithEmail />

            </div>


         </DialogContent>
        </Dialog>
    )
}