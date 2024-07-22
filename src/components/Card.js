import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { device } from '../device';

const CardContainer = styled(Link)`
	z-index: 100000;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	border-top: 0.5px solid white;

	@media ${device.laptop} {
		width: 100%;
		height: 100%;
		min-height: 100%;
		overflow: hidden;
	}
	`;
const CardContent = styled.div`
	padding-top: 28px;
	padding-bottom: 28px;
	padding-left: 16px; 
	padding-right: 16px;
	&:hover {
		background-color: rgba(0, 0, 0, 0.5); // Semi-transparent background for text

	}
`;

const CardTextContainer = styled.div`
  display: flex;
  flex-direction: row;
//   align-items: center; // Center align items vertically

  @media ${device.laptop} {
    height: 100%;
    flex-direction: column;
  }
`;

const LeadingText = styled.h6`
  font-size: 32px;
  margin-left: 10px;
  text-transform: uppercase;
  margin-left: auto;
color: #C8CCD4;
  @media ${device.laptop} {
    font-size: 22px;
    margin-top: 0px;
    margin-left: 0;

  }
`;

const Title = styled.h6`
  margin-right: 10px;
  font-size: 32px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
	

  @media ${device.laptop} {
    font-size: 18px;
    margin-top: 20px;
		  color: #C8CCD4;

  }
`;

const Card = ({ role, slug, clientName }) => {
	return (
		<CardContainer to={`/article/${slug}`}>
			{/* Add ImageWrapper and CardImageContainer if you have images */}
			<CardContent>
				<CardTextContainer>
					<Title>{clientName}</Title>
					<LeadingText>{role}</LeadingText>
				</CardTextContainer>
			</CardContent>
		</CardContainer>

	);
};

export default Card;
