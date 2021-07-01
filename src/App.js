import React from 'react';
import axios from 'axios';
import Results from './components/Results';
import Search from './components/Search';
import logo from './logo.svg';

class App extends React.Component {
  
  state = { resultsList: [] }

  onSearchSubmit = async term => {
    let url = "https://en.wikipedia.org/w/api.php"; 

    let params = {};
    if (typeof term === "string") {
      params = {
        action: "query",
        list: "search",
        srsearch: term,
        format: "json"
      };
    } else {
        params = {
          action: "query",
          list: "random",
          format: "json",
          rnlimit: "8"
      };
    };

    url = url + "?origin=*";
    Object.keys(params).forEach((key) => url += "&" + key + "=" + params[key]);

    const response = await axios.get(url)
    this.setState({ resultsList: response.data.query[params.list] });
  }

  render() {
    return (
      <div>
        <br />
        <h2 className="ui center aligned header">Wikipedia Viewer</h2>
        <div className="ui container">
          <Search onSearchSubmit={this.onSearchSubmit} />
          <br />
          <button  className="ui button" onClick={this.onSearchSubmit}>Random</button>
          <Results resultsList={this.state.resultsList} />
        </div>
      </div>
    );
  }
}

export default App;
