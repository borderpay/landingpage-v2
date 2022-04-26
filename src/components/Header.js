import React from 'react'
import styled from "styled-components"
import HeaderContent from "../components/HeaderContent"
import logo from "../images/logo.png"
import bg from "../images/bg.jpg"

const Header = () => {
    return (
        <Container>
            <Navbar>
                <FirstSection>
                    <Logo>
                        <img src={logo} width="140" />
                    </Logo>
                    <Submenu>
                        <ul>
                            <li>Company</li>
                            <li>Solutions</li>
                            <li>Resources</li>
                        </ul>
                    </Submenu>
                </FirstSection>

                <Buttons>
                    <button>Login</button>
                    <button>Sign up</button>
                </Buttons>
            </Navbar>

            <HeaderContent />
        </Container>
    )
}

export default Header

const Container = styled.div`
    background: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20style%3D%22margin%3Aauto%3Bbackground%3A%23ffffff%3Bdisplay%3Ablock%3Bz-index%3A1%3Bposition%3Arelative%22%20width%3D%221600%22%20height%3D%22789%22%20preserveAspectRatio%3D%22xMidYMid%22%20viewBox%3D%220%200%201600%20789%22%3E%0A%3Cg%20transform%3D%22translate(800%2C394.5)%20scale(1%2C1)%20translate(-800%2C-394.5)%22%3E%3Cg%20transform%3D%22translate(1242.4868069303866%2C51.27204995433323)%20scale(100)%22%20opacity%3D%220.4%22%3E%0A%20%20%3Cpath%20d%3D%22M5.4319999999999995%200%20C5.4319999999999995%201.2879999999999998%205.639234529028642%201.7685592799256427%204.995234529028642%202.8839999999999995%20S3.831440720074357%204.06024999335707%202.716%204.70424999335707%20S1.2880000000000003%205.768%203.5318813687409667e-16%205.768%20S-1.6005592799256416%205.3482499933570695%20-2.7159999999999984%204.70424999335707%20S-4.351234529028641%203.9994407200743582%20-4.995234529028641%202.8840000000000017%20S-5.4319999999999995%201.2880000000000005%20-5.4319999999999995%206.652281412968422e-16%20S-5.639234529028642%20-1.768559279925641%20-4.995234529028643%20-2.883999999999998%20S-3.8314407200743585%20-4.060249993357069%20-2.716000000000002%20-4.704249993357069%20S-1.288000000000001%20-5.768%20-1.05956441062229e-15%20-5.768%20S1.600559279925639%20-5.348249993357071%202.715999999999996%20-4.704249993357072%20S4.35123452902864%20-3.999440720074359%204.99523452902864%20-2.8840000000000026%20S5.4319999999999995%20-1.2880000000000011%205.4319999999999995%20-1.3304562825936843e-15%22%20fill%3D%22%23ff00ff%22%20stroke-width%3D%220%22%3E%0A%20%20%20%20%3CanimateTransform%20attributeName%3D%22transform%22%20type%3D%22rotate%22%20dur%3D%2210s%22%20repeatCount%3D%22indefinite%22%20values%3D%220%3B60%22%3E%3C%2FanimateTransform%3E%0A%20%20%3C%2Fpath%3E%0A%3C%2Fg%3E%3Cg%20transform%3D%22translate(1330.984168316464%2C-17.373540054800117)%20scale(100)%22%20opacity%3D%220.4%22%3E%0A%20%20%3Cpath%20d%3D%22M6.5184%200%20C6.5184%201.5455999999999999%206.767081434834371%202.122271135910771%205.994281434834371%203.4607999999999994%20S4.597728864089229%204.872299992028484%203.2592000000000008%205.645099992028484%20S1.5456000000000003%206.9216%204.2382576424891597e-16%206.9216%20S-1.9206711359107702%206.4178999920284845%20-3.2591999999999985%205.645099992028485%20S-5.221481434834369%204.79932886408923%20-5.994281434834369%203.460800000000002%20S-6.5184%201.5456000000000008%20-6.5184%207.982737695562107e-16%20S-6.76708143483437%20-2.1222711359107693%20-5.994281434834371%20-3.460799999999998%20S-4.597728864089231%20-4.872299992028482%20-3.259200000000003%20-5.6450999920284834%20S-1.5456000000000012%20-6.9216%20-1.2714772927467478e-15%20-6.9216%20S1.9206711359107667%20-6.417899992028486%203.2591999999999954%20-5.645099992028487%20S5.221481434834368%20-4.799328864089231%205.9942814348343685%20-3.460800000000003%20S6.5184%20-1.5456000000000014%206.5184%20-1.5965475391124214e-15%22%20fill%3D%22%2300c6ff%22%20stroke-width%3D%220%22%3E%0A%20%20%20%20%3CanimateTransform%20attributeName%3D%22transform%22%20type%3D%22rotate%22%20dur%3D%225s%22%20repeatCount%3D%22indefinite%22%20values%3D%220%3B60%22%3E%3C%2FanimateTransform%3E%0A%20%20%3C%2Fpath%3E%0A%3C%2Fg%3E%3Cg%20transform%3D%22translate(1543.3778356430494%2C-182.12295607672013)%20scale(100)%22%20opacity%3D%220.4%22%3E%0A%20%20%3Cpath%20d%3D%22M9.12576%200%20C9.12576%202.1638399999999995%209.47391400876812%202.9711795902750793%208.391994008768119%204.845119999999999%20S6.43682040972492%206.821219988839878%204.562880000000001%207.903139988839878%20S2.16384%209.69024%205.933560699484823e-16%209.69024%20S-2.6889395902750786%208.985059988839879%20-4.562879999999998%207.903139988839879%20S-7.310074008768117%206.719060409724922%20-8.391994008768117%204.845120000000003%20S-9.12576%202.163840000000001%20-9.12576%201.117583277378695e-15%20S-9.473914008768118%20-2.971179590275077%20-8.391994008768119%20-4.845119999999997%20S-6.436820409724923%20-6.821219988839877%20-4.562880000000004%20-7.903139988839877%20S-2.1638400000000013%20-9.69024%20-1.780068209845447e-15%20-9.69024%20S2.6889395902750737%20-8.98505998883988%204.562879999999994%20-7.903139988839882%20S7.310074008768115%20-6.719060409724923%208.391994008768116%20-4.845120000000004%20S9.12576%20-2.1638400000000018%209.12576%20-2.23516655475739e-15%22%20fill%3D%22%2300ffff%22%20stroke-width%3D%220%22%3E%0A%20%20%20%20%3CanimateTransform%20attributeName%3D%22transform%22%20type%3D%22rotate%22%20dur%3D%223.3333333333333335s%22%20repeatCount%3D%22indefinite%22%20values%3D%220%3B60%22%3E%3C%2FanimateTransform%3E%0A%20%20%3C%2Fpath%3E%0A%3C%2Fg%3E%3C%2Fg%3E%0A%3C%2Fsvg%3E");
    background-size: cover;
    object-fit: contain !important;

    @media(max-width: 960px){
        padding: 10px 10px 20px 10px;
        background: url(${bg});
        background-size: cover;
        background-repeat: none;
    }
    
`

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px 20px 20px;

    @media(max-width: 960px){
        padding: 0px 10px 20px 5px;
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