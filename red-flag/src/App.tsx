import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DemoPage } from "./pages/DemoPage";
import { ResultsPage } from "./pages/ResultsPage";
import { JudgePage } from "./pages/JudgePage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { MethodologyPage } from "./pages/MethodologyPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<DemoPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/judge" element={<JudgePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
