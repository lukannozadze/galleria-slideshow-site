import CompositionVisual from "../components/detailedPageComponents/CompositionVisual";
import Description from "../components/detailedPageComponents/Description";
import SliderPlayer from "../components/detailedPageComponents/SliderPlayer";
import Header from "../components/Header";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
const CompositionDetail = (props) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 768px)" });
  const modalImg = isTabletOrMobile ? (
    <img src={props.gallery !== "" ? props.gallery : null} alt="hero" />
  ) : (
    <img
      className="lg:w-[917px] lg:h-[712px]"
      src={props.heroLarge !== "" ? props.heroLarge : null}
      alt="hero"
    />
  );
  return (
    <div className="relative  ">
      <div>
        {modalIsShown && (
          <div
            onClick={() => setModalIsShown(false)}
            className="w-screen h-[100%] bg-black absolute bg-opacity-[85%] z-10 lg:m-auto "
          >
            <div className="absolute left-6 right-6 top-[109px] text-right">
              <button className="uppercase font-bold text-[14px] leading-[18px] tracking-[3px] text-white -translate-y-[33px] ">
                close
              </button>
              <div className="lg:absolute lg:left-[50%] lg:translate-x-[-50%]">
                {modalImg}
              </div>
            </div>
          </div>
        )}
        <Header
          setIsEnabled={props.setIsEnabled}
          isEnabled={props.isEnabled}
          setActive={props.setActive}
          active={props.active}
        />
        <div>
          <CompositionVisual
            heroImg={props.heroImg !== "" ? props.heroImg : null}
            heroLarge={props.heroLarge !== "" ? props.heroLarge : null}
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
            isEnabled={props.isEnabled}
          />
        </div>
      </div>
    </div>
  );
};

export default CompositionDetail;
