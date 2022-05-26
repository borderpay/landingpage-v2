import React from 'react'
import styled from "styled-components"
import { Fade } from 'react-reveal'
import Typical from "react-typical"
import phone from "../images/phone.png"
import desktop from "../images/desktop.svg"
import Button from "./Button"
import Converter from "./Converter"

const HeaderContent = () => {
    return (
        <div>
            <Container>
                <Fade right>
                    <Content>
                        <h1><Typical loop={Infinity} wrapper="b" steps={['Lightning transactions', 1500, 'Seamless payments', 1500, 'Go beyond..', 1500]} /></h1>

                        <p>Sending money to loved ones and business partners internationally shouldn't be a hassle!<br /> <br /> With Borderpay, make trans-border payments in split seconds, Go beyond.</p>

                        <Button name={"Download Now"} />
                    </Content>
                </Fade>

                <Fade left>
                    <Converter />
                </Fade>
            </Container>
        </div>
    )
}

export default HeaderContent

const Container = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    min-height: 100vh;

    @media(max-width: 960px){
        display: block;
    }

`

const Content = styled.div`
    margin-top: 70px;
    margin-left: 30px;
    text-align: center;

    h1{
        font-size: 40px;
        font-weight: 800;
        color: blue;

        @media(max-width: 960px){
            font-size: 28px;
            text-align: center;
            color: blue;
        }
    }
    p{
        margin-top: 20px;
        font-size: 23px;

        @media(max-width: 960px){
            color: black;
            font-size: 18px;
            text-align: center;
        }
    }
`