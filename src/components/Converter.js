import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import CAD from "../images/cad.png"
import EUR from "../images/eur.png"
import NGN from "../images/ngn.png"
import GBP from "../images/uk.png"
import USD from "../images/usa.jpg"

function Converter() {

    const [data, setData] = useState('')
    const [from, setFrom] = useState("USD")
    const [to, setTo] = useState("NGN")
    const [amount, setAmount] = useState(1)
    const [fromFlag, setFromFlag] = useState(USD)
    const [toFlag, setToFlag] = useState(NGN)

    useEffect(() => {

        const converter = async() => {
            const response = await fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, {
                method: 'GET',
                headers: {
                    'apikey': '79obWWmHwPuq8OGOMLr5wsgKTGEk9NKO'
                }
            })
    
            const data = await response.json()
            setData(data)
            console.log(data)
        }

        // function to control flag depending on selected input
        const controlFromFlag = () => {
            if(from == "USD"){
                setFromFlag(USD)
            }
            else if(from == "NGN"){
                setFromFlag(NGN)
            }
            else if(from == "EUR"){
                setFromFlag(EUR)
            }
            else if(from == "GBP"){
                setFromFlag(GBP)
            }
            else if(from == "CAD"){
                setFromFlag(CAD)
            }
        }

        const controlToFlag = () => {
            if(to == "USD"){
                setToFlag(USD)
            }
            else if(to == "NGN"){
                setToFlag(NGN)
            }
            else if(to == "EUR"){
                setToFlag(EUR)
            }
            else if(to == "GBP"){
                setToFlag(GBP)
            }
            else if(to == "CAD"){
                setToFlag(CAD)
            }
        }

        converter()
        controlFromFlag()
        controlToFlag()
        
    }, [from, to, amount])


    return (
        <div>
            <Container>
                <div>
                    <input type="number" className="from" value={amount} onChange={event => setAmount(event.target.value)} />
                    <img src={fromFlag} className="currency-img" alt="currency" /><select className="currency" value={from} onChange={event => setFrom(event.target.value)}>
                        <option value="NGN">NGN</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="CAD">CAD</option>
                    </select>
                </div>
                
                <p className="fees"><span><span>- </span>2.5%</span> Service fee</p>

                <div>
                    <input type="text" className="to" value={data.result ? data.result : "you receive"} readonly/>
                    <img src={toFlag} className="currency-img" alt="currency" /><select className="currency" value={to} onChange={event => setTo(event.target.value)}>
                        <option value="NGN">NGN</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="CAD">CAD</option>
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
        margin-top: 20px;
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

        .currency-img{
            border-radius: 50%;
            width: 40px;
            height: 40px;
            margin-top: 15px;
            object-fit: cover;
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
        font-weight: bold;
        font-size: 1.2rem;
    }

    select{
        width: 150px;
        height: 45px;
        margin: 10px;
        padding: 5px;
        font-weight: bold;
        cursor: pointer;
        outline: none;
        background: white;
    }

    .button{
        background: #14b848;
        color: white;
        width: 93%;
        height: 60px;
        margin-top: 40px;
        border-radius: 7px;
        cursor: pointer;
        font-size: 1rem;

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

    .fees{
        display: flex;
        justify-content: space-between;
        margin-left: 10px;
        margin-right: 40px;
        
        span{
            font-weight: bold;

            span{
                background: gainsboro;
                border-radius: 50%;
                text-align: center;
                padding: 1px 10px 5px 10px;
                margin-right: 15px;
            }
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
