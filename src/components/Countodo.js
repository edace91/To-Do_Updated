


const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const CountToDo = React.createClass({
	render() {
		return (
			<div className= "count-to-do">
				<div className= "total-todos">
 					<span>5</span>
				</div>
				<div className= "completed-todos">
 					<span>0</span>
 				</div>
 			</div>
 	 	) 	
 	}
})

