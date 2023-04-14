import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
	if (props.filteredExpenses.length === 0) {
		return (
			<h2 className="expenses-list__fallback">
				No, se encontraron gastos.
			</h2>
		);
	}

	return (
		<ul className="expenses-list">
			{props.filteredExpenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
			{/* Usando Ternario */}
			{/* {filteredExpenses.length === 0 ? (
                    <h2 className="expenses-list__fallback">
                        No, se encontraron gastos.
                    </h2>
				) : (
					filteredExpenses.map((expense) => (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))
				)} */}

			{/* Usando Short-circuit evaluation */}
			{/* {filteredExpenses.length === 0 && (
					<h2 className="expenses-list__fallback">
                        No, se encontraron gastos.
                    </h2>
				)}
				{filteredExpenses.length > 0 &&
					filteredExpenses.map((expense) => (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))} */}
		</ul>
	);
};

export default ExpensesList;
