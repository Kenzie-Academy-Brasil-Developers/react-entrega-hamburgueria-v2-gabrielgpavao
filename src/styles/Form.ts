import styled from "styled-components";

export const StyledForm = styled.form`
    margin-bottom: 20px;

    label {
        font-weight: 400;
        font-size: 12px;
        color: var(--grey5);
        text-align: center;
        background-color: #ffffff;
        display: block;
        width: fit-content;
        padding: 0 4px;
        position: relative;
        top: 7px;
        left: 12px
    }

    input {
        background-color: #FFFFFF;
        border: 2px solid var(--grey5);
        border-radius: var(--radius1);
        width: 100%;
        height: 60px;
        padding-left: 15px;
        margin-bottom: 25px;
    }

    input:focus {
        border: 2px solid var(--grey6);
    }

    button {
        width: 100%;
        height: 60px;
        background-color: var(--brand1);
        border: 2px solid transparent;      
        color: white;
        font-weight: 600;
        font-size: var(--size3);
    }

    button:hover {
        border: 2px solid #000000;
    }
`