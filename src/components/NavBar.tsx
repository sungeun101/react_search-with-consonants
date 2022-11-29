import React from "react";
import { Lang } from "../App";
import { mainMenu } from "../consts";

interface Props {
  selectedLang: Lang;
  setSelectedLang: React.Dispatch<React.SetStateAction<Lang>>;
}

export default function NavBar({ selectedLang, setSelectedLang }: Props) {
  const changeLanguage = () => {
    setSelectedLang((prev) => {
      if (prev === "ko") return "en";
      return "ko";
    });
  };

  return (
    <nav className="h-[115px] w-full">
      <ul className="flex bg-white">
        <li className="w-[240px] py-1 px-4 border-r-2 border-slate-50">
          <div className="flex items-center">
            <h5 className="text-xl">IPARK</h5>
            <h6 className="text-xs">MALL</h6>
          </div>
          <span className="text-xs">10:30 AM ~ 20:30 PM</span>
          <p className="text-[11px] opacity-60">
            테넌트별 영업시간이 상이하므로 세부내용 매장안내 참조
          </p>
        </li>
        {mainMenu.map((item: any, _index: any) => (
          <li
            className="w-[240px] flex flex-col justify-center items-center text-[20px]"
            key={item.name.en}
          >
            <div>icons</div>
            <span>{item.name[selectedLang]}</span>
          </li>
        ))}
        <li className="w-[240px] border-l-2 border-slate-50 flex flex-col justify-center items-center gap-1.5">
          <div className="border-[1px] border-black">
            <button
              onClick={changeLanguage}
              className={`py-1.5 px-5 ${
                selectedLang === "ko"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              한글
            </button>
            <button
              onClick={changeLanguage}
              className={`py-1.5 px-5 ${
                selectedLang === "en"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              EN
            </button>
          </div>
          <div className="text-sm">LANGUAGE</div>
        </li>
      </ul>
    </nav>
  );
}
