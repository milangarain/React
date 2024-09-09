import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async Component' , () => {
	test('renders listitems', async () => {
		//Arrange
		//Mock fetch component
		window.fetch = jest.fn();
		window.fetch.mockResolvedValueOnce({
			json: async () => [{id: 'p1', title:'First post'}],
		});

		render(<Async />)

		//Act
		//no nothing

		//Assert
		const listItems = await screen.findAllByRole('listitem');
		expect(listItems).not.toHaveLength(0);
	})
})