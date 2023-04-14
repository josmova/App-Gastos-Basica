import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2019");
	const filteChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const filteredExpenses = props.expenses.filter(
		(expense) =>
			expense.date.getFullYear().toString() === filteredYear
	);

	return (
		<>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filteChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList filteredExpenses={filteredExpenses} />
			</Card>
		</>
	);
};
export default Expenses;
