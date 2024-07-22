
import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import ReactPlayer from 'react-player/lazy';

const Container = styled.div`
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
´
	@media ${device.laptop} {
		width: 100%;
		margin: 1%;
		min-height: 100%;
		margin-bottom: 0px;

	}
`;

const ImageContainer = styled.img`
	border: 0px solid white;
	border-radius: 20px;
	margin-bottom: 100px;
`;


const TextContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	@media ${device.laptop} {
		height: 100%;
		margin-top: 0px;
		flex-direction: column;	
	}

`;


const Title = styled.h4`
	// max-width: 300px;
	font-weight: 600;
	// color: ${props => props.theme.colors.white};
	@media ${device.laptop} {
		font-size: 20px;
		margin-top: 0px;
		margin-bottom: 10px;

		
	}
`;
const Markdown = styled.div`
	width: 600px;
	max-width: 100%;
	margin-bottom: 50px;
	justify-content: flex-end;
	margin-left: auto;
	align-self: flex-end;
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

const PlayerContainer = styled.div`
	margin-bottom: 20px;
	width: 100%;
`;



const ContentBlock = ({title,content, images, video}) => {

	return (
		<Container>
			
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
						return(
							<ImageContainer key={i} src={item.file.url} />
						);
					}):
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

						/>
					</PlayerContainer>
					
					: null
			}
		</Container>

	);
};


export default ContentBlock;