import { Link } from "react-router-dom";
import styled from "styled-components";

const HomePage = () => {
    return(
        <>
            <Header>
                <h1>이원준</h1>
                <Link to="/my">마이페이지</Link>
            </Header>
        </>
    )
};

export default HomePage;

const Header = styled.div`
    background-color: antiquewhite;
    display: flex;
`;