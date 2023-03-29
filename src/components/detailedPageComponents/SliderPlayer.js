import { useNavigate } from "react-router-dom";
import fetchData from "../../data.json";

const SliderPlayer = (props) => {
  const navigate = useNavigate();
  const maxSize = Object.keys(fetchData).length;
  return (
    <div>
      <progress
        className="h-[1px] w-screen "
        value={props.active + 1}
        max={maxSize}
      >
        {" "}
      </progress>
      <div className="flex justify-between items-center pl-6 pr-6 pt-[17px] pb-[17px]">
        <div className="flex flex-col gap-[9px]">
          <span className="text-[14px] font-bold leading-[17px]">
            {fetchData[props.active].name}
          </span>
          <span className="text-[10px] leading-[12px] ">
            {fetchData[props.active].artist.name}
          </span>
        </div>
        <div className="flex gap-6">
          <button
            onClick={() => {
              if (props.active > 0) {
                console.log("test");
                props.setActive((prevState) => prevState - 1);
              } else {
                navigate("/");
              }
            }}
          >
            <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#000" fill="none" fillRule="evenodd">
                <path
                  d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
                  strokeWidth="2"
                />
                <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
              </g>
            </svg>
          </button>
          <button
            onClick={() => {
              if (props.active < maxSize) {
                props.setActive((prevState) => prevState + 1);
              }
            }}
          >
            <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#000" fill="none" fillRule="evenodd">
                <path
                  d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                  strokeWidth="2"
                />
                <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderPlayer;
