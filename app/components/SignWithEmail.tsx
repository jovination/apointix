import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"




export function SignWithEmail(){
    return(
        <Sheet>
        <SheetTrigger asChild>
        <Button>Sign In With Email</Button>
      </SheetTrigger>
      <SheetContent>
      <SheetHeader>
          <SheetTitle>
          Create your Apointix account
          </SheetTitle>
          <SheetDescription>
          Make changes to your profile here. Click save when you're done.     
        </SheetDescription>
        </SheetHeader>
        <div className="mt-4">
        <Input type="email" placeholder="Email" />
        </div>
      </SheetContent>
        </Sheet>
    )
}