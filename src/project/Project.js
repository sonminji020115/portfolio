import { ReactComponent as Prev } from "../assets/prev_arrow.svg";
import { ReactComponent as Next } from "../assets/next_arrow.svg";

import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Project.css';

const Project = (props) => {
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

    const settings = {
        arrow: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
            <Div>
                <Next />
            </Div>
        ),
        prevArrow: (
            <DivPre>
                <Prev />
            </DivPre>
        ),
    };

    return (
        <Wrap>
            <Project_wrap>
                <header className={`App-header ${scrollY > 1900 ? 'scrolled' : ''}`}>
                    <Slider {...settings}>
                        {/* slick 라이브러리 적용, 상위태그에 display: inline-block; 적용되어있음. */}
                        <div className="Project_main01">
                            <a href="" target=""></a>
                            <img src="img/Greenly.png" />
                            <div className="Project_text">
                                <p className="Project_text01_01">개인프로젝트</p>
                                <p className="Project_text01_02">Greenly</p>
                                <p className="Project_text01_03">Tech</p>
                                <p className="Project_text01_04">HTML,CSS,Ract,javascript</p>
                                <p className="Project_text01_05">기여도</p>
                                <p className="Project_text01_06">100%</p>
                            </div>
                        </div>
                        <div className="Project_main02">
                            <a href="https://react-watcha-clone-teamp-d2639.firebaseapp.com/" target="_blank">
                                <img src="img/movie-api.png" />
                                <div className="Project_text02">
                                    <p className="Project_text02_01"> 팀 프로젝트</p>
                                    <p className="Project_text02_02">Atcha</p>
                                    <p className="Project_text02_03">Tech</p>
                                    <p className="Project_text02_04">HTML,CSS,React,javascript</p>
                                    <p className="Project_text02_05">기여도</p>
                                    <p className="Project_text02_06">25%</p>
                                    <p className="Project_text02_07">기여</p>
                                    <p className="Project_text02_08">
                                        레이아웃주기,api가져오기, 모달창,
                                        메인페이지 배너 및 상단부분, 오리지널 콘텐츠 모아보기 제작,
                                        파티 세부창, 네비게이션, 유튜브 연결
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="Project_main03">
                            <a href="https://type-todolist.firebaseapp.com/" target="_balnk">
                                <img src="img/todolist.png" />
                                <div className="Project_text03">
                                    <p className="Project_text03_01">TYPE-TODOLIST</p>
                                    <p className="Project_text03_02">TODOLIST</p>
                                    <p className="Project_text03_03">Tech</p>
                                    <p className="Project_text03_04">HTML,CSS,React,Typescript</p>
                                    <p className="Project_text03_05">기여도</p>
                                    <p className="Project_text03_06">100%</p>
                                </div>
                            </a>
                        </div>
                        <div className="Project_main04">
                            <a href="https://merry-kangaroo-fa8205.netlify.app/" target="_blank">
                                <img src="img/eidiya.png" />
                                <div className="Project_text04">
                                    <p className="Project_text04_01">이디야 리디자인</p>
                                    <p className="Project_text04_02">eidiya</p>
                                    <p className="Project_text04_03">Tech</p>
                                    <p className="Project_text04_04">HTML,CSS,JavaScript</p>
                                    <p className="Project_text04_05">기여도</p>
                                    <p className="Project_text04_06">100%</p>
                                </div>
                            </a>
                        </div>
                        <div className="Project_main05">
                            <a href="https://movie-list-a86cd.firebaseapp.com/" target="_blank">
                                <img src="img/movie-list.png" />
                                <div className="Project_text05">
                                    <p className="Project_text05_01">영화 리스트</p>
                                    <p className="Project_text05_02">movieList</p>
                                    <p className="Project_text05_03">Tech</p>
                                    <p className="Project_text05_04">HTML,CSS, React</p>
                                    <p className="Project_text05_05">기여도</p>
                                    <p className="Project_text05_06">100%</p>
                                </div>
                            </a>
                        </div>
                        <div className="Project_main06">
                            <a href="https://quiet-kashata-9a7fd3.netlify.app" target="_blank">
                                <img src="img/ulsan-tourist-site.png" />
                                <div className="Project_text06">
                                    <p className="Project_text06_01">울산 관광 웹사이트</p>
                                    <p className="Project_text06_02">ulsan tourist site</p>
                                    <p className="Project_text06_03">Tech</p>
                                    <p className="Project_text06_04">HTML,CSS</p>
                                    <p className="Project_text06_05">기여도</p>
                                    <p className="Project_text06_06">100%</p>
                                </div>
                            </a>
                        </div>
                        <div className="Project_main07">
                            <a href="https://ephemeral-cuchufli-d03f62.netlify.app/" target="_blank">
                                <img src="img/booklist.png" />
                                <div className="Project_text06">
                                    <p className="Project_text07_01">도서리스트</p>
                                    <p className="Project_text07_02">도서리스트</p>
                                    <p className="Project_text07_03">Tech</p>
                                    <p className="Project_text07_04">HTML,CSS</p>
                                    <p className="Project_text07_05">기여도</p>
                                    <p className="Project_text07_06">100%</p>
                                </div>
                            </a>
                        </div>
                    </Slider>
                </header>
            </Project_wrap>
        </Wrap>
    )
}

export default Project;

const Wrap = styled.div`
    background: #6AA6F9;
    background: -webkit-linear-gradient(to right, #F1F7FF, #F1F7FF, #FBFEFA);
    background: linear-gradient(to right, #F1F7FF, #F1F7FF, #FBFEFA);  
    background-size: cover;
    padding-top: 40px;
    padding-bottom: 100px;


    @media (max-width: 425px) {
        height: 380px;
        padding-top: 0px;
        padding-bottom: 0px;
    }

    @media (max-width: 375px) {
        max-width: 100%;
    }
`

const Project_wrap = styled.div`
    max-width: 1260px;
    height: 630px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 425px) {
        max-width: 320px;
    }
`

const Div = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 16px;
    z-index: 99;
    text-align: right;
    line-height: 30px;
`;

const DivPre = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    left: 16px;
    z-index: 99;
    text-align: left;
    line-height: 30px;
`;

