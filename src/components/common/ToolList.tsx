"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StarIcon } from "@heroicons/react/24/outline";
import { Separator } from "@/components/ui/separator";

export type ToolOption = {
  name: string;
  path: string;
};
export const toolList: ToolOption[] = [
  {
    name: "Diff Viewer",
    path: "/tools/diff-viewer",
  },
  {
    name: "JSON Validator",
    path: "/tools/json-validator",
  },
  {
    name: "Clipboard Formatter",
    path: "/tools/clipboard-formatter",
  },
  {
    name: "String Converter",
    path: "/tools/string-converter",
  },
  {
    name: "Character/Word Counter",
    path: "/tools/character-and-word-counter",
  },
  {
    name: "Unix Time Converter",
    path: "/tools/unix-time-converter",
  },
  {
    name: "Base64 Encoder",
    path: "/tools/base64encoder",
  },
  {
    name: "Base64 Image Encoder",
    path: "/tools/base64imageencoder",
  },
  {
    name: "Url Parser",
    path: "/tools/url-parser",
  },
  {
    name: "Url Encoder",
    path: "/tools/url-encoder",
  },
  {
    name: "Url Decoder",
    path: "/tools/url-decoder",
  },
  {
    name: "Color Converter",
    path: "/tools/color-converter",
  },
  {
    name: "Hash Generator",
    path: "/tools/hash-generator",
  },
  {
    name: "Line Sort And Dedupe",
    path: "/tools/line-sort-and-dedupe",
  },
  {
    name: "Regex Checker",
    path: "/tools/regex-checker",
  },
  {
    name: "Markdown Editor",
    path: "/tools/markdown-editor",
  },
  {
    name: "QRCode Generator",
    path: "/tools/qrcode-generator",
  },
  {
    name: "ASCII Converter",
    path: "/tools/ascii-converter",
  },
  {
    name: "CSS Unit Converter",
    path: "/tools/css-unit-converter",
  },
  {
    name: "UUID Generator",
    path: "/tools/uuid-generator",
  },
  {
    name: "JWT Viewer",
    path: "/tools/jwt-viewer",
  },
];

export default function ToolList() {
  const pathname = usePathname();
  return (
    <div className="bg-gray-700 flex shrink-0 flex-col">
      <Separator className="my-2" />
      <Link
        className='w-full py-3 px-4 hover:bg-gray-600 hover:rounded-md'
        href="https://github.com/YourAverageTechBro/DevToolboxWeb"
        target="_blank"
        >
        <div className={"flex items-center gap-2"}>
          <StarIcon className={"w-6 h-6"} />
          Star Us On Github
        </div>
      </Link>
      <Separator className="my-2" />
      {toolList
        .sort((a, b) => {
          if (a.name < b.name) return -1;
          else if (a.name > b.name) return 1;
          return 0;
        })
        .map((toolOption) => (
          <>
            <Link
            className={`w-full py-3 px-4 hover:bg-gray-600 hover:rounded-md ${
              pathname === toolOption.path && "bg-gray-500 rounded-md"
              }`}
              key={toolOption.name}
              href={toolOption.path}
              >
              <p> {toolOption.name}</p>
            </Link>
            <Separator className="my-2" />
          </>
        ))}
    </div>
  );
}
