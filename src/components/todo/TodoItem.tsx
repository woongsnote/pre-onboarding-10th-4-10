import { FaSpinner, FaTrash } from 'react-icons/fa';
import { useCallback, useState } from 'react';
import { SetStateType, TodoDataType } from '../../types/types';

import { deleteTodo } from '../../api/todo';

type Props = {
  id: number;
  title: string;
  setTodos: SetStateType<TodoDataType[]>;
};

const TodoItem = ({ id, title, setTodos }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);

      setTodos(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [id, setTodos]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <button onClick={() => handleRemoveTodo()}>
            <FaTrash className="btn-trash" />
          </button>
        ) : (
          <FaSpinner className="spinner" />
        )}
      </div>
    </li>
  );
};

export default TodoItem;
