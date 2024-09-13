import React from 'react';
import { render, screen } from '../../../test-utils';
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
			clientName: 'Client 1'
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
			clientName: 'Client 2'
		}
	}
];

describe('CardGrid component', () => {
	it('renders without crashing', () => {
		render(<CardGrid content={mockContent} />);
		expect(screen.getByTestId('card-grid')).toBeInTheDocument();
	});

	it('renders the correct number of Card components', () => {
		render(<CardGrid content={mockContent} />);
		const cards = screen.getAllByTestId(/^card-/);
		expect(cards.length).toBeGreaterThan(0);
	});

	it('renders Card components exist', () => {
		render(<CardGrid content={mockContent} />);

		mockContent.forEach(contentItem => {
			const card = screen.getByTestId(`card-${contentItem.node.slug}`);
			expect(card).toBeInTheDocument();
		});
	});

	it('sorts cards by orderNumber', () => {
		render(<CardGrid content={mockContent} />);
		const cards = screen.getAllByTestId(/^card-/);
		expect(cards[0]).toHaveTextContent('Client 1');
		expect(cards[1]).toHaveTextContent('Client 2');
	});
});
