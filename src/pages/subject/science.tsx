import { SubjectLayout } from "../../components/subjectLayout";

export const Science = () => {
    const unitNames = ["발전과 신재생 에너지", "생태계와 환경"];
    const content = [
        <div>
            <h2 style={{ marginBottom: '20px' }}>발전과 신재생 에너지</h2>

            <div style={{ marginBottom: '30px' }}>
                <h3>1. 발전의 원리</h3>
                <p><strong>발전기</strong>는 자석과 코일을 이용해 전기를 만들어내는 장치로, <strong>전자기 유도</strong>의 원리를 활용</p>
                <p>코일이 자기장 속에서 회전하거나 자석이 코일 주변을 움직이면, 코일 내부에 전류가 흐르게 됨</p>
                <p>→ 이를 이용해 전기를 생산하는 것이 발전의 기본 원리</p>

                <table cellPadding="8" style={{ marginTop: '15px', width: '100%', textAlign: 'center' }}>
                    <tbody>
                        <tr>
                            <td>화력 발전</td>
                            <td>석탄, 석유, 가스</td>
                            <td>설비 안정성, 대용량 생산</td>
                            <td>대기 오염, 온실가스 배출</td>
                        </tr>
                        <tr>
                            <td>수력 발전</td>
                            <td>물의 위치 에너지</td>
                            <td>친환경, 연료 필요 없음</td>
                            <td>댐 건설로 생태계 파괴 가능</td>
                        </tr>
                        <tr>
                            <td>원자력 발전</td>
                            <td>우라늄</td>
                            <td>에너지 효율 높음</td>
                            <td>방사능 위험</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h3>2. 신재생 에너지란?</h3>
                <p>환경에 부담을 주지 않으면서 지속적으로 생산 가능한 에너지 자원을 <strong>신재생 에너지</strong>라고 함</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px' }}>
                    <div>☀️ <strong>태양광 에너지</strong>: 태양빛을 전기로 전환 (태양광 패널 사용)</div>
                    <div>💨 <strong>풍력 에너지</strong>: 바람의 운동 에너지 → 전기 (풍차 이용)</div>
                    <div>🌱 <strong>바이오 에너지</strong>: 식물, 동물의 유기물 활용 (예: 음식물 쓰레기 → 가스)</div>
                    <div>🔥 <strong>지열 에너지</strong>: 지하 열 활용</div>
                    <div>🌊 <strong>해양 에너지</strong>: 조류, 파도 등</div>
                </div>
            </div>

            <div>
                <h3>3. 에너지 절약과 전환</h3>
                <p>지속 가능한 미래를 위해 <strong>에너지 절약</strong>과 <strong>친환경적 에너지 전환</strong>은 필수</p>
                <ul>
                    <li>고효율 기기 사용 (LED 조명, 인버터 에어컨)</li>
                    <li>대중교통 이용, 전기차 보급</li>
                    <li>스마트 그리드 시스템: 전기 사용량을 효율적으로 관리</li>
                </ul>
                <p style={{ marginTop: '10px' }}><strong>Point!</strong> 미래의 에너지 정책은 친환경성과 지속 가능성을 고려해야함</p>
            </div>
        </div>,

        <div>
            <h2 style={{ marginBottom: '20px' }}>생태계와 환경</h2>

            <div style={{ marginBottom: '30px' }}>
                <h3>1. 생태계 구성 요소</h3>
                <p>생태계는 <strong>생물적 요소</strong>와 <strong>비생물적 요소</strong>가 상호작용하는 자연계의 단위</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px' }}>
                    <div>🌿 <strong>생산자:</strong> 광합성을 통해 에너지 생산 (예: 식물, 조류)</div>
                    <div>🦌 <strong>소비자:</strong> 다른 생물을 먹고 에너지 얻음 (초식/육식/잡식)</div>
                    <div>🍄 <strong>분해자:</strong> 죽은 생물이나 배설물 분해 (곰팡이, 세균 등)</div>
                </div>

                <p style={{ marginTop: '10px' }}><strong>비생물적 요소:</strong> 햇빛, 온도, 물, 공기, 토양 등</p>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h3>2. 생물 간의 상호작용</h3>
                <ul>
                    <li><strong>먹이 사슬:</strong> 에너지가 생물 간에 흐르는 경로</li>
                    <li><strong>먹이 그물:</strong> 여러 먹이 사슬이 얽혀 있는 복잡한 구조</li>
                    <li><strong>경쟁:</strong> 같은 자원을 두고 생물끼리 경쟁 (예: 물, 먹이, 서식지)</li>
                    <li><strong>공생:</strong> 서로 도움을 주고받으며 살아감 (예: 말미잘과 흰동가리)</li>
                </ul>
                <p style={{ marginTop: '10px' }}>→ 생물 간 관계는 생태계 평형 유지에 중요한 역할을 험</p>
            </div>

            <div>
                <h3>3. 환경 문제와 보전</h3>
                <p><strong>환경 오염</strong>은 인간의 활동으로 생긴 문제로 생태계를 위협함</p>
                <ul>
                    <li><strong>대기오염:</strong> 공장, 차량 → 미세먼지, 온실가스</li>
                    <li><strong>수질오염:</strong> 폐수, 생활하수 → 하천 생태계 파괴</li>
                    <li><strong>토양오염:</strong> 농약, 쓰레기 매립 → 식물 생장 방해</li>
                </ul>
                <p style={{ marginTop: '10px' }}><strong>보전 방법:</strong> 재활용, 보호 구역 지정, 환경 교육, 국제 협력 등</p>
                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>🌏 지속 가능한 지구를 위한 우리의 작은 실천이 필요!</p>
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
