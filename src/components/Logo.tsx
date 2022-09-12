import { Box, ChakraProps, OmitCommonProps, Text } from "@chakra-ui/react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

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
			<Text fontSize="lg" fontWeight={"bold"}>
				Ojore_Chris
			</Text>
		</Box>
	);
}
