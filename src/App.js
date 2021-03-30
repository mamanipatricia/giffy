import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

function App() {
  //eslint-disable-line
  return (
    <div className="App">
      <section className="App-content">
        <h1>APP</h1>
        <Link to="/gif/panda">Gif de Pandas</Link>
        <Link to="/gif/bag">Gif de Bag</Link>
        <Link to="/gif/Bolivia">Gif de Bolivia</Link>
        <Link to="/gif/rosa">Gif de Rosa</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
        {/* <ListOfGifs keyword={"potato"} /> */}
      </section>
    </div>
  );
}

/*
hooks: give functionality to our components
 */
export default App;
