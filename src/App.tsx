import React, { useState } from "react";
import { stores } from "./consts";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Carousel from "./components/Carousel";

const slideLength = Math.ceil(stores.length / 12);

function App() {
  const [filteredStores, setFilteredStores] = useState(stores);

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
              <Carousel>
                {[...Array(slideLength)].map((current, currentSlideIndex) => (
                  <ul
                    key={currentSlideIndex}
                    className="grid justify-items-center grid-cols-4 grid-rows-3 gap-9"
                  >
                    {filteredStores
                      .slice(
                        currentSlideIndex * 12,
                        currentSlideIndex * 12 + 12
                      )
                      .map((store: any, _index: number) => (
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
                ))}
              </Carousel>
            )}
          </main>

          <Search setFilteredStores={setFilteredStores} />
        </div>

        <NavBar />
      </div>
    </section>
  );
}

export default App;
