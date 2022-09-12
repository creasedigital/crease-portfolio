import { Box, Stack } from "@chakra-ui/react";
import { links } from "data";
import MenuItem from "./MenuItem";

interface IMenuLinks {
	isOpen: boolean;
}

const MenuLinks: React.FC<IMenuLinks> = ({ isOpen }) => {
	return (
		<Box
			display={{ base: isOpen ? "block" : "none", md: "block" }}
			flexBasis={{ base: "100%", md: "auto" }}
		>
			<Stack
				spacing={8}
				align={{ base: "left", md: "center" }}
				justify={["center", "space-between", "flex-end", "flex-end"]}
				direction={["column", "row", "row", "row"]}
				pt={[4, 4, 0, 0]}
			>
				{links.map((link, i) => (
					<MenuItem children={link.title} key={i} to={link.to} />
				))}
			</Stack>
		</Box>
	);
};
export default MenuLinks;
