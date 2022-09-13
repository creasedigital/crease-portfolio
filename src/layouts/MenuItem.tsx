import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IMenuItem {
	children: string;
	isLast?: boolean;
	to: string;
	rest?: any;
}

const MenuItem: React.FC<IMenuItem> = ({
	children,
	isLast,
	to = "/",
	...rest
}) => {
	return (
		<Link to={to}>
			<Text display="block" {...rest}>
				{children}
			</Text>
		</Link>
	);
};
export default MenuItem;
