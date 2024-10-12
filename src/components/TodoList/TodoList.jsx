import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodoList } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodoList);

  return (
    <>
      <Text textAlign="center">We did not find any todo😯</Text>
      <Grid>
        {todos.map((todo, index) => (
          <Todo key={todo.id} todo={todo} counter={index + 1} />
        ))}
      </Grid>
    </>
  );
};
