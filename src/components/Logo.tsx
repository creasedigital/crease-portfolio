import { Box, ChakraProps, OmitCommonProps, Text } from "@chakra-ui/react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

export default function Logo(
	props: JSX.IntrinsicAttributes &
		OmitCommonProps<
			DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
			keyof ChakraProps
		> &
		ChakraProps & { as?: "div" | undefined },
) {
	return (
		<Box {...props}>
			<Link to="/">
				<Text fontSize="lg" fontWeight={"bold"}>
					Ojore_Chris
				</Text>
			</Link>
		</Box>
	);
}
