import React from "react";
import Logo from "../../../components/Logo";
import Button, { ButtonColors } from "../../../components/forms/Button";
import FormContainer from "../../../components/forms/FormContainer";
import Input from "../../../components/forms/Input";
import Main from "../../../layouts/Main";

export default function VerifyToken() {
  const [token, setToken] = React.useState<string>();

  const handleToken = (value: string) => {
    setToken(value);
  };

  return (
    <Main>
      <Logo />
      <FormContainer>
        <Input typing={handleToken} value={token} placeholder="Insira seu token" />
        <Button
          action={() => {}}
          type={ButtonColors.SECONDARY}
          title="Validar"
        />
      </FormContainer>
    </Main>
  );
}
