import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Wrapper = styled.div`		
	position: relative;
	display: flex;	
	z-index: 1000000;
	margin-bottom: 50px;
	overflow: hidden; /* Prevent parent scrolling */
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	
`;

const Grid = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	gap: 10px;
	margin-top: 50px;
	// margin-bottom: 50px;
	overflow: hidden; /* Prevent parent scrolling */
	justify-content: start;

`;
const CardGrid = ({ content }) => {
	return (
		<Wrapper>
			<Grid>

				{content.sort((a, b) => a.node.orderNumber - b.node.orderNumber).map((node, i) => (


					<Card
						key={i}
						slug={node.node.slug}
						companyLogo={node.node.companyLogo ? node.node.companyLogo.file.url : null}
						cardImage={node.node.cardImage ? node.node.cardImage.file.url : null}
						leadingText={node.node.leadingText}
						ingress={node.node.ingress}
						role={node.node.professionalRole}
						clientName={node.node.clientName}
					/>
				))}
			</Grid>

		</Wrapper >
	);
};

export default CardGrid;
