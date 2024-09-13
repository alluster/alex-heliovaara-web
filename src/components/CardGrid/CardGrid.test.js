import React from 'react';
import { render, screen } from '@testing-library/react';
import CardGrid from './CardGrid';

const mockContent = [
	{
		node: {
			orderNumber: 2,
			slug: 'slug-2',
			companyLogo: { file: { url: 'logo-2.jpg' } },
			cardImage: { file: { url: 'image-2.jpg' } },
			leadingText: 'Leading Text 2',
			ingress: 'Ingress 2',
			professionalRole: 'Role 2',
			clientName: 'Client 2'
		}
	},
	{
		node: {
			orderNumber: 1,
			slug: 'slug-1',
			companyLogo: { file: { url: 'logo-1.jpg' } },
			cardImage: { file: { url: 'image-1.jpg' } },
			leadingText: 'Leading Text 1',
			ingress: 'Ingress 1',
			professionalRole: 'Role 1',
			clientName: 'Client 1'
		}
	}
];

describe('CardGrid component', () => {
	it('renders without crashing', () => {
		render(<CardGrid content={mockContent} />);
		// Ensure the wrapper and grid are rendered
		expect(screen.getByRole('main')).toBeInTheDocument();
	});

	it('renders the correct number of Card components', () => {
		render(<CardGrid content={mockContent} />);
		// Check that the correct number of Card components are rendered
		const cards = screen.getAllByTestId('card');
		expect(cards).toHaveLength(mockContent.length);
	});

	it('renders Card components with correct props', () => {
		render(<CardGrid content={mockContent} />);

		// Check the props for each Card
		mockContent.forEach(contentItem => {
			const card = screen.getByTestId(`card-${contentItem.node.slug}`);
			expect(card).toBeInTheDocument();
			expect(card).toHaveAttribute('data-slug', contentItem.node.slug);
			expect(card).toHaveAttribute('data-companyLogo', contentItem.node.companyLogo.file.url);
			expect(card).toHaveAttribute('data-cardImage', contentItem.node.cardImage.file.url);
			expect(card).toHaveAttribute('data-leadingText', contentItem.node.leadingText);
			expect(card).toHaveAttribute('data-ingress', contentItem.node.ingress);
			expect(card).toHaveAttribute('data-role', contentItem.node.professionalRole);
			expect(card).toHaveAttribute('data-clientName', contentItem.node.clientName);
		});
	});

	it('sorts cards by orderNumber', () => {
		render(<CardGrid content={mockContent} />);

		// Ensure cards are sorted by orderNumber
		const cards = screen.getAllByTestId('card');
		expect(cards[0]).toHaveTextContent('Client 1'); // The one with orderNumber: 1
		expect(cards[1]).toHaveTextContent('Client 2'); // The one with orderNumber: 2
	});
});
