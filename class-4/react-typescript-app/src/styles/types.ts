export interface TodoItemType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  callback?: () => void;
  // user: string;
}

export interface TodoListProps {
  todoList?: TodoItemType[];
  // user: string;
}
