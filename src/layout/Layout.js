import styled from "styled-components";
import Header from "../header/Header";

const Layout = () => {
    return(
        <Layout_wrap>
            <Header />
        </Layout_wrap>
    )
}

export default Layout;

const Layout_wrap = styled.div`
    position: fixed;
    top: 0;
    /* width: 100% */
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 101;
`