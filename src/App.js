import './App.css';
import styled from "styled-components";

import About from './about/About';
import Home from './home/Home';
import Layout from './layout/Layout';
import Profile from './porfile/Profile';
import Project from './project/Project';
import Skills from './skills/Skills';

import React, { useRef, useState, useEffect } from 'react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

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

  return (
    <div className="App">
      <Arrow>
        <nav>
          <ul>
            <li className='Section1'>
              <img src="img/bottom_arrow.png" alt="Go to Section 1" onClick={() => scrollToSection(section1Ref, - 40)} />
            </li>
            <li className='Section2'>
              <img src="img/bottom_arrow.png" alt="Go to Section 2" onClick={() => scrollToSection(section2Ref, - 50)} />
            </li>
            <li className='Section3'>
              <img src="img/bottom_arrow.png" alt="Go to Section 3" onClick={() => scrollToSection(section3Ref, -200)} />
            </li>
            <li className='Section4'>
              <img src="img/bottom_arrow.png" alt="Go to Section 4" onClick={() => scrollToSection(section4Ref, 0)} />
            </li>
            <li className='Section5'>
              <img src="img/top_arrow.png" alt="Go to Section 5" onClick={() => scrollToSection(section5Ref)} />
            </li>
          </ul>
        </nav>
      </Arrow>

      {/* 각 섹션 */}
      <Layout />
      <Home />
      <section ref={section1Ref}>
          <Profile />
      </section>
      <section ref={section2Ref}>
        <Skills />
      </section>
      <section ref={section3Ref}>
        <Project />
      </section>
      <section ref={section4Ref}>
        <About />
      </section>
      <section ref={section5Ref}>
        <Layout />
      </section>
    </div>
  );
}

export default App;

const Arrow = styled.div`{
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;

    li{
      position: absolute;
      margin-right: -570px;
      top: 830px;
      right: 50%;
      background-color: rgba(0,0,0,0.2);
      padding: 27px 2px 20px 2px;
      border-radius: 40px;
      text-align: center;
      width: 68px;
      cursor: pointer;
      z-index: 100;
    }

    @media (max-width: 320px) {
      li{
        padding: 23px 0px 17px 0px;
    }
  }

  .Section1{
    top: 800px;

    @media (max-width: 425px) {
      top: 360px;
      right: 590px;
    }
  }

  .Section2{
    top: 1750px;

    @media (max-width: 425px) {
      top: 1300px;
      right: 590px;
    }

    @media (max-width: 375px) {
      top: 1250px;
      right: 590px;
    }
  }

  .Section3{
    top: 2530px;

    @media (max-width: 425px) {
      top: 3142px;
      right: 590px;
    }

    @media (max-width: 375px) {
      top: 2950px;
      right: 590px;
    }
  }

  .Section4{
    top: 3450px;

    @media (max-width: 425px) {
      top: 3531px;
      right: 590px;
    }

    @media (max-width: 375px) {
      top: 3340px;
      right: 590px;
    }
  }

  .Section5{
    padding: 15px 3px 10px 3px;
    top: 4310px;

    @media (max-width: 425px) {
      top: 4612px;
      right: 590px;
    }

    @media (max-width: 375px) {
      top: 4380px;
      right: 590px;
    }
  }
`