import fetchData from "../../data.json";
import icon from "../../assets/shared/.gitignore.png";
const CompositionVisual = (props) => {
  console.log(fetchData);
  console.log(props.setActive);
  return (
    <div key={props.path} className="flex flex-col items-center">
      <div>
        <div className="relative">
          <img src={props.heroImg} alt="composition" />
          <div className="bg-black opacity-75 w-[152px] tracking-[2.14px] leading-[12px]  flex gap-[14px] items-center p-4 absolute top-4 left-4 ">
            <button>
              <img src={icon} alt="icon" />
            </button>
            <span className="text-white   text-[10px] uppercase ">
              view image
            </span>
          </div>
          <div className="flex flex-col w-[280px] h-[104px] gap-[8px] p-6 bg-white absolute left-0 bottom-0 translate-y-[50%]">
            <h1 className="text-[22px] leading-[29px] font-bold w-[252px]">
              {fetchData[props.active].artist.name}
            </h1>
            <span className="text-[14px] leading-[19px] text-[#7D7D7D]">
              {fetchData[props.active].artist.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompositionVisual;
