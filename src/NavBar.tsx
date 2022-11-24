import React from "react";

const menuTitle = [
  "층별안내",
  "매장안내",
  "식당안내",
  "전층안내",
  "이벤트",
  "시설안내",
];

export default function NavBar() {
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
        {[...Array(6)].map((item: any, index: any) => (
          <li
            className="w-[240px] flex flex-col justify-center items-center"
            key={index}
          >
            <div>icon</div>
            <span>{menuTitle[index]}</span>
          </li>
        ))}
        <li className="w-[240px] py-1 px-4 border-l-2 border-slate-50">
          LANGUAGE
        </li>
      </ul>
    </nav>
  );
}
