import React from "react";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* main-body  */}
      <div className="main">{children}</div>

      {/* footer  */}
      <footer className="mt-5 bg-dark text-light p-3 text-center">
        &copy; Copy right all reserve 2023
      </footer>
    </div>
  );
};
