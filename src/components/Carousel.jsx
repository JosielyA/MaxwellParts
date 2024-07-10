import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function Carousel({
  children: slides,
  autoSlide = true,
  autoSlideInterval = 5000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1));
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="z-30 rounded-full text-gray-800 lg:p-24 xl:p-36"
        >
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="z-30 rounded-full text-gray-800">
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`h-2 w-2 rounded-full bg-white transition-all
            ${curr == i ? "p-1" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
