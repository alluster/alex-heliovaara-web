
import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from './Container';

const Wrapper = styled.div`
	background-color: ${props => props.theme.colors.white};
	height: 100%;
	color: ${props => props.theme.colors.black};

`;

const Content = styled(Container)`
	max-width: 1400px;
	margin-left:auto;
	margin-right: auto;
	display: flex;
	justify-content: space-around;
	flex-direction: row;
	padding-top: 64px;
	padding-bottom: 64px;
	align-items: center;
	@media ${device.laptop} {
		flex-direction: column;
		text-align: center;
		justify-content: center;
		align-items: center;

	}
`;

const Column = styled.div`
	flex: 2;
	@media ${device.laptop} {
		margin: 40px;	

		flex: 1;
		justify-content: center;
		align-items: center;


	}
`;


const Input = styled.input`
	border: 1px solid ${props => props.theme.colors.linkGray};
	height: 42px;
	width: 100%;
	margin-top: 16px;
	margin-bottom: 32px;
	padding-left: 20px;
	font-size: 18px;
	border-radius: 4px;

	@media ${device.laptop} {
		padding-left: 0px;
	}
	
`;

const TextArea = styled.textarea`
	border: 1px solid ${props => props.theme.colors.linkGray};
	margin-top: 16px;
	margin-bottom: 32px;
	border-radius: 4px;
	width: 100%;
	padding-left: 20px;
	font-size: 24px;
	padding-top: 20px;
	@media ${device.laptop} {
		padding-left: 0px;
	}

`;

const Button = styled.button`
margin-top: 0px;		
height: 48px;
border: 2px white solid;
max-width: 300px;
display: flex;
flex-direction: row;
padding-left: 20px;
@media ${device.laptop} {
	margin-left: auto;
	margin-right: auto;
}
&:hover {
	cursor: pointer;
	background-color: #ffffff;
	border: 2px  #121212 solid;
	color: black;
}

`;
const ButtonText = styled.p`
	margin: 0px !important;
	line-height: 48px;
`;

const ButtonIconContainer = styled.div`
	line-height: 48px;
	align-self: flex-end;
	margin-right: 40px;
	margin-left: 40px;
`;

const ButtonIcon = styled(FontAwesomeIcon)`
	font-size: 18px;
`;
const Label = styled.label`
	font-size: 18px;
`;

const Form = styled.form`
	margin-left: 30px;
	margin-right: auto;
	@media ${device.laptop} {
		margin-left: 0px;
	}
`;

const Clear = styled.input`
	text-align: center;
	margin-top: 32px;
`;


const ContactForm = (props) => {
	return (
		<Wrapper>
			<Content>

				<Column>
					<h4>Get in touch</h4>
					<h6 style={{ marginBottom: '0px' }}>
						aleksanteri.heliovaara at gmail.com
					</h6>

				</Column>
				<Column>
					<Form form="true" method="post" action="https://getform.io/f/3c369d83-1968-4cb2-a847-807c9fc830c9" >
						<Label>
							Your name:
						</Label>

						<Input type="text" name="name" id="name" />
						<Label>
							Email Address
						</Label>
						<Input type="email" name="email" id="email" />

						<Label>
							Your brief note:
						</Label>
						<TextArea name="message" id="message" wrap="hard" />

						<Button
							type="submit">
							<ButtonText>Send</ButtonText>
							<ButtonIconContainer>
								<ButtonIcon icon={faArrowRight} />
							</ButtonIconContainer>
						</Button>					</ Form>
				</Column>
			</Content>

		</Wrapper>


	);
};


export default ContactForm;



