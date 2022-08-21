import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Weather from "./pages/Weather";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Weather />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
