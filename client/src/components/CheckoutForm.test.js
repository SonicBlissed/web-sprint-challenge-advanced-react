import React from "react";
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
//I wanted to have fun with it... I thought about userEvent instead but I felt like fireEvent might be better because userEvent is easier and I want to solidify my knowledge.
    fireEvent.change(firstNameInput, {target:{value:'banana'}});
    fireEvent.change(lastNameInput, {target:{valuue:'fo-fana'}});
    fireEvent.change(addressInput, {target: {value:'thunder dome'}});
    fireEvent.change(cityInput, {target: {value: 'chiquita'}});
    fireEvent.change(stateInput, {target: {value: 'FL'}});
    fireEvent.change(zipInput, {target: {value: '<_<....>_>....96'}});

    const newContact = screen.getByText(/dustin/i);
    expect(newContact).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
render(<CheckoutForm/>)
const CheckoutButton = screen.check(/checkout/i);
fireEvent.click(submitButton);

});
