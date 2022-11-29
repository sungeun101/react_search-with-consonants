export const stores = [
  {
    name: {
      ko: "ABC 그랜드스테이지",
      en: "ABC GRANDSTAGE",
    },
    floor: -1,
  },
  {
    name: {
      ko: "CGV",
      en: "CGV",
    },
    floor: -2,
  },
  {
    name: {
      ko: "CK진",
      en: "CK JEANS",
    },
    floor: -1,
  },
  {
    name: {
      ko: "가민",
      en: "GARMIN",
    },
    floor: -3,
  },
  {
    name: {
      ko: "덴비",
      en: "DENBY",
    },
    floor: -1,
  },
  {
    name: {
      ko: "동국 제약",
      en: "DONGKOOK",
    },
    floor: -2,
  },
  {
    name: {
      ko: "드로우핏",
      en: "DRAW FIT",
    },
    floor: -2,
  },
  {
    name: {
      ko: "마에스트로",
      en: "MAESTRO",
    },
    floor: -1,
  },
  {
    name: {
      ko: "머렐",
      en: "MERRELL",
    },
    floor: -2,
  },
  {
    name: {
      ko: "LCDC",
      en: "LCDC",
    },
    floor: 1,
  },
  {
    name: {
      ko: "꼬메띠",
      en: "COMETTI",
    },
    floor: 2,
  },
  {
    name: {
      ko: "마르니",
      en: "MARNI",
    },
    floor: 2,
  },
  {
    name: {
      ko: "바오바오",
      en: "BAOBAO",
    },
    floor: 2,
  },
  {
    name: {
      ko: "태그호이어",
      en: "TAG Heuer",
    },
    floor: 2,
  },
  {
    name: {
      ko: "토리버치",
      en: "TORY BURCH",
    },
    floor: 2,
  },
  {
    name: {
      ko: "돈까스 1985",
      en: "Donkatsu 1985",
    },
    floor: -2,
  },
  {
    name: {
      ko: "캡슐 1.618",
      en: "Capsule 1.618",
    },
    floor: 4,
  },
  {
    name: {
      ko: "구찌",
      en: "GUCCI",
    },
    floor: 1,
  },
  {
    name: {
      ko: "가민",
      en: "GARMIN",
    },
    floor: -3,
  },
  {
    name: {
      ko: "오즈세컨",
      en: "O'2nd",
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
