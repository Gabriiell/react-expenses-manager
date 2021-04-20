const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [newExpense, setNewExpense] = useState('');

    const addExpense = () => {
        setExpenses((previousExpenses) => {
            setExpenses([...previousExpenses, newExpense]);
        });
    };

    return (
        <div>
            <input type="text" placeholder="Enter an expense" value={newExpense} onChange={e => setNewExpense(e.target.value)} />
            <button onClick={addExpense}>Add</button>
            <ul>
                {expenses.map(expense => (
                    <li>{expense}</li>
                ))}
            </ul>
        </div>
    );
}
