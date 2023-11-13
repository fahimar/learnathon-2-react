export interface TodoItemType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  callback?: () => void;
}

export interface TodoListProps {
  todoList?: TodoItemType[];
}
