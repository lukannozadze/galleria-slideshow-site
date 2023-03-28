import CompositionVisual from "../components/detailedPageComponents/CompositionVisual";
import Description from "../components/detailedPageComponents/Description";
import SliderPlayer from "../components/detailedPageComponents/SliderPlayer";

const CompositionDetail = (props) => {
  console.log(props.active);
  return (
    <div>
      <CompositionVisual
        path={props.path}
        heroImg={props.heroImg !== "" ? props.heroImg : null}
        active={props.active}
        setActive={props.setActive}
      />
      <Description
        path={props.path}
        artistImg={props.artistImg !== "" ? props.artistImg : null}
        active={props.active}
        setActive={props.setActive}
      />
      <SliderPlayer active={props.active} setActive={props.setActive} />
    </div>
  );
};

export default CompositionDetail;