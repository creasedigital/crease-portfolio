import { Box, Stack } from "@chakra-ui/react";

interface IMenuLinks {
	isOpen: boolean;
}

const MenuLinks: React.FC<IMenuLinks> = ({ isOpen }) => {
	return (
		<Box
			display={{ base: isOpen ? "block" : "none", md: "block" }}
			flexBasis={{ base: "100%", md: "auto" }}
		>
			<Stack spacing={8} align={{ base: "left", md: "center" }}></Stack>
		</Box>
	);
};
export default MenuLinks;
