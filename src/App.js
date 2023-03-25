import Header from "./components/Header";
import fetchedData from "./data.json";
import CompositionWindow from "./components/CompositionWindow";

function App() {
  console.log(fetchedData[0].name);
  return (
    <div className="font-baskervile">
      <Header />
      <div className="flex flex-col items-center gap-6">
        {fetchedData &&
          fetchedData.map((element) => {
            return (
              <CompositionWindow
                key={element.images.thumbnail}
                imgPath={require(`${element.images.thumbnail}`)}
                title={element.name}
                author={element.artist.name}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
