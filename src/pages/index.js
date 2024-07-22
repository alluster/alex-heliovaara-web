import * as React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import styled from 'styled-components';
import SEO from '../components/seo';
import CardGrid from '../components/CardGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Hero = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100vh; /* Full height of the viewport */
  display: flex; /* Use flexbox for centering */
  align-items: center; /* Vertically center the content */
//   justify-content: center; /* Horizontally center the content */
//   border-bottom: 0.5px ${props => props.theme.colors.white} solid;


`;



const HeroText = styled.p`
  font-weight: 400;
  font-size: 20px;
//   text-transform: uppercase;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


const IconIcon = styled(FontAwesomeIcon)`
  margin-right: 16px;
  font-size: 12px;
`;

const IconText = styled.p`
  font-size: 14px;
`;

const HeroContentCentered = styled.div`
  display: flex;
  flex-direction: column;
//   justify-content: center;
//   text-align: center;
//   margin-left: auto;
//   margin-right: auto;
  max-width: 800px;
`;
const GreenBall = styled.div`
	background-color: #00FF85;
	height: 10px;
	width: 10px;
	border-radius: 5px;
	margin-right: 16px;
`;
const ScrollingTextContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  position: relative;
`;

const ScrollingText = styled.div`
  display: inline-block;
  padding-left: 100%;
  animation: scroll 10s linear infinite;
  font-size: 20px;
`;

const RecentWork = styled.p`
	color: white;

`;

const IndexPage = ({ data }) => {
	return (
		<Layout page="home">
			<SEO
				title="Aleksanteri Heliövaara"
				description="Creative Technologist"
				image="/seo.jpeg"
				article={false}
			/>

			<Hero
				data-sal="fade"
				data-sal-delay="100"
				data-sal-easing="ease"
				data-sal-duration="1000"
			>
				<Container>

					<HeroContentCentered>
						<h1>Freelancer Developer & Designer</h1>
						<HeroText>
							Aleksanteri Eliel Heliövaara is an award-winning, tech-forward,
							culture-driven, Creative Technologist and Freelance Developer & Designer with a background in digital
							product, branding and entrepreneurship, based in Helsinki
							Finland. Worked with WHO, Helsinki City, Osuuspankki, Fazer, SSAB
						</HeroText>
						<Row>

							<Row>
								<GreenBall
									data-sal="fade"
									data-sal-delay="1000"
									data-sal-easing="ease"
									data-sal-duration="2000"
								/>
								<IconText>Available for projects</IconText>
							</Row>
							<Row>
								<IconIcon icon={faMapMarkerAlt} />
								<IconText>Helsinki</IconText>
							</Row>
							<Row>
								<IconIcon icon={faPhone} />
								<IconText>+358442360304</IconText>
							</Row>
						</Row>
					</HeroContentCentered>
				</Container>
			</Hero>
			<ScrollingTextContainer>
				<ScrollingText>Hello World</ScrollingText>
			</ScrollingTextContainer>
			<Container>
				{/* <Divider /> */}
				<RecentWork>Recent Work</RecentWork>
				<CardGrid content={data.allContentfulArticle.edges} />
			</Container>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allContentfulArticle(filter: { professional: { eq: "aleksanteri" } }) {
      edges {
        node {
          cardStyle
          id
          slug
		  professionalRole
          ingress
          author {
            personEmail
            personName
            personImage {
              file {
                url
              }
            }
          }
          tags
          clientName
          title
          leadingText
          image {
            file {
              url
            }
          }
          companyLogo {
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
    contentfulAuthor(contentful_id: { eq: "XTQ8ZZ7WYZR89yVvWcOT9" }) {
      personEmail
      slug
      personName
      personDesxription
      personImage {
        file {
          url
        }
      }
    }
  }
`;
