import { Link, Text } from "@chakra-ui/react";

interface IMenuItem {
	children: string;
	isLast: boolean;
	to: string;
	rest: any;
}

const MenuItem: React.FC<IMenuItem> = ({
	children,
	isLast,
	to = "/",
	...rest
}) => {
	return (
		<Link href={to}>
			<Text display="block" {...rest}>
				{children}
			</Text>
		</Link>
	);
};
export default MenuItem;
