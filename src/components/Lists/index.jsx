import React, { useState, useEffect } from "react";
import { baseFetch } from "../../services/tmdb";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import {
  Container,
  Carousel,
  Title,
  Wrapper,
  Movie,
  MovieMenu,
  Button,
  PlayButton,
  ButtonDiv,
  Interactives,
  MovieInfo,
  MovieCount,
  MovieYear,
  LeftController,
  RightController,
} from "./styles";

function Lists({ title, path, genre }) {
  const [moviesList, setMoviesList] = useState([]);
  const [rightOpacity, setRightOpacity] = useState(true);
  const [leftOpacity, setLeftOpacity] = useState(true);
  const [listMargin, setListMargin] = useState(0); 

  useEffect(() => {
    const fetchData = async () => {
      let data = await baseFetch(path);
      let dataList = data.results;
      let filteredList;
      if (genre) {
        filteredList = dataList.filter(
          (item) =>
            item.backdrop_path !== null && item.genre_ids.includes(genre)
        );
      } else {
        filteredList = dataList.filter((item) => item.backdrop_path !== null);
      }
      setMoviesList(filteredList);
    };
    fetchData();
  }, [path, genre]);

  useEffect(() => {
    if (listMargin !== 0) {
      setLeftOpacity(false)
    } else {
      setLeftOpacity(true)
    }
  }, [listMargin])


  const handleLeftClick = () => {
    let newMargin = listMargin + 600;
    if (newMargin > 0) {
      setListMargin(0);
    } else {
      setListMargin(newMargin);
    }
  }

  const handleRightClick = () => {
    let newMargin = listMargin - Math.round(window.innerWidth / 2);
    let listWidth = moviesList.length * 255;

    if((window.innerWidth - listWidth) > newMargin) {
      newMargin = (window.innerWidth - listWidth) - 80;
    }
    setListMargin(newMargin)
  }

  return (
    <Container onMouseOver={(e) => setRightOpacity(false)} onMouseOut={(e) => setRightOpacity(true)}>
      <Title>{title}</Title>
      <Wrapper>
        <LeftController opacity={leftOpacity} onClick={handleLeftClick}>
          <ChevronLeftIcon />
        </LeftController>
        <RightController opacity={rightOpacity} onClick={handleRightClick}>
          <ChevronRightIcon />
        </RightController>
        <Carousel width={moviesList.length * 355} margin={listMargin}>
          {moviesList.map((item, index) => (
            <Movie key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt={item.name}
              />
              <MovieMenu>
                <ButtonDiv>
                  <Interactives>
                    <PlayButton>
                      <PlayArrowIcon />
                    </PlayButton>
                    <Button>
                      <AddIcon />
                    </Button>
                    <Button>
                      <ThumbUpOffAltIcon />
                    </Button>
                    <Button>
                      <ThumbDownOffAltIcon />
                    </Button>
                  </Interactives>
                  <Button>
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonDiv>
                <MovieInfo>
                  <MovieCount>{item.vote_average * 10}% Match</MovieCount>
                  <MovieYear>
                    {item.first_air_date
                      ? new Date(item.first_air_date).getFullYear()
                      : new Date(item.release_date).getFullYear()}
                  </MovieYear>
                  <br />
                  <p>"{item.title ? item.title : item.name}"</p>
                </MovieInfo>
              </MovieMenu>
            </Movie>
          ))}
        </Carousel>
      </Wrapper>
    </Container>
  );
}

export default Lists;
