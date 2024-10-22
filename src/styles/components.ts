import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) => theme.spacing.large};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;
