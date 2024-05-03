import { useSearchParams } from "react-router-dom";
import Logo from "../../../components/Logo";
import Button, { ButtonColors } from "../../../components/forms/Button";
import FormContainer from "../../../components/forms/FormContainer";
import Input from "../../../components/forms/Input";
import Main from "../../../layouts/Main";
import React from "react";

export default function Login() {
  const [number, setNumber] = React.useState<string>("");
  const [params] = useSearchParams();

  const handleNumber = (value: string) => {
    setNumber(value);
  };

  const handleGetToken = () => {
    const redirect = params.get("redirect");
    const token = number || "xxxxxxx";
    const url = `/auth/verify?token=${token}${
      redirect ? "&redirect=" + redirect : ""
    }`;

    setTimeout(() => {
        window.location.href = url
    }, 1500);
  };

  return (
    <Main>
      <Logo />
      <FormContainer>
        <Input
          typing={handleNumber}
          value={number}
          placeholder="Insira seu nº tel"
        />
        <Button
          action={handleGetToken}
          type={ButtonColors.SECONDARY}
          title="Obter Token"
        />
      </FormContainer>
    </Main>
  );
}
