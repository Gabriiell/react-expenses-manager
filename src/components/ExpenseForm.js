import { useState } from 'react';
import ErrorModal from './ErrorModal';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpense }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState(null);

    const titleChangeHandler = event => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = event => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = event => {
        setDate(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();

        if (!title) {
            setError({
                title: 'Invalid title',
                message: 'Title is required'
            });

            return;
        }

        if (!amount) {
            setError({
                title: 'Invalid amount',
                message: 'Amount is required'
            });

            return;
        }

        if (+amount <= 0) {
            setError({
                title: 'Invalid amount',
                message: 'Amount must be greater than 0'
            });

            return;
        }
        
        if (!date) {
            setError({
                title: 'Invalid date',
                message: 'Date is required'
            });

            return;
        }

        const expense = {
            id: Math.random().toString(),
            title,
            amount: +amount,
            date: new Date(date)
        };

        if (onSaveExpense) {
            onSaveExpense(expense);
        }

        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onClose={() => setError(null)} />}
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={title} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" step="0.01" value={amount} onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </>
    );
};

export default ExpenseForm;
