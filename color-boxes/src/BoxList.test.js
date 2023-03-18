import React from "react";
import { render, fireEvent } from "@testing-library/react"
import BoxList from "./BoxList";

test("renders without crashing", () => {
    render(<BoxList />);
});

test("matches snapshot", () => {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

test("add new box", () => {
    const {getByLabelText, queryByText} = render(<BoxList />);
    const widthInput = getByLabelText("Width");
    const heightInput = getByLabelText("Height");
    const colorInput = getByLabelText("Color");
    const btn = queryByText("Add Box");
    expect(queryByText("X")).not.toBeInTheDocument();
    fireEvent.change(widthInput, {target: {value: "222"}});
    fireEvent.change(heightInput, {target: {value: "111"}});
    fireEvent.change(colorInput, {target: {value: "purple"}});
    fireEvent.click(btn);
    expect(queryByText("X")).toBeInTheDocument();
});

test("remove a box", () => {
    const {getByLabelText, queryByText} = render(<BoxList />);
    const widthInput = getByLabelText("Width");
    const heightInput = getByLabelText("Height");
    const colorInput = getByLabelText("Color");
    const btn = queryByText("Add Box");
    expect(queryByText("X")).not.toBeInTheDocument();
    fireEvent.change(widthInput, {target: {value: "222"}});
    fireEvent.change(heightInput, {target: {value: "111"}});
    fireEvent.change(colorInput, {target: {value: "purple"}});
    fireEvent.click(btn);
    expect(queryByText("X")).toBeInTheDocument();
    const removeBtn = queryByText("X");
    fireEvent.click(removeBtn);
    expect(queryByText("X")).not.toBeInTheDocument();
})