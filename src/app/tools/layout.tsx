import ToolList from "@/components/common/ToolList";
import { SideNavBar } from "@/components/SideNavBar";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"h-full w-full flex gap-4"}>
      <SideNavBar />
      <div
        className={"pt-4 px-4 ml-12 flex-1 overflow-x-hidden"}
      >
        <div style={{height: "calc(100% - 2rem)"}}>
          {children}
        </div>
      </div>
    </div>
  );
}
