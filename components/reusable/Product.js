import { useState } from "react";
import { MdStar } from "react-icons/md";

export default function Product(props) {
  const { id, title, description, rating, ratingCount, variants } = props;
  const [activeVariant, setActiveVariant] = useState(variants[0]);
  const filteredVariant = variants.filter((obj) => {
    return Object.values(obj).every((value) => value !== "");
  });

  return (
    <>
      <div
        key={id}
        className=" lg:w-[230px] mx-auto flex flex-col items-start justify-center group relative "
      >
        <img src={activeVariant.img} alt="" />

        <a href="https://www.johnlewis.com/">
          <button className="px-3 py-2 border rounded-sm text-center border-black bg-white absolute top-0 left-0 translate-x-4 translate-y-72 duration-200 delay-200 w-[200px] transition-all  invisible ease-in-out group-hover:visible group-hover:translate-y-64 hover:border-green-500 font-semibold">
            Quick view
          </button>
        </a>

        <button className="text-white bg-black px-3 py-2 mx-4 rounded-sm w-[200px] hover:bg-green-500 hover:text-black font-semibold">
          Add to basket
        </button>

        <h1 className="mx-4 text-left pt-4"> {title}</h1>

        <p className="text-slate-500 px-4 py-3 border-b w-[218px]">
          {description}
        </p>

        <span className=" font-bold border-b px-4 py-3 w-[218px] text-green-500">
          {activeVariant.price}
        </span>

        <span className=" font-bold border-b px-4 py-3 w-[218px] text-red-500">
          {activeVariant.reference_price}
        </span>
        {rating && (
          <div className="flex items-center justify-start px-4 py-3 border-b w-[218px]">
            {Array.from({ length: rating }, (i) => (
              <MdStar />
            ))}

            <span>{ratingCount}</span>
          </div>
        )}

        <div className="flex items-center justify-start p-4 gap-2">
          {filteredVariant.map((variant) => (
            <button
              onClick={() => setActiveVariant(variant)}
              key={variant.vid}
              className={`px-2 py-2 border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1 
         
           `}
              style={{ backgroundColor: variant.color }}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}
