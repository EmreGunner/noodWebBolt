import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #83b775; /* Light Green */
  border: 2px solid #e0e5ba; /* Accent Green */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h2`
  font-family: 'Scala Sans Roman', sans-serif;
  font-size: 1.5rem;
  color: #534b4e; /* Dark Grey */
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-family: 'Scala Sans Roman', sans-serif;
  color: #534b4e;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const VideoWrapper = styled.div`
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

const Button = styled.button`
  background-color: #4e9350; /* Nood Green */
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: 'Scala Sans Bold Italic', sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #83b775;
  }
`;

const ExampleCard: React.FC = () => {
  return (
    <CardContainer>
      <Title>What is NOOD?</Title>
      <Text>
        NOOD is a platform focused on empowering Moroccan youth by providing educational resources to help them develop skills, start side hustles, or launch businesses. Established three years ago, it began as an online community and is now expanding to include a physical office for consultations and co-working. NOOD aims to motivate people to take action in their lives, reflected in its name, which symbolizes making meaningful changes.
      </Text>
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
      </VideoWrapper>
      <Button>Watch More</Button>
    </CardContainer>
  );
};

export default ExampleCard;
