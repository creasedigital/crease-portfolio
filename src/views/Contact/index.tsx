import {
	Box,
	Heading,
	ListItem,
	List,
	Text,
	Flex,
	ListIcon,
	useColorMode,
	IconButton,
} from "@chakra-ui/react";
import Colors from "constants/Colors";
import {
	TiMail,
	TiDevicePhone,
	TiInfoLargeOutline,
	TiSocialGithub,
	TiSocialLinkedin,
	TiSocialTwitter,
} from "react-icons/ti";

const Contact = () => {
	const {
		cLightBg,
		cLightBlue,
		cDarkBg,
		cDarkGrey,
		cBlue,
		cGreen,
		cLightGreen,
	} = Colors;
	const { colorMode } = useColorMode();

	return (
		<Box>
			<Heading
				fontSize={{ base: "4rem", sm: "6.4rem" }}
				lineHeight={{ base: "4.4rem", sm: "7.2rem" }}
				letterSpacing="150%"
				mb={{ base: "2rem", md: "3.2rem" }}
				width="100%"
				maxWidth="1000rem"
			>
				Let's Talk?
				<br /> Contact{" "}
				<Box
					cursor="pointer"
					onClick={() => console.log("hello")}
					as="span"
				>
					Me
				</Box>
			</Heading>
			<Box id="contact">
				<List
					fontSize={{ base: "2rem", sm: "2.4rem" }}
					fontWeight="100"
				>
					<ListItem color={cLightBlue} _hover={{ color: cBlue }}>
						<ListIcon as={TiMail} size={24} color="facebook" />
						<a href="mailto:ojorechris@gmail.com">
							Email: ojorechris@gmail.com
						</a>
					</ListItem>
					<ListItem
						mt="2rem"
						color={cLightBlue}
						_hover={{ color: cBlue }}
					>
						<ListIcon
							as={TiDevicePhone}
							size={24}
							color="facebook"
						/>
						Mobile: +2348037598785
					</ListItem>
					<ListItem
						mt="2rem"
						color={cLightBlue}
						_hover={{ color: cBlue }}
					>
						<Flex gap={"1.5rem"}>
							<Box>
								<a
									href="https://github.com/creasedigital"
									target="_blank"
									rel="noopener noreferrer"
								>
									<IconButton
										aria-label="social icon"
										variant="outline"
										fontSize="4rem"
										color={cBlue}
										icon={<TiSocialGithub />}
									/>
								</a>
							</Box>
							<Box>
								<a
									href="https://linkedin.com/in/ojore-chris"
									target="_blank"
									rel="noopener noreferrer"
								>
									<IconButton
										aria-label="social icon"
										variant="outline"
										fontSize="4rem"
										color={cBlue}
										icon={<TiSocialLinkedin />}
									/>
								</a>
							</Box>
							<Box>
								<a
									href="https://twitter.com/creasedigital"
									target="_blank"
									rel="noopener noreferrer"
								>
									<IconButton
										aria-label="social icon"
										variant="outline"
										fontSize="4rem"
										color={cBlue}
										icon={<TiSocialTwitter />}
									/>
								</a>
							</Box>
						</Flex>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};
export default Contact;
