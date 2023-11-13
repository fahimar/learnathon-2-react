import { Outlet } from "react-router-dom";
import "./BasicLayout.css";
import { HtmlHTMLAttributes } from "react";

interface BasicLayoutProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "children"> {}

const BasicLayout = ({ ...restProps }: BasicLayoutProps) => {
  return (
    <div className="layout-basic" {...restProps}>
      <header className="app-header">
        <h1>Learnatho 2.0</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BasicLayout;
