import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter } from 'reduxTodo/filterSlice';
import { selectTodoList } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodoList);
  const filter = useSelector(selectFilter);

  const filteredData = () => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <>
      <Text textAlign="center">We did not find any todo😯</Text>
      <Grid>
        {filteredData().map((todo, index) => (
          <Todo key={todo.id} todo={todo} counter={index + 1} />
        ))}
      </Grid>
    </>
  );
};
