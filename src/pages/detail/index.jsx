import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import {
    MuiDivider, MuiScDateCalendar, MuiScRating, ScDetailBottom, ScDetailMiddle, ScDetailTop, ScFeature, ScImgList,
} from "./styled.js"

import CircleIcon from "@mui/icons-material/Circle"
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft"
import Divider from "@mui/material/Divider"
import Main from "@/layout/Main"
import useFetch from "@/utils/useFetch.js"
import calendar from "@/assets/icons/calendar.svg?url"
import sun from "@/assets/icons/sun.svg?url"
import forest from "@/assets/icons/virtual-environment-forest.svg?url"
import map from "@/assets/images/map.png?url"
import projects from "../home/data/projects.js"
import Reviews from "./components/Reviews.jsx"
import reviews from "./data/reviews.js"

function Detail() {
    const { projectId } = useParams()
    const [data, setData] = useState(null)
    const [rating, setRating] = useState(4.8)

    async function fetchData() {
        // const data = await useFetch("https://jsonplaceholder.typicode.com/posts")
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + projectId).then(res => res.json())
        console.log("Detail Page", data)
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const imgs = projects.map(project => project.img)

    return (
        <Main>
            <ScDetailTop>
                <h2>
                    {data?.title}
                    <ScFeature>
                        <img src={forest} alt="forest" />
                        <span>&nbsp; VR Preview</span>
                        &emsp;
                        <img src={calendar} alt="calendar" />
                        <span>&nbsp;  {data?.userId} </span>
                        &emsp;
                        <img src={sun} alt="sun" />
                        <span>&nbsp; Any season </span>
                    </ScFeature>
                </h2>

                <ScImgList>
                    {imgs.map((img, i) => <li key={img}><img src={img} alt="img" /></li>)}
                </ScImgList>
                <p className="body">"{data?.body}{data?.body}{data?.body}"</p>

                <div className="options">
                    <div className="left">
                        <h3>This travel package has</h3>
                        <p>Click below for more information.</p>
                        <ul className="items">
                            <li><img src={forest} /> Airport pickup/departure</li>
                            <li><img src={forest} /> Travel insurance</li>
                            <li><img src={forest} /> Lodging</li>
                            <li><img src={forest} /> Food</li>
                            <li><img src={forest} /> Transportation</li>
                            <li><img src={forest} /> Professional guide</li>
                        </ul>
                        <br />
                        <h3>Your team</h3>
                        <br />
                        <ol className="team">
                            <li>
                                <img
                                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="avatar"
                                />
                                <Divider />
                                <span>Guide</span>
                                <a> Learn More </a>
                            </li>
                            <li>
                                <img
                                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="avatar"
                                />
                                <Divider />
                                <span>Guide</span>
                                <a> Learn More </a>
                            </li>
                        </ol>
                        <p>Profile details will be available upon trip purchase.</p>
                    </div>
                    <div>
                        <h3>Check available dates</h3>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MuiScDateCalendar />
                        </LocalizationProvider>
                    </div>
                    <div className="people">
                        <h3> People </h3>
                        <br />
                        <select defaultValue={3}>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                </div>
            </ScDetailTop>

            <MuiDivider />

            <ScDetailMiddle>
                <h3>Guided virtual previews</h3>
                <p>Before you invest for your next adventure see if it’s worth it </p>

                <div className="scene">
                    <p>Choose your scene</p>
                    <ul className="scenes">
                        {imgs.map((img, i) => <li key={img}><img src={img} alt="img" /></li>)}
                    </ul>
                    <div className="vr">
                        <button>Experience in VR</button>
                        <span> or </span>
                        <button>Try 360°</button>
                    </div>
                </div>

                <h3>Itinerary menu</h3>

                <div className="maps">
                    <img src={map} alt="map" />
                    <div className="clickMap">
                        <span> Your detailed itinerary will show here.  </span>
                        <span>Click any circles on the map.</span>
                        <SubdirectoryArrowLeftIcon />
                    </div>
                </div>
                <p>Please note that travel changes may occur due to weather or other unforeseen circumstances. We will
                    update you right away.</p>
                <MuiDivider />

                <h3 className="rating">
                    Past travelers
                    <MuiScRating
                        defaultValue={rating}
                        precision={0.1} readOnly
                        icon={<CircleIcon fontSize="inherit" />}
                        emptyIcon={<CircleIcon fontSize="inherit" />}
                    />
                    <span> {rating} </span>

                </h3>
                <Reviews list={reviews} />
                <MuiDivider />
            </ScDetailMiddle>

            <ScDetailBottom>
                <div className="price">
                    <div className="total-reserve">
                        <div className="total">
                            <h2>Total price</h2>
                            <h3> $1750 </h3>
                            <p> Price breakdown Payment policy</p>
                        </div>
                        <button className="reserve">Reserve now</button>

                        <p>You won’t be charged right away. </p>
                    </div>

                    <div className="FAQ">
                        <h3 className="ellipsis-multiline">What happens after I submit a payment for the trip?</h3>
                        <p className="ellipsis-multiline">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. "</p>

                        <br />

                        <h3 className="ellipsis-multiline">What’s the cancellation policy?</h3>
                        <p className="ellipsis-multiline">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat." </p>
                    </div>
                </div>
                <span className="all-FAQs"> See all FAQ </span>

                <div className="popular">
                    <h3> Popular tours</h3>
                    <ul>
                        <li><img src={projects[0].img} alt="img" /><span> {projects[0].title}</span></li>
                        <li><img src={projects[1].img} alt="img" /><span> {projects[1].title}</span></li>
                        <li><img src={projects[2].img} alt="img" /><span> {projects[2].title}</span></li>
                    </ul>
                    <br />
                    <h3>Only available for winter 2025</h3>
                    <ul>
                        <li><img src={projects[0].img} alt="img" /><span> {projects[0].title}</span></li>
                        <li><img src={projects[1].img} alt="img" /><span> {projects[1].title}</span></li>
                        <li><img src={projects[2].img} alt="img" /><span> {projects[2].title}</span></li>
                    </ul>
                </div>
            </ScDetailBottom>

            <MuiDivider />

        </Main>
    )
}

export default Detail
