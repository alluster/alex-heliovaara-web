
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
	min-height: 400px;
	width: 30%;
	// margin: 1%;
	// border: 0.2px black solid;
	@media ${device.laptop} {
		width: 100%;
		margin: 1%;
		min-height: 100%;
		margin-bottom: 40px;

	}
`;

const CardImageContainer = styled.img`
	border-radius: 12px;
	// border: 0px solid black;
	height: 100%;
	object-fit: cover !important;
	@media ${device.laptop} {
		height: 200px;
		bottom: 0.2px black solid;


	}

`;


const CardContent = styled.div`
	align-content: center;

`;

const CardTextContainer = styled.div`
	// margin-top: -80px;
	// padding: 20px;
	// width: 100%;
	// border-top: 0.2px black solid;

	@media ${device.laptop} {
		height: 100%;
		margin-top: 0px;

		
	}

`;

const LeadingText = styled.h6`
	font-size: 14px;
	margin-top: 10px;
	// color: ${props => props.theme.colors.white};
	@media ${device.laptop} {
		font-size: 14px;
		margin-top: 0px;

		
	}
`;

const Description = styled.div`
	margin-top: 10px;
	// color: ${props => props.theme.colors.white};
	@media ${device.laptop} {
		font-size: 14px;
		margin-top: 0px;

		
	}
`;

const Title = styled.h4`
	font-weight: 600;
	// color: ${props => props.theme.colors.white};
	@media ${device.laptop} {
		font-size: 16px;
		margin-top: 20px;

		
	}
`;
const Markdown = styled.div`
	position: relative;
	z-index: 3;
	h3 {
		margin-bottom: 60px;
	}
	li {
		font-size: 24px;
		line-height: 40px;
	}

	@media ${device.laptop} {
		h3 {
			margin-bottom: 20px;
		}
		li {
			font-size: 16px;
			line-height: 24px;
		}
	}
`;
const TeamMemberCard = (props) => {
	console.log(props);
	return (
		<CardContainer  to={`/article/${props.slug}`}>
			<CardImageContainer src={props.image} >

			</CardImageContainer>
			<CardContent>
				<CardTextContainer>
				
					<Title>
						{props.title}
					</Title>
					<LeadingText>
						{props.leadingText}
					</LeadingText>
					<Description>
						{	props.description != undefined ?
							<Markdown
								dangerouslySetInnerHTML={{
									__html: props.description.childMarkdownRemark.html,
								}}
							/>: null}
					</Description>
				</CardTextContainer>
			
			</CardContent>
		</CardContainer>

	);
};


export default TeamMemberCard;