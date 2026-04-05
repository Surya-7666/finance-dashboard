import SummaryCard from "../components/SummaryCard";
import Charts from "../components/Charts";
import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function Dashboard() {
  const { transactions } = useContext(FinanceContext);

  const income = transactions.filter(t=>t.type==="income").reduce((a,b)=>a+b.amount,0);
  const expense = transactions.filter(t=>t.type==="expense").reduce((a,b)=>a+b.amount,0);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" value={income-expense} />
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expense" value={expense} />
      </div>

      <Charts data={transactions} />
    </div>
  );
}