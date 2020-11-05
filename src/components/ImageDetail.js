import React from "react";
const ImageDetail = (props) => {
  const { img } = props;
  return (
    <div className="ui card">
      <div className="image">
        {img === undefined ? (
          <div className="ui placeholder">
            <div className="square image"></div>
          </div>
        ) : (
          <img alt="alt" src={img.url_s} />
        )}
      </div>
      <div className="content">
        {img === undefined ? (
          <div className="ui placeholder">
            <div className="header">
              <div className="very short line"></div>
              <div className="medium line"></div>
            </div>
          </div>
        ) : (
          <a href="/" className="header">
            {img.id}
          </a>
        )}

        <div className="meta">
          {img === undefined ? (
            <div className="ui placeholder">
              <div className="very short line"></div>
            </div>
          ) : (
            <span className="date">{img.date}</span>
          )}
        </div>
        <div className="description">{img === undefined ? "" : img.title}</div>
      </div>
    </div>
  );
};
export default ImageDetail;
