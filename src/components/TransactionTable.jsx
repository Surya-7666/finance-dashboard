import { useContext, useState } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function TransactionTable() {
  const { transactions, role } = useContext(FinanceContext);
  const [search, setSearch] = useState("");

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 shadow-lg">
      
      {/* Search */}
      <input
        placeholder="Search..."
        className="mb-4 p-2 w-full bg-white/10 rounded-lg outline-none text-white"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <table className="w-full text-sm">
        
        <thead className="text-gray-400 border-b border-white/10">
          <tr>
            <th className="py-2">Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {filtered.map((t) => (
            <tr key={t.id} className="hover:bg-white/5 transition">
              
              <td className="py-2">{t.date}</td>
              <td>₹ {t.amount}</td>
              <td>{t.category}</td>
              <td className={t.type === "income" ? "text-green-400" : "text-red-400"}>
                {t.type}
              </td>

              {role === "admin" && (
                <td>
                  <button className="text-indigo-400 hover:underline">
                    Edit
                  </button>
                </td>
              )}

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}