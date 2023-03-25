const CompositionWindow = (props) => {
  //console.log(props.imgPath);
  return (
    <div className="relative">
      <img src={props.imgPath} alt="composition" />
      <div className="absolute bottom-[33px] left-[32px] z-10 flex flex-col gap-[7px]">
        <h1 className="text-[24px] leading-[30px] font-bold text-white">
          {props.title}
        </h1>
        <span className="text-[13px] leading-[16px] text-white opacity-75 ">
          {props.author}
        </span>
      </div>
      <div className="w-[100%] h-[100%] absolute top-0 bg-gradient-to-t from-black opacity-80  "></div>
    </div>
  );
};

export default CompositionWindow;
