import React, { useState } from "react";
import { stores } from "./consts";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Carousel from "./components/Carousel";

export type Lang = "ko" | "en";

export interface IStore {
  name: {
    ko: string;
    en: string;
  };
  floor: number;
}

function App() {
  const [filteredStores, setFilteredStores] = useState<IStore[]>(stores);
  const [selectedLang, setSelectedLang] = useState<Lang>("ko");

  return (
    <section className="bg-mainBg w-screen h-screen">
      <div className="w-[1920px] h-[965px]">
        <div className="border-2 px-[220px] pt-[60px] relative">
          <header className="text-[45px] pb-4 font-bold text-black">
            매장안내
          </header>

          <main className="border-b-2 h-[540px] flex justify-center items-center flex-col">
            {/* stores */}
            {filteredStores.length === 0 ? (
              <div className="text-3xl text-grey">검색 결과가 없습니다.</div>
            ) : (
              <Carousel
                filteredStores={filteredStores}
                selectedLang={selectedLang}
              />
            )}
          </main>

          <Search
            setFilteredStores={setFilteredStores}
            selectedLang={selectedLang}
          />
        </div>

        <NavBar selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
      </div>
    </section>
  );
}

export default App;
