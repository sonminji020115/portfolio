import styled from "styled-components";

const Home = () => {

    return (
        <div className="Home">
            <Home_wrap>
                <Wrap>
                    <Home_main01>
                        <div className="main01_img">
                            <img src="img/home_main01_Ellipse.png" />
                        </div>
                        <Main01_Txt>
                            <p><span>학습</span>을 좋아하는 <span>성실</span>하고 <spna>끈기</spna>있는 <span>프론트엔드 개발자, 손민지</span>입니다.</p>
                        </Main01_Txt>
                    </Home_main01>
                    <Home_main02>
                        <div className="Home_main02_img">
                            <Main02_img01>
                                <img src="img/home_main02_Ellipse.png" />
                            </Main02_img01>
                            <Main02_img02>
                                <img src="img/home_main02_img02.png" />
                            </Main02_img02>
                        </div>
                        <div className="Main02_Ellipse">
                            <Main02_Ellipse01>
                                <img src="img/home_main02_Ellipse01.png" />
                            </Main02_Ellipse01>
                            <Main02_Ellipse02>
                                <img src="img/home_main02_Ellipse01.png" />
                            </Main02_Ellipse02>
                            <Main02_Ellipse03>
                                <img src="img/home_main02_Ellipse01.png" />
                            </Main02_Ellipse03>
                            <Main02_Ellipse04>
                                <img src="img/home_main02_Ellipse01.png" />
                            </Main02_Ellipse04>
                            <Main02_Ellipse05>
                                <img src="img/home_main02_Ellipse01.png" />
                            </Main02_Ellipse05>
                        </div>
                    </Home_main02>
                </Wrap>
            </Home_wrap>
        </div>
    )
}

export default Home;

const Home_wrap = styled.div`
    padding-top: 90px;
	width: 100%;
    background: #2D61E7;
    background: -webkit-linear-gradient(to right, #D5DFFA, #fff, #FFFFEA);
    background: linear-gradient(to right, #D5DFFA, #fff, #FFFFEA);  

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 425px) {
        width: 100%;
        padding-top: 75px;
        padding-bottom: 22px;
    }

    @media (max-width: 390px) {
        width: 100%;
    }

    @media (max-width: 320px) {
        width: 100%;
    }
`

const Wrap = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 425px) {
        max-width: 425px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 390px) {
        width: 100%;
    }

    @media (max-width: 320px) {
        width: 100%;
    }
`

const Home_main01 = styled.div`
    img{
        width: 20px;
        height: 20px;
        padding-left: 200px;

        @media (max-width: 425px) {
            width: 10px;
            height: 10px;
            padding-left: 68px;
        }
    }

    p{
        padding-left: 182px;
    }
    
    span{
        font-weight: 600;
    }

    @media (max-width: 425px) {
        p{
            width: 300px;
            padding-left: 50px;
    }

    @media (max-width: 390px) {
        margin-left: -20px;
    }
`
const Main01_Txt = styled.div`
    font-size: 30px;

    @media (max-width: 425px) {
        text-align: center;
        font-size: 20px;
    }
`

const Home_main02 = styled.div`
    position: relative;
`

const Main02_img01 = styled.div`
    text-align: center;

    img{
        width: 60%;
        padding-top: 30px;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 40px;
    }
    

    @media (max-width: 425px) {
        max-width: 425px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 390px) {
        width: 100%;
    }
`

const Main02_img02 = styled.div`
    img{
        position: absolute;
        width: 100%;
        height: auto;
        top: 310px;
        left: 0px;
    }


    @media (max-width: 425px) {
        position: absolute;
        width: 90%;
        height: auto;
        top: -180px;
        left: 25px;
    }
`
const Main02_Ellipse01 = styled.div`
    img{
        position: absolute;
        width: 50px;
        height: 50px;
        top: 230px;
        left: 245px;

        animation: motion 1s linear 0s infinite alternate;

        @keyframes motion {
            0% {margin-top: 0px;}
            100% {margin-top: 20px;}
        }

        @media (max-width: 425px) {
            width: 20px;
            height: 20px;
            top: 39px;
            left: 285px;
        }

        @media (max-width: 375px) {
            width: 20px;
            height: 20px;
            top: 39px;
            left: 245px;
        }

    }
`

const Main02_Ellipse02 = styled.div`
    img{
        position: absolute;
        width: 50px;
        height: 50px;
        top: 210px;
        right: 262px;

        animation: motion 1s linear 0s infinite alternate;

        @keyframes motion {
            0% {margin-top: 0px;}
            100% {margin-top: 20px;}
        }

        @media (max-width: 425px) {
            width: 15px;
            height: 15px;
            top: 69px;
            left: 310px;
        }

        @media (max-width: 375px) {
            width: 15px;
            height: 15px;
            top: 69px;
            left: 270px;
        }
    }        
`

const Main02_Ellipse03 = styled.div`
    img{
        position: absolute;
        width: 50px;
        height: 50px;
        top: 640px;
        right: 335px;

        animation: motion 1s linear 0s infinite alternate;

        @keyframes motion {
            0% {margin-top: 0px;}
            100% {margin-top: 20px;}
        }

        @media (max-width: 425px) {
            width: 15px;
            height: 15px;
            top: 190px;
            left: 90px;
        }

        @media (max-width: 375px) {
            width: 15px;
            height: 15px;
            top: 190px;
            left: 100px;
        }
    }        
`

const Main02_Ellipse04 = styled.div`
    img{
        position: absolute;
        width: 30px;
        height: 30px;
        top: 160px;
        right: 285px;

        animation: motion 1s linear 0s infinite alternate;

        @keyframes motion {
            0% {margin-top: 0px;}
            100% {margin-top: 20px;}
        }

        @media (max-width: 425px) {
            width: 15px;
            height: 15px;
            top: 181px;
            left: 313px;
        }

        @media (max-width: 375px) {
            width: 15px;
            height: 15px;
            top: 181px;
            left: 270px;
        }
    }    
`

const Main02_Ellipse05 = styled.div`
    img{
        position: absolute;
        width: 30px;
        height: 30px;
        top: 600px;
        left: 305px;
        animation: motion 1s linear 0s infinite alternate;

        @keyframes motion {
            0% {margin-top: 0px;}
            100% {margin-top: 20px;}
        }

        @media (max-width: 425px) {
            width: 15px;
            height: 15px;
            top: 56px;
            left: 123px;
        }

        @media (max-width: 375px) {
            width: 15px;
            height: 15px;
            top: 60px;
            left: 100px;
        }
    }
`