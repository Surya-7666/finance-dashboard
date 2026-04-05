import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300";

  return (
    <>
      {/* 📱 TOP NAVBAR */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-40 flex justify-between items-center px-4 py-3 bg-black/60 backdrop-blur-xl border-b border-white/10">
        <h1 className="text-lg font-bold text-indigo-400">FinTrack</h1>

        <button onClick={() => setOpen(true)}>
          <Menu className="text-white" />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 📱 Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black/90 backdrop-blur-xl border-r border-white/10 p-6 z-50 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
      >
        <div className="flex flex-col h-full">
          
          <div>
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-xl font-bold text-indigo-400">FinTrack</h1>
              <button onClick={() => setOpen(false)}>
                <X className="text-white" />
              </button>
            </div>

            <NavLinks close={() => setOpen(false)} />
          </div>

          <div className="mt-auto">
            <div className="h-24 bg-gradient-to-t from-indigo-500/20 to-transparent blur-2xl"></div>
          </div>

        </div>
      </div>

      {/* 💻 Desktop */}
      <div className="hidden lg:flex fixed top-0 left-0 w-64 h-screen bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-xl border-r border-white/10 px-6 py-8">

        <div className="flex flex-col h-full w-full">

          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-2xl font-bold text-indigo-400">
              FinTrack
            </h1>
          </div>

          {/* Nav */}
          <NavLinks />

          {/* Bottom Glow */}
          <div className="mt-auto">
            <div className="h-24 bg-gradient-to-t from-indigo-500/20 to-transparent blur-2xl"></div>
          </div>

        </div>

      </div>
    </>
  );
}

function NavLinks({ close }) {
  const linkClass =
    "group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300";

  return (
    <nav className="flex flex-col gap-3">
      <NavLink
        to="/"
        onClick={close}
        className={({ isActive }) =>
          `${linkClass} ${
            isActive
              ? "bg-indigo-500/20 text-white border border-indigo-500/20 shadow-lg"
              : "text-gray-400 hover:text-white hover:bg-white/10"
          }`
        }
      >
        📊 Dashboard
      </NavLink>

      <NavLink
        to="/transactions"
        onClick={close}
        className={({ isActive }) =>
          `${linkClass} ${
            isActive
              ? "bg-indigo-500/20 text-white border border-indigo-500/20"
              : "text-gray-400 hover:text-white hover:bg-white/10"
          }`
        }
      >
        💳 Transactions
      </NavLink>

      <NavLink
        to="/insights"
        onClick={close}
        className={({ isActive }) =>
          `${linkClass} ${
            isActive
              ? "bg-indigo-500/20 text-white border border-indigo-500/20"
              : "text-gray-400 hover:text-white hover:bg-white/10"
          }`
        }
      >
        📈 Insights
      </NavLink>
    </nav>
  );
}