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
		display: flex;
		flex-direction: row;
		align-items: start;

	}
	`;

const CardContent = styled.div`
	padding-top: 28px;
	padding-bottom: 28px;
	padding-left: 16px; 
	padding-right: 16px;

	@media ${device.laptop} {
		width: 100%;
		padding-top: 0px;

  	}
	&:hover {
		background-color: rgba(0, 0, 0, 0.5); 
		cursor: pointer;

	}
		
`;

const CardTextContainer = styled.div`
	align-items: center;

	flex: 10;
	display: flex;
	flex-direction: row;
		// align-items: center;

  	@media ${device.laptop} {
		height: 100%;
		flex-direction: column;
			align-items: start;

  	}
`;

const LeadingText = styled.div`
	margin-left: auto;
	font-size: 32px;
  	margin-left: 10px;
  	text-transform: uppercase;
  	margin-left: auto;
	color: #C8CCD4;
	align-items: center;
  	@media ${device.laptop} {
		width: 100%;
    	font-size: 12px;
    	margin-top: 0px;
    	margin-left: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
  }
`;

const Role = styled.h6`
	font-size: 32px;
  	margin-left: 10px;
  	text-transform: uppercase;
  	margin-left: auto;
	color: #C8CCD4;
	@media ${device.laptop} {
    	font-size: 12px;
}
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;

`;

const Title = styled.h6`
  margin-right: 10px;
  font-size: 32px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
	

  @media ${device.laptop} {
    font-size: 20px;
    margin-top: 20px;
	margin-bottom: 0px;

  }
`;

const Card = ({ role, slug, clientName, leadingText }) => {
	return (
		<CardContainer to={`/article/${slug}`}>
			{/* Add ImageWrapper and CardImageContainer if you have images */}
			<CardContent>
				<CardTextContainer>
					<TitleContainer>
						<Title>{clientName}</Title>
						<p>{leadingText}</p>
					</TitleContainer>
					<LeadingText>{role}</LeadingText>
				</CardTextContainer>

			</CardContent>
		</CardContainer >

	);
};

export default Card;
