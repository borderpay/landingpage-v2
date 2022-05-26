import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"
import GlobalTransfer from "../components/GlobalTransfer"
import DownloadSection from "../components/DownloadSection"
import Dashboard from "../components/Dashboard"
import Features from "../components/Features"

const Home = () => {

    return(
        <div>
            <Container>
                <Header />
                <GlobalTransfer />
                <Dashboard />
                <Features />
                <DownloadSection />
                <Footer />
            </Container>
        </div>
    )
}

export default Home

const Container = styled.div`
    
`