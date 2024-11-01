import React, { useState, useEffect } from "react";
import "../../public/1681549012528.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/1681549012528.jpg",
    text: "Welfare Society CEB (WPS II)",
  },
  {
    image: "/Poson.JPG",
    text: "Poson poya day 2024",
    buttonText: "READ FULL STORY",
    buttonLink: "/full-story-1",
  },
  {
    image: "/annual_meeting.JPG",
    text: "Annual Meeting",
    buttonText: "READ FULL STORY",
    buttonLink: "/full-story-2",
  },
  {
    image: "/blood.JPG",
    text: "Blood Donation",
    buttonText: "READ FULL STORY",
    buttonLink: "/full-story-2",
  },
];

const HorizontalCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full relative">
            <div className="absolute h-screen inset-0 bg-black bg-opacity-50">
              <img
                src={slide.image}
                alt={slide.text}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-red-900 to-transparent opacity-100"></div>
              <div
                key={current}
                className="absolute inset-0 flex flex-col justify-center items-center text-center text-white font-extrabold"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                  {slide.text}
                </h1>
                {slide.buttonText && (
                  <a
                    href={slide.buttonLink}
                    className="bg-white text-black py-2 px-4 rounded-lg shadow-lg animate-fade-in-delay"
                  >
                    {slide.buttonText}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-25 hover:bg-opacity-35 text-white rounded-full"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-25 hover:bg-opacity-35 text-white rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default HorizontalCarousel;
