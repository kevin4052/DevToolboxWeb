'use client';

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Menu } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button as ShadcnButton } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/common/Button"
import ToolList from "@/components/common/ToolList";

export function SideNavBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShadcnButton size='icon' variant='ghost' className='fixed top-3 left-3'>
          <Menu size={20} />
        </ShadcnButton>
      </SheetTrigger>
      <SheetContent side='left' className='px-3 py-8 bg-gray-700'>
        <div className='flex flex-col w-full h-full'>
          <div className="h-fit">
            <SignedIn>
              <div className={"px-2 my-4 flex justify-between w-full"}>
                <UserButton afterSignOutUrl="/tools/json-validator" />
                <Button intent={"secondary"} href={"/tools/history"}>
                  View History
                </Button>
              </div>
            </SignedIn>
            <SignedOut>
              <div className={"mx-2 my-4 flex flex-col gap-4"}>
                <Button fullWidth intent={"primary"} href={"/sign-in"}>
                  Log in / Sign-up
                </Button>
                <p className={"text-xs text-gray-200"}>
                  You only have to create an account if you want to upgrade to
                  DevToolbox Pro which saves your history so you can keep track of all
                  the actions you have done.
                </p>
              </div>
            </SignedOut>
          </div>
          <div className="h-3/4">
            <ScrollArea className="h-full">
              <ToolList/>
            </ScrollArea>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}