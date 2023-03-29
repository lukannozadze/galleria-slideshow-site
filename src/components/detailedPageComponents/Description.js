import fetchData from "../../data.json";
const Description = (props) => {
  return (
    <div className="pt-[46px] pl-6 pr-6 text-left pb-[67px]">
      <div className="relative ">
        <img
          width="64px"
          height="64px"
          className="ml-4"
          src={props.artistImg}
          alt="artist"
        />
        <span className="text-[100px] leading-[100px] text-[#F3F3F3] absolute top-[44px] right-0">
          {fetchData[props.active].year}
        </span>
        <p className="text-[14px] font-bold leading-[28px] text-[#7D7D7D] mt-[54px] mb-[68px]">
          {fetchData[props.active].description}
        </p>
        <a
          href={fetchData[props.active].source}
          className="uppercase text-[#7D7D7D] font-bold text-[9px] leading-[11px] tracking-[1.93px] underline"
        >
          go to source
        </a>
      </div>
    </div>
  );
};

export default Description;
