import React from "react";
import { Container } from "./styles";

export default function FormContainer({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return <Container>{children}</Container>;
}
