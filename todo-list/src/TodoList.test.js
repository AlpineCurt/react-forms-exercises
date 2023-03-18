import React from "react";
import { render, fireEvent } from "@testing-library/react"
import Todolist from "./TodoList";

test("renders without crashing", () => {
    render(<Todolist />);
});

test("matches snapshot", () => {
    const {asFragment} = render(<Todolist />);
    expect(asFragment()).toMatchSnapshot();
});

test("add new todo item", () => {
    const {getByLabelText, queryByText} = render(<Todolist />);
    const todoInput = getByLabelText("New Todo");
    const btn = queryByText("Add Todo");
    expect(queryByText("X")).not.toBeInTheDocument();
    fireEvent.change(todoInput, {target: {value: "Eat Tofu"}});
    fireEvent.click(btn);
    expect(queryByText("Eat Tofu")).toBeInTheDocument();
});

test("remove a todo item", () => {
    const {getByLabelText, queryByText} = render(<Todolist />);
    const todoInput = getByLabelText("New Todo");
    const btn = queryByText("Add Todo");
    expect(queryByText("X")).not.toBeInTheDocument();
    fireEvent.change(todoInput, {target: {value: "Eat Tofu"}});
    fireEvent.click(btn);
    expect(queryByText("Eat Tofu")).toBeInTheDocument();
    const removeBtn = queryByText("X");
    fireEvent.click(removeBtn);
    expect(queryByText("Eat Tofu")).not.toBeInTheDocument();
});