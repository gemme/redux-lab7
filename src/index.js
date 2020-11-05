import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import ImageDetail from "./components/ImageDetail";

const App = () => {
  return (
    <div className="ui grid">
      <div className="row">
        <div className="wide column">
          <SearchBar />
        </div>
      </div>
      <div className="row">
        <div className="nine wide column">
          <center>
            <ImageDetail />
          </center>
        </div>
        <div className="seven wide column">
          <ImageList />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
