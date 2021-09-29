import React from "react";
import Aloha from "./components/Aloha";
import Clicker from "./components/Clicker";
import Image from "./components/Image";

function App() {
  return <React.Fragment>
    <Clicker />
    <Aloha name="Андрей" isGreeting/>
    <Image alt="img" src="http://www.funfeel.net/wp-content/uploads/2017/11/jeltaya-sobaka-polnopravnaya-hozyayka-2018-goda.jpg"/>
  </React.Fragment>
}

export default App;