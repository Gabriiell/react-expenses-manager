import Card from './Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import './Expenses.css';

const Expenses = ({ expenses }) => {
    const [year, setYear] = useState('2021');

    return (
        <Card className="expenses">
            <ExpensesFilter value={year} onChange={(y) => setYear(y)} />
            {expenses
                .filter(e => e.date.getFullYear() == year)
                .map(e => <ExpenseItem {...e} key={e.id} />)}
        </Card>
    );
}

export default Expenses;
