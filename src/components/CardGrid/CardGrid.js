import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';

const Wrapper = styled.div`		
	position: relative;
	display: flex;	
	z-index: 1000000;
	margin-bottom: 50px;
	overflow: hidden; 
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
	overflow: hidden;
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
						cardImage={node.node.cardImage ? node.node.cardImage.file.url : null}
						leadingText={node.node.leadingText}
						clientName={node.node.clientName}
					/>
				))}
			</Grid>
		</Wrapper >
	);
};

export default CardGrid;
