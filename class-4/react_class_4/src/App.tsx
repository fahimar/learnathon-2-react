import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/index";
import { Suspense, lazy } from "react";

const BasicLayout = lazy(() => import("./layouts/BasicLayout"));
const BlogLayout = lazy(() => import("./layouts/BlogLayout"));

export const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/blog"
            element={
              <Suspense fallback={<div>Loading ...</div>}>
                <BlogLayout />
              </Suspense>
            }
          >
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/" element={<BasicLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
