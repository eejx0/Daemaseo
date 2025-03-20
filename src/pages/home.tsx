import styled, {keyframes} from "styled-components"
import { SideBar } from "../components/sideBar"
import BannerImg from "../assets/bannerImg.png";
import { useState } from "react";
import Boat from "../assets/boat.png";

export const Home = () => {
    const [closed, setClosed] = useState<boolean>(false);

    return (
        <Wrapper>
            <SideBar closed={closed} setClosed={setClosed}/>
            <ContentWrapper $closed={closed}>
                <Banner>
                    <TextWrapper>
                        <TitleWrapper>
                            <SubTitleWrapper>
                                <span>대마인을 위한</span>
                                <span className="colorText">교과서 🥹</span>
                            </SubTitleWrapper>
                            <BigTitleWrapper>
                                <h3>일반교과 정리를 한번에,</h3>
                                <h3 className="colorText">대마서</h3>
                            </BigTitleWrapper>
                        </TitleWrapper>
                    </TextWrapper>
                    <img src={BannerImg} alt="banner" />
                </Banner>
                <WaveWrapper>
                    <img src={Boat} alt="배" />
                    <Wave2 />
                    <Wave1 />
                </WaveWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

const boatMoving = keyframes`
  0% { transform: translateY(0); left: 0px }
  50% { transform: translateY(-100px); }
  100% { transform: translateY(0); left: 800px }
`;

const Wrapper = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: hidden;
`;

const ContentWrapper = styled.div<{$closed: boolean}>`
    display: flex;
    flex-direction: column;
    width: ${({$closed}) => $closed ? "calc(100vw - 74px)" : "calc(100vw - 282px)"};
    transition: 0.3s ease;
`;

const Banner = styled.div`
    display: flex;
    width: 100%;
    height: 423px;
    background-color: #BAE3FF;
    justify-content: center;
    align-items: center;
    > img {
        width: 611px;
        height: 372px;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 73px;
`;

const SubTitleWrapper = styled.div`
    width: 244px;
    height: 38px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    > span {
        font-size: 15px;
        font-weight: 600;
    }
    .colorText {
        color: #2BA9FF;
    }
`;

const BigTitleWrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    > h3 {
        font-size: 30px;
        font-weight: 700;
    }
    .colorText {
        color: #2BA9FF;
    }
`;

const WaveWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 423px);
    position: relative;
    > img {
        position: absolute;
        animation: ${boatMoving} 5s linear infinite alternate;
    }
`;

const Wave1 = styled.div`
    position: absolute;
    bottom: -187vw;
    left: 67%;
    width: 200vw;
    height: 190vw;
    margin-left: -100vw;
    border-radius: 40%;
    z-index: 2000;
    animation: waveAnimation 19000ms infinite linear;
    background: #77C8FF;
    opacity: 0.5;
    @keyframes waveAnimation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const Wave2 = styled.div`
    position: absolute;
    bottom: -187vw;
    left: 67%;
    width: 200vw;
    height: 190vw;
    margin-left: -100vw;
    border-radius: 40%;
    animation: waveAnimation 15000ms infinite linear;
    opacity: 0.5;
    background: rgba(186, 227, 255, 0.55);
    @keyframes waveAnimation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(300deg);
        }
    }
`;

