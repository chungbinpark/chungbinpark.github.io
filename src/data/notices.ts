export type Notice = {
  id: number;
  title: string;
  date: string; // YYYY-MM-DD
  body: string;
};

// 공지 추가: 아래 배열 맨 위에 새 항목을 추가하고 id를 하나씩 올려주세요.
export const notices: Notice[] = [
  {
    id: 1,
    title: "계산화학연구실 홈페이지를 오픈했습니다.",
    date: "2026-09-07",
    body: "계산화학연구실 홈페이지가 개설되었습니다. 앞으로 연구 소식과 논문 업데이트를 이곳에 게시할 예정입니다.",
  },
];
