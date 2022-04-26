import React from 'react'
import styled from "styled-components"
import phone from "../images/phone.png"

const Secure = () => {
    return (
        <div>
            <Container>
                <img className="lg-devices-global" src={phone} width="700" />

                <Content>
                    <h1>Multi-currency Support</h1>
                    <img src={phone} className="sm-devices-global" />
                    <p>Borderpay provides you with a multi-currency wallet..<br /> <br /> Transact in all major currencies including but not limited to USD, YEN, YUAN, CAD, EUR, GBP, NGN, ZAR etc.</p>
                </Content>
            </Container>
        </div>
    )
}

export default Secure

const Container = styled.div`
    padding: 40px 50px 10px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .lg-devices-global{
        margin-left: 1rem;
        margin-right: 4rem;
    }

    .sm-devices-global{
        display: none;
    }

    @media(max-width: 960px){
        display: block;
        padding: 30px 0px 10px 0px;

        .lg-devices-global{
            display: none;
        }

        .sm-devices-global{
            display: block;
            width: 100%;
            height: 380px;
            margin-right: auto;
            margin-left: auto;
            background: gainsboro;
            border-radius: 50%;
        }
    }
`

const Content = styled.div`
    margin-right: 10rem;
    margin-top: 5rem;

    h1{
        font-size: 40px;
        font-weight: 800;
        color: #5ccdff;
        margin-bottom: 10px;

        @media(max-width: 960px){
            font-size: 30px;
            text-align: center;
            color: #5ccdff;
            margin-bottom: 20px;
        }
    }

    p{
        font-size: 25px;

        @media(max-width: 960px){
            font-size: 20px;
            color: black;
            text-align: center;
        }
    }

    @media(max-width: 960px){
        margin: 2rem;
    }
`