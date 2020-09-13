import React from "react";
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";



const styles = {
    ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0

    }
};

 function TotoList(props) {
    return (
        <ul style={styles.ul}>
            { props.todos.map((todo, idx) => {
              return (
                  <TodoItem
                      todo={todo}
                      key={todo.id}
                      index={idx}
                      onChange={props.onToggle} />
              )
            })}
        </ul>
    )
}

TotoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default TotoList
