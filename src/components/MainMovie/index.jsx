import React from "react";

import {
  Container,
  Vertical,
  Horizontal,
  Title,
  Infos,
  Points,
  DateItem,
  Seasons,
  Overview,
  ButtonArea,
  Genres,
  Button
} from "./styles";

function MainMovie({ data }) {


    let genres = [];

    for(let i in data.genres) {
        genres.push(data.genres[i].name);
    }


  return (
    <Container
      url={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
    >
      <Vertical>
        <Horizontal>
          <Title>{data.title ? data.title : data.name}</Title>
          <Infos>
            <Points>{data.vote_average * 10}%</Points>
            <DateItem>{data.release_date ? new Date(data.release_date).getFullYear() : new Date(data.first_air_date).getFullYear()}</DateItem>
            {data.number_of_seasons ? (
              <Seasons> {data.number_of_seasons} temporada{data.number_of_seasons !== 1 ? "s" : ""}</Seasons>
            ) : (
              ""
            )}
          </Infos>
          <Overview>{data.overview}</Overview>
          <ButtonArea>
            <Button>Play</Button>
            <Button dark>Saiba Mais</Button>
          </ButtonArea>
          <Genres><strong>Generos: </strong>{genres.join(", ")}</Genres>
        </Horizontal>
      </Vertical>
    </Container>
  );
}

export default MainMovie;
