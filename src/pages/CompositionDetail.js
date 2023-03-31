import CompositionVisual from "../components/detailedPageComponents/CompositionVisual";
import Description from "../components/detailedPageComponents/Description";
import SliderPlayer from "../components/detailedPageComponents/SliderPlayer";
import Header from "../components/Header";
import { useState } from "react";

const CompositionDetail = (props) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="relative ">
      <div>
        {modalIsShown && (
          <div
            onClick={() => setModalIsShown(false)}
            className="w-screen h-[100%] bg-black absolute bg-opacity-[85%] z-10 "
          >
            <div className="absolute left-6 right-6 top-[109px] text-right">
              <button className="uppercase font-bold text-[14px] leading-[18px] tracking-[3px] text-white -translate-y-[33px] ">
                close
              </button>
              <img
                src={props.heroLarge !== "" ? props.heroLarge : null}
                alt="hero"
              />
            </div>
          </div>
        )}
        <Header
          setIsEnabled={setIsEnabled}
          setActive={props.setActive}
          active={props.active}
        />
        <div>
          <CompositionVisual
            heroImg={props.heroImg !== "" ? props.heroImg : null}
            active={props.active}
            setActive={props.setActive}
            setModalIsShown={setModalIsShown}
          />

          <Description
            artistImg={props.artistImg !== "" ? props.artistImg : null}
            active={props.active}
            setActive={props.setActive}
          />

          <SliderPlayer
            active={props.active}
            setActive={props.setActive}
            isEnabled={isEnabled}
          />
        </div>
      </div>
    </div>
  );
};

export default CompositionDetail;
