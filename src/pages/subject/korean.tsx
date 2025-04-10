import { SubjectLayout } from "../../components/subjectLayout";

export const Korean = () => {
    const unitNames = ["문학의 개념과 기능", "고전 소설 감상하기"];
    const content = [
        <div>
            <h2 style={{ marginBottom: '20px' }}>문학의 개념과 기능</h2>

            <div style={{ display: "flex", flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <h3>문학이란?</h3>
                <ul>
                    <li>✨ 인간의 생각과 정서를 표현하는 예술의 한 분야</li>
                    <li>🧠 인간의 가치 있는 경험을 언어로 형상화한 예술</li>
                </ul>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '5px', marginBottom: '20px' }}>
                <h3>인식적 기능</h3>
                <p>다양한 사람들의 삶과 세계를 <strong>간접</strong> 경험</p>
                <ul>
                    <li>⏳ 과거의 사건 ~ 미래의 일 경험 가능</li>
                    <li>🌏 다른 지역, 다른 사람의 생활 양식이나 사고 방식 알 수 있음</li>
                    <li>🔦 일상에 감춰진 현실의 여러 의미 발견 가능</li>
                </ul>
                <p>인간과 세계에 대한 깊이 있는 이해</p>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '5px', marginBottom: '20px' }}>
                <h3>윤리적 기능</h3>
                <p>삶의 태도와 가치관 점검 → 바람직한 삶의 의미, 가치 깨달음</p>
                <ul>
                    <li>🧘‍♀️ 개인의 삶의 질 향상</li>
                    <li>🌱 사회 성찰 및 개선 의지</li>
                    <li>📏 도덕이나 규칙에 대한 학습</li>
                </ul>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '5px', marginBottom: '20px' }}>
                <h3>문학의 미적 기능</h3>
                <p>작품 속 언어 표현과 미적 가치 경험 → 정서적 감동과 즐거움</p>
                <ul>
                    <p style={{ fontWeight: 700 }}>심미적 감수성과 삶의 고양</p>
                </ul>
                <blockquote>
                    <p><strong>🔸 심미적</strong> : 아름다움을 추구하려는 것</p>
                    <p><strong>🔸 감수성</strong> : 외부 자극을 느끼는 성질</p>
                    <p><strong>🔸 고양</strong> : 기분이나 정신을 북돋움</p>
                </blockquote>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '5px' }}>
                <h3>문학 작품의 재구성</h3>
                <p style={{ fontWeight: 700 }}>재구성의 의의</p>
                <ul>
                    <li>✏️ 표현 욕구 충족</li>
                    <li>💪 문학 활동의 주체로 만듦</li>
                    <li>🔍 깊이 있는 독서 가능</li>
                    <li>🌈 상상력과 표현력 향상</li>
                    <li>🎯 문학 활동에 대한 흥미 증가</li>
                </ul>
                <p style={{ fontWeight: 700 }}>재구성이란?</p>
                <ul>
                    <li>📘 문학 작품의 내용, 형식, 갈래 등을 바꾸는 창의적 작업</li>
                    <li>🧠 자신의 관점에서 비판적, 창의적으로 수용</li>
                </ul>
            </div>
        </div>,

        <div>
            <h2 style={{ marginBottom: '20px' }}>판소리계 소설</h2>

            <div style={{ display: "flex", flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <h3>판소리계 소설이란?</h3>
                <ul>
                    <li>📚 대표 작품: 춘향전, 흥부전, 심청전, 별주부전 등</li>
                    <li>👨‍🌾 평민의 체험과 바람을 담은 이야기</li>
                </ul>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '5px', marginBottom: '20px' }}>
                <h3>① 운문과 산문의 결합</h3>
                <ul>
                    <li>🎶 창과 아니리, 발림 구성</li>
                    <li>📝 창은 운문, 사설은 산문 요소</li>
                </ul>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '5px', marginBottom: '20px' }}>
                <h3>② 구어체와 현재 시제 사용</h3>
                <ul>
                    <li>💬 일상 구어로 이야기를 전달</li>
                    <li>👂 현장감과 몰입감을 주는 표현 방식</li>
                </ul>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '5px', marginBottom: '20px' }}>
                <h3>③ 전지적 시점과 편집자적 논평</h3>
                <ul>
                    <li>👁️ 전지적 서술자: 모든 것을 아는 시점</li>
                    <li>🗨️ 감정/평가를 드러내는 편집자적 논평 포함</li>
                </ul>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '5px', marginBottom: '20px' }}>
                <h3>④ 해학과 풍자</h3>
                <ul>
                    <li>🎭 웃음과 풍자를 통한 사회 비판</li>
                    <li>🏛️ 부조리한 지배층 풍자 (예: 놀부, 배비장)</li>
                </ul>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '5px' }}>
                <h3>⑤ 반복과 대구의 표현 방식</h3>
                <ul>
                    <li>🎵 반복과 대구로 운율감 형성</li>
                    <li>🧠 기억 도움, 생동감 전달</li>
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
