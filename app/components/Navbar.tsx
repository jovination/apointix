
import Link from "next/link"
import { AuthModal } from "./AuthModal"
import Image from "next/image"
import Logo from "@/public/logo.png"
export function Navbar(){

    return(
        <div className="flex py-5 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="Logo"className="size-9" />
            <span className="text-xl font-bold text-gray-900">Apointix</span>
            </Link>
       <AuthModal />
        </div>
    )

}