import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import InsightsPage from "./pages/Insights";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 lg:ml-64 w-full pt-16 lg:pt-0 transition-all duration-300">

          {/* Header */}
          <div className="px-4 sm:px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-xl sticky top-0 z-30">
            <Header />
          </div>

          {/* Pages */}
          <div className="px-4 sm:px-6 py-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/insights" element={<InsightsPage />} />
            </Routes>
          </div>

        </div>
      </div>
    </BrowserRouter>
  );
}