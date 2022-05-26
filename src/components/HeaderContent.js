/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Converter from "./Converter"

export default function Example() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Simplifying Global</span>{' '}
                <span className="block text-indigo-600 xl:inline">Payments</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Faster, easier, and cheaper cross border payments starts here.
              </p>

            <Features>
                <ul>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faCheck} /> Licensed and Regulated
                    </li>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faCheck} /> 100% transparent
                    </li>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faCheck} /> Across 180+ countries
                    </li>
                </ul>

                <ul>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faCheck} /> Hassle Free
                    </li>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faCheck} /> MultiCurrency Wallet
                    </li>
                </ul>
            </Features>
              
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-10 lg:mr-10">
        <Converter />
      </div>
    </div>
  )
}

const Features = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 10px;
    font-weight: bold;

    .icon{
        color: green;
        font-weight: bold;
    }
`