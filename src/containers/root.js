import React, {Component} from 'react'
// import { Provider } from 'react-redux'
import createStore from './store'
import addTodo from './ac'
import ToDoComponent from './components/ToDoComponent'
// import { connect } from 'react-redux'

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

const ToDo = connect(state => ({
  todos: state,
}), dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
}))(ToDoComponent)

class Root extends Component {
    render() {
        return (
            <Provider store={createStore}>
                <ToDo title="Список задач"/>
            </Provider>
        )
    }
}

export default Root
