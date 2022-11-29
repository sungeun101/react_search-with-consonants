import React, { useEffect, useState } from "react";
import { IStore, Lang } from "../App";
import { keyboards, searchTabs, stores } from "../consts";
import texts from "../common.json";

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

interface Props {
  setFilteredStores: React.Dispatch<React.SetStateAction<IStore[]>>;
  selectedLang: Lang;
}
interface IKeyboardType {
  type: string;
  name: string;
  consonants: Array<string | number>;
}
interface ISearchTab {
  type: string;
  name: {
    ko: string;
    en: string;
  };
}

export default function Search({ setFilteredStores, selectedLang }: Props) {
  const [selectedCons, setSelectedCons] = useState("");
  const [selectedKeyboardType, setSelectedKeyboardType] =
    useState<IKeyboardType>(keyboards[0]);
  const [selectedTab, setSelectedTab] = useState<ISearchTab>(searchTabs[0]);

  useEffect(() => {
    searchMatchingStores();
  }, [selectedCons]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCons(e.target.value);
  };

  const handleConClick = (e: any) => {
    let text = e.target.innerText;
    text = selectedCons.concat(e.target.innerText);
    setSelectedCons(text);
  };

  const searchMatchingStores = () => {
    const createFuzzyMatcher = (selectedCons: string) => {
      const reg = selectedCons.split("").map(pattern).join(".*?");
      return new RegExp(reg);
    };
    const regex = createFuzzyMatcher(selectedCons);
    const isConsonantsMatched = (query: string, target: string) => {
      const reg = new RegExp(query.split("").map(pattern).join(".*?"), "i");
      const matches = reg.exec(target);
      return Boolean(matches);
    };
    const matchedResult = stores
      .filter((store) =>
        isConsonantsMatched(selectedCons, store.name[selectedLang])
      )
      .map((store) => {
        let totalDistance = 0;
        const matchingWords = store.name[selectedLang].replace(
          regex,
          (match, ...groups) => {
            const letters = groups.slice(0, selectedCons.length);
            let lastIndex = 0;
            let highlighted = [];
            for (let i = 0, l = letters.length; i < l; i++) {
              const idx = match.indexOf(letters[i], lastIndex);
              highlighted.push(match.substring(lastIndex, idx));
              highlighted.push(letters[i]);
              if (lastIndex > 0) {
                totalDistance += idx - lastIndex;
              }
              lastIndex = idx + 1;
            }
            return highlighted.join("");
          }
        );
        return { matchingWords, totalDistance };
      });
    let consecutedOnly: string[] = [];
    matchedResult
      .filter((item) => item.totalDistance === 0)
      .forEach((item) => consecutedOnly.push(item.matchingWords));
    setFilteredStores(
      stores.filter((store) =>
        consecutedOnly.includes(store.name[selectedLang])
      )
    );
  };

  const deleteOneCon = () => {
    if (selectedCons === "") return;
    setSelectedCons((prev) => prev.slice(0, -1));
  };

  const changeKeyboardLanguage = (e: any) => {
    const {
      target: {
        dataset: { keyboardType },
      },
    } = e;
    const selected = keyboards.find(
      (keyboard) => keyboard.type === keyboardType
    );
    if (selected === selectedKeyboardType) return;
    setSelectedKeyboardType(selected!);
  };

  const changeSearchTab = (e: any) => {
    const {
      target: {
        dataset: { searchTabType },
      },
    } = e;
    console.log(searchTabType);
    const selected = searchTabs.find((tab) => tab.type === searchTabType);
    if (selected === selectedTab) return;
    setSelectedTab(selected!);
  };

  return (
    <section className="p-8 flex gap-10">
      {/* Search Tabs */}
      <nav className="flex flex-col gap-2 justify-between">
        {searchTabs.map((item, _index) => (
          <button
            className={`w-[200px] h-[55px] ${
              selectedTab?.type === item.type
                ? "bg-red text-white"
                : "bg-white text-black"
            }`}
            onClick={changeSearchTab}
            key={item.type}
            data-search-tab-type={item.type}
          >
            {item.name[selectedLang]}
          </button>
        ))}
      </nav>

      {/* Search Bar */}
      <div className="w-full flex flex-col mr-60">
        <div className="mx-auto relative">
          <input
            type="text"
            name="search"
            placeholder={texts.searchPlaceholder[selectedLang]}
            className="bg-black w-[574px] h-[45px] rounded-3xl text-white pl-6"
            onChange={handleInputChange}
            value={selectedCons}
          />
          <button
            className="bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center absolute right-2 bottom-1.5"
            onClick={deleteOneCon}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </div>

        {selectedTab?.type === "initials" ? (
          // Keyboard
          <article className="flex gap-10">
            <ul className="flex flex-col gap-2">
              {keyboards.map((item, _index) => (
                <button
                  className={`w-[95px] h-[35px] rounded-3xl ${
                    selectedKeyboardType.type === item.type
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={changeKeyboardLanguage}
                  key={item.type}
                  data-keyboard-type={item.type}
                >
                  {item.name}
                </button>
              ))}
            </ul>
            <ul className="flex flex-col gap-4 pt-4">
              <div className="flex flex-wrap gap-6">
                {selectedKeyboardType.consonants.map(
                  (con: string | number, _index: number) => (
                    <button
                      className="w-[35px] h-[35px] rounded-full bg-grey"
                      onClick={handleConClick}
                      key={con}
                    >
                      {con}
                    </button>
                  )
                )}
              </div>
            </ul>
          </article>
        ) : selectedTab?.type === "category" ? (
          // Category
          <article></article>
        ) : (
          // Floor
          <article></article>
        )}
      </div>
    </section>
  );
}
