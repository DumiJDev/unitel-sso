import { OutlinedInput } from "@mui/material";

export default function Input({ value, typing, placeholder }: InputFormsProps) {
  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    e?.preventDefault();

    typing(e?.target.value || "");
  };

  return (
    <OutlinedInput
      style={{
        background: "transparent",
        width: "80%",
        height: 40,
        color: "#000",
      }}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

type InputFormsProps = {
  value: string | undefined;
  typing: (value: string) => void | undefined;
  placeholder: string;
};
