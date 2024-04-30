import FormContainer from "../../../components/forms/FormContainer";
import Input from "../../../components/forms/Input";
import Main from "../../../layouts/Main";
import React from "react";

export default function Login() {
    const [number, setNumber] = React.useState<string>()
    
    const handleNumber = (value: string) => {
        setNumber(value)
    }
    
    return (
        <Main>
            <FormContainer>
                <Input typing={handleNumber}  value={number}/>
            </FormContainer>
        </Main>
    );
}

