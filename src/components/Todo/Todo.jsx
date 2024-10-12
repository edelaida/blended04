import { GridItem, Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, changeCurrentTodo } from 'reduxTodo/todoSlice';

export const Todo = ({ todo, counter }) => {
  const dispatch = useDispatch();
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {counter}
        </Text>

        <Text>{todo.text}</Text>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className={style.deleteButton}
          type="button"
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          onClick={() => dispatch(changeCurrentTodo(todo))}
          className={style.editButton}
          type="button"
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
