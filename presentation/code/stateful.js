const App = () => {
  const [expenses, setExpenses] = useState([]);

  const newExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <ExpensesList expenses={expenses} />
    </div>
  );
};
