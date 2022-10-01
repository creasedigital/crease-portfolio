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
	Image,
	textDecoration,
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
import SMILES from "assets/svgs/emojione-v1_smiling-face-with-heart-eyes.svg";

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
				fontSize={{ base: "2rem", sm: "2.4rem" }}
				lineHeight={{ base: "2.4rem", sm: "3.2rem" }}
				letterSpacing="150%"
				mb={{ base: "2rem", md: "3.2rem" }}
			>
				Let's Talk?
			</Heading>

			<Heading
				cursor="pointer"
				onClick={() => console.log("hello")}
				as="span"
				fontSize={{ base: "4rem", sm: "4.4rem" }}
				lineHeight={{ base: "4.4rem", sm: "4.8rem" }}
				letterSpacing="150%"
				mb={{ base: "2rem", md: "3.2rem" }}
			>
				Contact Me
			</Heading>
			<Box my="2rem">
				<Image src={SMILES} alt="" />
			</Box>
			<Box id="contact" mt="2">
				<List
					fontSize={{ base: "2rem", sm: "2.4rem" }}
					fontWeight="100"
				>
					<ListItem color={cLightBlue} _hover={{ color: cBlue }}>
						<ListIcon as={TiMail} size={24} />
						<span>Email: ojorechris@gmail.com</span>
					</ListItem>
					<ListItem
						mt="2rem"
						color={cLightBlue}
						_hover={{ color: cBlue }}
					>
						<ListIcon as={TiDevicePhone} size={24} />
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
