import {ChangeEvent} from "react";

export default function Input({value, typing} : InputFormsProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement> | undefined)  => {
        e?.preventDefault();
        
        typing(e?.target.value || "")
    }
    
    return <input value={value} onChange={handleChange}/> 
}

type InputFormsProps = {
    value: string | undefined;
    typing: (value: string) => void | undefined;
}