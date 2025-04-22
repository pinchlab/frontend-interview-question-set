import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "../App";
import Question1 from "../pages/Question1";
import Question2 from "../pages/Question2";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
      </Routes>
    </BrowserRouter>
  )
}