import { Colors } from "../../../constants/colors";

export default function Button({ action, title, type }: ButtonProps) {
  return (
    <button
      style={{
        background: !type
          ? Colors.SECONDARY
          : (type === ButtonColors.PRIMARY
          ? Colors.PRIMARY
          : Colors.SECONDARY),
          width: "80%",
          height: 40
      }}
      onClick={action}
    >
      {title}
    </button>
  );
}

type ButtonProps = {
  action: () => void;
  title: string;
  type?: ButtonColors;
};

export enum ButtonColors {
  PRIMARY = 1,
  SECONDARY = 2,
}
