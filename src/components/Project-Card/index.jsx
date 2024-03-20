import calendar from "@/assets/icons/calendar.svg?url"
import forest from "@/assets/icons/virtual-environment-forest.svg?url"
import styled from "styled-components"

const ScCard = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 1rem;
    overflow: hidden;
    background-color: #fff;

    .view {
        width: 100%;
        aspect-ratio: 16/9;
    }

    .ellipsis-multiline {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .content {
        width: 100%;
        height: calc(100% - 225px);
        padding: 1.5rem 1rem;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        h3 {
            -webkit-line-clamp: 1;
        }

        p {
            -webkit-line-clamp: 2;
            margin-top: .5rem;
            color: #717171;
            font-size: .9rem;
        }

    }
`

const ScCardBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
        color: var(--color-primary);

        span {
            line-height: 1.5;
        }
    }

    .dollar {
        font-weight: bolder;
        font-size: 1.25rem;
    }
`

function ProjectCard({ img, title, description, days, dollar }) {
    return (
        <ScCard>
            <img className="view" src={img} />

            <div className="content">
                <div className="top">
                    <h3 className="ellipsis-multiline"> {title} </h3>
                    <p className="ellipsis-multiline"> {description} </p>
                </div>
                <ScCardBottom>
                    <div className="left">
                        <img src={forest} alt="forest" />
                        <span>&nbsp; VR Preview</span>
                        &emsp;
                        <img src={calendar} alt="calendar" />
                        <span>&nbsp;  {days} </span>
                    </div>
                    <span className="dollar"> ${dollar} </span>
                </ScCardBottom>
            </div>
        </ScCard>
    )
}

export default ProjectCard
