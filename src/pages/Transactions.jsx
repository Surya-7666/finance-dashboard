import AddTransaction from "../components/AddTransaction.jsx";
import TransactionTable from "../components/TransactionTable.jsx";

export default function Transactions() {
  return (
    <div className="space-y-6">
      
      <AddTransaction />

      <TransactionTable />

    </div>
  );
}