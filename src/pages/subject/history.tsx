import { SubjectLayout } from "../../components/subjectLayout";

export const History = () => {
    const unitNames = ["근대 국민 국가 수립 운동", "일제의 침략과 국권의 피탈"];
    const content = [
        <div>
            <h2 style={{ marginBottom: '20px' }}>근대 국민 국가 수립 운동</h2>

            <div style={{ display: "flex", flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <h3>운요호 사건 & 강화도 조약</h3>
                <p style={{fontWeight: 700}}>⚓ 운요호 사건</p>
                <ul>
                    <li>🇰🇷 국내</li>
                    <ul>
                        <li>흥선대원군의 실각 (고종의 친청, 민씨 세력의 정권 주도 → 대외 정책 변화)</li>
                        <li>개국 통상론 (부국강병을 위해 문호 개방 필요성 주장 → 개화파 형성)</li>
                    </ul>
                    <li>🇯🇵 국외</li>
                    <ul>
                        <li>일본의 정한론, 운요호 강화도에 보내 조선에 개항 요구 (운요호 사건)</li>
                    </ul>
                </ul>
                <p style={{fontWeight: 700}}>강화도 조약</p>
                <p>조선이 외국과 체결한 최초의 근대적 조약 (일본에 유리한 불평등 조약)</p>
                <table cellPadding="8" style={{ borderCollapse: "collapse", marginTop: '20px', marginBottom: '20px' }}>
                    <tbody>
                        <tr>
                            <td>📌 제 1조</td>
                            <td>조선은 자주국이며 일본과 평등한 권리 보유</td>
                            <td>조선과 청의 전통적 관계 부인 → 일본의 조선 침략에 용이</td>
                        </tr>
                        <tr>
                            <td>📌 제 4조</td>
                            <td>부산 외의 2개의 항구를 개항 & 일본인 왕래 통상 허가<br />※ 개항한 항구: 부산, 인천, 원산</td>
                            <td>경제적 침투 기반 마련</td>
                        </tr>
                        <tr>
                            <td>📌 제 7조</td>
                            <td>조선의 연해 도서는 위험해 일본의 항해자가 자유롭게 해안 측량함 허가</td>
                            <td>연안 측량권 → 군사적 침략 의도</td>
                        </tr>
                        <tr>
                            <td>📌 제 10조</td>
                            <td>일본인이 조선에서 죄를 저질러도 일본 관원이 재판함</td>
                            <td>영사 재판권 (치외법권)</td>
                        </tr>
                    </tbody>
                </table>
                <p style={{fontWeight: 700}}>조약 체결 배경</p>
                <table cellPadding="8" style={{ borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td>
                                흥선대원군 실각 (고종의 친청, 민씨 세력의 정권 주도 → 대외 정책 변화)<br />
                                개국 통상론 대두 (부국강병 위해 문호 개방 주장 → 개화파 형성)
                            </td>
                            <td>
                                일본의 정한론 대두<br />
                                운요호 사건 (일본이 운요호를 강화도에 보내 무력 시위 및 개항 요구)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{ display: "flex", flexDirection: 'column', gap: '10px'}}>
                <h3>위정척사 운동</h3>
                <p>성리학적 사회 질서를 지키고 성리학 이외의 종교와 사상을 배척하자는 주장</p>
                <ul>
                    <li>📣 통상 반대 (척화 주전론) → 개항 반대 (왜양 일체론) → 개화 정책 & 미국과 수교 반대 (개화 반대 운동)</li>
                    <li><strong>✅ 의의: </strong>반외세 & 반침략 민족 운동 → 항일 의병 운동으로 계승</li>
                    <li><strong>⚠️ 한계: </strong>양반 중심의 성리학적 질서 고수</li>
                </ul>
            </div>
        </div>,
        <div>
            <h2 style={{ marginBottom: '20px' }}>일제의 침략과 국권의 피탈</h2>

            <div style={{ display: "flex", flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <h3>개항 이후 일본의 경제적 침투</h3>
                <ul>
                    <li><strong>🏘️ 거류지 설정:</strong> 일본 상인이 활동할 수 있는 지역 제한 (항구 주변)</li>
                    <li><strong>📍 조계 설치:</strong> 일본 상인의 활동 확대, 상권 장악</li>
                    <li><strong>💴 화폐 정리 사업:</strong> 일본 제일은행권 유통 강요 → 한국 경제 장악 시작</li>
                </ul>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <h3>정치적 침략과 국권 피탈</h3>
                <ul>
                    <li><strong>📉 을사늑약 (1905):</strong> 대한제국 외교권 박탈 → 통감부 설치 (초대 통감 이토 히로부미)</li>
                    <li><strong>🔐 정미 7조약 (1907):</strong> 군대 해산, 내정 간섭 강화</li>
                    <li><strong>📜 한일 병합 조약 (1910):</strong> 국권 강탈, 조선 총독부 설치</li>
                </ul>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <h3>일제의 경제적 수탈</h3>
                <ul>
                    <li><strong>🌾 토지 조사 사업 (1910~18):</strong> 근대적 토지 제도 정비 명분 → 조선 농민들의 토지 수탈</li>
                    <li><strong>🍚 산미 증식 계획 (1920년대):</strong> 일본의 쌀 부족 해결 목적 → 조선의 쌀 수탈, 식량난 초래</li>
                    <li><strong>🏢 회사령 제정:</strong> 조선 내 기업 활동 제한 → 일본 자본 진출 유리하게 조성</li>
                </ul>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <h3>문화 통치와 그 실상</h3>
                <ul>
                    <li><strong>🎭 표면상:</strong> 무단 통치 → 문화 통치로 전환 (3.1 운동 이후)</li>
                    <li><strong>👮 실제:</strong> 경찰 인원 증가, 검열 강화, 민족 교육 제한</li>
                    <li><strong>📰 동아일보, 조선일보 창간 허용:</strong> 철저한 통제 하에 이루어짐</li>
                </ul>
            </div>
            <div style={{ display: "flex", flexDirection: 'column', gap: '10px' }}>
                <h3>민족의 저항</h3>
                <ul>
                    <li><strong>🗡️ 을사의병:</strong> 을사늑약에 반발하여 자발적으로 일어난 무장 저항</li>
                    <li><strong>🎙️ 헤이그 특사 파견:</strong> 고종이 을사늑약의 부당함을 세계에 알리기 위해 특사 파견</li>
                    <li><strong>📢 3.1운동:</strong> 민족 대표 33인의 독립 선언 → 전국적 독립 운동으로 확산</li>
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
