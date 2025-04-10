import { SubjectLayout } from "../../components/subjectLayout";

export const Math = () => {
    const unitNames = ["삼각함수", "수열"];
    const content = [
        <div>
            <h2 style={{ marginBottom: '20px' }}>삼각함수</h2>

            <div style={{ display: "flex", flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <h3>1. 삼각함수란?</h3>
                <ul>
                    <li>📐 삼각함수는 단위원을 기준으로 각도에 따라 정해지는 함수</li>
                    <li>📊 주요 함수: sin(사인), cos(코사인), tan(탄젠트)</li>
                </ul>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <h3>2. y = tan x의 성질</h3>
                <ul>
                    <li>정의역: x ≠ nπ + π/2 (n ∈ 정수)</li>
                    <li>치역: 모든 실수</li>
                    <li>점근선: x = nπ + π/2</li>
                    <li>홀함수 → tan(-x) = -tan x (원점 대칭)</li>
                    <li>주기: π → tan(x + π) = tan x</li>
                </ul>
                <p style={{ fontWeight: 700 }}>함수 y = atan(bx)의 그래프</p>
                <ul>
                    <li>📏 주기: π / |b|</li>
                    <li>📐 a값에 따라 그래프의 기울기 변화</li>
                </ul>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <h3>3. 삼각함수의 변형</h3>
                <ul>
                    <li>각을 π/2 × n ± θ 꼴로 변형</li>
                    <li>n이 짝수: 함수 그대로 / 홀수: tan → 1/tan 등으로 바꿈</li>
                    <li>사분면 고려하여 부호 결정</li>
                    <ul>
                        <li>🔁 tan(π + x) = tan x</li>
                        <li>➖ tan(π - x) = -tan x</li>
                        <li>🌀 tan(π/2 + x) = -1/tan x</li>
                        <li>➕ tan(π/2 - x) = 1/tan x</li>
                    </ul>
                </ul>
            </div>
        </div>,

        <div>
            <h2 style={{ marginBottom: '20px' }}>수열</h2>

            <div style={{ display: "flex", flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <h3>1. 등차수열</h3>
                <ul>
                    <li>🔢 일반항: an = a₁ + (n - 1)d</li>
                    <li>⚖️ 중항: b = (a + c) / 2</li>
                    <li>➕ 합: Sn = n(a₁ + aₙ) / 2</li>
                    <li>🧮 수열의 합으로 일반항 구하기: an = Sn - S(n-1)</li>
                </ul>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <h3>2. 등비수열</h3>
                <ul>
                    <li>📈 일반항: an = a₁ × rⁿ⁻¹</li>
                    <li>✖️ 중항: b² = ac</li>
                    <li>➕ 합:
                        <ul>
                            <li>🔀 r ≠ 1일 때: Sn = a₁(1 - rⁿ) / (1 - r)</li>
                            <li>🔁 r = 1일 때: Sn = n × a₁</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '10px' }}>
                <h3>3. 수학적 귀납법</h3>
                <ul>
                    <li>📚 수열의 성질이 모든 자연수 n에 대해 성립하는지 보일 때 사용</li>
                    <li>🟢 ① n = 1일 때 성립 확인</li>
                    <li>🧩 ② n = k일 때 성립한다고 가정</li>
                    <li>✅ ③ n = k+1일 때도 성립함을 증명</li>
                    <li>🔗 ⇒ 위 두 과정을 통해 모든 자연수 n에 대해 성립함을 보임</li>
                </ul>
            </div>
        </div>
    ];

    return (
        <SubjectLayout 
            unitNames={unitNames}
            content={content} 
        />
    );
};
