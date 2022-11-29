export const stores = [
  {
    name: {
      ko: "ABC 그랜드스테이지",
      en: "ABC GRANDSTAGE",
    },
    category: {
      ko: "스포츠",
      en: "Leisure sports",
    },
    floor: -1,
  },
  {
    name: {
      ko: "CGV",
      en: "CGV",
    },
    category: {
      ko: "리빙",
      en: "Living",
    },
    floor: -2,
  },
  {
    name: {
      ko: "CK진",
      en: "CK JEANS",
    },
    category: {
      ko: "패션",
      en: "Fashion",
    },
    floor: -1,
  },
  {
    name: {
      ko: "가민",
      en: "GARMIN",
    },
    category: {
      ko: "주얼리",
      en: "Jewerly",
    },
    floor: -3,
  },
  {
    name: {
      ko: "덴비",
      en: "DENBY",
    },
    category: {
      ko: "키즈",
      en: "Kids",
    },
    floor: -1,
  },
  {
    name: {
      ko: "동국 제약",
      en: "DONGKOOK",
    },
    category: {
      ko: "리빙",
      en: "Living",
    },
    floor: -2,
  },
  {
    name: {
      ko: "드로우핏",
      en: "DRAW FIT",
    },
    category: {
      ko: "",
      en: "Leisure sports",
    },
    floor: -2,
  },
  {
    name: {
      ko: "마에스트로",
      en: "MAESTRO",
    },
    category: {
      ko: "주얼리",
      en: "Jewerly",
    },
    floor: -1,
  },
  {
    name: {
      ko: "머렐",
      en: "MERRELL",
    },
    category: {
      ko: "패션",
      en: "Fashion",
    },
    floor: -2,
  },
  {
    name: {
      ko: "LCDC",
      en: "LCDC",
    },
    category: {
      ko: "스포츠",
      en: "Leisure sports",
    },
    floor: 1,
  },
  {
    name: {
      ko: "꼬메띠",
      en: "COMETTI",
    },
    category: {
      ko: "럭셔리",
      en: "Luxury",
    },
    floor: 2,
  },
  {
    name: {
      ko: "마르니",
      en: "MARNI",
    },
    category: {
      ko: "패션",
      en: "Fashion",
    },
    floor: 2,
  },
  {
    name: {
      ko: "바오바오",
      en: "BAOBAO",
    },
    category: {
      ko: "키즈",
      en: "Kids",
    },
    floor: 2,
  },
  {
    name: {
      ko: "태그호이어",
      en: "TAG Heuer",
    },
    category: {
      ko: "럭셔리",
      en: "Luxury",
    },
    floor: 2,
  },
  {
    name: {
      ko: "토리버치",
      en: "TORY BURCH",
    },
    category: {
      ko: "럭셔리",
      en: "Luxury",
    },
    floor: 2,
  },
  {
    name: {
      ko: "돈까스 1985",
      en: "Donkatsu 1985",
    },
    category: {
      ko: "리빙",
      en: "Living",
    },
    floor: -2,
  },
  {
    name: {
      ko: "캡슐 1.618",
      en: "Capsule 1.618",
    },
    category: {
      ko: "뷰티",
      en: "Beauty",
    },
    floor: 4,
  },
  {
    name: {
      ko: "구찌",
      en: "GUCCI",
    },
    category: {
      ko: "럭셔리",
      en: "Luxury",
    },
    floor: 1,
  },

  {
    name: {
      ko: "오즈세컨",
      en: "O'2nd",
    },
    category: {
      ko: "뷰티",
      en: "Beauty",
    },
    floor: -2,
  },
];

let arrWithAlphbet = [];
for (let i = 65; i < 91; i++) {
  arrWithAlphbet.push(String.fromCharCode(i));
}

let arrWithNums = [];
for (let num = 0; num < 10; num++) {
  arrWithNums.push(num);
}

export const searchTabs = [
  {
    type: "initials",
    name: {
      ko: "초성/알파벳 검색",
      en: "Initials/Alphabet",
    },
  },
  {
    type: "category",
    name: {
      ko: "카테고리 검색",
      en: "Category",
    },
  },
  {
    type: "floor",
    name: {
      ko: "층별 검색",
      en: "Floor",
    },
  },
];

export const keyboards = [
  {
    type: "ko",
    name: "ㄱ ㄴ ㄷ",
    consonants: [
      "ㄱ",
      "ㄲ",
      "ㄴ",
      "ㄷ",
      "ㄸ",
      "ㄹ",
      "ㅁ",
      "ㅂ",
      "ㅃ",
      "ㅅ",
      "ㅆ",
      "ㅇ",
      "ㅈ",
      "ㅉ",
      "ㅊ",
      "ㅋ",
      "ㅌ",
      "ㅍ",
      "ㅎ",
    ],
  },
  {
    type: "en",
    name: "A B C",
    consonants: arrWithAlphbet,
  },
  {
    type: "num",
    name: "1 2 3",
    consonants: arrWithNums,
  },
];

export const category = [
  {
    name: {
      ko: "전체보기",
      en: "ALL",
    },
  },
  {
    name: {
      ko: "럭셔리",
      en: "Luxury",
    },
  },
  {
    name: {
      ko: "뷰티",
      en: "Beauty",
    },
  },
  {
    name: {
      ko: "패션",
      en: "Fashion",
    },
  },
  {
    name: {
      ko: "주얼리",
      en: "Jewerly",
    },
  },
  {
    name: {
      ko: "키즈",
      en: "Kids",
    },
  },
  {
    name: {
      ko: "리빙",
      en: "Living",
    },
  },
  {
    name: {
      ko: "스포츠",
      en: "Leisure sports",
    },
  },
];

export const floors = [-3, -2, -1, 1, 2, 3, 4];

export const mainMenu = [
  {
    name: {
      ko: "층별안내",
      en: "Floor",
    },
  },
  {
    name: {
      ko: "매장안내",
      en: "Brand Search",
    },
  },
  {
    name: {
      ko: "식당안내",
      en: "Food",
    },
  },
  {
    name: {
      ko: "전층안내",
      en: "All",
    },
  },
  {
    name: {
      ko: "이벤트",
      en: "Events",
    },
  },
  {
    name: {
      ko: "시설안내",
      en: "Facilities",
    },
  },
];
