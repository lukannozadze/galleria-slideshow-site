import galleriaPath from "../assets/shared/galleria..png";
import Wrapper from "./Wrapper";

const Header = (props) => {
  return (
    <div>
      <div className="flex items-center justify-between p-6">
        <img
          onClick={() => props.setActive(null)}
          src={galleriaPath}
          alt="galleria"
        />
        <span
          onClick={() => {
            props.setIsEnabled(!props.isEnabled);
          }}
          className="text-[9px] text-[#7D7D7D] font-baskervile font-bold leading-[11px] tracking-[1.93px] uppercase"
        >
          {`${props.isEnabled ? "stop" : "start"} slideshow`}
        </span>
      </div>
      <Wrapper />
    </div>
  );
};
export default Header;
