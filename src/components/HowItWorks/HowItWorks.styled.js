import styled, { keyframes } from 'styled-components';

import menuHoverArrow from 'img/svg/menu-arrow.svg';

export const HowItWorksSection = styled.section`
  position: relative;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 42px;
  }

  @media screen and (min-width: 1280px) {
    padding: 55px;
  }
`;

export const SectionWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 1280px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1280px) {
    padding-right: 70px;
    margin-bottom: 80px;
  }
`;

export const SectionTitle = styled.h2`
  width: 172px;
  color: var(--main-color);
  font-family: var(--title-font-family);
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px var(--main-color);
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin: 0;
    letter-spacing: 3.5px;
    width: 400px;
    font-size: 55px;
    -webkit-text-stroke: 2px var(--main-color);
  }

  @media screen and (min-width: 1280px) {
    font-size: 70px;
  }
`;

export const SectionSubTitle = styled.span`
  font-family: var(--secondary-font-family);
  font-size: 42px;
  -webkit-text-stroke: 0;
  letter-spacing: 2px;

  color: var(--accent-color);

  @media screen and (min-width: 768px) {
    font-size: 70px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 100px;
  }
`;

export const PageNavigation = styled.ul`
  color: var(--main-color);
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 1.8px;
  display: flex;
  flex-direction: column;
  gap: 9px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    gap: 10px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

const arrowAnimation = keyframes`
  0%{
    stroke-dashoffset: 435;
  }
  100% {
    /* closing the offset makes the line appear to be drawn-in */
    stroke-dashoffset: 0;
  }
`;

export const PageNavigationItem = styled.li`
  position: relative;
  z-index: 1;

  &::after {
    content: url(${menuHoverArrow});
    opacity: 0;
    position: absolute;
    bottom: -10px;
    left: -6px;
    width: 250px;
    z-index: -1;
    stroke-dasharray: 435;

    @media screen and (min-width: 768px) {
      bottom: -12px;
      left: -8px;
      width: 300px;
    }

    @media screen and (min-width: 1280px) {
      bottom: -14px;
      left: -10px;
      width: 350px;
    }
  }

  &:hover::after,
  &:focus::before {
    opacity: 1;
    animation-name: ${arrowAnimation};
    animation-duration: 1.5s;
    animation-timing-function: ease;
    animation-iteration-count: 1;
  }
`;

export const VideoLimiter = styled.div`
  margin: 0 auto;
  max-width: 640px;

  @media screen and (min-width: 768px) {
    max-width: 960px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const VideoBox = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);
`;
