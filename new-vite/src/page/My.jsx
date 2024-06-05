import styled from "styled-components";

const MyPage = () => {
    return(
        <>
            <Card>
                <Title>안녕하세요</Title>
                <Name>제 이름은 이원준입니다.</Name>
                <Dept>저는 건국대학교 컴퓨터공학과 학생입니다.</Dept>
                <Intro>비빔밥 동아리에서 프론트엔트 세션을 수강하고 있습니다.</Intro>
                <Test>1234</Test>
            </Card>
        </>
    )
};

export default MyPage;

const Card = styled.div`
    width: 600px;
    background-color: black;
    padding: 20px;
`

const Title = styled.div`
    color: yellow;
    text-align: center;
    font-size: 60px;
`

const Name = styled.div`
    color: white;
    text-align: center;
    font-size: 40px;
`

const Dept = styled.div`
    color: skyblue;
    text-align: center;
    font-size: 30px;
`
const Intro = styled.div`
    color: red;
    text-align: center;
    font-size: 40px;
`

const Test = styled.div`
    color: white;
    text-align: center;
    font-size: 60px;
`