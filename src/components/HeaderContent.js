import React from 'react'
import styled from "styled-components"
import { Fade } from 'react-reveal'
import Typical from "react-typical"
import phone from "../images/phone.png"
import desktop from "../images/desktop.svg"
import Button from "./Button"

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
                    <Image>
                        <img className="phone" src={phone} width="800" alt="borderpay" />
                        <img className="desktop" src={desktop} width="800" alt="borderpay" />
                    </Image>
                </Fade>
            </Container>
        </div>
    )
}

export default HeaderContent

const Container = styled.div`
    margin-top: 30px;
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
        font-size: 60px;
        font-weight: 800;
        color: #5ccdff;

        @media(max-width: 960px){
            font-size: 28px;
            text-align: center;
            color: white;
        }
    }
    p{
        margin-top: 20px;
        font-size: 25px;

        @media(max-width: 960px){
            color: white;
            font-size: 18px;
            text-align: center;
        }
    }
`

const Image = styled.div`
    display: flex;
    position: relative;

    .phone{
        position: absolute;
        right: 0; 
        z-index: 999;
    }

    @media(max-width: 960px){
        margin-top: 40px;

        .desktop{
            height: 400px;
            width: 100%;
        }

        .phone{
            right: -20px;
            height: 500px;
            width: 400px;
        }
    }
`