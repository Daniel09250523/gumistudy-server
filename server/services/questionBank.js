/* =========================================================
   questionBank.js — 서버 측 정답 키 미러 (spec section 33: 클라이언트가
   보낸 점수를 그대로 믿지 않고, 서버가 raw 답안으로 재채점한다).
   경쟁 모드는 항상 "상" 난이도에서만 출제되므로 이 파일도 "상" 문제만
   담고 있다 — script.js의 MATH_QUESTION_BANK와 동일한 문항/정답을
   생성 스크립트로 추출한 것이며, 두 파일이 갈라지지 않도록 향후
   문제를 수정할 때는 반드시 양쪽을 함께 갱신해야 한다.
   ========================================================= */

const COMPETITIVE_QUESTION_BANK = {
  "math1": [
    {
      "id": "math1-sang-1",
      "type": "short",
      "unit": "다항식",
      "question": "다항식 \\(2x^3-3x^2+x-3\\)을 \\(x^2-x-1\\)로 나누었을 때의 몫을 \\(Q(x)\\), 나머지를 \\(R(x)\\)라 할 때, \\(Q(2)+R(1)\\)의 값을 구하시오.",
      "answer": "1",
      "explanation": "직접 나눗셈으로 계산하면 Q(x)=2x-1, R(x)=2x-4. Q(2)=3, R(1)=-2 이므로 합은 1입니다.",
      "track": "math1",
      "difficulty": "상"
    },
    {
      "id": "math1-sang-2",
      "type": "short",
      "unit": "방정식과 부등식",
      "question": "이차방정식 \\(x^2-kx+(k+3)=0\\)이 중근을 가지도록 하는 모든 실수 \\(k\\)의 값의 곱을 구하시오.",
      "answer": "-12",
      "explanation": "판별식 k²-4(k+3)=k²-4k-12=(k-6)(k+2)=0 에서 k=6 또는 k=-2. 곱은 -12입니다.",
      "track": "math1",
      "difficulty": "상"
    },
    {
      "id": "math1-sang-3",
      "type": "mc",
      "unit": "함수와 그래프",
      "question": "함수 \\(f(x)=x^2-6x+11\\)의 최솟값은?",
      "choices": [
        "0",
        "1",
        "2",
        "3"
      ],
      "answer": 2,
      "explanation": "f(x)=(x-3)²+2 이므로 최솟값은 2입니다.",
      "track": "math1",
      "difficulty": "상"
    },
    {
      "id": "math1-sang-4",
      "type": "short",
      "unit": "경우의 수",
      "question": "서로 다른 7개의 문자 A,B,C,D,E,F,G 중 4개를 택해 일렬로 나열하는 경우의 수를 구하시오.",
      "answer": "840",
      "explanation": "7P4 = 7×6×5×4 = 840 입니다.",
      "track": "math1",
      "difficulty": "상"
    },
    {
      "id": "math1-sang-5",
      "type": "short",
      "unit": "방정식과 부등식",
      "question": "이차부등식 \\(x^2-2x-8\\le 0\\)을 만족시키는 정수 \\(x\\)의 개수를 구하시오.",
      "answer": "7",
      "explanation": "(x-4)(x+2)≤0 에서 -2≤x≤4. 정수는 -2,-1,0,1,2,3,4로 7개입니다.",
      "track": "math1",
      "difficulty": "상"
    },
    {
      "id": "math1-sang-6",
      "type": "mc",
      "unit": "다항식",
      "question": "다항식 \\(x^3-3x+2\\)를 인수분해한 것으로 옳은 것은?",
      "choices": [
        "(x-1)²(x+2)",
        "(x-1)(x+2)²",
        "(x+1)²(x-2)",
        "(x-1)(x-2)(x+1)"
      ],
      "answer": 0,
      "explanation": "x=1이 근이므로 (x-1)로 나누면 x²+x-2=(x-1)(x+2). 따라서 (x-1)²(x+2)입니다.",
      "track": "math1",
      "difficulty": "상"
    }
  ],
  "math2": [
    {
      "id": "math2-sang-1",
      "type": "short",
      "unit": "도형의 방정식",
      "question": "중심이 (2,-1)이고 점 (5,3)을 지나는 원의 방정식이 \\(x^2+y^2+Ax+By+C=0\\) 꼴일 때, 이 원의 반지름의 제곱(\\(r^2\\))을 구하시오.",
      "answer": "25",
      "explanation": "r² = (5-2)²+(3-(-1))² = 9+16 = 25 입니다.",
      "track": "math2",
      "difficulty": "상"
    },
    {
      "id": "math2-sang-2",
      "type": "mc",
      "unit": "집합과 명제",
      "question": "두 집합 \\(A=\\{x\\mid x^2-3x+2=0\\}\\), \\(B=\\{x\\mid x^2-1=0\\}\\)에 대해 \\(A\\cap B\\)의 원소의 개수는?",
      "choices": [
        "0",
        "1",
        "2",
        "3"
      ],
      "answer": 1,
      "explanation": "A={1,2}, B={1,-1} 이므로 A∩B={1}, 원소는 1개입니다.",
      "track": "math2",
      "difficulty": "상"
    },
    {
      "id": "math2-sang-3",
      "type": "short",
      "unit": "함수와 그래프",
      "question": "이차함수 \\(y=x^2-4x+k\\)의 그래프가 x축에 접할 때, 상수 \\(k\\)의 값을 구하시오.",
      "answer": "4",
      "explanation": "판별식 16-4k=0 에서 k=4 입니다.",
      "track": "math2",
      "difficulty": "상"
    },
    {
      "id": "math2-sang-4",
      "type": "mc",
      "unit": "집합과 명제",
      "question": "명제 'x=2이면 \\(x^2=4\\)이다'의 역으로 옳은 것은?",
      "choices": [
        "x²=4이면 x=2이다",
        "x≠2이면 x²≠4이다",
        "x²≠4이면 x≠2이다",
        "x=2가 아니면 x²=4이다"
      ],
      "answer": 0,
      "explanation": "명제 p→q의 역은 q→p 이므로 'x²=4이면 x=2이다'입니다.",
      "track": "math2",
      "difficulty": "상"
    },
    {
      "id": "math2-sang-5",
      "type": "short",
      "unit": "도형의 방정식",
      "question": "두 직선 \\(2x+y-5=0\\)과 \\(x-y+2=0\\)의 교점의 x좌표를 구하시오.",
      "answer": "1",
      "explanation": "두 번째 식에서 y=x+2를 첫 식에 대입하면 3x-3=0, x=1 입니다.",
      "track": "math2",
      "difficulty": "상"
    },
    {
      "id": "math2-sang-6",
      "type": "mc",
      "unit": "함수와 그래프",
      "question": "함수 \\(f(x)=\\dfrac{1}{x-2}+3\\)의 그래프의 점근선의 방정식으로 옳은 것은?",
      "choices": [
        "x=2, y=3",
        "x=-2, y=3",
        "x=2, y=-3",
        "x=3, y=2"
      ],
      "answer": 0,
      "explanation": "분모가 0이 되는 x=2가 수직 점근선, 상수항 3이 수평 점근선입니다.",
      "track": "math2",
      "difficulty": "상"
    }
  ],
  "algebra": [
    {
      "id": "algebra-sang-1",
      "type": "short",
      "unit": "수열",
      "question": "등비수열 \\(3,6,12,24,\\dots\\)의 첫째항부터 제6항까지의 합을 구하시오.",
      "answer": "189",
      "explanation": "a₁=3, r=2 이므로 S₆=3×(2⁶-1)/(2-1)=3×63=189 입니다.",
      "track": "algebra",
      "difficulty": "상"
    },
    {
      "id": "algebra-sang-2",
      "type": "mc",
      "unit": "지수함수와 로그함수",
      "question": "방정식 \\(\\log_2(x-1)=3\\)의 해는?",
      "choices": [
        "7",
        "8",
        "9",
        "10"
      ],
      "answer": 2,
      "explanation": "x-1=2³=8 이므로 x=9 입니다.",
      "track": "algebra",
      "difficulty": "상"
    },
    {
      "id": "algebra-sang-3",
      "type": "short",
      "unit": "삼각함수",
      "question": "방정식 \\(2\\sin\\theta-1=0\\) (단, \\(0\\le\\theta<2\\pi\\))의 모든 해의 합을 \\(k\\pi\\) 꼴로 나타낼 때 \\(k\\)의 값을 구하시오.",
      "answer": "1",
      "explanation": "sinθ=1/2 에서 θ=π/6, 5π/6. 합은 π 이므로 k=1 입니다.",
      "track": "algebra",
      "difficulty": "상"
    },
    {
      "id": "algebra-sang-4",
      "type": "mc",
      "unit": "지수함수와 로그함수",
      "question": "함수 \\(y=3^x\\)의 그래프를 x축 방향으로 2, y축 방향으로 1만큼 평행이동한 그래프의 식은?",
      "choices": [
        "y=3^(x-2)+1",
        "y=3^(x+2)+1",
        "y=3^(x-2)-1",
        "y=3^(x-1)+2"
      ],
      "answer": 0,
      "explanation": "x축 방향 +2, y축 방향 +1 평행이동은 x→x-2, y→y-1을 대입하는 것과 같습니다.",
      "track": "algebra",
      "difficulty": "상"
    },
    {
      "id": "algebra-sang-5",
      "type": "short",
      "unit": "수열",
      "question": "첫째항이 1이고 공차가 3인 등차수열의 첫째항부터 제n항까지의 합이 처음으로 100을 넘는 \\(n\\)의 값을 구하시오.",
      "answer": "9",
      "explanation": "Sₙ=n(3n-1)/2. S₈=92, S₉=117이므로 처음으로 100을 넘는 것은 n=9일 때입니다.",
      "track": "algebra",
      "difficulty": "상"
    },
    {
      "id": "algebra-sang-6",
      "type": "short",
      "unit": "지수함수와 로그함수",
      "question": "\\(\\log_3 5 \\times \\log_5 9\\)의 값을 구하시오.",
      "answer": "2",
      "explanation": "밑변환 공식으로 log₃5×log₅9=log₃9=2 입니다.",
      "track": "algebra",
      "difficulty": "상"
    }
  ],
  "calculus": [
    {
      "id": "calculus-sang-1",
      "type": "short",
      "unit": "미분",
      "question": "함수 \\(f(x)=x^3-3x^2-9x+5\\)가 극댓값을 가질 때의 \\(x\\)의 값을 구하시오.",
      "answer": "-1",
      "explanation": "f'(x)=3(x-3)(x+1)=0 에서 x=-1, 3. f''(x)=6x-6이 x=-1에서 음수이므로 극대는 x=-1입니다.",
      "track": "calculus",
      "difficulty": "상"
    },
    {
      "id": "calculus-sang-2",
      "type": "mc",
      "unit": "함수의 극한과 연속",
      "question": "\\(\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin 3x}{x}\\)의 값은?",
      "choices": [
        "1",
        "2",
        "3",
        "0"
      ],
      "answer": 2,
      "explanation": "sin(kx)/x → k 이므로 극한값은 3입니다.",
      "track": "calculus",
      "difficulty": "상"
    },
    {
      "id": "calculus-sang-3",
      "type": "short",
      "unit": "적분",
      "question": "곡선 \\(y=x^2\\)과 직선 \\(y=2x\\)로 둘러싸인 부분의 넓이를 기약분수 \\(a/b\\)로 나타낼 때 \\(a+b\\)의 값을 구하시오.",
      "answer": "7",
      "explanation": "교점 x=0,2. 넓이=∫₀²(2x-x²)dx=4-8/3=4/3 이므로 a=4,b=3, a+b=7 입니다.",
      "track": "calculus",
      "difficulty": "상"
    },
    {
      "id": "calculus-sang-4",
      "type": "mc",
      "unit": "함수의 극한과 연속",
      "question": "함수 \\(f(x)=\\dfrac{x^2-4}{x-2}\\) (단, \\(x\\ne2\\))가 \\(x=2\\)에서 연속이 되도록 \\(f(2)\\)를 정할 때 그 값은?",
      "choices": [
        "2",
        "3",
        "4",
        "6"
      ],
      "answer": 2,
      "explanation": "f(x)=x+2 (x≠2)이므로 극한값은 4입니다.",
      "track": "calculus",
      "difficulty": "상"
    },
    {
      "id": "calculus-sang-5",
      "type": "short",
      "unit": "미분",
      "question": "함수 \\(f(x)=x^3-6x^2+9x\\)의 극댓값과 극솟값의 차를 구하시오.",
      "answer": "4",
      "explanation": "f'(x)=3(x-1)(x-3)=0. f(1)=4(극대), f(3)=0(극소). 차는 4입니다.",
      "track": "calculus",
      "difficulty": "상"
    },
    {
      "id": "calculus-sang-6",
      "type": "short",
      "unit": "적분",
      "question": "\\(\\displaystyle\\int_1^3 (2x-1)\\,dx\\)의 값을 구하시오.",
      "answer": "6",
      "explanation": "부정적분 x²-x 에 대입하면 (9-3)-(1-1)=6 입니다.",
      "track": "calculus",
      "difficulty": "상"
    }
  ],
  "geometry": [
    {
      "id": "geometry-sang-1",
      "type": "short",
      "unit": "이차곡선",
      "question": "쌍곡선 \\(\\dfrac{x^2}{16}-\\dfrac{y^2}{9}=1\\)의 두 초점 사이의 거리를 구하시오.",
      "answer": "10",
      "explanation": "c²=a²+b²=16+9=25, c=5. 두 초점 사이 거리는 2c=10 입니다.",
      "track": "geometry",
      "difficulty": "상"
    },
    {
      "id": "geometry-sang-2",
      "type": "mc",
      "unit": "평면벡터",
      "question": "두 벡터 \\(\\vec a=(1,2)\\), \\(\\vec b=(3,-1)\\)의 내적 \\(\\vec a\\cdot\\vec b\\)의 값은?",
      "choices": [
        "0",
        "1",
        "2",
        "5"
      ],
      "answer": 1,
      "explanation": "1×3+2×(-1)=3-2=1 입니다.",
      "track": "geometry",
      "difficulty": "상"
    },
    {
      "id": "geometry-sang-3",
      "type": "short",
      "unit": "이차곡선",
      "question": "포물선 \\(y^2=4x\\)의 준선의 방정식이 \\(x=-k\\)일 때 \\(k\\)의 값을 구하시오.",
      "answer": "1",
      "explanation": "4p=4, p=1 이므로 준선은 x=-1, 즉 k=1 입니다.",
      "track": "geometry",
      "difficulty": "상"
    },
    {
      "id": "geometry-sang-4",
      "type": "mc",
      "unit": "공간도형과 공간좌표",
      "question": "좌표공간의 점 P(2,-1,3)을 xy평면에 대하여 대칭이동한 점의 좌표는?",
      "choices": [
        "(2,-1,-3)",
        "(-2,-1,3)",
        "(2,1,3)",
        "(-2,1,-3)"
      ],
      "answer": 0,
      "explanation": "xy평면 대칭이동은 z좌표의 부호만 바뀝니다.",
      "track": "geometry",
      "difficulty": "상"
    },
    {
      "id": "geometry-sang-5",
      "type": "short",
      "unit": "평면벡터",
      "question": "벡터 \\(\\vec a=(3,4)\\)의 크기 \\(|\\vec a|\\)를 구하시오.",
      "answer": "5",
      "explanation": "|a|=√(3²+4²)=√25=5 입니다.",
      "track": "geometry",
      "difficulty": "상"
    },
    {
      "id": "geometry-sang-6",
      "type": "short",
      "unit": "이차곡선",
      "question": "타원 \\(\\dfrac{x^2}{25}+\\dfrac{y^2}{16}=1\\)의 두 초점 사이의 거리를 구하시오.",
      "answer": "6",
      "explanation": "c²=a²-b²=25-16=9, c=3. 두 초점 사이 거리는 2c=6 입니다.",
      "track": "geometry",
      "difficulty": "상"
    }
  ],
  "probability": [
    {
      "id": "probability-sang-1",
      "type": "short",
      "unit": "경우의 수",
      "question": "서로 다른 8개의 공에서 3개를 순서 없이 뽑는 경우의 수를 구하시오.",
      "answer": "56",
      "explanation": "8C3 = (8×7×6)/(3×2×1) = 56 입니다.",
      "track": "probability",
      "difficulty": "상"
    },
    {
      "id": "probability-sang-2",
      "type": "mc",
      "unit": "확률",
      "question": "두 사건 A, B가 서로 배반사건이고 \\(P(A)=0.3\\), \\(P(B)=0.4\\)일 때 \\(P(A\\cup B)\\)의 값은?",
      "choices": [
        "0.12",
        "0.3",
        "0.4",
        "0.7"
      ],
      "answer": 3,
      "explanation": "배반사건이므로 P(A∪B)=P(A)+P(B)=0.7 입니다.",
      "track": "probability",
      "difficulty": "상"
    },
    {
      "id": "probability-sang-3",
      "type": "short",
      "unit": "확률",
      "question": "빨간 공 3개, 파란 공 2개가 들어 있는 주머니에서 임의로 2개를 동시에 꺼낼 때 두 개 모두 빨간 공일 확률을 기약분수 \\(a/b\\)로 나타내면 \\(a+b\\)의 값을 구하시오.",
      "answer": "13",
      "explanation": "전체 5C2=10, 빨간 공 3C2=3. 확률 3/10이 기약분수이므로 a+b=13 입니다.",
      "track": "probability",
      "difficulty": "상"
    },
    {
      "id": "probability-sang-4",
      "type": "mc",
      "unit": "통계",
      "question": "이항분포 \\(B(n,p)\\)를 따르는 확률변수 X의 평균이 \\(np\\)일 때, \\(n=20,p=0.3\\)이면 평균은?",
      "choices": [
        "3",
        "6",
        "9",
        "12"
      ],
      "answer": 1,
      "explanation": "20×0.3=6 입니다.",
      "track": "probability",
      "difficulty": "상"
    },
    {
      "id": "probability-sang-5",
      "type": "short",
      "unit": "경우의 수",
      "question": "숫자 1,2,3,4,5를 한 번씩 사용하여 만들 수 있는 다섯 자리 정수 중 홀수인 것의 개수를 구하시오.",
      "answer": "72",
      "explanation": "일의 자리가 1,3,5 중 하나(3가지), 나머지 4자리는 4!=24가지. 3×24=72 입니다.",
      "track": "probability",
      "difficulty": "상"
    },
    {
      "id": "probability-sang-6",
      "type": "short",
      "unit": "통계",
      "question": "공정한 동전을 3번 던져 앞면이 나오는 횟수를 X라 할 때, \\(E(X)\\)의 값을 구하시오.",
      "answer": "1.5",
      "acceptableAnswers": [
        "3/2"
      ],
      "explanation": "X~B(3,0.5) 이므로 E(X)=3×0.5=1.5 입니다.",
      "track": "probability",
      "difficulty": "상"
    }
  ]
};

function findQuestionById(id) {
  for (const track of Object.keys(COMPETITIVE_QUESTION_BANK)) {
    const found = COMPETITIVE_QUESTION_BANK[track].find(q => q.id === id);
    if (found) return found;
  }
  return null;
}

function normalize(str) {
  return String(str || "").trim().toLowerCase().replace(/\s+/g, "");
}

/** 서버가 원시 답안(questionId -> userAnswer)을 받아 정답 개수를 재계산한다.
 *  클라이언트가 보낸 correctCount는 참고용일 뿐, 실제 점수는 이 함수의
 *  결과로만 산정해야 한다. */
function gradeAnswers(answers) {
  let correctCount = 0;
  const total = Object.keys(answers || {}).length;
  for (const [questionId, userAnswer] of Object.entries(answers || {})) {
    const q = findQuestionById(questionId);
    if (!q) continue;
    const isCorrect = q.type === "mc"
      ? Number(userAnswer) === q.answer
      : [q.answer, ...(q.acceptableAnswers || [])].some(c => normalize(c) === normalize(userAnswer));
    if (isCorrect) correctCount += 1;
  }
  return { correctCount, total };
}

module.exports = { COMPETITIVE_QUESTION_BANK, findQuestionById, gradeAnswers };
