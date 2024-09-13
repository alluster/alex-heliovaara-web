import React from 'react';
import { render, screen } from '../../../test-utils';
import Card from './Card';

describe('Card component', () => {
	it('Displays card props', () => {

		render(
			<Card
				clientName="Client Name"
				leadingText="Leading Text"
				image="image.jpg"
				slug="some-article"
			/>
		);

		const clientName = screen.getByTestId('client-name');
		expect(clientName).toBeInTheDocument();

		const leadingText = screen.getByTestId('leading-text');
		expect(leadingText).toBeInTheDocument();

		const image = screen.getByTestId('image');
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute('alt', 'Leading Text');

		const slug = screen.getByTestId('slug');
		expect(slug).toBeInTheDocument();

	});
});