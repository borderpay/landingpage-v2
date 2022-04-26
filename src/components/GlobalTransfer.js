import React from 'react'
import styled from "styled-components"
import global from "../images/kyc.webp"

const GlobalTransfer = () => {
    return (
        <div>
            <Container>
                <img className="lg-devices-global" src="https://media.istockphoto.com/photos/excited-black-man-feel-overjoyed-reading-good-news-on-cellphone-picture-id1201144419?k=20&m=1201144419&s=612x612&w=0&h=Hz284upAY5zWEkHo5Go-gqNzZucjeCHrCT77MUodG3Q=" />

                <Content>
                    <h1>Make global transfers</h1>
                    <img src="https://media.istockphoto.com/photos/excited-black-man-feel-overjoyed-reading-good-news-on-cellphone-picture-id1201144419?k=20&m=1201144419&s=612x612&w=0&h=Hz284upAY5zWEkHo5Go-gqNzZucjeCHrCT77MUodG3Q=" className="sm-devices-global" />
                    <p>They say the internet has made the World a global village! but transfer of money within Countries has still not been an easy feat..<br /> <br /> With Borderpay, we provide you a means to make trans-border payments in split seconds.</p>
                </Content>
            </Container>
        </div>
    )
}

export default GlobalTransfer

const Container = styled.div`
    padding: 40px 50px 10px 50px;
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
        display: block;
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