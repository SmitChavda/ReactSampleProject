import { Header } from "src/shared/header/header";
import Footer from "src/shared/footer/footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
