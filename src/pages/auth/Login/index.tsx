import Logo from "../../../components/Logo";
import Button, { ButtonColors } from "../../../components/forms/Button";
import FormContainer from "../../../components/forms/FormContainer";
import Input from "../../../components/forms/Input";
import Main from "../../../layouts/Main";
import React from "react";

export default function Login() {
  const [number, setNumber] = React.useState<string>();

  const handleNumber = (value: string) => {
    setNumber(value);
  };

  return (
    <Main>
      <Logo />
      <FormContainer>
        <Input typing={handleNumber} value={number} placeholder="Insira seu nº tel" />
        <Button
          action={() => {}}
          type={ButtonColors.SECONDARY}
          title="Enviar token"
        />
      </FormContainer>
    </Main>
  );
}
