import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "../src/pages/HomePage";
import SubmissionPage from "./pages/SubmissionPage";
import SubmissionForm from "./pages/SumissionForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submission/:id" element={<SubmissionPage />} />
        <Route
          path="/submission/edit"
          element={
            <SubmissionForm />
          }
        />
        <Route path="/form" element={<SubmissionForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
