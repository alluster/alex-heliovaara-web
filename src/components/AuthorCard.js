import React from 'react';
import styled, {css} from 'styled-components';
import { device } from '../device';
import { Link } from 'gatsby';


const AuthorCard = ({ image, name, email, description, slug, buttonCard }) => {
	const CardContainer = styled(Link)`
		display: flex;
		flex-direction: row;
		margin-top: 10px		
		// max-width: 100%;
		padding: 0px;
	
		${({ buttonCard }) => buttonCard === true && css`
			background-color: white;
			border: 0.5px solid black;
		`}
		padding: 10px;
		border-radius: 8px 8px 8px 8px;
		@media ${device.laptop} {
			width: 100%;
		}
		
	`;

	const CardContent = styled.div`
		align-self: center;
		max-height: 100%;
		margin-right: 50px;
	`;

	const ImageContainer = styled.img`
		height: 100px;
		width: 100px;
		border-radius: 50%;
		background-repeat: no-repeat;
		object-fit: cover;
		align-self: center;
		margin-right: 32px;
		min-width: 100px;
		
	`;
	const Name = styled.h3`
		margin-bottom: 10px;
		margin-top: 0px;
		font-size: 20px;
		font-weight: 400;
		line-height: 20px;
		`;
	const Description = styled.p`
		margin: 0px;
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
		`;

	const Email = styled.p`
		margin: 0px;
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
		`;



	return (
		<CardContainer buttonCard={buttonCard === true ? true : false} to={`/${slug}`}>
			{
				image ? <ImageContainer src={image} /> : null
			}

			<CardContent>
				<Name >
					{name}
				</Name>
				<Description>
					{description}
				</Description>
				<Email>{email && email || ''}</Email>
			</CardContent>

		</CardContainer>
	);
};


export default AuthorCard;