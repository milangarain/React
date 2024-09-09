import { render, screen } from "@testing-library/react"
import Greetings from "./Greetings"
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
	test('renders "learn jest" text', () => {
		//3 A's -- Arrange, Act, Assert

		//Arrange
		render(<Greetings />);

		//Act
		//Do nething here

		//Assert
		const learnJestElement = screen.getByText('learn jest', {exact: false});
		expect(learnJestElement).toBeInTheDocument();
	});
	test('renders "learning completed" text on Btn click', () => {
		//3 A's -- Arrange, Act, Assert

		//Arrange
		render(<Greetings />);

		//Act
		userEvent.click(screen.getByRole('button'))

		//Assert
		const learnJestElement = screen.getByText('learning completed', {exact: false});
		expect(learnJestElement).toBeInTheDocument();
	});
	test('should not renders "learn jest" text on Btn click', () => {
		//3 A's -- Arrange, Act, Assert

		//Arrange
		render(<Greetings />);

		//Act
		userEvent.click(screen.getByRole('button'))

		//Assert
		const learnJestElement = screen.queryByText('learn jest', {exact: false});
		expect(learnJestElement).not.toBeInTheDocument();
	});
})