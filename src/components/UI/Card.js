import "./Card.css";

const Card = (props) => {
	const classes = "card " + props.className;
	// console.log("estos son los props", props);
	// console.log("estos son los children", props.children);
	return <div className={classes}>{props.children}</div>;
};

export default Card;
