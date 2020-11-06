import React from "react";
import { connect } from 'react-redux';

const ImageDetail = (props) => {
  console.log('ImageDetail', props)
  const { image, imageSelected } = props;
  const img = image || imageSelected;
  return (
    <div className="ui card">
      <div className="image">
        {(img) === undefined ? (
          <div className="ui placeholder">
            <div className="square image"></div>
          </div>
        ) : (
          <img alt="alt" src={img?.url_s} />
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
            {img?.id}
          </a>
        )}

        <div className="meta">
          {img === undefined ? (
            <div className="ui placeholder">
              <div className="very short line"></div>
            </div>
          ) : (
            <span className="date">{img?.date}</span>
          )}
        </div>
        <div className="description">{img === undefined ? "" : img?.title}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { image: state.selectedImage }
 }
 
export default connect(mapStateToProps)(ImageDetail);
