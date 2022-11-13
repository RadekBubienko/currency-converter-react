import styled from "styled-components";

export const StyledForm = styled.form``;

export const Fieldset = styled.fieldset`
    border: 3px solid #aac3bd;
    padding: 20px;
    border-radius: 5px;
`;

export const Legend = styled.legend`
    background-color: #008080;
    color: white;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 15px;
`;

export const Label = styled.label``;

export const Span = styled.span`
    width: 100%;
    max-width: 125px;
    display: inline-block;
    text-align: left;
    margin-right: 5px;
`;

export const Input = styled.input`
    border: 2px solid #ccc;
    padding: 10px;
    width: 100%;
    max-width: 210px;
    border-radius: 5px;
    margin: 0px 5px 20px 0px;

    &:required {
        border-color: #777;
    }
`;

export const Select = styled.select`
    border: 2px solid #ccc;
    padding: 10px;
    width: 100%;
    max-width: 210px;
    border-radius: 5px;
    margin: 0px 5px 20px 0px;

    &:required {
        border-color: #777;
    }
`;

export const Button = styled.button`
    text-align: center;
    width: 33.3333333333%;
    border: none;
    background-color: #008080;
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin: 15px auto;
    display: block;


@media (max-width: 474px) {
        width: 100%;
    }

    &:hover {
        background-color: #005757;
    }
`;