var todos = []
for ( var i = 0; i < 1000; i ++) {
 todos.push({title: `Todo #${i}`, done: i % 2 === 0 })
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos
    }
    this.handleTodoStatusChange = this.handleTodoStatusChange.bind(this)
  }
  
  handleTodoStatusChange(index) {
    const todos = this.state.todos;
    const todo = this.state.todos[index];
    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...todo,
          done: !todo.done
        },
        ...todos.slice(index + 1)
      ]
    })
  }
  
  render() {
  const doneCount = this.state.todos.filter(todo => todo.done);
  const notDoneCount = this.state.todos.length - doneCount.length;
    return (
    <div>
         <ul>
      {this.state.todos.map((todo, i) => (
        <li
          style={{color: todo.done ? 'grey': 'black' }}
          onClick={this.handleTodoStatusChange.bind(this, i)}>{todo.title}</li>
      ))}
     </ul>
     <div>Done: {doneCount.length}</div>
     <div>Not Done: {notDoneCount}</div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'))