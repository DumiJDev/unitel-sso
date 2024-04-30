import { Container } from "./styles";
import React from "react";

export default function Main({children}: {children: React.ReactNode | React.ReactNode[]}) {
    return <Container>{children}</Container>
}