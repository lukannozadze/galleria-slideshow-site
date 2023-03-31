import Header from "./components/Header";
import fetchedData from "./data.json";
import CompositionWindow from "./components/CompositionWindow";
import CompositionDetail from "./pages/CompositionDetail";
import { useState } from "react";
function App() {
  const [active, setActive] = useState(null);
  const [slideshowStarted, setSlideshowStarted] = useState(false);
  return (
    <div className="font-baskervile h-max">
      {!active && active !== 0 ? (
        <div>
          <div>
            <Header
              setSlideshowStarted={setSlideshowStarted}
              setActive={setActive}
            />
            <div className="flex flex-col items-center gap-6">
              {fetchedData &&
                fetchedData.map((element, index) => {
                  return (
                    <div
                      key={element.images.thumbnail}
                      onClick={() => {
                        setActive(index);
                      }}
                    >
                      <CompositionWindow
                        imgPath={require(`${element.images.thumbnail}`)}
                        title={element.name}
                        author={element.artist.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <CompositionDetail
          heroImg={
            active !== null
              ? require(`${fetchedData[active].images.hero.small}`)
              : null
          }
          artistImg={
            active !== null
              ? require(`${fetchedData[active].artist.image}`)
              : null
          }
          heroLarge={
            active !== null
              ? require(`${fetchedData[active].images.hero.large}`)
              : null
          }
          active={active}
          setActive={setActive}
          setSlideshowStarted={setSlideshowStarted}
          slideshowStarted={slideshowStarted}
        />
      )}
    </div>
  );
}

export default App;
