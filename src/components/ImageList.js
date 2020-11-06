import React from "react";
import ListItem from "./ListItem";
const ImageList = (props) => {
  return (
    <div className="ui relaxed divided selection list">
      {props.images.map((image) =>{
        return <ListItem key={image.id} img={image} onSelectedImage={props.onSelectedImage}/>
      })}
    </div>
  );
};
export default ImageList;
