import React, { useEffect, useState } from "react";
import { keyboards, stores } from "./consts";
import NavBar from "./components/NavBar";
import Search from "./components/Search";

const reESC = /[\\^$.*+?()[\]{}|]/g;
const reChar = /[가-힣]/;
const reJa = /[ㄱ-ㅎ]/;
const offset = 44032;
const orderOffest = [
  ["ㄱ", 44032],
  ["ㄲ", 44620],
  ["ㄴ", 45208],
  ["ㄷ", 45796],
  ["ㄸ", 46384],
  ["ㄹ", 46972],
  ["ㅁ", 47560],
  ["ㅂ", 48148],
  ["ㅃ", 48736],
  ["ㅅ", 49324],
];
const con2syl = Object.fromEntries(orderOffest as readonly any[]);
const pattern = (ch: string) => {
  let r;
  if (reJa.test(ch)) {
    // 한글 자음
    const begin =
      con2syl[ch] || (ch.charCodeAt(0) - 12613) * 588 + con2syl["ㅅ"];
    const end = begin + 587;
    r = `[${ch}\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  } else if (reChar.test(ch)) {
    const chCode = ch.charCodeAt(0) - offset;
    if (chCode % 28 > 0) return ch; // 종성이 있으면 문자 그대로 찾기
    const begin = Math.floor(chCode / 28) * 28 + offset;
    const end = begin + 27;
    r = `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  } else r = ch.replace(reESC, "\\$&");
  return `(${r})`;
};

function App() {
  const [filteredStores, setFilteredStores] = useState(stores);
  const [current, setCurrent] = useState(0);
  const slideLength = Math.ceil(stores.length / 12);
  console.log(slideLength);

  const nextSlide = () => {
    setCurrent(current === slideLength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slideLength - 1 : current - 1);
  };

  return (
    <section className="bg-mainBg w-screen h-screen">
      <div className="w-[1920px] h-[965px]">
        <div className="border-2 px-[220px] pt-[60px] relative">
          <header className="text-[45px] pb-4 font-bold text-black">
            매장안내
          </header>

          <main className="border-b-2 h-[540px]">
            {/* stores */}
            {filteredStores.length === 0 ? (
              <div className="flex justify-center items-center text-3xl text-grey">
                검색 결과가 없습니다.
              </div>
            ) : (
              <ul className="grid grid-cols-4 gap-9">
                {filteredStores.map((store: any, _index: number) => (
                  <li
                    className="w-[335px] h-[125px] bg-white flex"
                    key={store.name}
                  >
                    <div className="basis-2/3 border-r-2">icon</div>
                    <div className="flex items-center justify-between w-full p-4">
                      <span>{store.name}</span>
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
            )}
            {/* slider */}
            <nav className="flex justify-center items-center h-24 text-black">
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
              <div className="flex gap-1 mx-2">
                {[...Array(slideLength)].map((item, index) => (
                  <li key={index} className="w-2 text-grey"></li>
                ))}
              </div>
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
            </nav>
          </main>

          <Search setFilteredStores={setFilteredStores} />
        </div>

        <NavBar />
      </div>
    </section>
  );
}

export default App;
