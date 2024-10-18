import React from "react" ;
import styled from "styled-components";


const StyledWrapper = styled.div` 

 .custom-card {
 
  .parent   {
    width: 100% !important;
    max-width: 500px !important;
    aspect-ratio: 5 / 4 !important;
    perspective: 1000px !important;
  }

  .example-card {
    height: 100% !important; 
    border-radius: 1.5rem !important;
    background: linear-gradient(135deg, #83b775 0%, #4e9350 100%) !important;
    transition: all 0.5s ease-in-out !important;
    transform-style: preserve-3d !important;
    box-shadow: rgba(5, 71, 17, 0.2) 0px 1rem 1.5rem -0.5rem !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    padding: 1.5rem !important;
  }

  .glass {
    transform-style: preserve-3d !important;
    position: absolute !important;
    inset: 0.5rem !important;
    border-radius: 1.25rem !important;
    border-top-right-radius: 100% !important;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%) !important;
    transform: translate3d(0px, 0px, 1.25rem) !important;
    border-left: 1px solid rgba(255, 255, 255, 0.2) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
    transition: all 0.5s ease-in-out !important;
  }

  .content {
    transform: translate3d(0, 0, 30px) !important;
    z-index: 1 !important;
  }

  .content .title {
    display: block !important;
    color: #ffffff !important;
    font-weight: 900 !important;
    font-size: 36px !important;
    font-family: 'Scala Sans Bold Italic', sans-serif !important;
    margin-bottom: 20px !important;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2) !important;
  }

  .content .text {
    display: block !important;
    color: #ffffff !important;
    font-size: 18px !important;
    font-family: 'Scala Sans Roman', sans-serif !important;
    line-height: 1.6 !important;
    margin-bottom: 30px !important;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1) !important;
  }

  .video-container {
    margin-top: 20px !important;
    border-radius: 15px !important;
    overflow: hidden !important;
    transform: translate3d(0, 0, 35px) !important;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2) !important;
    transition: all 0.3s ease-in-out !important;
    aspect-ratio: 16 / 9 !important;
    width: 100% !important;
    z-index: 1 !important;

    &:hover {
      transform: translate3d(0, -5px, 40px) !important;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3) !important;
    }
  }

  .bottom {
    transform-style: preserve-3d !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transform: translate3d(0, 0, 30px) !important;
    margin-top: 20px !important;
    z-index: 1 !important;
  }

  .social-buttons-container {
    display: flex !important;
    gap: 15px !important;
    transform-style: preserve-3d !important;
  }

  .social-buttons-container .social-button {
    width: 40px !important;
    height: 40px !important;
    padding: 8px !important;
    background: rgba(255, 255, 255, 0.9) !important;
    border-radius: 50% !important;
    border: none !important;
    display: grid !important;
    place-content: center !important;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1) !important;
    transition: all 0.3s ease-in-out !important;
    cursor: pointer !important;
  }

  .social-buttons-container .social-button .svg {
    width: 20px !important;
    fill: #4e9350 !important;
  }

  .social-buttons-container .social-button:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2) !important;
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
    backdrop-filter: blur(5px) !important;
    background: rgba(255, 255, 255, 0.1) !important;
    transition: all 0.5s ease-in-out !important;
  }

  .logo .circle1 {
    width: 200px !important;
    transform: translate3d(0, 0, 20px) !important;
    top: 10px !important;
    right: 10px !important;
  }

  .logo .circle2 {
    width: 160px !important;
    transform: translate3d(0, 0, 40px) !important;
    top: 15px !important;
    right: 15px !important;
    backdrop-filter: blur(2px) !important;
    transition-delay: 0.4s !important;
  }

  .logo .circle3 {
    width: 120px !important;
    transform: translate3d(0, 0, 60px) !important;
    top: 20px !important;
    right: 20px !important;
    transition-delay: 0.8s !important;
  }

  .logo .circle4 {
    width: 80px !important;
    transform: translate3d(0, 0, 80px) !important;
    top: 25px !important;
    right: 25px !important;
    transition-delay: 1.2s !important;
  }

  .logo .circle5 {
    width: 50px !important;
    transform: translate3d(0, 0, 100px) !important;
    top: 35px !important;
    right: 35px !important;
    display: grid !important;
    place-content: center !important;
    transition-delay: 1.6s !important;
  }

  .logo .circle5 .svg {
    width: 25px !important;
    fill: white !important;
  }

  .parent:hover .example-card {
    transform: rotate3d(1, 1, 0, 15deg) !important;
    box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px !important;
  }

  .parent:hover .example-card .social-buttons-container .social-button {
    transform: translateY(-5px) !important;
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
            <span className="text">
            </span>
            <div className="video-container">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/7zDc6364L8w?si=Qp_H355sqfLO5b2b"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="bottom">
            <div className="social-buttons-container">
              <button className="social-button">
                <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                </svg>
              </button>
              <button className="social-button">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="svg">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </StyledWrapper>
  ) ;
} ;

export default Card ;
