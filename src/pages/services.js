import * as React from 'react';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import Container from '../components/Container';
import styled from 'styled-components';
import { device } from '../device';
import useScrollPosition from '../support-functions/useScrollPosition';
import Loader from '../components/Loader';
import ContactForm from '../components/ContactForm';
import Pill from '../components/Pill';


const Hero = styled.div`
	z-index: 3;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	@media ${device.laptop} {
		height: 100%;
	}
`;
const HeroTextContainer = styled.div`
	// max-width: 1000px;
	display: flex;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
	text-align: left;
	height: 100vh;
	align-items: center;
	justify-content: center;
	@media ${device.laptop} {
		align-items: start;
		text-align: left;
		// justify-content: start;
		margin-top: 50px;

	}
	
`;
const HeroText = styled.h1`
	padding-top: 0px;
	padding-bottom: 0px;
	@media ${device.laptop} {
		padding-top: 30px;
		padding-bottom: 0px;
		width: 80%;
		margin-top: 0px;


	}
`;

const LeadingText = styled.h2`
	margin-right: auto;
	width: 800px;
	position: relative;
	z-index: 3;
	margin-top: 10px;
	margin-bottom: 30px;
	@media ${device.laptop} {
		padding-top: 0px;
		padding-bottom: 0px;
		margin-top: 0px;
		width: 100%;	
		margin-bottom: 0px;


	}
`;





const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	align-items: start;
	justify-content: start;
	max-width: 300px;
	@media ${device.laptop} {
		max-width: 100%;
	}	
`;

const InfoRow = styled.div`
	display: flex;
	height: 100%;
    flex-direction: row;
	flex-wrap: wrap;
	gap: 40px;
    justify-content: space-between;
	align-items: start;
	margin-top: 40px;
	width: 100%;
	margin-bottom: 200px;
    @media ${device.laptop} {
        flex-direction: column;
        align-items: start;
		margin-bottom: 80px;
    }
`;
const InfoTitle = styled.p`
	// text-transform: uppercase;
	margin-bottom: 10px;
	font-size: 34px;

`;
const InfoDivider = styled.div`
	width: 100%;
	border-bottom: 0.5px solid white;
`;
const InfoText = styled.p`
	margin-top: 20px;
	font-size: 18px;
	color: ${props => props.theme.colors.darkGray}
`;

const PillRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	margin-top: 40px;
	justify-content: start;
	align-items: center;
	width: 100%;
	flex-wrap: wrap;
	height: 100%;
`;


const services = [
	{
		id: 1,
		title: 'Brand & Identity',
		description: 'Logo, identity, marketing material and web design projects often start digital projects. I have designed multiple brand identities for startup companies.'
	},
	{
		id: 2,
		title: 'Development',
		description: 'Full-stack web and mobile app development from planning to production deployment. I build apps from websites to complex SaaS projects from ground up.'
	},
	{
		id: 3,
		title: 'Design',
		description: 'User centric services are built using research methods, prototyping and service design methodologies.'
	},
	{
		id: 4,
		title: 'AI Development',
		description: 'Provisioning isolated AI with open source LLM to Azure and developing customized Chat GPT like chat views.'
	}


];

const servicesTags = [
	{ id: 1, title: 'Brand & Identity Design' },
	{ id: 2, title: 'Mobile App Design' },
	{ id: 3, title: 'Mobile App Development' },
	{ id: 4, title: 'Concept Design' },
	{ id: 5, title: 'Web Design' },
	{ id: 6, title: 'Web Development' },
	{ id: 7, title: 'SaaS Development' },
	{ id: 8, title: 'UX Design' },
	{ id: 9, title: 'Service Design' },
	{ id: 10, title: 'Software Architecture' },
	{ id: 11, title: 'Agile Coaching' },
	{ id: 12, title: 'Responsive Design' }
];

const Services = () => {
	const scrollPosition = useScrollPosition();
	const heroHeight = 600; // Adjust this based on your Hero section's height

	const [offsetY, setOffsetY] = React.useState(0);
	const [offsetX, setOffsetX] = React.useState(0);

	const handleScroll = () => {
		setOffsetY(window.scrollY);
		setOffsetX(window.scrollY);

	};

	React.useEffect(() => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<Layout
			changeBackground={scrollPosition > heroHeight}
			changeBackgroundColor={null}
		>

			<SEO
				title='Sevices'
				description='These are the services provided'
				image={null}
				article={false}
			/>
			<Loader >
				<h5 style={{ color: 'black' }}>Services</h5>
			</Loader>
			<Container>

				<Hero>

					{/* {data.contentfulArticle.clientName != undefined ? <HeroDescription> {
						data.contentfulArticle.description != undefined ?
							<Markdown
								dangerouslySetInnerHTML={{
									__html: data.contentfulArticle.description.childMarkdownRemark.html,
								}}
							/>: null
					} </HeroDescription> : null} */}
					<HeroTextContainer>
						<HeroText >Helping companies succeed in the digital world</HeroText>
						<LeadingText >Brands from around the world have trusted my expertise in digital design and development projects.</LeadingText>



						{/* {data.contentfulArticle.author != undefined ? <AuthorCard
						name={data.contentfulArticle.author.personName}
						description={data.contentfulArticle.author.personDesxription}
						image={data.contentfulArticle.author.personImage.file.url}
						email={data.contentfulArticle.author.personEmail}
						slug={data.contentfulArticle.author.slug}
					/> :null} */}
					</HeroTextContainer>




				</Hero>
				<InfoRow>
					<div>
						<LeadingText >Services I can help your company succeed with...</LeadingText>

						<PillRow>
							{servicesTags.map((item, i) => {
								return (
									<Pill key={i} title={item.title} />
								);
							})}
						</PillRow>
					</div>

					{
						services.map((item, i) => {
							return (
								<InfoContainer key={i}>
									<InfoTitle>
										{item.title}
									</InfoTitle>
									<InfoDivider />
									<InfoText>
										{item.description}

									</InfoText>
								</InfoContainer>
							);
						})
					}

				</InfoRow>
				<InfoDivider />
			</Container>
			<Container>
				<br></br>
				<h2 style={{ color: 'white' }}>Contact me for new projects or collaboration</h2>
				<h4 style={{ color: 'white' }}>Lets work together</h4>
				<ContactForm />

			</Container>


		</Layout >
	);
};
export default Services;

