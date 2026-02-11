import type { ReactNode } from "react";
import ShowCasesLayout from "@/app/components/shared/showCases/showCaseLayout/ShowCasesLayout";

export default function ShowCasesRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ShowCasesLayout>{children}</ShowCasesLayout>;
}

