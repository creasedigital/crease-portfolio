import { Flex } from "@chakra-ui/react";

interface INavBarContainer {
	children: any;
	props: any;
}

const NavBarContainer: React.FC<INavBarContainer> = ({
	children,
	...props
}) => {
	return <Flex>{children}</Flex>;
};
export default NavBarContainer;
