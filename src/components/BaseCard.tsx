import React from 'react';
import styled from 'styled-components';

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
}

const StyledCard = styled.div`
  .card {
    position: relative;
    width: 100%;
    max-width: 600px;
    aspect-ratio: 16 / 9;
    perspective: 1000px;
  }

  .card-inner {
    height: 100%;
    width: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }

  .card:hover .card-inner {
    transform: rotateY(10deg) rotateX(10deg);
  }

  .card-content {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
  }

  .glass {
    position: absolute;
    inset: 0.5rem;
    border-radius: 1.25rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const BaseCard: React.FC<BaseCardProps> = ({ children, className }) => {
  return (
    <StyledCard className={className}>
      <div className="card">
        <div className="card-inner">
          <div className="card-content">
            <div className="glass" />
            {children}
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default BaseCard;
