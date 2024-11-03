"use client"
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import GoogleIcon from "@/public/google.svg"
import GithubIcon  from "@/public/github.svg";
import { Loader2 } from "lucide-react";

export function GoogleAuthButton(){

    const {pending} = useFormStatus()
    return(
        <>
        {pending ? (
            <Button disabled variant="outline" className="w-full">
           <Loader2 className="size-5 mr-2 animate-spin" /> Please wait..
            </Button>
        ): (
            <Button className="w-full flex items-center gap-4" variant="outline">
                     <Image src={GoogleIcon} alt="Google Icon" className="size-4 " />
                   <span> Sign with Google </span>
        </Button>
        )}
        </>
    )

}


export function GithubAuthButton(){

    const {pending} = useFormStatus()
    return(
        <>
        {pending ? (
            <Button disabled variant="outline" className="w-full">
           <Loader2 className="size-5 mr-2 animate-spin" /> Please wait..
            </Button>
        ): (
            <Button className="w-full flex items-center gap-4" variant="outline">
            <Image src={GithubIcon} alt="github icon"  className="size-5 dark:invert" />      
            <span> Sign with Github </span>
            </Button>
        )}
        </>
    )

}
