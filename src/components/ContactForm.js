
import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
	z-index: 1000000000;
	position: relative;
`;

const Content = styled.div`
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: space-around;
	gap: 60px;
	flex-direction: row;
	padding-bottom: 64px;
	@media ${device.laptop} {
		flex-direction: column;
		text-align: center;
		justify-content: center;
		align-items: center;

	}
`;

const Column = styled.div`
	flex: 2;
	color: white;
	@media ${device.laptop} {
		flex: 1;
		justify-content: center;
		align-items: center;


	}
`;

const Input = styled.input`
	color: white !important;
	height: 42px;
	width: 100%;
	margin-bottom: 32px;
	font-size: 18px;
	border-radius: 4px;
  }
	@media ${device.laptop} {
		padding-left: 0px;
	}
	
`;

const TextArea = styled.textarea`
	margin-top: 16px;
	margin-bottom: 32px;
	border-radius: 4px;
	width: 100%;
	font-size: 18px;
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
	padding-right: 20px;
	color: white;
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
	margin-right: auto;
	margin-left: 40px;
`;

const ButtonIcon = styled(FontAwesomeIcon)`
	font-size: 18px;
`;
const Label = styled.label`
	font-size: 18px;
	color: white;
`;

const Form = styled.form`
	margin-top: 16px;
	@media ${device.laptop} {
	}
`;

const InputContainer = styled.div`
	padding-top: 40px;
	border-top: 0.5px solid ${props => props.theme.colors.darkGray};

`;


const ContactInfoTitle = styled.p`
	text-transform: uppercase;
	margin-bottom: 10px;
	font-size: 12px;
	color: ${props => props.theme.colors.darkGray}

`;
const ContactForm = () => {
	return (
		<Wrapper>

			<Content>
				<Column>
					<Form form="true" method="post" action="https://getform.io/f/3c369d83-1968-4cb2-a847-807c9fc830c9" >
						<InputContainer>
							<Label>
								What is your name?
							</Label>

							<Input placeholder='John Doe *' type="text" name="name" id="name" style={{ color: 'white' }} />
						</InputContainer>
						<InputContainer>

							<Label>
								What is your email address?
							</Label>
							<Input placeholder='john@acme.com *' type="email" name="email" id="email" />
						</InputContainer>
						<InputContainer>

							<Label>
								What services are you looking for?
							</Label>
							<TextArea placeholder='Web Design, App Development... *' name="message" id="message" wrap="hard" />
						</InputContainer>



						<Button
							type="submit">
							<ButtonText>Send</ButtonText>
							<ButtonIconContainer>
								<ButtonIcon icon={faArrowRight} />
							</ButtonIconContainer>
						</Button>					</ Form>
				</Column>

				<Column>
					<ContactInfoTitle>Contact</ContactInfoTitle>
					<p style={{ marginBottom: '0px' }}>
						aleksanteri.heliovaara@gmail.com
					</p>
					<p style={{ marginBottom: '0px' }}>
						+358442360304
					</p>
					<ContactInfoTitle>Business</ContactInfoTitle>
					<p style={{ marginBottom: '0px' }}>
						Helau Solutions Oy
					</p>
					<p style={{ marginBottom: '0px' }}>
						3168391-6
					</p>

				</Column>
			</Content>

		</Wrapper>


	);
};


export default ContactForm;



