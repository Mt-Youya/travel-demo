import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import { Rating } from "@mui/material"
import styled from "styled-components"
import Divider from "@mui/material/Divider"

const ScDetailTop = styled.section`
    text-align: left;

    h2 {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 1rem;
    }

    .body {
        margin: 3rem 0;
        line-height: 1.5;
    }

    .options {
        display: grid;
        grid-template-columns: minmax(500px, 1fr) minmax(500px, 1fr) 1fr;
        gap: 2rem;

        p {
            margin: 1rem 0;
            color: var(--color-secondary);
            font-size: .8em;
        }

        .team {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 2rem;

            li {
                background-color: #fff;
                border-radius: 1rem;
                padding: 1rem 2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }

            img {
                width: 60px;
                border-radius: 50%;
                aspect-ratio: 1/1;
            }

            hr {
                margin: 1rem 0;
                width: 80%;
            }

            a {
                color: var(--color-primary);
                font-size: .8rem;
                cursor: pointer;
                margin-top: .5rem;
            }

            span {
                font-size: 1rem;
                font-weight: bolder;
            }
        }
    }

    .items {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;

        li {
            border-radius: .5rem;
            padding: 1rem .5rem;
            box-shadow: var(--color-boxShadow);
            cursor: pointer;
            background-color: #fff;
        }
    }

    .people {
        select {
            padding: 1rem;
            border-radius: .5rem;
            box-shadow: var(--color-boxShadow);
            font-size: 1rem;
            font-weight: bolder;
        }
    }
`

const ScDetailMiddle = styled.section`
    text-align: left;

    h3 {

    }

    & > p {
        margin: 1rem 0;
        color: var(--color-secondary);
        font-size: .8em;
    }

    .scene {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        flex-direction: column;
        background-color: #fff;
        border-radius: 1rem;
        box-shadow: var(--color-boxShadow);
        padding: 2rem;
        margin: 1rem 0 2rem;

        & > p {
            margin: 1rem 0;
            font-size: 1.5rem;
            font-weight: bolder;
        }
    }

    ul.scenes {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        li {
            cursor: pointer;

            img {
                width: 100px;
                aspect-ratio: 5/4;
                border-radius: 1rem;
            }
        }
    }

    .vr {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 1rem 0;

        button {
            padding: .5rem 1rem;
            background-color: var(--color-primary);
            color: #fff;
            border-radius: .5rem;
            cursor: pointer;
            height: unset;
        }
    }

    .maps {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
        gap: 2rem;
        margin: 2rem 0;

        img {
            width: 100%;
            border-radius: 1rem;
            box-shadow: var(--color-boxShadow);
        }

        .clickMap {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 1rem;
            margin-top: 1rem;
            background-color: #fff;
            border-radius: 1rem;
            box-shadow: var(--color-boxShadow);
            cursor: pointer;
            color: var(--color-secondary);
        }
    }

    .rating {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 2rem;
        gap: 1rem;

        span {
            font-size: 1rem;
            font-weight: bolder;
        }

    }
`

const ScDetailBottom = styled.section`
    .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        margin: 2rem 0;

        .total-reserve {
            width: 400px;

            p {
                color: var(--color-secondary);
                font-size: 1em;
                font-weight: bold;
            }

            .total {
                box-shadow: var(--color-boxShadow);
                border-radius: 1rem;
                background-color: #fff;
                padding: 1.5rem 3rem;
                //p{
                //    font-weight: normal;
                //    font-size: .8em;
                //}
                h3 {
                    margin: 1rem 0;
                }
            }


            .reserve {
                width: 100%;
                margin: 1rem 0;
                background-color: var(--color-primary);
                color: #fff;
                line-height: 2;
                padding: 1rem 0;
                font-weight: bold;
                font-size: 1rem;
            }

        }

        .FAQ {
            box-shadow: var(--color-boxShadow);
            border-radius: 1rem;
            padding: 2rem;
            background-color: #fff;
            flex: 1;
            text-align: left;

            h3 {
                margin-bottom: 1rem;
                color: var(--color-primary);
                font-size: 1.5rem;
                font-weight: bolder;
                -webkit-line-clamp: 1;
            }

            p {
                -webkit-line-clamp: 3;
            }
        }
    }

    .all-FAQs {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: var(--color-primary);
        font-weight: bolder;
        cursor: pointer;
    }

    .popular {
        text-align: left;
        h3{
            margin: 1rem 0;
        }

        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;

            li {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                text-align: left;

                img {
                    width: 400px;
                    aspect-ratio: 2/1;
                    box-shadow: var(--color-boxShadow);
                    border-radius: 1rem;
                }

                span {
                    margin-top: 1rem;
                    font-size: 1rem;
                }
            }
        }
    }
`

const ScFeature = styled.span`
    color: var(--color-primary);
    background-color: #fff;
    padding: .5rem;
    border-radius: 1rem;
    box-shadow: var(--color-boxShadow);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 1rem;

    span {
        font-size: 1rem;
    }
`

const ScImgList = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:  "left left center center right right" "left left center center right right";
    gap: 1rem;

    li {
        border-radius: 1rem;
        overflow: hidden;
    }

    li > img {
        background-color: #1f2327;
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
        grid-area: center;
    }

    li:first-child {
        grid-area: left;
    }

    li:last-child {
        grid-area: right;
    }
`

const MuiScDateCalendar = styled(DateCalendar)`
    &.MuiDateCalendar-root {
        width: 100%;
        background-color: #fff;
        border-radius: 1rem;
        margin-top: 1rem;

        .MuiPickersCalendarHeader-root {
            padding: 0 8rem;
        }

        button.MuiPickersDay-today {
            background-color: #FB3F4A !important; /* 使用 !important 确保样式优先级 */
            color: #fff;
            border: unset;
        }
    }
`

const MuiScRating = styled(Rating)`
    &.MuiRating-root {
        color: var(--color-primary);
    }
`

const MuiDivider = styled(Divider)`
    &.MuiDivider-root {
        margin: 2rem 0;
    }
`

export {
    ScDetailTop,
    ScDetailMiddle,
    ScDetailBottom,
    ScFeature,
    ScImgList,
    MuiScDateCalendar,
    MuiDivider,
    MuiScRating,
}