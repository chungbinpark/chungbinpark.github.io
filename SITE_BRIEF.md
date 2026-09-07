# 계산화학연구실 @ KNUE 홈페이지 제작 브리프

이 문서는 실제 빌드를 시작할 때(이 세션이든, 다른 AI 툴이든) 그대로 붙여넣어 쓸 수 있는 프롬프트와,
그 전에 박정빈 님이 준비해야 할 것들을 정리한 것입니다.

---

## 1. 빌드용 프롬프트 (복사해서 사용)

```
"계산화학연구실 @ KNUE" 연구실 홈페이지를 만들어줘.

[기술 스택]
- Next.js (App Router) + Tailwind CSS, 정적 사이트로 빌드
- 콘텐츠(공지사항/논문 목록)는 DB 없이 Markdown/MDX 또는 JSON 파일로 관리
- GitHub 저장소로 관리, Vercel(또는 GitHub Pages)로 배포
- 반응형(모바일 대응) 필수

[디자인 톤]
- 차분하고 학술적인 느낌 (참고: 대학 연구실 홈페이지 특유의 정직하고 정보 위주 레이아웃)
- 메인 컬러: [확인 필요 - 예: KNUE 상징색인 남색/초록 계열 추천]
- 과한 애니메이션 없이, 텍스트 가독성과 정보 탐색 편의성 우선

[사이트 구조 / 메뉴]
1. Home — 연구실 한 줄 소개, 최근 공지 3~4개, 최근 논문 하이라이트
2. Research — 연구 분야 소개 (계산화학, 분자동역학 시뮬레이션 등)
3. Publications — 논문 목록 (연도 역순, 저널/연도/링크)
4. People — PI 소개 + 랩 구성원
5. Notice(News) — 공지/소식 게시판 (마크다운 파일 추가 방식, 로그인 불필요)
6. Contact — 이메일, 소속, (있다면) 오피스 위치, 지도

[헤더/푸터]
- 헤더: 연구실 로고(or 텍스트) + 상단 네비게이션
- 푸터: 소속 기관명, 이메일, 저작권 표시

[Publications 초안 - 검증 필요, 아래 참고]
(2번 섹션의 논문 목록 붙여넣기)

이 초안을 바탕으로 페이지 구조와 컴포넌트를 만들고,
실제 텍스트/이미지는 내가 나중에 채울 수 있도록 자리표시자(placeholder)를 명확히 표시해줘.
```

---

## 2. 논문 목록 초안 (Google Scholar "chung bin park" 검색 결과 기준 — **동명이인 혼입 가능, 반드시 본인 프로필로 재검증할 것**)

연도 역순 정리:

1. **Trajectory retracing of the packaging and ejection processes of coaxially spooled DNA** — CB Park, BJ Sung, *Journal of Chemical Theory and Computation*, 2025
2. **AT-specific DNA visualization revisits the directionality of bacteriophage φ DNA ejection** — S Bong, CB Park, SG Cho, J Bae, *Nucleic Acids Research*, 2023
3. **Simulation studies on the dynamic heterogeneity of organic ionic plastic crystals** — H Park, CB Park, BJ Sung, *Bulletin of the Korean Chemical Society*, 2023
4. **The effects of defects on the transport mechanisms of lithium ions in organic ionic plastic crystals** — H Park, CB Park, BJ Sung, *Physical Chemistry Chemical Physics*, 2023
5. **Effects of alkali ion dopants on the transport mechanisms and thermal stabilities of imidazolium-based organic ionic plastic crystals** — CB Park, BJ Sung, *Physical Chemistry Chemical Physics*, 2022
6. **Effects of packaging history on the ejection of a polymer chain from a small confinement** — CB Park, BJ Sung, *Macromolecules*, 2021
7. **The effects of vacancies and their mobility on the dynamic heterogeneity in 1,3-dimethylimidazolium hexafluorophosphate organic ionic plastic crystals** — H Park, CB Park, BJ Sung, *Physical Chemistry Chemical Physics*, 2021
8. **Heterogeneous rotational dynamics of imidazolium-based organic ionic plastic crystals** — CB Park, BJ Sung, *The Journal of Physical Chemistry B*, 2020
9. **The effects of a knot and its conformational relaxation on the ejection of a single polymer chain from confinement** — CB Park, S Kwon, BJ Sung, *The Journal of Chemical Physics*, 2019
10. **Observation of the ring-puckering vibrational mode in thietane cation** — YR Lee, CB Park, J Hwang, BJ Sung, *The Journal of Physical Chemistry A*, 2017

> 이 목록으로 보면 연구 분야는 이온성 플라스틱 결정 내 이온 수송, 고분자/DNA의 구속·방출 동역학 등 **분자동역학 시뮬레이션 기반 계산화학**으로 보입니다. Research 섹션 문구 초안에 참고하되, 본인이 직접 확인/수정해주세요.

---

## 3. 준비해야 할 것 체크리스트

### 필수 (없으면 사이트 못 만듦)
- [ ] **정확한 Google Scholar 프로필 링크** (`?user=...` 형태) — 검색 결과가 아닌 본인 프로필로 논문 목록 검증
- [ ] **소속/직함 정확한 표기** (예: 한국교육대학교 화학교육과 조교수 등)
- [ ] **연락처**: 대표 이메일, (선택) 오피스 위치/전화번호
- [ ] **연구실 영문/국문 명칭 최종본**: "계산화학연구실" / "Computational Chemistry Lab" 표기 통일 여부

### 콘텐츠 (있으면 좋음, 없으면 placeholder로 시작 가능)
- [ ] PI(본인) 프로필 사진, 약력(학력/경력)
- [ ] 랩 구성원 목록 (있다면) — 이름, 역할, 사진
- [ ] 연구 소개 문단 (2~3문단, 비전공자도 이해 가능한 수준 + 전문적 버전 둘 다 있으면 좋음)
- [ ] 연구실 로고 (없으면 텍스트 로고로 시작 가능)
- [ ] 대표 이미지/그래픽 (시뮬레이션 스냅샷, 연구 개요도 등)
- [ ] "Join us" 문구 여부 (대학원생/학부연구생 모집 공지 넣을지)

### 인프라/의사결정
- [ ] GitHub 계정 (lmh5278@gmail.com 로 만들지, 별도 계정 쓸지)
- [ ] 도메인 방향 결정: (a) 무료 서브도메인으로 우선 오픈 / (b) 학교에 서브도메인 신청 / (c) 개인 도메인 구매
- [ ] 도메인 구매 시 예산 (연 1~2만원 수준)
- [ ] 다국어 지원 여부 (한국어만? 영문 페이지도 병행?)

### 원본 사이트에서 참고할지 판단 필요
- [ ] 공지사항을 "누구나 볼 수 있는 정적 목록"으로 할지, "로그인 후 관리자만 작성" 방식으로 할지
  (정적 방식 추천 — 관리 부담 적음, 사실상 본인만 쓸 게시판이면 충분)
- [ ] 조회수/댓글 등 게시판 부가기능 필요 여부 (보통 연구실 사이트엔 불필요)

---

## 4. 다음 단계

체크리스트 중 "필수" 항목만 채워주시면, 이 정보를 바탕으로 Next.js 프로젝트를 이 저장소(`/Users/cbpark/homepage`)에 바로 만들어드릴 수 있습니다. 나머지 "콘텐츠" 항목은 자리표시자(placeholder)로 두고 나중에 채워도 됩니다.
