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
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full text-gray-800 z-30 xl:p-40"
        >
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="rounded-full text-gray-800 z-30">
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`transition-all w-2 h-2 bg-white rounded-full
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
