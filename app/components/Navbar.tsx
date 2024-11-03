
import Link from "next/link"
import { AuthModal } from "./AuthModal"
import Image from "next/image"
import Logo from "@/public/logo.svg"
import { ModeToggle } from "@/components/ui/ModeToggle2"
export function Navbar(){

    return(
        <div className="flex py-5 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="Logo" className="size-9 dark:invert" />
            <div className="text-xl font-bold text-[bg-primary]">Apointix</div>
            </Link>
       <div className="flex items-center gap-4">
       <AuthModal />
       <ModeToggle />
       </div> 
        </div>
    )

}