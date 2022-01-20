import react, {useEffect, useState} from "react";
import GlobalStyle from "./Styles/GlobalStyle";
import Header from "./components/Header";
import { baseFetch } from "./services/tmdb";
import ListsContainer from "./components/ListsContainer";
import MainMovie from "./components/MainMovie";

function App() {

  const [MainData, SetMainData] = useState(null) 

  useEffect(() => {

    const loadMovieData = async () => {

      const data = await baseFetch("trending/all/day")
      const choosen = data.results[0];
      const choosenData = await baseFetch(`${choosen.media_type}/${choosen.id}`)

      SetMainData(choosenData)
    }

    loadMovieData();

  },[])

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {MainData ?  <MainMovie data={MainData} /> : ""}
      <ListsContainer />
    </div>
  );
}

export default App;
