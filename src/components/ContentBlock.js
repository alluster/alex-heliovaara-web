
import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import ReactPlayer from 'react-player/lazy';

import Container from './Container';


const Wrapper = styled.div`
	position: relative;
	z-index: 10000000;
	margin-top: 80px;
	margin-bottom: 80px;
	@media ${device.laptop} {
		margin-top: 20px;
		margin-bottom: 20px;
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
	// color: ${props => props.theme.colors.white};
	@media ${device.laptop} {
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
		margin-bottom: 60px;
	}
	ul {
		list-style-position: outside;
	  }
	li {
		font-size: 24px;
		line-height: 40px;
	}

	@media ${device.laptop} {
		justify-content: flex-start;
		margin-left: 0px;
		align-self: flex-start;
		margin-bottom: 20px;


		h3 {
			margin-bottom: 20px;
		}
		li {
			font-size: 16px;
			line-height: 24px;
		}
	}
`;

const ImageContainer = styled.div`
	margin-top: 50px;
	margin-bottom: 50px;
	margin-left: auto;
	margin-right: auto;
	padding-left: 40px;
	padding-right: 40px;
	max-width: 100%;
	@media ${device.laptop} {
		padding-left: 16px;
		padding-right: 16px;
	}
`;

const Image = styled.img`
	width: 100%;
	
`;

const PlayerContainer = styled.div`
	margin-bottom: 20px;
	width: 100%;
`;



const ContentBlock = ({ title, content, images, video }) => {

	return (
		<Wrapper>

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