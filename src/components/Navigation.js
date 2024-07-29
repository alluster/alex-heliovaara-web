import React, { useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../device';
import CustomLink from './CustomLink';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavContainer = styled.div`
	display: block;	
	position: fixed;
	min-width: 100%;
	z-index: 100000000;
	top: 0;
	@media ${device.laptop} {
		display: none;
`;

const NavColorOverlay = styled.div`
	position: fixed;
	width: 100%;
	z-index: 100000;
	height: 60px;
	left: 0;
	top: 0;
	background-color: ${props => props.theme.colors.black};
	opacity: 0.5;
	@media ${device.laptop} {
		display: none;
	
`;

const MobileNavContainer = styled.div`
	display: none;	
	position: fixed;
	min-width: 100%;
	z-index: 10000000000000;
	top: 0;
	background-color: ${props => (props.navOpen ? '#1C1D20' : 'transparent')};
	@media ${device.laptop} {
		display: block;
		background-color: ${props => (props.navOpen ? '#1C1D20' : 'transparent')};
		// position: ${props => (props.navOpen ? 'fixed' : 'relative')}

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
	position: fixed;
	min-height: 100vh;
	text-align: center;
	padding-top: 50px;
	background-color: ${props => props.theme.colors.black};
	z-index: 10000000000;
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
	font-size: 14px;
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

const Divider = styled.div`
	margin-top: 40px;
	margin-bottom: 40px;
	width: 100%;
	border-bottom: 0.5px solid white;
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
						</LogoContainer>
					</CustomLink>
					<MenuButtonContainer  >
						<MenuButton>
							<CustomLink className="text-white" to="/services">SERVICES</CustomLink>
						</MenuButton>
						<MenuButton>
							<CustomLink className="text-white" to="/about">ABOUT</CustomLink>
						</MenuButton>
					</MenuButtonContainer>
				</Row>
			</NavContainer >
			<NavColorOverlay />

			<MobileNavContainer className={className} navOpen={navOpen} >
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

									<BurgerIcon icon={faBars} onClick={() => setNavOpen(true)} />
								</MenuButton>
								:
								<MenuButton >
									<BurgerIcon icon={faTimes} style={{ zIndex: 10000 }} onClick={() => setNavOpen(false)} />
								</MenuButton>
						}
					</MenuButtonContainer>
				</Row>
			</MobileNavContainer >
			{
				navOpen ?
					<OpenNav
					>
						<Container >
							<LinkTextMobile onClick={() => setNavOpen(false)} >
								<CustomLink className="text-white" to="/services">
									Services
								</CustomLink>
								<Divider />
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