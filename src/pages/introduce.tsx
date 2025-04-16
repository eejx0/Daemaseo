import styled from "styled-components";
import { SideBar } from "../components/sideBar";
import { useState } from "react";
import Notion from "../assets/notion.png";

export const Introduce = () => {
    const [closed, setClosed] = useState(false);

    return (
        <Wrapper>
            <SideBar closed={closed} setClosed={setClosed} />
            <Content>
                <Section>
                    <Title>🙌🏻 안녕하세요</Title>
                    <Description>
                        대덕소프트웨어마이스터고등학교 3학년 <strong>이의진</strong>입니다.
                        <br />
                        항상 성장하고 발전하는 프론트엔드 개발자가 되기 위해 노력하고 있습니다.
                    </Description>
                </Section>
                    <SubTitle>기술 스택</SubTitle>
                    <img style={{width: '800px'}} src={Notion} alt="" />
            </Content>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
`;

const Content = styled.main`
    flex: 1;
    padding: 60px 80px;
    margin-left: 30px;
    transition: margin-left 0.3s ease;
    max-width: 1000px;
`;

const Section = styled.section`
    margin-bottom: 60px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: #1a1a1a;
`;

const SubTitle = styled.h2`
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #2c2c2c;
`;

const Description = styled.p`
    font-size: 1.125rem;
    line-height: 1.8;
    color: #444;
`;

const ListRow = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    a {
        color: #2BA9FF;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;