"use client";
import React from "react";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { sdkOptions } from "@/const/const";
import dynamic from "next/dynamic";

export default function Home() {
  const DynamicForm = dynamic(() => import("../../page/form/form"), { ssr: false });
  return (
    <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
      <DynamicForm />
    </MetaMaskProvider>
  );
}
