import React from "react";
const ImageDetail = (props) => {
  const { image } = props;
  return (
    <div className="ui card">
      <div className="image">
        {image === undefined ? (
          <div className="ui placeholder">
            <div className="square image"></div>
          </div>
        ) : (
          <img alt="alt" src={image.url_s} />
        )}
      </div>
      <div className="content">
        {image === undefined ? (
          <div className="ui placeholder">
            <div className="header">
              <div className="very short line"></div>
              <div className="medium line"></div>
            </div>
          </div>
        ) : (
          <a href="/" className="header">
            {image.id}
          </a>
        )}

        <div className="meta">
          {image === undefined ? (
            <div className="ui placeholder">
              <div className="very short line"></div>
            </div>
          ) : (
            <span className="date">{image.date}</span>
          )}
        </div>
        <div className="description">{image === undefined ? "" : image.title}</div>
      </div>
    </div>
  );
};
export default ImageDetail;
