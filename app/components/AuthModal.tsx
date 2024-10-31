import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Logo from "@/public/logo.png"
import GoogleIcon from "@/public/google.svg"
import GithubIcon  from "@/public/github.svg";

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
                <Button className="flex items-center gap-4" variant="outline">
                     <Image src={GoogleIcon} alt="Google Icon" className="size-4" />
                   <span> Sign with Google </span>
                </Button>
                <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs ">
              <span className="bg-white px-2 text-gray-500">or</span>
            </div>
          </div>
                <Button className="flex items-center gap-4" variant="outline">
                    <Image src={GithubIcon} alt="github icon"  className="size-5" />      
                   <span> Sign with Github </span>
                </Button>
                <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs ">
              <span className="bg-white px-2 text-gray-500">or</span>
            </div>
          </div>
          <Button>
            Continue with Email
          </Button>

            </div>


         </DialogContent>
        </Dialog>
    )
}