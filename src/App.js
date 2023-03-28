import Header from "./components/Header";
import fetchedData from "./data.json";
import CompositionWindow from "./components/CompositionWindow";
import { Routes, Route, Link } from "react-router-dom";
import CompositionDetail from "./pages/CompositionDetail";
import { useState } from "react";
function App() {
  const [path, setPath] = useState("");
  const [heroImg, setHeroImg] = useState("");
  const [artistImg, setArtistImg] = useState("");
  const [active, setActive] = useState(null);
  //console.log(fetchedData[0].name);
  console.log(active);
  console.log(path);
  return (
    <div className="font-baskervile">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center gap-6">
              {fetchedData &&
                fetchedData.map((element, index) => {
                  return (
                    <Link
                      key={element.images.thumbnail}
                      to={`/${fetchedData[index].name}`}
                    >
                      <div
                        onClick={() => {
                          console.log(fetchedData[index].name);
                          setPath(fetchedData[index].name);
                          setHeroImg(require(`${element.images.thumbnail}`));
                          setArtistImg(require(`${element.artist.image}`));
                          setActive(index);
                        }}
                      >
                        <CompositionWindow
                          imgPath={require(`${element.images.thumbnail}`)}
                          title={element.name}
                          author={element.artist.name}
                        />
                      </div>
                    </Link>
                  );
                })}
            </div>
          }
        ></Route>
        <Route
          path={`${path}`}
          element={
            <CompositionDetail
              path={path}
              heroImg={heroImg}
              artistImg={artistImg}
              active={active}
              setActive={setActive}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
