const Expenses = ({ expenses }) => {
    const [year, setYear] = useState('2021');

    const filteredExpenses = expenses.filter(e => e.date.getFullYear().toString() === year);

    return (
        <Card className="expenses">
            <ExpensesFilter value={year} onChange={(y) => setYear(y)} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}
