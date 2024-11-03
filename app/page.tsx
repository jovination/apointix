 import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { auth } from "./lib/auth"
import { redirect } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider"

export default async function Home() {
  const session = await auth()

if(session?.user){
  return redirect("/dashboard ")
}
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

    <Navbar />
    </div>
    </ThemeProvider>
  );
}
