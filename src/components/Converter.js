import React from 'react'
import styled from "styled-components"

function Converter() {
    return (
        <div>
            <Container>
                <div>
                    <input type="text" className="from" placeholder="you send" />
                    <select className="currency">
                        <option value="NGN">NGN</option>
                        <option value="CAD">CAD</option>
                        <option value="USD">USD</option>
                        <option value="YEN">YEN</option>
                        <option value="ZAR">ZAR</option>
                    </select>
                </div>
                
                <div>
                    <input type="text" className="to" placeholder="you receive" />
                    <select className="currency">
                        <option value="NGN">NGN</option>
                        <option value="CAD">CAD</option>
                        <option value="USD" selected>USD</option>
                        <option value="YEN">YEN</option>
                        <option value="ZAR">ZAR</option>
                    </select>
                </div>

                <input type="submit" className="button" name="convert" value="Convert" />
                <p>Licensed and regulated by the Federal Deposit international Commission, Circle Inc.</p>
            </Container>
        </div>
    )
}

export default Converter

const Container = styled.div`
    width: 500px;
    height: 480px;
    background: white;
    border-radius: 15px;
    margin: 20px;
    padding: 20px;
    margin-right: 130px;
    -webkit-box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    box-shadow: 10px 8px 6px #b8b9be, -3px -3px 6px #b8b9be;

    div{
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        width: 95%;
        height: 80px;
        border: 2px solid gainsboro;
        border-radius: 7px;
        background: whitesmoke;
        -webkit-box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
        box-shadow: 0px 8px 6px #b8b9be, -3px -3px 6px #b8b9be;

        @media(max-width: 960px){
            height: 70px;
        }
    }

    input {
        width: 100%;
        background: none;
        border: none;
        outline: none;
        margin-left: 10px;
        margin-right: 10px;
        padding: 10px;
    }

    select{
        width: 150px;
        margin: 10px;
        padding: 10px;
        font-weight: bold;
        cursor: pointer;
        outline: none;
        background: none;
    }

    .button{
        background: #14b848;
        color: white;
        width: 93%;
        height: 60px;
        margin-top: 40px;
        border-radius: 7px;
        cursor: pointer;

        @media(max-width: 960px){
            height: 50px;
        }
    }

    p{
        margin-top: 40px;
        text-align: center;

        @media(max-width: 960px){
            margin-top: 20px;
            font-size: 14px;
        }
    }

    @media(max-width: 960px){
        margin: auto;
        margin-top: 30px;
        margin-bottom: 30px;
        width: 90%;
        height: 400px;
    }
`
