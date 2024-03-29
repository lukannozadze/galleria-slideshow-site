import galleriaPath from "../assets/shared/galleria..png";
import Wrapper from "./Wrapper";

const Header = (props) => {
  return (
    <div>
      <div className="flex items-center justify-between p-6 md:px-[40px] xl:px-[100px] customXXL:px-[250px] cursor-pointer ">
        <img
          onClick={() => props.setActive(null)}
          src={galleriaPath}
          alt="galleria"
        />
        <span
          onClick={() => {
            props.setIsEnabled(!props.isEnabled);
          }}
          className="text-[9px] text-[#7D7D7D] font-baskervile font-bold leading-[11px] tracking-[1.93px] uppercase md:text-[12px] md:leading-[15px] md:tracking-[2.57px] cursor-pointer hover:text-black  duration-500"
        >
          {`${props.isEnabled ? "stop" : "start"} slideshow`}
        </span>
      </div>
      <Wrapper />
    </div>
  );
};
export default Header;
