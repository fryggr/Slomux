import React, {Component} from 'react'

class ToDoComponent extends Component {
  state = {
    todoText: ''
  }

  render() {
      console.log(this.props);
    return (
      <div>
        <label>{this.props.title || 'Без названия'}</label>
        <div>
          <input
            value={this.state.todoText}
            placeholder="Название задачи"
            onChange={this.updateText}
          />
          <button onClick={this.addTodo}>Добавить</button>
          <ul>
            {this.props.todos.map((todo, idx) => <li>{todo}</li>)}
          </ul>
        </div>
      </div>
    )
  }

  updateText = (e) => {
    const { value } = e.target

    // this.state.todoText = value
    this.setState({todoText: value})
  }

  addTodo = () => {
    this.props.addTodo(this.state.todoText)

    // this.state.todoText = ''
    this.setState({todoText: ''})
  }
}

export default ToDoComponent
