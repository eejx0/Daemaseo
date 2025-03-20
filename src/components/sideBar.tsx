import styled from "styled-components"
import Logo from "../assets/logo.svg";
import Person from "../assets/sideBar/person.svg";
import Subject from "../assets/sideBar/subject.svg";
import Arrow from "../assets/arrow.svg";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface SideBarProps {
    closed: boolean;
    setClosed: Dispatch<SetStateAction<boolean>>;
}

export const SideBar = ({closed, setClosed}: SideBarProps) => {
    const [showBar, setShowBar] = useState<boolean>(false);

    return (
        <Wrapper style={{width: closed ? "74px" : "282px"}}>
            <img src={Logo} alt="대마서" onClick={() => setClosed(!closed)}/>
            <NavWrapper>
                <NavBox>
                    <img src={Person} alt="" />
                    {!closed && 
                        <HeadWrap>
                            <p>자기소개</p>
                            <img src={Arrow} alt=">" />
                        </HeadWrap>
                    }
                </NavBox>
                <NavBox onClick={() => setShowBar(prev => !prev)}>
                    <img src={Subject} alt="" />
                    <SubjectWrapper>
                    {!closed && 
                        <HeadWrap>
                            <p>과목</p>
                            <ArrowIcon $isOpen={showBar} src={Arrow} alt=">"/>
                        </HeadWrap>
                    }
                    </SubjectWrapper>
                </NavBox>
            </NavWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    /* position: fixed;
    top: 0;
    left: 0; */
    height: 100vh;
    width: 282px;
    box-shadow: 0px 4px 10px 4px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    padding: 25px 20px 25px 20px;
    z-index: 1000;
    transition: 0.2s ease-out;
    > img {
        width: 34px;
        cursor: pointer;
    }
`;

const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    gap: 20px;
`;

const NavBox = styled.div`
    display: flex;
    gap: 17px;
    cursor: pointer;
    margin-left: 8px;
`;

const HeadWrap = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    > p {
        font-size: 15px;
    }
`;

const ArrowIcon = styled.img<{ $isOpen: boolean }>`
    transition: all ease 0.3s;
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(90deg)" : "rotate(0deg)")}; 
`;

const SubjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;