
import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import ReactPlayer from 'react-player/lazy';

import Container from './Container';


const Wrapper = styled.div`
	position: relative;
	z-index: 10000000;
	padding-top: 80px;
	padding-bottom: 80px;
	background-color: ${props => props.backgroundColor || 'transparent'};
	@media ${device.laptop} {
		padding-top: 80px;
		padding-bottom: 20px;
	}
`;


const TextContainer = styled(Container)`
	display: flex;
	max-width: 100%;
	flex-direction: row;
	max-width: 1200px;
	@media ${device.laptop} {
		height: 100%;
		margin-top: 0px;
		flex-direction: column;	
	}

`;


const Title = styled.h4`
	line-height: 32px;
	flex: 2;
	font-weight: 600;
	margin-right: 80px;
	// color: ${props => props.theme.colors.white};
	@media ${device.laptop} {
		margin-right: 0px;

		font-size: 30px;
		line-height: 34px;
		margin-top: 0px;
		margin-bottom: 10px;

		
	}
`;
const Markdown = styled.div`
	flex: 3;
	width: 100%;
	margin-bottom: 50px;
	justify-content: flex-end;
	// margin-left: auto;
	// align-self: flex-end;
	z-index: 3;
	h3 {
		margin-bottom: 30px;
		margin-top: 16px !important;
	}
	ul {
		list-style-position: outside;
		padding-left: 20px !important;
	  }
	li {
		margin-bottom: 16px;
		font-size: 24px;
		line-height: 28px;
	}

	@media ${device.laptop} {
		justify-content: flex-start;
		margin-left: 0px;
		align-self: flex-start;
		margin-bottom: 20px;


		h3 {
			margin-bottom: 20px;
		ul {
			list-style-position: outside;
			padding-left: 0px !important;
	  }
		}
		li {
			font-size: 16px;
			line-height: 24px;
		}
	}
`;

const ImageContainer = styled.div`
	margin-top: 50px;
	margin-bottom: 200px;
	margin-left: auto;
	margin-right: auto;
	padding-left: 40px;
	padding-right: 40px;
	max-width: 100%;
	@media ${device.laptop} {
		padding-left: 16px;
		padding-right: 16px;
		margin-bottom: 80px;

	}
`;

const Image = styled.img`
	width: 100%;
	

	
`;

const PlayerContainer = styled(Container)`
	margin-bottom: 200px;
	// width: 100%;
	@media ${device.laptop} {
		margin-bottom: 80px;

	}
`;



const ContentBlock = ({ title, content, images, video, backgroundColor }) => {

	return (
		<Wrapper backgroundColor={backgroundColor}>

			<TextContainer>
				<Title>
					{title}
				</Title>
				<Markdown
					dangerouslySetInnerHTML={{
						__html: content,
					}}
				/>

			</TextContainer>
			{
				images != undefined && images.length > 0 ?
					images.map((item, i) => {
						return (
							<ImageContainer key={i} >
								<Image src={item.file.url} />
							</ImageContainer>
						);
					}) :
					null
			}


			{
				video != undefined ?
					<PlayerContainer>
						<ReactPlayer
							width='100%'
							height='100%'
							loop={true}
							playing={true}
							url={video}
							playsinline
							muted


						/>
					</PlayerContainer>

					: null
			}
		</Wrapper>

	);
};


export default ContentBlock;