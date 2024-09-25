import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List1 from "./components/List1";
import List2 from "./components/List2";
import List3 from "./components/List3";
import List4 from "./components/List4";
import List5 from "./components/List5";
import List6 from "./components/List6";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <List1></List1>
        <List2></List2>
        <List3></List3>
        <List4></List4>
        <List5></List5>
        <List6></List6>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
