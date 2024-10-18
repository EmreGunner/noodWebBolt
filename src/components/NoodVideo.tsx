import React from 'react'
import styled from 'styled-components'

const VideoWrapper = styled.div`
  background-color: #83b775;
  border: 2px solid #e0e5ba;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`

const Button = styled.button`
  background-color: #4e9350;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: 'Scala Sans Bold Italic', sans-serif;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #83b775;
  }
`

const NoodVideo: React.FC = () => {
  return (
    <VideoWrapper>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/7zDc6364L8w?si=Qp_H355sqfLO5b2b"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Button>Watch More</Button>
    </VideoWrapper>
  )
}

export default NoodVideo
