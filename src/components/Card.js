
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { device } from '../device';

const CardContainer = styled(Link)`
  	box-sizing: border-box;
  	-moz-box-sizing: border-box;
  	-webkit-box-sizing: border-box;
  	display: flex;
  	flex-direction: column;
  	// max-width: 390px;
	min-width: 390px;
  	flex: 1;
  	margin-bottom: 20px;
//   width: calc(50% - 20px);

  @media ${device.laptop} {
    min-width: 390px;
	max-width: 100vw;
    // width: 100%;
	// height: 100%;
    // margin: 1%;
    // min-height: 100%;
    // margin-bottom: 40px;
    // overflow: hidden; /* Ensure no overflow */
  }
`;



const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;

  &:hover {
	transform: scale(1.01);
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1); // Adjust the alpha value for transparency
      z-index: 1; // Ensure overlay is above the image
    }
  }
`;
const LogoImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2; // Ensure logo is above the overlay
  opacity: 0; // Initially hide the logo
  transition: opacity 0.2s ease;
  pointer-events:none
 
`;
const CardImageContainer = styled.div`
	border-radius: 4px;
	height: auto;
	width: auto;
	overflow: hidden;
	position: relative;
	&:hover ${LogoImageWrapper} {
		opacity: 1; // Show the logo on hover
	}
	@media ${device.laptop} {
		// height: 300px;
	}
`;
const LogoImage = styled.img`
  width: 200px; // Adjust the height as needed
  object-fit: cover;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover !important;
  z-index: 0; // Ensure image is behind the overlay
`;

const CardContent = styled.div`
  align-content: center;
`;

const CardTextContainer = styled.div`
	margin-right: 20px;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	@media ${device.laptop} {
		height: 100%;
		margin-top: 0px;
	}
`;

const LeadingText = styled.h6`
  font-size: 12px;
  margin: 0px;
  line-height: 16px;
  color: ${props => props.theme.colors.fontDark};
  @media ${device.laptop} {
    font-size: 12px;
    // margin-top: 0px;
  }
`;

const Title = styled.h6`
	margin: 0px;
	margin-bottom: 4px;
  	font-size: 14px;
  	color: ${props => props.theme.colors.fontDark};
 	@media ${device.laptop} {
    	font-size: 12px;
    	margin-top: 10px;
		// display: none;
  }
`;
const Card = (props) => {
	return (
		<CardContainer to={`/article/${props.slug}`}>

			<CardImageContainer>
				<LogoImageWrapper>
					{/* <LogoImage src={props.companyLogo} /> */}
				</LogoImageWrapper>
				<ImageWrapper >
					<Image src={props.cardImage} />
				</ImageWrapper>
			</CardImageContainer>

			<CardContent>
				<CardTextContainer>

					<Title>
						{props.clientName}
					</Title>
					<LeadingText>
						{props.leadingText}
					</LeadingText>

				</CardTextContainer>

			</CardContent>

		</CardContainer>

	);
};


export default Card;