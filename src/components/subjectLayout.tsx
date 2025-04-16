import styled from "styled-components"
import { SideBar } from "./sideBar";
import Arrow from "../assets/arrow.svg";
import { useState, useEffect, ReactNode } from "react";
import Book from "../assets/book.png";

interface SubjectLayoutProps {
    unitNames: string[];
    content: ReactNode[];
  }

export const SubjectLayout = ({unitNames, content}: SubjectLayoutProps) => {
    const [closed, setClosed] = useState<boolean>(false)
    const [showBars, setShowBars] = useState<boolean[]>([false, false]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const text = "단원을 선택해주세요 ...";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        
        if (index < text.length) {
            interval = setInterval(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, 100);
        } else {
            setTimeout(() => {
                setDisplayedText(""); 
                setIndex(0); 
            }, 2000); 
        }

        return () => clearInterval(interval); 
    }, [index]); 

    const handleToggle = (index: number) => {
        setShowBars(prev => {
            const updated = prev.map((item, i) => (i === index ? !item : false)); 
            setIsLoading(true);
    
            if (updated[index]) {
                setTimeout(() => {
                    setIsLoading(false);
                    setSelectedIndex(index);
                }, 100); 
            } else {
                setSelectedIndex(null);
            }
    
            return updated;
        });
    }; 

    return (
        <Wrapper>
            <SideBar closed={closed} setClosed={setClosed}/>
            <Container>
                <TitleWrapper>
                    <Ttile>단원 선택</Ttile>
                    <SubTitle>배우고자 하는 단원을 선택해요</SubTitle>
                </TitleWrapper>
                <SelectUnitWrapper>
                    {unitNames.map((text, index) => (
                        <UnitWrapper key={index} onClick={() => handleToggle(index)}>
                            <p>{text}</p>
                            <ArrowIcon $isOpen={showBars[index]} src={Arrow} alt=">" />
                        </UnitWrapper>
                    ))}
                </SelectUnitWrapper>
                {isLoading && (
                    <LoadingWrapper>
                        <img src={Book} alt="로딩 중" />
                        <p>{!displayedText ? "단" : displayedText}</p>
                    </LoadingWrapper>
                )}
                {!isLoading && selectedIndex !== null && (
                    <>
                        <TitleWrapper style={{marginTop: '70px'}}>
                            <Ttile>관련 내용</Ttile>
                            <SubTitle>이 단원에는 이런 내용이 있어요</SubTitle>
                        </TitleWrapper>
                        <ContentWrapper>
                            <p>{content[selectedIndex]}</p>
                            <div />
                        </ContentWrapper>
                    </>
                )}
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 100px 50px 100px;
    width: 100%;
    flex: 1;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Ttile = styled.h3`
    font-size: 25px;
    font-weight: 600;
`;

const SubTitle = styled.p`
    font-size: 13px;
    color: rgba(0,0,0,0.5);
`;

const SelectUnitWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 35px;
    align-items: center;
`;

const UnitWrapper = styled.div`
    display: flex;
    height: 47px;
    align-items: center;
    padding: 14px 15px 14px 15px;
    box-shadow: 0px 4px 10px 4px rgba(0,0,0,0.1);
    border-radius: 10px;
    justify-content: space-between;
    cursor: pointer;
    gap: 35px;
    > p {
        font-size: 16px;
        font-weight: 600;
    }
`;

const ArrowIcon = styled.img<{$isOpen: boolean}>`
    transition: all ease 0.3s;
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(90deg)" : "rotate(0deg)")}; 
`;

const ContentWrapper = styled.div`
    display: flex;
    padding: 25px;
    width: 100%;
    flex-direction: column;
    height: 350px;
    box-shadow: 0px 4px 10px 4px rgba(0,0,0,0.1);
    margin-top: 30px;
    border-radius: 30px;
    overflow-y: scroll;
    > p {
        line-height: 25px;
        font-size: 15px;
    }
    > div {
        height: 25px;
        width: 100%;
    }
`;

const LoadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 19px;
    > img {
        width: 376px;
        height: 224px;
    }
    > p {
        font-weight: 600;
        font-size: 20px;
    }
`;