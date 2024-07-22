import PageTransition from "../../components/providers/PageTransition"
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
