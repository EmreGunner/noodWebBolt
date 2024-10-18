import React from "react" ;
import styled from "styled-components";


const StyledWrapper = styled.div` 

 .custom-card {
 
  .parent   {
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
    padding: 40px 60px 0px 40px !important;
    transform: translate3d(0, 0, 26px) !important;
  }

  .content .title {
    display: block !important;
    color: #534b4e !important; // Dark Grey
    font-weight: 900 !important;
    font-size: 28px !important;
    font-family: 'Scala Sans Bold Italic', sans-serif !important;
    margin-bottom: 20px !important;
  }

  .content .text {
    display: block !important;
    color: #534b4e !important; // Dark Grey
    font-size: 16px !important;
    font-family: 'Scala Sans Roman', sans-serif !important;
    line-height: 1.5 !important;
    margin-bottom: 20px !important;
  }

  .video-container {
    margin-top: 20px !important;
    border-radius: 10px !important;
    overflow: hidden !important;
    transform: translate3d(0, 0, 26px) !important;
  }

  .bottom {
    padding: 20px !important;
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
    padding: 10px 20px !important;
    border-radius: 20px !important;
    font-family: 'Scala Sans Bold Italic', sans-serif !important;
  }

  .bottom .view-more .svg {
    fill: none !important;
    stroke: #00c37b !important;
    stroke-width: 3px !important;
    max-height: 15px !important;
  }

  .bottom .social-buttons-container {
    display: flex !important;
    gap: 10px !important;
    transform-style: preserve-3d !important;
  }

  .bottom .social-buttons-container .social-button {
    width: 30px !important;
    aspect-ratio: 1 !important;
    padding: 5px !important;
    background: rgb(255, 255, 255) !important;
    border-radius: 50% !important;
    border: none !important;
    display: grid !important;
    place-content: center !important;
    box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px !important;
  }

  .bottom .social-buttons-container .social-button:first-child {
    transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s !important;
  }

  .bottom .social-buttons-container .social-button:nth-child(2) {
    transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s !important;
  }

  .bottom .social-buttons-container .social-button:nth-child(3) {
    transition: transform 0.2s ease-in-out 0.8s, box-shadow 0.2s ease-in-out 0.8s !important;
  }

  .bottom .social-buttons-container .social-button .svg {
    width: 15px !important;
    fill: #00894d !important;
  }

  .bottom .social-buttons-container .social-button:hover {
    background: black !important;
  }

  .bottom .social-buttons-container .social-button:hover .svg {
    fill: white !important;
  }

  .bottom .social-buttons-container .social-button:active {
    background: rgb(255, 234, 0) !important;
  }

  .bottom .social-buttons-container .social-button:active .svg {
    fill: black !important;
  }

  .logo {
    position: absolute !important;
    right: 0 !important;
    top: 0 !important;
    transform-style: preserve-3d !important;
  }

  .logo .circle {
    display: block !important;
    position: absolute !important;
    aspect-ratio: 1 !important;
    border-radius: 50% !important;
    top: 0 !important;
    right: 0 !important;
    box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px !important;
    -webkit-backdrop-filter: blur(5px) !important;
    backdrop-filter: blur(5px) !important;
    background: rgba(0, 249, 203, 0.2) !important;
    transition: all 0.5s ease-in-out !important;
  }

  .logo .circle1 {
    width: 170px !important;
    transform: translate3d(0, 0, 20px) !important;
    top: 8px !important;
    right: 8px !important;
  }

  .logo .circle2 {
    width: 140px !important;
    transform: translate3d(0, 0, 40px) !important;
    top: 10px !important;
    right: 10px !important;
    -webkit-backdrop-filter: blur(1px) !important;
    backdrop-filter: blur(1px) !important;
    transition-delay: 0.4s !important;
  }

  .logo .circle3 {
    width: 110px !important;
    transform: translate3d(0, 0, 60px) !important;
    top: 17px !important;
    right: 17px !important;
    transition-delay: 0.8s !important;
  }

  .logo .circle4 {
    width: 80px !important;
    transform: translate3d(0, 0, 80px) !important;
    top: 23px !important;
    right: 23px !important;
    transition-delay: 1.2s !important;
  }

  .logo .circle5 {
    width: 50px !important;
    transform: translate3d(0, 0, 100px) !important;
    top: 30px !important;
    right: 30px !important;
    display: grid !important;
    place-content: center !important;
    transition-delay: 1.6s !important;
  }

  .logo .circle5 .svg {
    width: 20px !important;
    fill: white !important;
  }

  .parent:hover .example-card {
    transform: rotate3d(1, 1, 0, 30deg) !important;
    box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px !important;
  }

  .parent:hover .example-card .bottom .social-buttons-container .social-button {
    transform: translate3d(0, 0, 50px) !important;
    box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px !important;
  }

  .parent:hover .example-card .logo .circle2 {
    transform: translate3d(0, 0, 60px) !important;
  }

  .parent:hover .example-card .logo .circle3 {
    transform: translate3d(0, 0, 80px) !important;
  }

  .parent:hover .example-card .logo .circle4 {
    transform: translate3d(0, 0, 100px) !important;
  }

  .parent:hover .example-card .logo .circle5 {
    transform: translate3d(0, 0, 120px) !important;
  }
    }
` ;


const Card = () => {
  return (
    <StyledWrapper>
       <div className="custom-card">
      <div className="parent">
        <div className="example-card">
          <div className="logo">
            <span className="circle circle1" />
            <span className="circle circle2" />
            <span className="circle circle3" />
            <span className="circle circle4" />
            <span className="circle circle5">
            <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className="svg"
>

    <path
        d="M100,30 C140,30 170,60 170,100 C170,140 140,170 100,170 C60,170 30,140 30,100 C30,60 60,30 100,30 Z"
        fill="#ffffff"
    />

    <circle cx="70" cy="60" r="10" fill="#ffffff"/>
    <circle cx="130" cy="60" r="10" fill="#ffffff"/>
</svg>


            </span>
          </div>
          <div className="glass" />
          <div className="content">
            <span className="title">NOOD: Empower Your Digital Future</span>
            <span className="text">
              Develop skills, start side hustles, and launch businesses  with NOOD's expert-led courses and supportive community.
            </span>
            <div className="video-container">
              <iframe
                width="100%"
                height="180"
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
  ) ;
} ;

export default Card ;
