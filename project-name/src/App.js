// import Contents from "./Contents";
// import Header from "./Header";
import { useEffect, useState } from "react";


const App = () => {
  // return (
  //   <>
  //     <Header/>
  //     <Contents/>
  //   </>
  // );

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("컴포넌트가 마운트 되었습니다.")
  }, []);

  useEffect(() => {
    console.log(`count가 ${count}입니다.`)
  }, [count]);

  const increment = () => setCount(count+1);
  const decrement = () => setCount(count-1);
  const reset = () => setCount(0);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={increment}>카운트 증가</button>
      <button onClick={decrement}>카운트 감소</button>
      <button onClick={reset}>리셋</button>
    </div>
  );
};



export default App;
