import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the animation keyframes
const loop = keyframes`
  0% { transform: translate3D( 0%, 51%, 0 ) rotate(0deg); }
  5% { transform: translate3D( 8%, 31%, 0 ) rotate(18deg); }
  10% { transform: translate3D( 22%, 13%, 0 ) rotate(36deg); }
  15% { transform: translate3D( 40%, 2%, 0 ) rotate(54deg); }
  20% { transform: translate3D( 46%, 21%, 0 ) rotate(72deg); }
  25% { transform: translate3D( 50%, 47%, 0 ) rotate(90deg); }
  30% { transform: translate3D( 53%, 80%, 0 ) rotate(108deg); }
  35% { transform: translate3D( 59%, 98%, 0 ) rotate(125deg); }
  40% { transform: translate3D( 84%, 89%, 0 ) rotate(144deg); }
  45% { transform: translate3D( 92%, 68%, 0 ) rotate(162deg); }
  50% { transform: translate3D( 99%, 47%, 0 ) rotate(180deg); }
  55% { transform: translate3D( 97%, 21%, 0 ) rotate(198deg); }
  60% { transform: translate3D( 80%, 7%, 0 ) rotate(216deg); }
  65% { transform: translate3D( 68%, 25%, 0 ) rotate(234deg); }
  70% { transform: translate3D( 59%, 41%, 0 ) rotate(251deg); }
  75% { transform: translate3D( 50%, 63%, 0 ) rotate(270deg); }
  80% { transform: translate3D( 38%, 78%, 0 ) rotate(288deg); }
  85% { transform: translate3D( 21%, 92%, 0 ) rotate(306deg); }
  90% { transform: translate3D( 3%, 79%, 0 ) rotate(324deg); }
  100% { transform: translate3D( 0%, 51%, 0 ) rotate(360deg); }
`;

// Styled component for the glow balls
const Ball = styled.div`
  --delay: ${({ delay }) => delay || '0s'};
  --size: ${({ size }) => size || '0.4'};
  --speed: ${({ speed }) => speed || '20s'};

  aspect-ratio: 1;
  width: calc(150% * var(--size));
  
  background: linear-gradient(259.53deg, #0A3FFF 6.53%, #F55F0A 95.34%);
  filter: blur(10vw);
  
  border-radius: 50%;
  
  position: absolute;
  top: 0;
  left: 0;
  
  animation: ${loop} var(--speed) infinite linear;
  animation-delay: var(--delay);
  transform-origin: 50% 50%;
  
  opacity: 0.6;
`;

// Container for the glowing balls
const GlowContainer = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  position: fixed;
  z-index: 1;
  width: 100%;
  min-height: 100%;
  background: #0d0d0d;
  margin: 0;
`;

// Background component that includes multiple balls
const Background = () => {
	return (
		<GlowContainer>
			<Ball size="0.4" speed="20s" delay="0s" />
			<Ball size="0.6" speed="25s" delay="5s" />
			<Ball size="0.8" speed="30s" delay="10s" />
			<Ball size="1" speed="35s" delay="15s" />
			<Ball size="0.5" speed="40s" delay="20s" />
		</GlowContainer>
	);
};

export default Background;
