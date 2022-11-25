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

  return (
    <section className="bg-mainBg w-screen h-screen">
      <div className="w-[1920px] h-[1080px]">
        <main className="border-2 px-[220px] py-[60px]">
          <header className="text-[45px] pb-4 font-bold text-black">
            매장안내
          </header>
          {filteredStores.length === 0 ? (
            <div className="border-b-2 h-[500px] flex justify-center items-center text-3xl text-grey">
              검색 결과가 없습니다.
            </div>
          ) : (
            <div className="border-b-2 h-[500px]">
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
            </div>
          )}

          <Search setFilteredStores={setFilteredStores} />
        </main>

        <NavBar />
      </div>
    </section>
  );
}

export default App;
