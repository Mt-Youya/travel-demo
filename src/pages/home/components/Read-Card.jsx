import styled from "styled-components"

const ScReadCard = styled.li`
    width: 600px;
    padding: 1rem;
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: var(--color-boxShadow);

    & > img {
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: .5rem;
        margin: .5rem 0;
        display: block;
    }

    .title {
        margin: .5rem 0;
    }
`

const ScAuthor = styled.div`
    display: flex;

    img {
        border-radius: 50%;
        width: 80px;
        aspect-ratio: 1/1;
        box-shadow: 1px 1px 4px 2px #00000026;
    }

    .info {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .5rem;
        margin: 0 .5rem;
        color: #fff;

        span {
            display: block;
            padding: .5rem;
            border-radius: .5rem;
            box-shadow: var(--color-boxShadow);

            &:first-child {
                background-color: var(--color-primary);
            }

            &:last-child {
                background-color: var(--color-secondary);
            }
        }
    }
`

function ReadCard({ title, img, avatar, author, job }) {

    return (
        <ScReadCard>
            <h3 className="title">{title}</h3>
            <img src={img} alt={title} />
            <ScAuthor>
                <img src={avatar} alt={author} />
                <div className="info">
                    <span>{author}</span>
                    <span>{job}</span>
                </div>
            </ScAuthor>
        </ScReadCard>
    )
}

export default ReadCard
