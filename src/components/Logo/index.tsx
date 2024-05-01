import React from "react";
import logo from "../../assets/logo.png";

export default function Logo() {
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  window.addEventListener("resize", () => {
    setIsVisible(window.innerWidth > 1070);
  });

  return isVisible ? <img src={logo} alt="Logo da Unitel" /> : <></>;
}
