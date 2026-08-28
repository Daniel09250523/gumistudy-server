# server/를 인터넷에 공개로 배포하기 (Render, 무료) — 상세 가이드

로컬(`npm start`)로 켠 서버는 내 컴퓨터에서만 접속됩니다. 반 친구들이 다 같이
쓰게 하려면 이 서버를 인터넷 어딘가에 올려야 하는데, Render의 무료 웹 서비스가
가장 간단합니다. 전체 과정은 "GitHub에 코드 올리기 → Render에 연결하기 →
config.js에 주소 넣기" 3단계이고, 처음 하는 거라도 15~20분이면 충분합니다.

## 0단계. 준비물

- GitHub 계정 (없으면 https://github.com/signup 에서 이메일로 무료 가입, 1분)
- Render 계정 (GitHub 계정으로 바로 로그인 가능, 별도 가입 안 해도 됨)
- Git 프로그램은 있으면 편하지만 없어도 됩니다 (아래 1-B 방법으로 대체 가능)

## 1단계. GitHub에 `server/` 폴더 올리기

`server/` 폴더 하나가 저장소의 "루트"가 되도록 올리는 게 제일 간단합니다
(그래야 Render가 `package.json`을 저장소 최상위에서 바로 찾습니다). 방법은 둘 중
편한 걸로 고르세요.

### 1-A. Git 명령어로 올리기 (컴퓨터에 Git이 설치돼 있을 때)

1. github.com 오른쪽 위의 **+** 아이콘 → **New repository** 클릭
2. Repository name에 `gumistudy-server` 입력, **Public** 선택, README/​.gitignore/​license 체크박스는 전부 **비워둔** 채로 **Create repository** 클릭
   (체크하면 우리가 이미 만든 파일과 충돌 없이도 되지만, 빈 저장소로 만드는 게 제일 깔끔합니다)
3. 만들어진 저장소 페이지에 나오는 `https://github.com/<내계정>/gumistudy-server.git` 주소를 복사
4. PowerShell/명령 프롬프트에서:
   ```
   cd D:\Documents\Desktop\all\prototype\main\server
   git init
   git add .
   git commit -m "gumistudy 채점 서버"
   git branch -M main
   git remote add origin https://github.com/<내계정>/gumistudy-server.git
   git push -u origin main
   ```
   `git push` 할 때 GitHub 로그인 창이 뜨면 로그인하면 됩니다. `node_modules`
   폴더는 `.gitignore`에 이미 제외되어 있어서 같이 올라가지 않습니다.
5. 새로고침하면 github.com 저장소 페이지에 `package.json`, `server.js`,
   `render.yaml` 등이 보여야 합니다.

### 1-B. Git 없이 웹에서 직접 업로드 (Git 설치가 번거로우면)

1. 1-A의 1~2번과 동일하게 저장소 생성
2. 빈 저장소 페이지에서 **"uploading an existing file"** 링크 클릭
   (또는 **Add file → Upload files**)
3. 탐색기에서 `D:\Documents\Desktop\all\prototype\main\server` 폴더 안의
   파일/폴더들을 전부 선택해서(단, **node_modules는 없을 테니 신경 안 써도 됨**)
   업로드 영역에 드래그
4. 아래 **Commit changes** 클릭

둘 중 어느 방법이든 결과는 같습니다 — GitHub에 `server/`의 내용이 저장소로 올라가 있으면 됩니다.

## 2단계. Render에서 배포

1. https://render.com 접속 → **Get Started** → GitHub 계정으로 로그인/가입
2. 대시보드 왼쪽 위 **New +** 버튼 → **Blueprint** 선택
3. 아직 GitHub 저장소 목록에 접근 권한이 없다면, Render가 GitHub 앱 설치/권한
   승인 화면을 띄웁니다 — "All repositories"(전체 허용) 또는 "Only select
   repositories"(방금 만든 `gumistudy-server`만 선택) 중 편한 걸로 승인
4. 저장소 목록에서 `gumistudy-server` 옆의 **Connect** 클릭
5. Blueprint 이름/브랜치(main) 확인하는 화면이 뜨는데, 기본값 그대로 두면 됩니다.
   이때 저장소 안의 `render.yaml`을 자동으로 읽어서 서비스 이름
   (`gumistudy-server`)/런타임(Node)/빌드 명령(`npm install`)/시작 명령
   (`npm start`)이 미리 채워진 목록을 보여줍니다
6. `AI_API_KEY` 값을 입력하는 칸이 보입니다 — AI 문제 생성을 쓸 거면 발급받은
   키를 붙여넣고, 안 쓸 거면 빈 칸으로 두고 넘어가도 됩니다(경쟁 모드 채점
   검증 기능은 이 키와 무관하게 동작합니다)
7. **Deploy Blueprint** 클릭 → 빌드가 시작됩니다

## 3단계. 배포 확인하기

1. 서비스 상세 페이지의 **Events**(또는 **Logs**) 탭에서 빌드/배포 진행 상황이
   실시간으로 보입니다. `npm install` 로그가 지나가고, 마지막에
   ```
   gumistudy-server listening on http://localhost:...
   ```
   비슷한 줄이 보이면 성공입니다. (Render가 자체 포트 번호를 자동으로 넣어주는데,
   `server.js`가 `process.env.PORT`를 우선 사용하도록 이미 만들어져 있어서
   따로 코드를 손댈 필요는 없습니다.)
2. 서비스 페이지 상단에 `https://gumistudy-server-xxxx.onrender.com` 형태의
   공개 주소가 보입니다. 이 주소 뒤에 `/health`를 붙여서
   (`https://gumistudy-server-xxxx.onrender.com/health`) 브라우저로 직접
   열어보면 `{"ok":true,"service":"gumistudy-server"}`가 보여야 정상입니다.
   (처음 배포 직후엔 몇 초~1분 정도 걸릴 수 있습니다.)

## 4단계. 앱(config.js)에 연결

`config.js`에서 `localhost:4000` 대신 방금 받은 주소를 넣으면 끝입니다.

```js
const AI_PROXY_URL = "https://gumistudy-server-xxxx.onrender.com/api/ai/generate";
const SCORE_SERVER_URL = "https://gumistudy-server-xxxx.onrender.com/api/competitions";
```

저장하고 앱을 새로고침한 뒤, 관리자 모드(화면에서 `seong` 입력)에 들어가면
"경쟁 모드 채점: 서버 재채점 사용 중"으로 바뀌어 있어야 합니다. 실제로 경쟁
모드를 한 번 완료해보고 결과가 정상적으로 나오는지 확인해보세요.

## 자주 걸리는 문제

- **빌드는 성공했는데 /health가 안 열림** → 아직 첫 요청이라 서버가 깨어나는
  중일 수 있습니다(무료 요금제, 최대 1분). 잠시 후 다시 시도.
- **Deploy 화면에서 render.yaml을 못 찾는다는 오류** → GitHub에 올릴 때
  `server` 폴더 "안의 내용물"이 저장소 최상위에 오도록 올렸는지 확인하세요.
  (`gumistudy-server/server/render.yaml`처럼 한 겹 더 들어가 있으면 안 됩니다 —
  `gumistudy-server/render.yaml`이어야 합니다.)
- **AI 문제 생성이 안 됨** → `AI_API_KEY`를 안 넣었거나 잘못된 키일 수 있습니다.
  키 없이도 앱은 정상 동작(로컬 문제 은행 사용)하니 필수는 아닙니다.
- **코드를 수정했는데 반영이 안 됨** → GitHub 저장소에 다시 push(또는 웹에서
  파일 재업로드)하면 Render가 자동으로 다시 빌드/배포합니다(Auto-Deploy 기본
  켜짐). 서비스 페이지의 **Manual Deploy** 버튼으로 강제로 다시 배포할 수도
  있습니다.

## 알아둘 점

- **무료 요금제는 15분간 요청이 없으면 서버가 잠들고, 다음 요청이 오면 다시 깨는 데
  약 1분이 걸립니다.** 즉 한동안 아무도 안 쓰다가 누군가 경쟁 모드를 시작하면,
  첫 채점 요청이 최대 1분 정도 느려질 수 있습니다(이후 요청부터는 빠릅니다).
  이게 거슬리면 유료 플랜(잠들지 않음)으로 올리거나, 그냥 서버 없이(로컬 채점)
  쓰는 것도 방법입니다 — 앱은 서버가 없어도 정상 동작하도록 만들어져 있습니다.
- `data/competitions.json`(서버가 재채점한 기록 저장용)은 무료 인스턴스가
  재시작될 때 초기화될 수 있습니다. 진짜 영구 저장이 필요하면 실제 DB로
  바꾸는 게 좋습니다 — 지금은 "서버 채점 검증이 실제로 동작한다"는 것을
  보여주는 최소 구현입니다.
