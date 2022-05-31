import React from 'react'
import styled from "styled-components"
import HeaderContent from "../components/HeaderContent"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <Container>
            <Navbar />

            <HeaderContent />
        </Container>
    )
}

export default Header

const Container = styled.div`
    background: white;

    @media(max-width: 960px){
        padding: 10px 10px 20px 10px;
    }
    
`

const FirstSection = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.div`
    padding-right: 50px;

    @media(max-width: 960px){
        padding-right: 0px;
    }
`

const Submenu = styled.div`

    ul{
        display: flex;
        justify-content: center;
        list-style: none;
    }
    ul li{
        padding-right: 20px;
        font-size: 20px;
        font-weight: bold;
    }

    @media(max-width: 960px){
        display: none;
    }

`

const Buttons = styled.div`

    button{
        color: blue;
        background-color: white;
        padding: 18px;
        width: 130px;
        border-radius: 7px;
        font-size: 16px;
        font-weight: bold;
        border: none;
        transition: transform 500ms;
    }
    button:first-child{
        background: transparent;
        border: none;
        color: white;
        font-size: 20px;
    }
    button:hover{
        transform: scale(1.1);
    }

    @media(max-width: 960px){
        display: flex;
        align-items: center;
        padding-top: 10px;

        button{
            padding: 15px;
            width: 100px;
            margin-top: -30px;
        }

        button:first-child{
            display: none;
        }
    }
`