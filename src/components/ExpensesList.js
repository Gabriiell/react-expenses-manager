import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ items }) => {
    if (!items.length) {
        return <h2 className="expenses-list__fallback">No expenses found</h2>
    }

    return (
        <ul className="expenses-list">
            {items.map(i => (
                <li key={i.id}>
                    <ExpenseItem {...i} />
                </li>
            ))}
        </ul>
    );
};

export default ExpensesList;
