import React, {Component} from 'react'
import store from '../store'
import addTodo from '../ac/addTodo'
import ToDoComponent from '../Components/ToDoComponent'

class Provider extends Component {
  componentWillMount() {
    window.store = this.props.store
  }

  render() {
    return this.props.children
  }
}

const connect = (mapStateToProps, mapDispatchToProps) =>
  Component => {
    return class extends React.Component {
      render() {
        return (
          <Component
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />
        )
      }

      componentDidMount() {
        store.subscribe(this.handleChange)
      }

      handleChange = () => {
        this.forceUpdate()
      }
    }
  }

const ToDo = connect((state, props) => ({
  todos: state,
  title: props.title
}), dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
}))(ToDoComponent)

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <ToDo title="Список задач"/>
            </Provider>
        )
    }
}

export default Root
