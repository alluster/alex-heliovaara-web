import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Grid = styled.div`
	display: flex;
	flex-direction: column;
	// gap: 60px;
	margin-top: 0px;
	margin-bottom: 50px;
	overflow: hidden; /* Prevent parent scrolling */
`;


const CardGrid = ({ content }) => {
	return (
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
	);
};

export default CardGrid;
