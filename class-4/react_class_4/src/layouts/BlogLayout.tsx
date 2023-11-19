import { Outlet } from "react-router-dom";
import "./BlogLayout.css";
import { HtmlHTMLAttributes } from "react";

interface AdminLayout extends HtmlHTMLAttributes<HTMLDivElement> {}

const BlogLayout = ({ children, ...restProps }: AdminLayout) => {
  return (
    <div className="layout-blog" {...restProps}>
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};

export default BlogLayout;
