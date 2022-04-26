import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faDiscord, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from "../images/logo.png"

function Footer() {
    return (
        <FooterStyled>
                <div className="footer-con">
                    <div className="logo-con">
                       <div className="logo-items">
                        <img src={logo} width="180" />
                       </div>
                    </div>
                    <ul className="botton-nav">
                        <div className="links1">
                            <h1>Socials</h1>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faLinkedin} /><a href="#">LinkedIn</a>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faDiscord} /><a href="#">Discord</a>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faInstagram} /><a href="#">Instagram</a>
                            </li>
                        </div>
                        <div className="links2">
                            <h1>Support</h1>
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                            <li>
                                <a href="#">Tickets</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                        </div>
                        <div className="links3">
                            <h1>Company</h1>
                            <li>
                                <a href="#">Terms of use</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </div>
                    </ul>
                </div>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    padding: 0 18rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: black;
    color: white !important;
    font-weight: bold;

    @media screen and (max-width: 1347px){
        padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px){
        padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px){
        padding: 5rem 4rem;
        text-align: center;
    }
    .footer-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        @media(max-width: 960px){
            display: block !important;
        }
    }

    .logo-con{
        display: flex;
        align-items: center;
        font-size: 30px;
        font-weight: bold;

        @media(max-width: 960px){
            display: none;
        }
    }

    .botton-nav{
        display: flex;
        justify-content: space-between;
        li{
            list-style-type: none;
            padding: 2rem 0;
            color: #16194F;
            
            a{
                text-decoration: none;
                color: white;
                font-size: 20px;
            }

            .icon{
                color: white;
                padding-right: 15px;
                font-size: 20px;
            }
        }

        @media(max-width: 960px){
            display: block !important;
        }
    }
`;

export default Footer
