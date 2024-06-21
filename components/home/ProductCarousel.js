import { useRef, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Product from "../reusable/Product";

export default function ProductCarousal() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Stanley",
      description: "Quencher Recycled Stainless Steel Flowstate Tumbler, 1.18L",
      rating: 5,
      ratingCount: 43,
      variants: [
        {
          vid: 1,
          img: "/StanleyGreen.webp",
          price: "£44.99",
          reference_price: "£55.6",
          color: "#8fbc8f",
        },
        {
          vid: 2,
          img: "/Stanley.webp",
          price: "£45.99",
          reference_price: "£55.6",
          color: "#f5f5dc",
        },
        {
          vid: 3,
          img: "/StanleyBlack.webp",
          price: "£48.99",
          reference_price: "£55.6",
          color: "#000",
        },
        {
          vid: 4,
          img: "/StanleyCream.webp",
          price: "£47.99",
          reference_price: "£55.6",
          color: "#ffebcd",
        },
      ],
    },

    {
      id: 2,
      title: "John Lewis ANYDAY",
      description: "Handheld & Foldable Desk Fan, 4 inch",
      rating: 2,
      ratingCount: 1183,
      variants: [
        {
          vid: 1,
          img: "/AnydayWhite.webp",
          price: "£12.00",
          reference_price: "£25.6",
          color: "#f0ffff",
        },
        {
          vid: 2,
          img: "/AnydayGreen.webp",
          price: "£13.00",
          reference_price: "£25.6",
          color: "#a9a9a9",
        },
        {
          vid: 3,
          img: "/AnydayBlue.webp",
          price: "£14.00",
          reference_price: "£25.6",
          color: "#6495ed",
        },
        {
          vid: 4,
          img: "/Anyday.webp",
          price: "£15.00",
          reference_price: "£25.6",
          color: "#f0e68c",
        },
      ],
    },
    {
      id: 3,
      img: "/Janerio.webp",
      title: "Sol de Janerio",
      description: "Perfume Mist Discovery Fragrance Gift Set",
      rating: null,
      ratingCount: null,
      variants: [
        {
          vid: 1,
          img: "/Janerio.webp",
          price: "£40.00",
          reference_price: "£50.00",
          color: "",
        },
      ],
    },
    {
      id: 4,
      title: "Longchamp",
      description: "Le Pliage Original Large Shoulder Bag",
      rating: 5,
      ratingCount: 549,
      variants: [
        {
          vid: 1,
          img: "/LongBlack.webp",
          price: "£115.00",
          reference_price: "£135.6",
          color: "#000",
        },
        {
          vid: 2,
          img: "/LongBlue.webp",
          price: "£115.00",
          reference_price: "£135.6",
          color: "#191970",
        },
        {
          vid: 3,
          img: "/LongCream.webp",
          price: "£116.00",
          reference_price: "£135.6",
          color: "#faebd7",
        },
        {
          vid: 4,
          img: "/LongGrey.webp",
          price: "£117.00",
          reference_price: "£135.6",
          color: "#a9a9a9",
        },
        {
          vid: 4,
          img: "/LongGreen.webp",
          price: "£118.00",
          reference_price: "£135.6",
          color: "#5f9ea0",
        },
        {
          vid: 4,
          img: "/Long.webp",
          price: "£119.00",
          reference_price: "£135.6",
          color: "#ff8c00",
        },
      ],
    },
    {
      id: 5,
      title: "John Lewis",
      description: "Aelia Bloom Maxi Dress",

      rating: null,
      ratingCount: null,
      variants: [
        {
          vid: 1,
          img: "/John.webp",
          price: "£65.00",
          reference_price: "£75.6",
          color: "",
        },
      ],
    },
    {
      id: 1,
      title: "Stanley",
      description: "Quencher Recycled Stainless Steel Flowstate Tumbler, 1.18L",
      rating: 5,
      ratingCount: 43,
      variants: [
        {
          vid: 1,
          img: "/StanleyGreen.webp",
          price: "£44.99",
          reference_price: "£55.6",
          color: "#8fbc8f",
        },
        {
          vid: 2,
          img: "/Stanley.webp",
          price: "£45.99",
          reference_price: "£55.6",
          color: "#f5f5dc",
        },
        {
          vid: 3,
          img: "/StanleyBlack.webp",
          price: "£48.99",
          reference_price: "£55.6",
          color: "#000",
        },
        {
          vid: 4,
          img: "/StanleyCream.webp",
          price: "£47.99",
          reference_price: "£55.6",
          color: "#ffebcd",
        },
      ],
    },

    {
      id: 2,
      title: "John Lewis ANYDAY",
      description: "Handheld & Foldable Desk Fan, 4 inch",
      rating: 2,
      ratingCount: 1183,
      variants: [
        {
          vid: 1,
          img: "/AnydayWhite.webp",
          price: "£12.00",
          reference_price: "£25.6",
          color: "#f0ffff",
        },
        {
          vid: 2,
          img: "/AnydayGreen.webp",
          price: "£13.00",
          reference_price: "£25.6",
          color: "#a9a9a9",
        },
        {
          vid: 3,
          img: "/AnydayBlue.webp",
          price: "£14.00",
          reference_price: "£25.6",
          color: "#6495ed",
        },
        {
          vid: 4,
          img: "/Anyday.webp",
          price: "£15.00",
          reference_price: "£25.6",
          color: "#f0e68c",
        },
      ],
    },
    {
      id: 3,
      img: "/Janerio.webp",
      title: "Sol de Janerio",
      description: "Perfume Mist Discovery Fragrance Gift Set",
      rating: null,
      ratingCount: null,
      variants: [
        {
          vid: 1,
          img: "/Janerio.webp",
          price: "£40.00",
          reference_price: "£50.00",
          color: "",
        },
      ],
    },
    {
      id: 4,
      title: "Longchamp",
      description: "Le Pliage Original Large Shoulder Bag",
      rating: 5,
      ratingCount: 549,
      variants: [
        {
          vid: 1,
          img: "/LongBlack.webp",
          price: "£115.00",
          reference_price: "£135.6",
          color: "#000",
        },
        {
          vid: 2,
          img: "/LongBlue.webp",
          price: "£115.00",
          reference_price: "£135.6",
          color: "#191970",
        },
        {
          vid: 3,
          img: "/LongCream.webp",
          price: "£116.00",
          reference_price: "£135.6",
          color: "#faebd7",
        },
        {
          vid: 4,
          img: "/LongGrey.webp",
          price: "£117.00",
          reference_price: "£135.6",
          color: "#a9a9a9",
        },
        {
          vid: 4,
          img: "/LongGreen.webp",
          price: "£118.00",
          reference_price: "£135.6",
          color: "#5f9ea0",
        },
        {
          vid: 4,
          img: "/Long.webp",
          price: "£119.00",
          reference_price: "£135.6",
          color: "#ff8c00",
        },
      ],
    },
    {
      id: 5,
      title: "John Lewis",
      description: "Aelia Bloom Maxi Dress",

      rating: null,
      ratingCount: null,
      variants: [
        {
          vid: 1,
          img: "/John.webp",
          price: "£65.00",
          reference_price: "£75.6",
          color: "",
        },
      ],
    },
  ]);

  return (
    <div className=" w-full mx-auto ">
      <div className="flex flex-col items-center justify-center gap-10  m-[10%] overflow-hidden relative min-w-[100px]">
        <strong className=" text-2xl">Popular products</strong>
        <div className=" w-full z-0">
          <Swiper
            ref={swiperRef}
            // navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={5}
            slidesPerGroup={5}
            spaceBetween={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {products.map((product) => (
              <>
                <SwiperSlide>
                  <Product
                    variants={product.variants}
                    rating={product.rating}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    ratingCount={product.ratingCount}
                  />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
          <button
            onClick={handlePrev}
            className="absolute top-0 left-0 translate-x-0 translate-y-64 z-20 border px-1 py-1 rounded-full bg-slate-400 hover:bg-slate-300 "
          >
            <GoChevronLeft size="3rem" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-0 right-0 translate-x-0 translate-y-64 z-20 border px-1 py-1 rounded-full bg-slate-400 hover:bg-slate-300   "
          >
            <GoChevronRight size="3rem" />
          </button>
        </div>
      </div>
    </div>
  );
}
