import styled from "styled-components";
import '../skills/skills.css'

import React, { useState, useRef, useEffect } from 'react';

const Skills = () => {
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
        <div className="Skills">
            <Skills_Wrap>
                <Wrap>
                    <header className={`App-header ${scrollY > 1100 ? 'scrolled' : ''}`}>
                        <FrontEnd>
                            <p>FrontEnd</p>
                            <ul>
                                <li><img src="img/html.png" /></li>
                                <li><img src="img/css.png" /></li>
                                <li><img src="img/javascript.png" /></li>
                                <li><img src="img/javajquery.png" /></li>
                                <li><img src="img/react.png" /></li>
                                <li><img src="img/typescript.png" /></li>
                                <li><img src="img/styled-components.png" /></li>
                            </ul>
                        </FrontEnd>
                        <Others>
                            <p>Others</p>
                            <ul>
                                <li><img src="img/photoshop.png" /></li>
                                <li><img src="img/illustrator.png" /></li>
                                <li><img src="img/Indesign.png" /></li>
                                <li><img src="img/figma.png" /></li>
                                <li><img src="img/github.png" /></li>
                                <li><img src="img/firebase.png" /></li>
                                <li><img src="img/scss.png" /></li>
                            </ul>
                        </Others>
                        <BackEnd>
                            <span>BackEnd</span>
                            <p><img src="img/node_js.png" /></p>
                        </BackEnd>
                        <Certificate>
                            <span>Certificate</span>
                            <p>GTQ Ptoshop 1급 · GTQ Illustrator 1급 · GTQ InDesign 1급</p>
                            <p>컴퓨터그래픽운용기능사</p>
                        </Certificate>
                        <div className="FrontEnd_modal">
                            <div className="HTML_modal">
                                <p>HTML</p>
                                <span>
                                    태그 사용과<br />
                                    각 태그에 맞는<br />
                                    내용을 잘 이해하고<br />
                                    있어요.</span>
                            </div>
                            <div className="CSS_modal">
                                <p>CSS</p>
                                <span>
                                    시각적 스타일과<br />
                                    애니메이션을<br />
                                    웹페이지에 추가<br />
                                    할 수 있어요.
                                </span>
                            </div>
                            <div className="JS_modal">
                                <p>JavaScript</p>
                                <span>
                                    사용자의 행동에<br />
                                    반응하게하고<br />
                                    웹요소에 접근하여<br />
                                    수정할 수 있어요.
                                </span>
                            </div>
                            <div className="jquery_modal">
                                <p>jQuery</p>
                                <span>
                                    여러 애니메이션<br />
                                    효과와 여러가지<br />
                                    이벤트 효과를<br />
                                    줄 수 있어요.
                                </span>
                            </div>
                            <div className="react_modal">
                                <p>React</p>
                                <span>
                                    async/await를<br />
                                    통해 api를 활용한<br />
                                    적이 있고 상태<br />
                                    관리를 할 수 있어요<br />
                                </span>
                            </div>
                            <div className="TS_modal">
                                <p>typeScrip</p>
                                <span>
                                    함수와 타입을<br />
                                    정의할 수 있고<br />
                                    react안에서<br />
                                    사용할 수 있어요<br />
                                </span>
                            </div>
                            <div className="styledComponents_modal">
                                <p className="styledComponents_txt_01">styled</p>
                                <p className="styledComponents_txt_02">components</p>
                                <span>
                                    리액트 안에서<br />
                                    styled-components을<br />
                                    활용해 다양한 스타일을<br />
                                    줄 수 있어요
                                </span>
                            </div>
                        </div>
                        <div className="Others_modal">
                            <div className="PS_modal">
                                <p>Photoshop</p>
                                <span>
                                    사진을 활용한<br />
                                    합성기능과<br />
                                    사진에 여러 효과를<br />
                                    줄 수 있어요
                                </span>
                            </div>
                            <div className="Ai_modal">
                                <p>Illustrator</p>
                                <span>
                                    펜툴을 활용해<br />
                                    일러스트를 그릴 수 있고<br />
                                    자유로운 사진<br />
                                    편집이 가능해요
                                </span>
                            </div>
                            <div className="ID_modal">
                                <p>InDesign</p>
                                <span>
                                    인쇄 및 책 화면을<br />
                                    만들 수 있고<br />
                                    자유로운 사진<br />
                                    사용이 가능해요
                                </span>
                            </div>
                            <div className="Figma_modal">
                                <p>Figma</p>
                                <span>
                                    pc,테블릿,모바일 등<br />
                                    여러 웹페이지<br />
                                    레이아웃을 유연하게<br />
                                    짤 수 있어요.
                                </span>
                            </div>
                            <div className="GitHub_modal">
                                <p>GitHub</p>
                                <span>
                                    프로젝트를 올리고<br />
                                    버전관리를 통해<br />
                                    체계적인<br />
                                    개발이 가능해요
                                </span>
                            </div>
                            <div className="firebase_modal">
                                <p>FireBase</p>
                                <span>
                                    만든 프로젝트를<br />
                                    사이트로<br />
                                    배포할 수 있어요.
                                </span>
                            </div>
                            <div className="scss_modal">
                                <p>SCSS</p>
                                <span>
                                    중복되는 스타일과<br />
                                    변수를 효율적으로<br />
                                    사용할 수 있도록<br />
                                    정리할 수 있어요.
                                </span>
                            </div>
                        </div>
                        <div className="BackEnd">
                            <div className="Node_modal">
                                <p>Node.js</p>
                                <span>
                                    HTTP에 요청을 보내고<br />
                                    응답을 받을 수 있어요<br />
                                    전체적인 흐름에 대해<br />
                                    이해하고 있어요.
                                </span>
                            </div>
                        </div>
                    </header>
                </Wrap>
            </Skills_Wrap>
        </div>
    )
}

export default Skills;

const Skills_Wrap = styled.div`
    padding-top: 80px;
    background: #6AA6F9;
    background: -webkit-linear-gradient(to right, #F1F7FF, #F1F7FF, #FBFEFA);
    background: linear-gradient(to right, #F1F7FF, #F1F7FF, #FBFEFA);  
    background-size: cover;

    @media (max-width: 425px) {
        max-width: 425px;
    }

    @media (max-width: 375px) {
        max-width: 100%;
    }
`

const Wrap = styled.div`
    position: relative;
    padding-left: 10px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 425px) {
        max-width: 425px;
    }
`

const FrontEnd = styled.div`
    padding-top: 80px;

    p{
        padding-bottom: 20px;
        font-size: 30px;
        font-weight: 800;
    }

    ul{
        margin-top: 10px;
        margin-left: -10px;
        display: flex;
    }

    li{
        margin-right: 30px;
        margin-bottom: 15px;
    }

    @media (max-width: 425px) {
        padding-top: 0px;
        padding-left: 50px;

        ul{
            flex-wrap: wrap;
        }

        img{
            width: 130px;
            height: 130px;
        }
    }

    @media (max-width: 375px) {
        img{
            width: 110px;
            height: 110px;
        }
    }
`

const Others = styled.div`
    p{
        padding-bottom: 20px;
        font-size: 40px;
        font-weight: 800;
    }

    ul{
        margin-top: 10px;
        margin-left: -10px;
        display: flex;
    }

    li{
        margin-right: 30px;
        margin-bottom: 15px;
    }

    @media (max-width: 425px) {
        padding-top: 0px;
        padding-left: 50px;

        ul{
            flex-wrap: wrap;
        }

        img{
            width: 130px;
            height: 130px;
        }

        p{
            font-size: 30px;
        }
    }

    @media (max-width: 375px) {
        img{
            width: 110px;
            height: 110px;
        }
    }
`

const BackEnd = styled.div`
    span{
        padding-bottom: 20px;
        font-size: 30px;
        font-weight: 800;
    }

    p{
        margin-top: 10px;
        padding-bottom: 10px;
    }

    @media (max-width: 425px) {
        padding-top: 0px;
        padding-left: 50px;

        ul{
            flex-wrap: wrap;
        }

        img{
            width: 130px;
            height: 130px;
        }
        span{
            font-size: 30px;
        }
    }

    @media (max-width: 375px) {
        img{
            width: 110px;
            height: 110px;
        }
    }
`

const Certificate = styled.div`
    padding-bottom: 60px;

    span{
        padding-bottom: 20px;
        font-size: 30px;
        font-weight: 800;
    }
    p{
        padding-top: 30px;
        font-size: 25px;
        font-weight: 500;
    }

    @media (max-width: 425px) {
        padding-top: 0px;
        padding-left: 50px;

        ul{
            flex-wrap: wrap;
        }

        p{
            padding-top: 30px;
            padding-right: 130px;
            font-size: 20px;
            font-weight: 500;
        }

        span{
            font-size: 30px;
        }
    }
`