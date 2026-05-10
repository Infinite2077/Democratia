import React from "react";
import { Plyr } from "plyr-react";
import "plyr-react/plyr.css";
import { useParams } from "react-router"
import { styled, Box, Paper, Card, CardMedia, Typography, Divider } from "@mui/material"
import {useSelector, useDispatch} from "react-redux"
import {  getMovieInfo } from "../store/APIReducer";
import { useEffect } from "react";

export default function Movie() {
    let { id } = useParams()

    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getMovieInfo(id))
    },[])

    let movie = useSelector ( state=> state.api.movie)
    return (
        <Wrapper>
            <InfoBar>
                <CardMedia image="data:image/jpeg;base64,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" sx={{height: "10rem"}}/>
                <Typography variant="body1">
                    Release date: {new Date(movie.release_data).toLocaleDateString()}
                </Typography>
                <Typography variant="body1">
                    IMDB: 9.10
                </Typography>
                <Typography variant="body1">
                    Duration: 100 min
                </Typography>
            </InfoBar>
            <PlayerWrapper>
                <Typography variant="h4"> {movie.title}</Typography>
                <Typography variant="h6">2005</Typography>


                <Plyr
                    source={{
                        type: "video",
                        sources: [
                            {
                                src: `http://localhost:3000/movies/${id}`,
                            },
                        ],
                        poster: "http://localhost:3000/posters/poster.jpg",
                    }}
                    options={{
                        controls: [
                            "play",
                            "progress",
                            "current-time",
                            "mute",
                            "volume",
                            "settings",
                            "fullscreen",
                        ],
                    }}
                />
            </PlayerWrapper>
            <OtherInfo>
                <Typography variant="h4">Description</Typography>
                <Divider/>
                <Typography variant="body1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, nesciunt.
                </Typography>
            </OtherInfo>
        </Wrapper>
    );
}

let Wrapper = styled(Box)`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 margin: 2rem 0;
 gap: 1rem;
`

let InfoBar = styled(Card)`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`

let PlayerWrapper = styled(Box)`
    grid-column: span 2;
`

let OtherInfo = styled(Paper)`
    padding: 1rem;
    grid-column: 1/-1

`