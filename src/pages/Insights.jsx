import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function InsightsPage() {
  const { transactions } = useContext(FinanceContext);

  const max = transactions.reduce((a,b)=> a.amount>b.amount?a:b);

  return (
    <div className="bg-white/5 p-6 rounded-xl">
      <h2 className="text-xl font-bold">Insights</h2>
      <p className="text-gray-400 mt-2">
        Highest transaction: ₹{max.amount} ({max.category})
      </p>
    </div>
  );
}