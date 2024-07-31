import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { device } from '../device';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
	}
	`;

const ArrowIcon = styled(FontAwesomeIcon)`
		
	display: none;
	@media ${device.laptop} {
		display: flex;
		margin-left: auto;
		text-align: right;
		justify-self: end;
		font-size: 12px;
			flex: 1;
	}
`;

const CardContent = styled.div`
	padding-top: 28px;
	padding-bottom: 28px;
	padding-left: 16px; 
	padding-right: 16px;
	&:hover {
		background-color: rgba(0, 0, 0, 0.5); 
	}
`;

const CardTextContainer = styled.div`
	flex: 10;
	display: flex;
	flex-direction: row;
  	@media ${device.laptop} {
		height: 100%;
		flex-direction: column;
  	}
`;

const LeadingText = styled.div`
  	font-size: 32px;
  	margin-left: 10px;
  	text-transform: uppercase;
  	margin-left: auto;
	color: #C8CCD4;
  	@media ${device.laptop} {
	width: 100%;
    	font-size: 22px;
    	margin-top: 0px;
    	margin-left: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
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

  }
`;

const Card = ({ role, slug, clientName }) => {
	return (
		<CardContainer to={`/article/${slug}`}>
			{/* Add ImageWrapper and CardImageContainer if you have images */}
			<CardContent>
				<CardTextContainer>
					<Title>{clientName}</Title>
					<LeadingText><h6>{role}</h6> <ArrowIcon icon={faArrowRight} /></LeadingText>
				</CardTextContainer>

			</CardContent>
		</CardContainer >

	);
};

export default Card;
