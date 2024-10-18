import React from 'react'
import Container from './Container'

const YouTubeVideo: React.FC = () => {
  return (
    <Container className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-nood-green">Discover NOOD</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/your_video_id"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
    </Container>
  )
}

export default YouTubeVideo
