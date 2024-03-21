import styled from "styled-components"

const ScReviews = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 2rem 1rem 1rem;
    

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        box-shadow: var(--color-boxShadow);
        border-radius: 1rem;
        position: relative;
        gap: 1rem;
        height: 132px;
        min-width: 300px;
        cursor: pointer;

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            box-shadow: var(--color-boxShadow);
        }

        .account-info {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            gap: .5rem;
            min-width: 100px;
            max-width: 100px;
            .author{ 
                -webkit-line-clamp: 2;
            }
        }

        .rating {
            position: absolute;
            width: 30px;
            height: 30px;
            color: #fff;
            right: -1rem;
            top: -1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background-color: var(--color-primary);
            margin-top: 0;
            font-style: normal;
        }

        .review { 
            -webkit-line-clamp: 5;
        }
    }
`

const ScAllReviews = styled.span`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: var(--color-primary);
    font-weight: bolder;
    cursor: pointer;
`

function Reviews({ list }) {

    return (
        <>
            <ScReviews>
                {list.map(({ avatar, rating, author, review }, i) => {
                    return (
                        <li key={i}>
                            <div className="account-info">
                                <img src={avatar} alt="avatar" />
                                <span className="author ellipsis-multiline">{author}</span>
                            </div>
                            <div className="review ellipsis-multiline"> {review} </div>
                            <i className="rating">{rating}</i>
                        </li>
                    )
                })}
            </ScReviews>
            <ScAllReviews> See all {list.length} reviews </ScAllReviews>
        </>
    )
}

export default Reviews
