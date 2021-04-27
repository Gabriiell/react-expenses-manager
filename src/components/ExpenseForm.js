import { useEffect, useReducer, useState } from 'react';
import ErrorModal from './ErrorModal';
import './ExpenseForm.css';

const expenseReducer = (expense, { type, payload }) => {
    switch (type) {
        case 'updateTitle':
            return {
                ...expense,
                title: payload
            };
        case 'updateAmount':
            return {
                ...expense,
                amount: payload
            };
        case 'updateDate':
            return {
                ...expense,
                date: payload
            };
        case 'reset':
            return {
                title: '',
                amount: '',
                date: ''
            };
        default:
            throw new Error(`${type} is not a valid type for expenseReducer action`);
    }
};

const ExpenseForm = ({ onSaveExpense }) => {
    const [expense, dispatchExpense] = useReducer(expenseReducer, {
        title: '',
        amount: '',
        date: ''
    });

    const [error, setError] = useState(null);

    const { title, amount, date } = expense;

    useEffect(() => console.log('RENDER'));

    const titleChangeHandler = event => {
        dispatchExpense({ type: 'updateTitle', payload: event.target.value });
    };

    const amountChangeHandler = event => {
        dispatchExpense({ type: 'updateAmount', payload: event.target.value });
    };

    const dateChangeHandler = event => {
        dispatchExpense({ type: 'updateDate', payload: event.target.value });
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

        if (onSaveExpense) {
            onSaveExpense({
                id: Math.random().toString(),
                title,
                amount: +amount,
                date: new Date(date)
            });
        }

        dispatchExpense({ type: 'reset' });
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
