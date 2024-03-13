import React from "react";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import FooterComponet from "../FooterComponent/FooterComponet";

export const DefaultComponent = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
      <FooterComponet />
    </div>
  );
};
