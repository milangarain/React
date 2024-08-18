import logo from '../assets/investment-calculator-logo.png'
const Header = () => {
	return (
		<header id="header">
			<img src={logo} alt="money pile logo"/>
			<h1>React Investment Calculator</h1>
		</header>
	)
}

export default Header;