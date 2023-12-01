"use client";
import { MainProvider } from "@/contexts";

export default function LayoutContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainProvider>{children}</MainProvider>;
}
