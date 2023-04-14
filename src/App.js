import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Paquete de Papel higiénico",
		amount: 200.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		title: "Nueva TV",
		amount: 7990.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: "e3",
		title: "Seguro de auto",
		amount: 2940.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "Nuevo Escritorio",
		amount: 4500,
		date: new Date(2021, 5, 12),
	},
];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
