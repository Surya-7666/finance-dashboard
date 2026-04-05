import { createContext, useState, useEffect } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const defaultData = [
  { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
  { id: 2, date: "2026-04-02", amount: 800, category: "Food", type: "expense" },
  { id: 3, date: "2026-04-03", amount: 1200, category: "Shopping", type: "expense" },
];

const [transactions, setTransactions] = useState(() => {
  const stored = localStorage.getItem("transactions");
  return stored ? JSON.parse(stored) : defaultData;
});
  const [role, setRole] = useState("viewer");

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx) => {
    setTransactions([...transactions, { ...tx, id: Date.now() }]);
  };

  return (
    <FinanceContext.Provider
      value={{ transactions, addTransaction, role, setRole }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
