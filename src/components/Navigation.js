import React, { useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../device';
import CustomLink from './CustomLink';


const NavContainer = styled.div`
	max-height: 40px;
	position: absolute;
	min-width: 100%;
	z-index: 1000000000;
	top: 0;
	// background-color: white;
	@media ${device.laptop} {
		background-color: ${props => (props.navOpen ? '#FAFAFA' : 'transparent')};
		position: ${props => (props.navOpen ? 'fixed' : 'relative')}
	}
	
`;


const BurgerIcon = styled(FontAwesomeIcon)`
	font-size: 22px;
	text-align: right;
	margin-right: 10px;
	// color: ${props => props.theme.colors.white};
    :hover {
		cursor: pointer;
	}
	
	
`;


const LogoContainer = styled.div`
	object-fit: contain;
	width: 100%;
	text-align: left;
	flex: 1;
	margin-left: 20px;
	:hover {
		cursor: pointer;
	}
	@media ${device.laptop} {
		// height: 80px;
	}
	
`;

const LogoText = styled.p`
	white-space: nowrap;
	font-size: 14px;
	color: white;

`;


const OpenNav = styled.div`
	top: 80px;
	position: relative;
	min-height: 100vh;
	text-align: center;
	padding-top: 50px;
	background-color: white;
	z-index: 100000;
	width: 100vw;
	// @media ${device.laptop} {
	// 	position: fixed;
	// 	z-index: 1000000000000;

	// 	height: calc(100vh + 200px);
 	// }

`;


const LinkTextMobile = styled.h2`
	margin-top: 20px;
	margin-bottom: 10px;
	// color: white !important;
	font-size:32px;


`;


const MenuButtonContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	text-align: right;
	width: 100%;
	// height: 160px;
	justify-content: flex-end;
	margin-right: 20px;
	@media ${device.laptop} {
		height: 80px;
	}
	

`;
const MenuButton = styled.div`
	padding-left: 20px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	:hover {
		cursor: pointer;
	}
	@media ${device.laptop} {
		height: 80px;
	}
	
`;



const MenuText = styled.div`
	margin-top: 0x;
	font-size: 14px;
	font-weight: 400;
	text-decoration: none !important;
//  color: white;
	:hover {
		cursor: pointer;
	}
	@media ${device.laptop} {

	}
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;


const Navigation = ({ className }) => {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<>
			<NavContainer className={className} navOpen={navOpen} >
				<Row>
					<CustomLink to="/" >
						<LogoContainer>
							<LogoText>A.E HELIÖVAARA</LogoText>
							{/* <Image src="/logo-dark.svg" height={30} quality={100}
									/> */}
						</LogoContainer>
					</CustomLink>

					<MenuButtonContainer  >
						{
							!navOpen ?
								<MenuButton>

									{/* <BurgerIcon icon={faBars} /> */}
									<CustomLink className="text-white" to="/about">ABOUT</CustomLink>
								</MenuButton>
								:
								<MenuButton >
									{/* <BurgerIcon icon={faTimes} style={{ zIndex: 10000 }} /> */}
									<MenuText className="text-white" to="/about">ABOUT</MenuText>
								</MenuButton>
						}
					</MenuButtonContainer>
				</Row>
			</NavContainer >
			{
				navOpen ?
					<OpenNav
					>
						<Container >
							<LinkTextMobile onClick={() => setNavOpen(false)} >
								<CustomLink className="text-white" to="/about">
									About
								</CustomLink>
							</LinkTextMobile>
						</Container >
					</OpenNav >
					:
					<></>
			}
		</>
	);
};


export default Navigation;