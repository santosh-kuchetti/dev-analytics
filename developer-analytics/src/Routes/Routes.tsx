import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analytics from "../Views/Public/Analytics/Analytics";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
};
