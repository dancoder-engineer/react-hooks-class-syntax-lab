import React from "react";
import { render } from "react-dom";

class Home extends React.Component{
render(props)
{  return (
    <div id="home">
      <h1 style={{ color: this.props.color }}>
        {this.props.username} is a Web Developer from {this.props.city}
      </h1>
    </div>
  );}
}

export default Home;
