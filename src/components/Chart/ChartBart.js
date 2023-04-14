import "./ChartBar.css";

const ChartBart = (props) => {
	let bartFillHeight = "0%";

	if (props.maxValue > 0) {
		bartFillHeight =
			Math.round((props.value / props.maxValue) * 100) + "%";
	}

	return (
		<div className="chart-bart">
			<div className="chart-bar__inner">
				<div
					className="chart-bar__fill"
					style={{ height: bartFillHeight }}
				></div>
			</div>
			<div className="chart-bar__label">{props.label}</div>
		</div>
	);
};

export default ChartBart;
