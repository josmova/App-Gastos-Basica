import "./ExpenseDate.css";
const ExpenseDate = (props) => {
	const day = props.date.toLocaleDateString("es-ES", {
		day: "2-digit",
	});
	const month = props.date.toLocaleDateString("es-ES", {
		month: "long",
	});
	const year = props.date.getFullYear();

	return (
		<div className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__year ">{year}</div>
			<div className="expense-date__day">{day}</div>
		</div>
	);
};

export default ExpenseDate;
