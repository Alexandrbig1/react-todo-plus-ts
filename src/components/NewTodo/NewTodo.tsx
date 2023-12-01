import { useState } from "react";
import { toast } from "react-toastify";
import ThemeButton from "../ThemeButton/ThemeButton";
import { Todo } from "../../todo.model";
import {
  Form,
  FormControl,
  Label,
  Input,
  Button,
  Container,
} from "./NewTodo.styled";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
  isDarkTheme?: boolean;
  toggleTheme?: () => void;
  todos: Todo[];
};

export default function NewTodo({
  onAddTodo,
  isDarkTheme,
  toggleTheme,
  todos,
}: NewTodoProps): JSX.Element {
  const [inputText, setInputText] = useState<string>("");

  function todoSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    onAddTodo(inputText);
    setInputText("");

    const todoText = todos.length < 1 ? "task" : "tasks";
    const verb = todos.length === 1 ? "is" : "are";

    toast.success(
      `You've added one more task to your todo list. Now there ${verb} ${
        todos.length + 1
      } ${todoText} in total.`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      }
    );
  }

  return (
    <Container>
      <Form onSubmit={todoSubmitHandler}>
        <FormControl>
          <Label htmlFor="todo-text">Todo Text</Label>
          <Input
            type="text"
            id="todo-text"
            name="search"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </FormControl>
        <Button type="submit">Add Todo</Button>
      </Form>
      {toggleTheme && (
        <ThemeButton
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme || false}
        />
      )}
    </Container>
  );
}
