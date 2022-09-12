import Logo from "components/Logo";
import { useState } from "react";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavBarContainer from "./NavBarContainer";

const NavBar = (props: any) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<NavBarContainer {...props}>
			<Logo w="100px" />
			<MenuToggle toggle={toggle} isOpen={isOpen} />
			<MenuLinks isOpen={isOpen} />
		</NavBarContainer>
	);
};
export default NavBar;
