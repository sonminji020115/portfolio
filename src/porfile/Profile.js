import styled from "styled-components";

import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import './Profile.css'

const Profile = () => {
    const [scrollY, setScrollY] = useState(0);

    const [isRotatingRight, setIsRotatingRight] = useState(false);

    const { rotationY } = useSpring({
        rotationY: isRotatingRight ? 180 : 0,
    });

    const scrollToSection = (ref, offset) => {
        window.scrollTo({
            top: ref.current.offsetTop + offset,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const images = [
        "img/profile_photo.png",
        "img/profile_photo_02.png",
    ];

    const handleMouseEnter = () => {
        setIsRotatingRight(!isRotatingRight);
    };

    return (
        <div className="Profile">
            <Profile_wrap>
                <Wrap>
                    <header className={`App-header ${scrollY > 300 ? 'scrolled' : ''}`}>
                        <Profile_main01>
                            <div className="Profile_main01_img">
                                <img className='main01_text01' src="img/Introduce.png" />
                                <div onMouseEnter={handleMouseEnter}>
                                    <animated.img
                                        className="main_profile_img"
                                        src={images[isRotatingRight ? 1 : 0]}
                                        alt="Rotating Image"
                                        style={{
                                            width: 230,
                                            height: 230,
                                            transform: rotationY.interpolate(
                                                r => `perspective(600px) rotateY(${r}deg)`
                                            ),
                                        }}
                                    />
                                </div>
                                <img className='main01_text02' src="img/myself.png" />
                            </div>
                        </Profile_main01>
                        <Profile_main02>
                            <img src="img/profile_main02_Ellipse.png" />
                                <p className="main02_text01">/* 성실한 · 학습을 좋아하는 · 끈기있는 */</p>
                            <p className="main02_text02">
                                <span>성실하고 학습을 좋아하며 끈기있는 프론트엔드 개발자</span> 손민지입니다.
                                이전 직장을 다녔을 당시 편도 1시간 거리였으나, 일찍 도착하여 업무준비를 하며
                                성실하다는 평가를 받은 바 있으며, 평소 새로운 것을 학습하는 것을 좋아하고 끈기가 넘치는 성향인지라 코딩 학원을 다닐 당시 자습실에서까지 늦게까지 남아 복습을 할만큼 학습하는 것을 좋아했습니다.
                                개발자는 끊임없는 학습이 중요한 직업이라 생각합니다. <span>성실</span>하고 <span>학습</span>을 좋아하며 <span>끈기</span>있는
                                이러한 저의 장점은 개발자로써 큰 장점이 될 것이라고 생각합니다.
                                한 가지로 만족하지 않고 끊없이 <span>성장</span>하고 <span>발전</span>하는 프론트엔드 개발자가 되겠습니다.<br />
                            </p>
                        </Profile_main02>
                    </header>
                </Wrap>
            </Profile_wrap>
        </div>
    )
}



export default Profile;

const Profile_wrap = styled.div`
    padding-top: 30px;
    background: #6AA6F9;
    background: -webkit-linear-gradient(to right, #F1F7FF, #F1F7FF, #FBFEFA);
    background: linear-gradient(to right, #F1F7FF, #F1F7FF, #FBFEFA);  
    background-size: cover;

    @media (max-width: 425px) {
        padding-top: 40px;
        max-width: 425px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 390px) {
        max-width: 100%;
    }
`

const Wrap = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width : 768px) {
        max-width: 768px;
    }

    @media (max-width: 425px) {
        max-width: 425px;
        margin-left: auto;
        margin-right: auto;
    }

    
    @media (max-width: 390px) {
        max-width: 100%;
    }
`

const Profile_main01 = styled.div`
    padding: 70px 0px 30px 85px;

    div{
        margin-left: 5px;
        display: flex;
        align-items: center;
    }

    .main01_text01{
        width: 359px;
        height: 57px;
        margin-right: 30px;
    }

    .main01_text02{
        width: 257px;
        height: 54px;
        margin-left: 50px;
    }

    @media (max-width: 425px) {
        padding: 40px 0px 40px 90px;

        .main01_text01{
            display: none;
        }

        .main01_text02{
            display: none;
        }
    }

    @media (max-width: 400px) {
        padding: 20px 40px 40px 75px;
    }

    @media (max-width: 375px) {
        padding: 69px 40px 40px 60px;
    }

    @media (max-width: 360px) {
        padding: 20px 40px 40px 55px;
    }

    @media (max-width: 320px) {
        padding: 40px 20px 40px 35px;
    }
`

const Profile_main02 = styled.div`
    text-align: center;

    img{
        width: 30px;
        height: 30px;
        padding-bottom: 30px;
    }

    span{
        font-weight: 700;
    }

    .main02_text01{
        padding-bottom: 40px;
        font-size: 32px;
        font-weight: 500;
        color: #A6A900;
    }

    .main02_text02{
        width: 1250px;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 90px;
        line-height: 1.5em;
        font-size: 25px;
        font-weight: 400;
    }

    @media (max-width: 425px) {
        .main02_text01{
            max-width: 260px;
            margin-left: auto;
            margin-right: auto;
            font-size: 20px;
        }

        .main02_text02{
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
            font-size: 17px;
        }
    }
`