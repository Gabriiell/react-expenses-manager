const ExpensesList = ({ expenses }) => {
    if (!expenses.length) {
        return <h2 className="expenses-list__fallback">No expenses found</h2>
    }

    return (
        <ul className="expenses-list">
            {expenses.map(i => (
                <li key={i.id}>
                    <ExpenseItem {...i} />
                </li>
            ))}
        </ul>
    );
};
