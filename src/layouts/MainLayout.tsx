import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
