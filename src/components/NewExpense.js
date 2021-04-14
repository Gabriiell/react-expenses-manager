import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onNewExpense }) => {
    const saveExpenseHandler = (expense) => {
        if (onNewExpense) {
            onNewExpense(expense);
        }
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={saveExpenseHandler} />
        </div>
    );
};

export default NewExpense;
