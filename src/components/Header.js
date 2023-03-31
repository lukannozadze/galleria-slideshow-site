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
            if (props.active || props.active === 0) {
              props.setIsEnabled(true);
            }
          }}
          className="text-[9px] text-[#7D7D7D] font-baskervile font-bold leading-[11px] tracking-[1.93px] uppercase"
        >
          start slideshow
        </span>
      </div>
      <Wrapper />
    </div>
  );
};
export default Header;
