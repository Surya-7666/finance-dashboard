import { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function AddTransaction() {
  const { addTransaction } = useContext(FinanceContext);

  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.amount || !form.category || !form.date) return;

    addTransaction({
      ...form,
      amount: Number(form.amount),
    });

    setForm({ amount: "", category: "", type: "expense", date: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-4"
    >
      <h3 className="text-lg font-semibold">Add Transaction</h3>

      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="w-full p-2 bg-white/10 rounded-lg"
      />

      <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="w-full p-2 bg-white/10 rounded-lg"
      />

      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className="w-full p-2 bg-white/10 rounded-lg"
      />

      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
        className="w-full p-2 bg-white/10 rounded-lg"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 p-2 rounded-lg transition"
      >
        Add Transaction
      </button>
    </form>
  );
}