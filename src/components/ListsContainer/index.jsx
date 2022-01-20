import React from "react";
import Lists from "../Lists";
import { Container } from "./styles";

function ListsContainer() {
  return (
    <Container>
      <Lists title="Recomendados para Você" path="discover/tv" />
      <Lists title="Em Alta" path="trending/all/week" />
      <Lists title="Recentemente Adicionados" path="movie/top_rated" />
      <Lists title="Ação" path="discover/movie?with_genre=28" genre={28} />
      <Lists title="Comédia" path="discover/movie?with_genre=35" genre={35} />
    </Container>
  );
}

export default ListsContainer;
