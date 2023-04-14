import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	// const [userExpense, setUserExpense] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	const titleChangeHandler = (event) => {
		// Otras formas de realizar la actualziación de estado
		/* setUserExpense({
			...userExpense,
			enteredTitle: event.target.value,
		}); */

		/* 	setUserExpense((prevState) => {
			return { ...prevState, enteredTitle: event.target.value };
		}); */
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: Number(enteredAmount),
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="">Título</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="">Cantidad</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="">Fecha</label>
					<input
						type="date"
						min="2019-01-01"
						max="2023-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button
					type="button"
					onClick={props.onCancel}
				>
					Cancelar
				</button>
				<button type="submit">Agregar Gastos</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
