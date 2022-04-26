import React from 'react'
import styled from "styled-components"
import image from "../images/exchanges.png"
import google from "../images/googleplay.png"
import apple from "../images/appstore.png"

const DownloadSection = () => {
    return (
        <div>
            <Container>
                <Content>
                    <h1>Ready to get started?</h1>
                    <p>To get started, download the Borderpay app on Google play store for Android users and App store for iOS users!<br /> <br /></p>
                    <Buttons>
                        <button class="google"></button>
                        <button class="apple"></button>
                    </Buttons>
                </Content>
                <img src={image} className="image" />
            </Container>
        </div>
    )
}

export default DownloadSection

const Container = styled.div`
    margin-top: 50px;
    padding: 30px;
    background: #5ccdff;
    min-height: 60vh;
    display: flex;
    justify-content: space-between;

    .image{
        width: 600px;
        margin-right: 5rem;
        margin-top: -5rem;
    }

    @media(max-width: 960px){
        background: #4d6cdf;
        display: block;
        
        .image{
            margin-top: 20px;
            width: 100%;
            height: 400px;
            margin-left: auto;
            margin-right: auto;
        }
    }

`

const Content = styled.div`
    margin-right: 7rem;
    margin-left: 5rem;
    padding-top: 5rem;

    h1{
        font-size: 40px;
        font-weight: 800;
        color: white;
        margin-bottom: 10px;

        @media(max-width: 960px){
            font-size: 30px;
            text-align: center;
            color: white;
            margin-bottom: 20px;
        }
    }

    p{
        font-size: 25px;
        color: white;

        @media(max-width: 960px){
            font-size: 20px;
            color: white;
            text-align: center;
        }
    }

    @media(max-width: 960px){
        margin: 2rem;
    }

`

const Buttons = styled.div`
    display: flex;
    padding: 10px;

    button{
        display: block;
        width: 180px;
        height: 60px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
        padding: 18px;
        font-size: 16px;
        font-weight: bold;
        border: none;
        transition: transform 500ms;

        &:hover{
            transform: scale(1.1);
        }
    }

    .google{
        background: url(${google});
        background-size: contain;
        object-fit: contain !important;
        background-repeat: no-repeat;
    }

    .apple{
        background: url(${apple});
        background-size: contain;
        background-repeat: no-repeat;

        @media(max-width: 960px){
            margin-left: 0px;
        }
    }
`