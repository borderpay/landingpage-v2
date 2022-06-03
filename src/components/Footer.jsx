import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    
    faInstagram,
    faTwitter,
    faLinkedin,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../images/logo.png";

const Footer = () => {

//display current year
const currYear = new Date().getFullYear()

    return (
      <div>
        <Box>
          <Container>
            <Row>
              <Column>
                <img src={logo} width="180" alt="borderpay-logo" />
              </Column>
              <Column>
                <Heading>Company</Heading>
                <FooterLink href="#">Blog</FooterLink>
                <FooterLink href="#">FAQ's</FooterLink>
                <FooterLink href="#">Contact Us</FooterLink>
              </Column>
              <Column>
                <Heading>Resources</Heading>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms & Conditions</FooterLink>
                <FooterLink href="#">AML & KYC Policy</FooterLink>
              </Column>

              <Column>
                <Heading>We're Social</Heading>
                <FooterLink href="https://www.twitter.com/borderpay">
                  <FontAwesomeIcon className="icon" icon={faTwitter} />
                  <span href="#" style={{ marginLeft: "10px" }}>
                    Twitter
                  </span>
                </FooterLink>
                <FooterLink href="https://www.instagram.com/borderpay">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                  <span href="#" style={{ marginLeft: "10px" }}>
                    Instagram
                  </span>
                </FooterLink>
                <FooterLink href="https://www.facebook.com/borderpay">
                  <FontAwesomeIcon className="icon" icon={faFacebook} />
                  <span href="#" style={{ marginLeft: "10px" }}>
                    Facebook
                  </span>
                </FooterLink>
                <FooterLink href="https://www.linkedin.com/company/borderpay">
                  <FontAwesomeIcon className="icon" icon={faLinkedin} />
                  <span href="#" style={{ marginLeft: "10px" }}>
                    LinkedIn
                  </span>
                </FooterLink>
              </Column>
            </Row>
          </Container>
        </Box>

        <div
          style={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span
            href="https://www.linkedin.com/company/borderpay"
            style={{ color: "white" }}
          >
            Copyright © {currYear}{" "}
            <a href="https://www.linkedin.com/company/borderpay">
              BorderPay Inc.
            </a>
          </span>
        </div>
      </div>
    );
};
export default Footer;