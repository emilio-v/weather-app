import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/WheaterContext/context";
import MainLayout from "./layouts/MainLayout";
import Weather from "./pages/Weather";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Weather />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
