import React, { useEffect, useState } from "react";
import { IStore, Lang } from "../App";
import "./carousel.css";

interface Props {
  filteredStores: IStore[];
  selectedLang: Lang;
}

export default function Carousel({ filteredStores, selectedLang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideLength, setSlideLength] = useState(
    Math.ceil(filteredStores.length / 12)
  ); // total slides that passed to the carousel

  useEffect(() => {
    console.log(filteredStores);
  }, [filteredStores]);

  useEffect(() => {
    setSlideLength(Math.ceil(filteredStores.length / 12));
  }, [filteredStores]);

  const next = () => {
    if (currentIndex < slideLength - 1) {
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
            {[...Array(slideLength)].map((current, currentSlideIndex) => (
              <ul
                key={currentSlideIndex}
                className="grid justify-items-center grid-cols-4 grid-rows-3 gap-9"
              >
                {filteredStores
                  .slice(currentSlideIndex * 12, currentSlideIndex * 12 + 12)
                  .map((store: any, _index: number) => (
                    <li
                      className="w-[335px] h-[125px] bg-white flex"
                      key={store.name[selectedLang]}
                    >
                      <div className="basis-2/3 border-r-2">icon</div>
                      <div className="flex items-center justify-between w-full p-4">
                        <span>{store.name[selectedLang]}</span>
                        <div className="flex flex-col h-full justify-between items-center">
                          <span className="border-b-2 flex justify-center w-4">
                            {store.floor}F
                          </span>
                          <span>icon</span>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* carousel controller */}

      <nav className="flex justify-center items-center h-24 text-black">
        {slideLength > 1 && (
          <>
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
              {[...Array(slideLength)].map((item, index) => (
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
          </>
        )}
      </nav>
    </>
  );
}
