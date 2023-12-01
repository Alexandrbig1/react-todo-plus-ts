import React, { useEffect, useState } from "react";
import TodoList from "./TodoList/TodoList";
import NewTodo from "./NewTodo/NewTodo";
import { Theme, Todo } from "../todo.model";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Wrapper } from "./App.styled";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = {
  light: {
    colors: {
      mainBgColor: "#e9ecef",
      textColor: "#050505",
      contactBtn: "#ff5400",
      contactHoverBtn: "#cc4300",
      deleteBtn: "#37b24d",
      containerColor: "#dee2e6",
      switcherHoverBg: "rgba(255, 84, 0, 0.6)",
      inputBg: "#f8f9fa",
      headerTextColor: "#F3F3F3",
      inputHover: "rgba(0, 0, 0, 0.1)",
    },
  },
  dark: {
    colors: {
      mainBgColor: "#1E1E1E",
      textColor: "#fffaff",
      contactBtn: "#15aabf",
      contactHoverBtn: "#0c8599",
      deleteBtn: "#37b24d",
      containerColor: "#050505",
      switcherHoverBg: "rgba(21, 170, 191, 0.6)",
      inputBg: "#1E1E1E",
      headerTextColor: "#F3F3F3",
      inputHover: "rgba(255, 255, 255, 0.1)",
    },
  },
};

export default function App() {
  const startState = JSON.parse(localStorage.getItem("todos") || "null");
  const [todos, setTodos] = useState<Todo[]>(
    startState === null ? [] : startState
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [isDarkTheme, setIsDarkTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? false : true;
  });

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
  };

  function todoAddHandler(text: string) {
    setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), text: text }]);
  }

  function todoDeleteHandler(todoId: string) {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== todoId);
      const remainingTodos = updatedTodos.length;
      const todoText = remainingTodos === 1 ? "thing" : "things";
      const verb = remainingTodos === 1 ? "is" : "are";

      toast.success(
        `You've successfully deleted a todo. ${remainingTodos} ${todoText} ${verb} remaining.`,
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

      return updatedTodos;
    });
  }

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <GlobalStyle />
      <Wrapper>
        <NewTodo
          onAddTodo={todoAddHandler}
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
          todos={todos}
        />
        <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
      </Wrapper>
      <ToastContainer />
    </ThemeProvider>
  );
}
