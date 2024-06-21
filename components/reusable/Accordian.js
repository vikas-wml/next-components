import { IoIosArrowDown } from "react-icons/io";

export default function Accordian({ title, description }) {
  return (
    <div className=" w-full mx-auto">
      <div className="flex justify-center">
        <div className="relative w-full bg-slate-200 shadow-md rounded-lg m-[15px]">
          <input
            type="checkbox"
            id="input"
            className=" absolute peer opacity-0 "
          />
          <label
            for="input"
            className="font-bold tracking-[1px] p-[20px] w-full h-[50px] flex items-center"
          >
            {title}
          </label>
          <div className="absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200">
            <IoIosArrowDown />
          </div>
          <div className=" max-h-0 overflow-hidden peer-checked:max-h-full ">
            <p className="p-[20px] text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
// next-commponents
