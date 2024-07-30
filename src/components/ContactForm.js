
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { device } from '../device';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
	z-index: 1000000000;
	position: relative;
	@media ${device.laptop} {
		padding-left: 0px;

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
	max-width: 300px;
	display: flex;
	flex-direction: row;
	padding-left: 20px;
	padding-right: 20px;
	border: ${props => props.disabled ? css`2px solid ${props => props.theme.colors.darkGray}` : css`2px white solid`};
	color: ${props => props.disabled ? css`${props => props.theme.colors.darkGray}` : css`white`};
	
	&:hover {
		cursor: ${props => props.disabled ? css`not-allowed` : css`not-allowed`}!important;
		background-color: ${props => props.disabled ? css`transparent` : css`white`};
		border: ${props => props.disabled ? css`2px solid ${props => props.theme.colors.darkGray}` : css`2px white solid`};
		color: ${props => props.disabled ? css`${props => props.theme.colors.darkGray}` : css`black`};
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


const InputContainer = styled.div`
	padding-top: 40px;
	border-top: 0.5px solid ${props => props.theme.colors.darkGray};

`;

const ContactForm = () => {
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		message: ''
	});

	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	useEffect(() => {
		const isFormValid = Object.values(formValues).every(value => value.trim() !== '');
		setIsButtonDisabled(!isFormValid);
	}, [formValues]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value
		});
	};

	return (
		<Wrapper>
			<form form="true" method="post" action="https://getform.io/f/3c369d83-1968-4cb2-a847-807c9fc830c9">
				<InputContainer>
					<Label>
						What is your name?
					</Label>
					<Input
						placeholder='John Doe *'
						type="text"
						name="name"
						id="name"
						style={{ color: 'white' }}
						value={formValues.name}
						onChange={handleInputChange}
					/>
				</InputContainer>
				<InputContainer>
					<Label>
						What is your email address?
					</Label>
					<Input
						placeholder='john@acme.com *'
						type="email"
						name="email"
						id="email"
						value={formValues.email}
						onChange={handleInputChange}
					/>
				</InputContainer>
				<InputContainer>
					<Label>
						What services are you looking for?
					</Label>
					<TextArea
						placeholder='Web Design, App Development... *'
						name="message"
						id="message"
						wrap="hard"
						value={formValues.message}
						onChange={handleInputChange}
					/>
				</InputContainer>
				<Button
					type="submit"
					disabled={isButtonDisabled}>
					<ButtonText>Send</ButtonText>
					<ButtonIconContainer>
						<ButtonIcon icon={faArrowRight} />
					</ButtonIconContainer>
				</Button>
			</form>
		</Wrapper>

	);
};

export default ContactForm;


