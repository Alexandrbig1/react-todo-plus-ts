import { Menu, Items, DeleteBtn, Text } from "./TodoList.styled";

type TodoListProps = {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
};

export default function TodoList({
  items,
  onDeleteTodo,
}: TodoListProps): JSX.Element {
  return (
    <Menu>
      {items.map((todo) => (
        <Items key={todo.id}>
          <Text>{todo.text}</Text>
          <DeleteBtn onClick={() => onDeleteTodo(todo.id)}>Delete</DeleteBtn>
        </Items>
      ))}
    </Menu>
  );
}
