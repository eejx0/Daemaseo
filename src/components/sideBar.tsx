import styled from "styled-components"
import Logo from "../assets/logo.svg";
import Person from "../assets/sideBar/person.svg";
import Subject from "../assets/sideBar/subject.svg";
import Home from "../assets/sideBar/home.svg";
import Arrow from "../assets/arrow.svg";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

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
                <Link to={'/'}>
                    <NavBox>
                        <img src={Home} alt="" />
                        {!closed && 
                            <HeadWrap>
                                <p>홈</p>
                                <img src={Arrow} alt=">" />
                            </HeadWrap>
                        }
                    </NavBox>
                </Link>
                <Link to={'/introduce'}>
                    <NavBox>
                        <img src={Person} alt="" />
                        {!closed && 
                            <HeadWrap>
                                <p>자기소개</p>
                                <img src={Arrow} alt=">" />
                            </HeadWrap>
                        }
                    </NavBox> 
                </Link>
                <SubjectNavBox>
                    <SubjectWrapper>
                        <Wrap onClick={() => setShowBar(prev => !prev)}>
                            <img src={Subject} alt="" style={{cursor: 'pointer'}}/>
                            {!closed && 
                                <HeadWrap>
                                    <p>과목</p>
                                    <ArrowIcon $isOpen={showBar} src={Arrow} alt=">"/>
                                </HeadWrap>
                            }
                        </Wrap>
                        <SubWrap $isOpen={showBar}>
                            <Link to={'/korean'}>
                                <SubjectName>
                                    <p>국어</p>
                                </SubjectName>
                            </Link>
                            <Link to={'/math'}>
                                <SubjectName>
                                    <p>수학</p>
                                </SubjectName>
                            </Link>
                            <Link to={'/history'}>
                                <SubjectName>
                                    <p>한국사</p>
                                </SubjectName>
                            </Link>
                            <Link to={'/science'}>
                                <SubjectName>
                                    <p>과학</p>
                                </SubjectName>
                            </Link>
                        </SubWrap>
                    </SubjectWrapper>
                </SubjectNavBox>
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
    cursor: pointer;
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
    gap: 17px;
`;

const SubjectNavBox = styled.div`
    display: flex;
    margin-left: 8px;
`;

const Wrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 17px;
`;

const SubWrap = styled.div<{$isOpen: boolean}>`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-left: 30px;
    overflow: hidden;
    
    height: ${({ $isOpen }) => ($isOpen ? "" : "0px")};  
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};  
    transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "-10px")});
    
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};  
    transition: height 0.2s ease-out, opacity 0.2s ease-out, transform 0.2s ease-out, visibility 0.2s ease-out;
`;

const SubjectName = styled.div`
    width: 100%;
    height: 30px;
    align-items: center;
    display: flex;
    padding-left: 10px;
    border-radius: 2px;
    cursor: pointer;
    > p {
        font-size: 14px;
    }
    &:hover {
        background-color: #ECF7FF;
    }
`;