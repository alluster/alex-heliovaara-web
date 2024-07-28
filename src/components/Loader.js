import styled, { keyframes } from 'styled-components';
import React from 'react';

const moveUp = keyframes`
    0% { 
		transform: translateY(0); 
 
		}
	90% { 
		transform: translateY(0); 
 
		}
    100% { 
		transform: translateY(-100%);  
		display: none;
	}
`;
const Bg = styled.div`
	background-color: white;
	height: calc(100vh + 50vh);
	display: flex;
	flex-direction: column;
	margin-left: auto; 
  	margin-right: auto; 
	align-self: center;
    width: 200vw;
    z-index: 100000000;
    top: 0;
	justify-content: center;
	align-items: center;
	position: relative;
	transform: translateX(-50%);
	margin-left: auto; 
  	margin-right: auto; 

	border-bottom-left-radius: 100vw 200px;
    border-bottom-right-radius: 100vw 200px;  
`;
const Content = styled.div`
	margin-top: -50vh;

`;

const AnimationContainer = styled.div`
	margin-top: -2px;
	display: flex;
	flex-direction: column;
	margin-left: auto; 
  	margin-right: auto; 
	align-self: center;
	height: inherit;
    width: 200vw;
    z-index: 100000000;
	// height: calc(100vh + 50vh);
	left: 50%;
	position: fixed;
    top: 0;
	justify-content: center;
	align-items: center;
	animation: ${moveUp} 3s forwards;
		
`;

const Loader = ({ children }) => {
	return (
		<AnimationContainer>
			<Bg >
				<Content>
					{children}
				</Content>
			</Bg>
		</AnimationContainer>

	);
};
export default Loader;