import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const About = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="About">
            <About_wrap>
                <Wrap>
                    <header className={`App-header ${scrollY > 2500 ? 'scrolled' : ''}`}>
                        <About_main01>
                            <p className="Ellopse"><img src="img/About_Ellopse.png" /></p>
                            <p><img src="img/about me.png" /></p>
                        </About_main01>
                        <About_main02>
                            <ul className="gitsite">
                                <li><a href="https://github.com/sonminji020115" target="_blank"><img src="img/gitsite.png" /></a></li>
                                <li><a href="https://github.com/sonminji020115" target="_blank"> https://github.com/sonminji020115</a></li>
                            </ul>
                            <ul className="eamil">
                                <li><a href="mailto:mson0432@gmail.com"><img src="img/mail.png" /></a></li>
                                <li><a href="mailto:mson0432@gmail.com">mson0432@gmail.com</a></li>
                            </ul>
                            <ul>
                                <li><img src="img/call.png" /></li>
                                <li>010-7549-4805</li>
                            </ul>
                            <ul className="kakao">
                                <li><a href="https://open.kakao.com/o/s09Pg0cg"><img src="img/kakao.png" /></a></li>
                                <li><a href="https://open.kakao.com/o/s09Pg0cg">https://open.kakao.com/o/s09Pg0cg</a></li>
                            </ul>
                        </About_main02>
                    </header>
                </Wrap>
                <About_main03>
                    <p><img src="img/Thankyouforreading.png" /></p>
                    <p><img src="img/Copyright2023.손민지.png" /></p>
                </About_main03>
            </About_wrap>
        </div>
    )
}

export default About;

const About_wrap = styled.div`
    background: #DAE2F8;
    background: -webkit-linear-gradient(to right, #DAE2F8, #F2F4F2, #F1F4E0);
    background: linear-gradient(to right, #DAE2F8, #F2F4F2, #F1F4E0);  
    background-size: cover;

    @media (max-width: 425px) {
        max-width: 425px;
    }

    @media (max-width: 375px) {
        max-width: 100%;
    }
`

const Wrap = styled.div`
    max-width: 1260px;
    height: 800px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 425px) {
        max-width: 425px;
    }
`

const About_main01 = styled.div`
    padding-top: 100px;
    padding-bottom: 60px;
    text-align: center;

    .Ellopse{
        margin-left: 220px;
        margin-bottom: 20px;
    }

    @media (max-width: 425px) {
        max-width: 425px;
        
        .Ellopse{
            margin-left: 280px;
            width: 8%;
        }
        
        img{
            width: 80%;
        }
    }
`

const About_main02 = styled.div`
    text-align: center;
    padding-bottom: 80px;

    .gitsite{
        cursor: pointer;
    }

    .gitsite a{
        color: #000;
        text-decoration: none;
    }

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .email{
        cursor: pointer;
    }

    .eamil a{
        color: #000;
        text-decoration: none;
    }

    .kakao{
        cursor: pointer;
    }

    .kakao a{
        color: #000;
        text-decoration: none;
    }

    li{
        margin-bottom: 20px;
        font-size: 32px;
        font-weight: 800;
        
        img{
            margin-top: 20px;
        }
    }

    img{
        margin-right: 30px;
    }

    @media (max-width: 425px) {
        max-width: 425px;

        ul{
            width: 170px;
            margin-left: auto;
            margin-right: auto;
            flex-wrap: wrap;
        }

        li{
            font-size: 16px;
            margin-left: auto;
            margin-right: auto;

            img{
                margin-left: auto;
                margin-right: auto;
                width: 40%;
            }
        }
    }
`

const About_main03 = styled.div`
    padding-top: 80px;
    padding-bottom: 10px;
    text-align: center;
    background-color: rgb(255, 255, 255, 0.5);

    img{
        margin-bottom: 50px;
    }

    @media (max-width: 425px) {
        max-width: 425px;

        img{
            padding-top: 0px;
            width: 90%;
        }
    }
`