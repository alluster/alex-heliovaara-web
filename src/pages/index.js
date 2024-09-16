import React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';
import Container from '../components/Container/Container';
import styled from 'styled-components';
import SEO from '../components/seo';
import CardGrid from '../components/CardGrid/CardGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { device } from '../device';
import Loader from '../components/Loader/Loader';

const Hero = styled.div`
    position: relative;
    z-index: 1000;
    width: 100%;
    display: flex;
	min-height: 30vh;
    align-items: center;
    flex-direction: column;
    justify-content: start;
	max-width: 1400px;
	margin-left: auto;
	margin-right: auto;
	@media ${device.laptop} {
        margin-top: 80px;
    }
`;

const HeroContent = styled.div`
	margin-top: 100px;
    display: flex;
    flex-direction: column;
	height: 100%;
	@media ${device.laptop} {
		margin-top: 60px;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
	gap: 40px;
    @media ${device.laptop} {
        flex-direction: column;
        align-items: start;
			gap: 0px;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media ${device.laptop} {
        // height: 10px;
    }
`;

const IconIcon = styled(FontAwesomeIcon)`
    margin-right: 16px;
    font-size: 12px;
`;

const InfoText = styled.p`
    font-size: 16px;
	line-height: 12px;
`;

const AvailabilityIndicator = styled.div`
    background-color: #00FF85;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    margin-right: 16px;
`;


const IndexPage = ({ data }) => {
	return (
		<Layout page="home" >
			<SEO
				title="Aleksanteri Heliövaara"
				description="Creative Technologist"
				image="/seo.jpeg"
				article={false}
			/>
			<Loader>
				<h5 style={{ color: 'black' }}>Welcome</h5>
			</Loader>
			<Hero>
				<Container>
					<HeroContent >
						<h1>Creative Technologist & Developer</h1>

						<h3 style={{ color: '#4C4C4C' }}>
							Digital Product Designer with passion for Brands, Marketing and Development - a Creative Technologist based in Helsinki
							Finland.
						</h3>
						<Row>
							<InfoContainer>
								<AvailabilityIndicator />
								<InfoText >Available for a project</InfoText>
							</InfoContainer>
							<InfoContainer>
								<IconIcon icon={faMapMarkerAlt} />
								<InfoText >Current location: @Helsinki Finland </InfoText>
							</InfoContainer>
							<InfoContainer>
								<IconIcon icon={faPhone} />
								<a href="tel:+358442360304"><InfoText >+358442360304</InfoText></a>
							</InfoContainer>
						</Row>
					</HeroContent>
				</Container>

			</Hero>
			<Container>
				<CardGrid content={data.allContentfulArticle.edges} />
			</Container>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allContentfulArticle(filter: { tags: { eq: "work" } }) {
		edges {
			node {
				orderNumber
				cardStyle
				id
				slug
				professionalRole
				ingress
				tags
				clientName
				title
				leadingText
				image {
					file {
						url
					}
				}
				cardImage {
					file {
						url
					}
				}
			}
			}
		}
		
	}
`;
