import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  .custom-card {
    .parent {
      width: 600px !important; // Increased width
      height: 400px !important; // Increased height
      perspective: 1000px !important;
    }

    .example-card {
      height: 100% !important;
      border-radius: 50px !important;
      background: linear-gradient(135deg, #83b775 0%, #4e9350 100%) !important; // Updated to NOOD colors
      transition: all 0.5s ease-in-out !important;
      transform-style: preserve-3d !important;
      box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px !important;
    }

    .glass {
      transform-style: preserve-3d !important;
      position: absolute !important;
      inset: 8px !important;
      border-radius: 55px !important;
      border-top-right-radius: 100% !important;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%) !important;
      transform: translate3d(0px, 0px, 25px) !important;
      border-left: 1px solid white !important;
      border-bottom: 1px solid white !important;
      transition: all 0.5s ease-in-out !important;
    }

    .content {
      padding: 30px 60px 0px 30px !important;
      transform: translate3d(0, 0, 26px) !important;
    }

    .content .title {
      display: block !important;
      color: #534b4e !important; // Dark Grey
      font-weight: 900 !important;
      font-size: 24px !important;
      font-family: 'Scala Sans Bold Italic', sans-serif !important;
    }

    .content .text {
      display: block !important;
      color: #534b4e !important; // Dark Grey
      font-size: 16px !important;
      margin-top: 20px !important;
      font-family: 'Scala Sans Roman', sans-serif !important;
    }

    .video-container {
      margin-top: 20px !important;
      border-radius: 10px !important;
      overflow: hidden !important;
      transform: translate3d(0, 0, 26px) !important;
    }

    .bottom {
      padding: 10px 12px !important;
      transform-style: preserve-3d !important;
      position: absolute !important;
      bottom: 20px !important;
      left: 20px !important;
      right: 20px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      transform: translate3d(0, 0, 26px) !important;
    }

    .bottom .view-more {
      display: flex !important;
      align-items: center !important;
      width: 40% !important;
      justify-content: flex-end !important;
      transition: all 0.2s ease-in-out !important;
    }

    .bottom .view-more:hover {
      transform: translate3d(0, 0, 10px) !important;
    }

    .bottom .view-more .view-more-button {
      background: #4e9350 !important; // Nood Green
      border: none !important;
      color: white !important;
      font-weight: bolder !important;
      font-size: 14px !important;
      padding: 8px 16px !important;
      border-radius: 20px !important;
      font-family: 'Scala Sans Bold Italic', sans-serif !important;
    }

    // ... (keep other styles as they are)
  }
`;

const Card = () => {
  return (
    <StyledWrapper>
      <div className="custom-card">
        <div className="parent">
          <div className="example-card">
            <div className="glass" />
            <div className="content">
              <span className="title">NOOD: Empower Your Digital Future</span>
              <span className="text">
                Develop skills, start side hustles, and launch businesses with NOOD's expert-led courses and supportive community.
              </span>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/7zDc6364L8w?si=Qp_H355sqfLO5b2b"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="bottom">
              <div className="view-more">
                <button className="view-more-button">Watch More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Card;
