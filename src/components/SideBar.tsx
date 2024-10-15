'use client'

import { useState } from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import ToolList from "@/components/common/ToolList";
import { Button } from "@/components/common/Button"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
 
export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
 
  return (
      <aside className={`py-4 px-3 flex flex-col gap-4 bg-gray-700 ${isCollapsed ? 'w-12' : 'w-80'} truncate ease-in-out duration-300`}>
        <div className="flex gap-2 items-center justify-between">
          {!isCollapsed && <h4 className="m-0 text-lg">Dev Toolbox</h4>}
          <button
            className="cursor-pointer p-0"
            onClick={() => setIsCollapsed(!isCollapsed)}
            title={isCollapsed ? "Expand" : "Collapse"}
          >
            {isCollapsed 
                ? <ChevronDoubleRightIcon className="w-6 h-6" />
                : <ChevronDoubleLeftIcon className="W-6 h-6" />}
          </button>
        </div>
        {!isCollapsed && (
          <>
          <div>
            <SignedIn>
              <div className="px-2 my-4 flex justify-between w-full">
                <UserButton afterSignOutUrl="/tools/json-validator" />
                <Button intent={"secondary"} href={"/tools/history"}>
                  View History
                </Button>
              </div>
            </SignedIn>
            <SignedOut>
              <div className="mx-2 my-4 flex flex-col gap-4">
                <Button fullWidth intent={"primary"} href={"/sign-in"}>
                  Log in / Sign-up
                </Button>
                <p className="text-xs text-wrap text-gray-200">
                  You only have to create an account if you want to upgrade to
                  DevToolbox Pro which saves your history so you can keep track of all
                  the actions you have done.
                </p>
              </div>
            </SignedOut>
          </div>
          <ToolList />
          </>
        )}
      </aside>
  );
}