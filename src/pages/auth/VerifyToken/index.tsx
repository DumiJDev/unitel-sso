import React from "react";
import Logo from "../../../components/Logo";
import Button, { ButtonColors } from "../../../components/forms/Button";
import FormContainer from "../../../components/forms/FormContainer";
import Input from "../../../components/forms/Input";
import Main from "../../../layouts/Main";
import { useSearchParams } from "react-router-dom";

export default function VerifyToken() {
  const [params] = useSearchParams();
  const [token, setToken] = React.useState<string>(
    params.get("token") || "xxxxxxx"
  );

  const handleToken = (value: string) => {
    setToken(value);
  };

  const handleValidateToken = () => {
    const redirect = params.get("redirect") || "https://google.com?q=" + token;

    setTimeout(() => {
      window.open(redirect, "_self");
    }, 1500);
  };

  return (
    <Main>
      <Logo />
      <FormContainer>
        <Input
          typing={handleToken}
          value={token}
          placeholder="Insira seu token"
        />
        <Button
          action={handleValidateToken}
          type={ButtonColors.SECONDARY}
          title="Validar Token"
        />
      </FormContainer>
    </Main>
  );
}
