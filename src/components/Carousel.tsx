import React, { useEffect, useState } from "react";
import "./carousel.css";

export default function Carousel({ children }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length); // total item(slide) that passed to the carousel

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <div>
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
      </div>

      {/* carousel controller */}
      {length > 1 && (
        <nav className="flex justify-center items-center h-24 text-black">
          <button onClick={prev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <ul className="flex gap-2 mx-3">
            {length &&
              [...Array(length)].map((item, index) => (
                <li
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${
                    index === currentIndex ? "bg-black" : "bg-grey"
                  }`}
                ></li>
              ))}
          </ul>

          <button onClick={next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </nav>
      )}
    </>
  );
}
