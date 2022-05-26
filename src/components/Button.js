import React from 'react'
import styled from "styled-components"

const Button = (props) => {
    return (
        <div>
            <Buttons>
                <button>{props.name}</button>
            </Buttons>
        </div>
    )
}

export default Button

const Buttons = styled.div`

    button{
        display: block;
        width: 160px;
        height: 50px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
        color: white;
        background-color: #30009C;
        padding: 18px;
        border-radius: 7px;
        font-size: 16px;
        font-weight: bold;
        border: none;
        transition: transform 500ms;
    }
`