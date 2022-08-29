import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="max-w-[70rem] lg:max-w-[60rem] md:max-w-[50rem] sm:max-w-[40rem] px-10 mx-auto">
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
