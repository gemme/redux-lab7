import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import ImageDetail from "./components/ImageDetail";
import {executeSearch} from './components/util';

const App = () => {
  const [imageSelected, setImageSelected] = useState(undefined);
  const [images, setImages] = useState([]);
  useEffect(async () => {
    const data = await executeSearch('dog');
    //images: response.data.photos.photo,
    //selectedImage: response.data.photos.photo[0]
    setImages(data.photos.photo);
    setImageSelected(data.photos.photo[0]);
  }, []);

  const searchData = async(value) => {
    const data = await executeSearch(value);
    //images: response.data.photos.photo,
    //selectedImage: response.data.photos.photo[0]
    setImages(data.photos.photo);
  }
  const onSelectedImage = image => {
    setImageSelected(image);
  }
  return (
    <div className="ui grid">
      <div className="row">
        <div className="wide column">
          <SearchBar searchData={searchData}/>
        </div>
      </div>
      <div className="row">
        <div className="nine wide column">
          <center>
            <ImageDetail image={imageSelected}/>
          </center>
        </div>
        <div className="seven wide column">
          <ImageList images={images} onSelectedImage={onSelectedImage}/>
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
