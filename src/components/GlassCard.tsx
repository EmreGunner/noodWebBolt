import React from 'react';
import styled from 'styled-components';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const StyledCard = styled.div`
  background: linear-gradient(135deg, #83b775 0%, #4e9350 100%);
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: rgba(5, 71, 17, 0.2) 0px 1rem 1.5rem -0.5rem;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: all 0.5s ease-in-out;

  &:before {
    content: '';
    position: absolute;
    inset: 0.5rem;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%);
    border-radius: 1.25rem;
    border-top-right-radius: 100%;
    transform: translate3d(0px, 0px, 1.25rem);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  &:hover {
    transform: scale(1.05) rotateX(10deg) rotateY(10deg);
  }
`;

const GlassCard: React.FC<GlassCardProps> = ({ children, className }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export default GlassCard;
