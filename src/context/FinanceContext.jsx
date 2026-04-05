import { createContext, useState, useEffect } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : [];
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