import { Header } from "src/shared/header/header";
import Footer from "src/shared/footer/footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <div className="container-fluid" style={{ height: "100%" }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
