import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function Header() {
  const { role, setRole } = useContext(FinanceContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-gray-400 text-sm">
          Welcome back — manage your finances smartly
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden sm:block text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
          {role.toUpperCase()}
        </span>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="bg-white/10 backdrop-blur-lg border border-white/10 px-3 py-2 rounded-lg focus:outline-none hover:bg-white/20 transition"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>
  );
}