import Movie from "./movie";
import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    name: {},
  };

  onSearchSubmit = async (e) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${e}&apikey=21193e36`
    );
    // console.log(response.data);

    response.data.Search.forEach(async (elemnet) => {
      const Response = await axios.get(
        `https://www.omdbapi.com/?i=${elemnet.imdbID}&apikey=21193e36`
      );
      console.log(Response.data);
    });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <Movie onSearchSubmit={this.onSearchSubmit} />
        {/* <Response temp={this.state.temp} /> */}
      </div>
    );
  }
}

export default App;
