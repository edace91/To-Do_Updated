import React from 'react'


// const percentToDecimal = (decimal) => {
// 	return ((decimal * 100) + '%')
// }

// const calcGoalProgress = (total, goal) => {
// 	return percentToDecimal(total/goal)
// }

// export default class CountToDo extends React.Component {
// 	render() {
// 		return (
// 			<div className= "count-to-do">
// 				<div className= "total-todos">
//  					<span>5</span>
// 				</div>
// 				<div className= "completed-todos">
//  					<span>0</span>
//  				</div>
//  			</div>
//  	 	) 	
//  	}
// }
export class CountToDo extends React.Component {
	percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  }
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  }
  render() {
    return (
      <div className="count-to-do">
        <div className="total-todos">
          <span>{this.props.total}</span>
          <span> : left to do</span>
        </div>
        <div className="completed-todos">
          <span>{this.props.completed}</span>
          <span> : done</span>
        </div> 
        <div>
          <span>
            {this.calcGoalProgress(
              this.props.total, 
              this.props.goal
            )}
          </span>
        </div>
      </div>
    )
  }
}


CountToDo.defaultProps = {
  total: 3,
  completed: 0,
  goal: 10
}
