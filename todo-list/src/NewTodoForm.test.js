import React from "react";
import { render, fireEvent } from "@testing-library/react"
import NewTodoForm from "./NewTodoForm";

test("renders without crashing", () => {
    render(<NewTodoForm />);
});

test("matches snapshot", () => {
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});