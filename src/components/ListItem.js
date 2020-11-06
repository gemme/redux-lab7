import React from "react";
const ListItem = (props) => {
  const { img } = props;
  if (img === undefined) {
    return (
      <div className="ui placeholder">
        <div className="image header">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="item" onClick={() => props.onSelectedImage(img)}>
      <img className="ui avatar image" alt={img.id} src={img.url_s} />

      <div className="content">
        <a className="header">
          {img.id}
        </a>
        <div className="description">{img.title}</div>
      </div>
    </div>
  );
};
export default ListItem;
