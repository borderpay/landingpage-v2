import React from 'react'
import styled from "styled-components"
import { Fade } from 'react-reveal'
import global from "../images/global.svg"

const GlobalTransfer = () => {
    return (
        <div>
            <Container>
                <Fade right>
                    <img className="lg-devices-global" src={global} />
                </Fade>

                <Content>
                    <Fade down>
                        <h1>Make global transfers</h1>
                        <img src={global} className="sm-devices-global" />
                        <p>They say the internet has made the World a global village! but transfer of money within Countries has still not been an easy feat..<br /> <br /> With Borderpay, we provide you a means to make trans-border payments in split seconds.</p>
                    </Fade>
                </Content>
            </Container>
        </div>
    )
}

export default GlobalTransfer

const Container = styled.div`
    background: #23036A;
    color: white;
    margin-top: 5rem;
    padding: 70px;
    display: flex;
    justify-content: space-between;

    .lg-devices-global{
        border-radius: 35px;
        margin-left: 7rem;
        margin-right: 4rem;
    }

    .sm-devices-global{
        display: none;
    }

    @media(max-width: 960px){
        background: white;
        display: block;
        margin-top: -3rem;
        padding: 30px 0px 10px 0px;

        .lg-devices-global{
            display: none;
        }

        .sm-devices-global{
            display: block;
            border-radius: 50%;
            width: 300px;
            height: 250px;
            margin-right: auto;
            margin-left: auto;
            margin-bottom: 25px;
        }
    }
`

const Content = styled.div`
    margin-right: 10rem;
    margin-left: 3rem;
    margin-top: 5rem;

    h1{
        font-size: 40px;
        font-weight: 800;
        color: white;
        margin-bottom: 10px;

        @media(max-width: 960px){
            font-size: 30px;
            text-align: center;
            color: blue;
            margin-bottom: 20px;
        }
    }

    p{
        font-size: 20px;

        @media(max-width: 960px){
            font-size: 17px;
            color: black;
            text-align: center;
        }
    }

    @media(max-width: 960px){
        margin: 2rem;
    }
`