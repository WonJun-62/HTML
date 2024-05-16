import Item from "./Item";

const Contents = () => {
    const ColorArr = ["빨강", "주황", "노랑", "초록", "파랑"];

    return(
        <>
            {ColorArr.map((item) => {
                return <Item name = {item}/>
            })}
        </>
        
    );
};

export default Contents;