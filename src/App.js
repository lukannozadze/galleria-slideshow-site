import Header from "./components/Header";
import fetchedData from "./data.json";
import CompositionWindow from "./components/CompositionWindow";
import { Routes, Route, Link } from "react-router-dom";
import CompositionDetail from "./pages/CompositionDetail";
import { useState } from "react";
function App() {
  const [path, setPath] = useState("");
  const [artistImg, setArtistImg] = useState("");
  const [active, setActive] = useState(null);
  //console.log(fetchedData[0].name);
  console.log(active);
  console.log(fetchedData);
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
                          setActive(index);
                          console.log(fetchedData[index].name);
                          setPath(fetchedData[index].name);
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
              heroImg={
                active !== null && active >= 0
                  ? require(`${fetchedData[active].images.thumbnail}`)
                  : null
              }
              artistImg={
                active !== null && active >= 0
                  ? require(`${fetchedData[active].artist.image}`)
                  : null
              }
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
