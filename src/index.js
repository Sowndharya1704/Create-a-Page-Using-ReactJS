import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Component/header';
import Content from './Component/content';
import Footer from './Component/footer';
import './index.css';


function MyApp(){
  return(
    <div>
    <Header/>
    <Content/>
    <Footer/>

  </div>
  )
}

ReactDOM.render(<MyApp/>,document.getElementById("root"));