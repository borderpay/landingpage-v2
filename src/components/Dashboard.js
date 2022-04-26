import React from 'react'
import styled from "styled-components"
import phone from "../images/dashboard.png"
import circles from "../images/circleBg.svg"

const Dashboard = () => {
    return (
        <div>
            <Container>
                <img className="bg1" src={circles} />
                <Content>
                    <h1>An easy and intuitive Dashboard</h1>
                    <img src={phone} className="sm-devices-global" />
                    <p>
                        Our user's dashboard was built with simplicity in mind..
                        <br /><br />
                        From the onboarding process to using our available services, navigate through our available services with ease and comfort.
                    </p>
                </Content>

                <img className="lg-devices-global" src={phone} />
                <img className="bg2" src={circles} />
            </Container>
        </div>
    )
}

export default Dashboard

const Container = styled.div`
    position: relative;
    padding: 40px 50px 10px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .lg-devices-global{
        border-radius: 35px;
        margin-right: 10rem;
        width: 400px;
    }

    .sm-devices-global{
        display: none;
    }

    .bg1{
        position: absolute;
        top: 5rem;
        left: 5rem;
    }
    .bg2{
        position: absolute;
        bottom: 3rem;
        right: 5rem;
    }

    @media(max-width: 960px){
        display: block;
        padding: 30px 0px 10px 0px;

        .lg-devices-global{
            display: none;
        }

        .sm-devices-global{
            display: block;
            width: 250px;
            height: 400px;
            margin-right: auto;
            margin-left: auto;
        }

        .bg1{
            width: 80px;
            position: absolute;
            top: 0;
            left: 1rem;
        }

        .bg2{
            width: 80px;
            position: absolute;
            bottom: 0;
            right: 1rem;
        }
    }
`

const Content = styled.div`
    margin-left: 7rem;
    margin-right: 4rem;
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
