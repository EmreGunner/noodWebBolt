import React from "react" ;
import styled from "styled-components";


const StyledWrapper = styled.div` 

 .custom-card {
 
  .parent   {
    width: 700px !important;
    height: 450px !important;
    perspective: 1000px !important;
  }

  .example-card {
    height: 100% !important; 
    border-radius: 30px !important;
    background: linear-gradient(135deg, #83b775 0%, #4e9350 100%) !important;
    transition: all 0.5s ease-in-out !important;
    transform-style: preserve-3d !important;
    box-shadow: rgba(5, 71, 17, 0.2) 0px 20px 30px -10px !important;
  }

  .glass {
    transform-style: preserve-3d !important;
    position: absolute !important;
    inset: 10px !important;
    border-radius: 25px !important;
    border-top-right-radius: 100% !important;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.3) 100%) !important;
    transform: translate3d(0px, 0px, 25px) !important;
    border-left: 1px solid rgba(255, 255, 255, 0.3) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3) !important;
    transition: all 0.5s ease-in-out !important;
  }

  .content {
    padding: 50px 70px 0px 50px !important;
    transform: translate3d(0, 0, 30px) !important;
  }

  .content .title {
    display: block !important;
    color: #ffffff !important;
    font-weight: 900 !important;
    font-size: 32px !important;
    font-family: 'Scala Sans Bold Italic', sans-serif !important;
    margin-bottom: 24px !important;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1) !important;
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
    margin-top: 30px !important;
    border-radius: 15px !important;
    overflow: hidden !important;
    transform: translate3d(0, 0, 35px) !important;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2) !important;
    transition: all 0.3s ease-in-out !important;

    &:hover {
      transform: translate3d(0, -5px, 40px) !important;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3) !important;
    }
  }

  .bottom {
    padding: 30px !important;
    transform-style: preserve-3d !important;
    position: absolute !important;
    bottom: 20px !important;
    left: 20px !important;
    right: 20px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start !important;
    transform: translate3d(0, 0, 30px) !important;
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
            <span className="title">NOOD: Empower Your Digital Future</span>
            <span className="text">
              Develop skills, start side hustles, and launch businesses  with NOOD's expert-led courses and supportive community.
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
              <button className="social-button">
                <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" className="svg">
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
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
