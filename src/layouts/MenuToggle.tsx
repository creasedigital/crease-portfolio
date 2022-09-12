import { Box } from "@chakra-ui/react";
import { TiTimes, TiThMenu } from "react-icons/ti";

interface IMenuToggle {
	toggle: string;
	isOpen: boolean;
}

const MenuToggle: React.FC<IMenuToggle> = ({ toggle, isOpen }) => {
	return (
		<Box display={{ base: "block", md: "none" }}>
			{isOpen ? <TiTimes /> : <TiThMenu />}
		</Box>
	);
};
export default MenuToggle;
