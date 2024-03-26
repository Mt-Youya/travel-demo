import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

const ScBackToTop = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    position: fixed;
    bottom: 0;
    right: 3rem;
    color: #000;
    // border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    transition: all ease-in-out 0.8s;
    // border: 1px solid #f1f1f1;
    z-index: 999;

    & > svg.top-arrow {
        position: relative;
        top: -3px;
        left: -3px;
    }

    & > .top-circle {
        position: absolute;
        top: 0;
        left: 0;
        width: 42px;
        height: 42px;

        circle {
            stroke: #ca2015;
            fill: #fff;
            stroke-width: 0.125rem;
            transition: all 0.3s ease-out;
        }
    }

    &:hover {
        svg.top-arrow {
            animation: toTop 1s ease-in-out infinite;
        }
    }

    @keyframes toTop {
        from {
            top: 0.3125rem;
        }
        to {
            top: -0.3125rem;
        }
    }
`

const perimeter = 2 * 20 * Math.PI

function BackToTop() {
    const [rate, setRate] = useState(0)
    const toTop = useRef(null)

    function transitionBackToTop() {
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.body.clientHeight
        const rateComputed = ((window.scrollY + clientHeight) / scrollHeight) * perimeter

        if (toTop.current !== undefined) {
            if (window.scrollY < 200) {
                toTop.current.style.bottom = "-3rem"
                toTop.current.style.opacity = "0"
            } else {
                toTop.current.style.bottom = "6rem"
                toTop.current.style.opacity = "1"
            }
        }
        setRate(rateComputed)
    }

    const forBackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    useEffect(() => {
        window.addEventListener("scroll", transitionBackToTop)
        return () => window.removeEventListener("scroll", transitionBackToTop)
    }, [])

    return (
        <ScBackToTop ref={toTop} onClick={forBackToTop} title="Back To Top">
            <svg className="top-circle">
                <circle cx="21" cy="21" r="20" strokeDasharray={rate + ", " + perimeter} />
            </svg>
            <svg
                className="top-arrow"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path fill="currentColor" d="M1.73734 0.5V1.75H14.2373V0.5H1.73734Z" />
                <path
                    fill="currentColor"
                    d="M15.0669 8.86364L14.1831 9.74752L8.62087 4.18534V15.5426H7.37087V4.18534L1.80869 9.74752L0.924805 8.86364L7.99587 1.79257L15.0669 8.86364Z"
                />
            </svg>
        </ScBackToTop>
    )
}

export default BackToTop
