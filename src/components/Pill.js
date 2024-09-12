import styled from 'styled-components';
import React from 'react';
import { device } from '../device';

const PillContainer = styled.div`
	padding-left: 16px;
	padding-right: 16px;
	height: 30px;
	background-color: #E8E8E7;
	border-radius: 15px;
	@media ${device.laptop} {
		padding-left: 12px;
		padding-right: 12px;
		height: 20px;
		border-radius: 10px;
    }
`;

const PillText = styled.p`
	white-space: nowrap;
	margin: 0px;
	color: ${props => props.theme.colors.black};
	line-height: 30px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	font-size: 14px;
	@media ${device.laptop} {
		line-height: 20px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		font-size: 12px;
    }
`;

const Pill = ({ title }) => {
	return (
		<PillContainer>
			<PillText>
				{title}
			</PillText>
		</PillContainer>
	);
};

export default Pill;