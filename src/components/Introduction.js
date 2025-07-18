import React from 'react';
import { Box, Heading, Text, Image, Flex, Divider } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Introduction() {
    return (
        <Box
            width={{ base: "100%", md: "50%", lg: "66%" }}
            minW="100%"
            minH="100%"
            m={0}
            p={6}
            color="white"
            boxShadow="lg"
            borderWidth={0}
            borderColor="#16db65"
        >
            <Flex
                align="center"
                justify="space-between"
                direction={{ base: 'column', md: 'row' }}
                gap={6}
            >
                <Box textAlign={{ base: 'center', md: 'left' }} width="100%">
                    <Heading mb={5}>Introducción</Heading>
                    <Box borderWidth={2} borderRadius="3xl" p={7}>
                        <Heading size="xl" mb={4}>Desarrollador Junior, residente en Granada</Heading>
                        <Flex direction={{ base: "column", md: "row" }} gap={4}>
                            <Text fontSize="lg">
                                Hola! Mi nombre es Bruno y soy desarrollador web con vocación por crear sitios y aplicaciones web modernas, funcionales y optimizadas. Me apasiona transformar ideas en soluciones digitales intuitivas y eficientes, poniendo especial atención en la experiencia del usuario, el rendimiento y la escalabilidad.
                            </Text>
                        </Flex>
                    </Box>

                    <Divider my={5} />
                    <Heading>Contacto</Heading>

                    <Box mt={5} p={5} overflowX="auto">
                        <Flex
                            wrap="wrap"
                            justify="center"
                            gap={4}
                        >
                            {[{
                                icon: <MdEmail size={50} />,
                                color: "whiteAlpha.700",
                                bg: "blackAlpha.700"
                            }, {
                                icon: <FaLinkedinIn size={50} />,
                                color: "white",
                                bg: "green.800"
                            }, {
                                icon: <FaGithub size={50} />,
                                color: "white",
                                bg: "gray.800"
                            }].map(({ icon, color, bg }, idx) => (
                                <Box
                                    key={idx}
                                    flex="1 1 250px"
                                    color={color}
                                    bgColor={bg}
                                    borderWidth={2}
                                    borderRadius="3xl"
                                    p={6}
                                    minW="250px"
                                >
                                    <Flex direction="column" height="100%" justify="space-between">
                                        <Box>{icon}</Box>
                                        <Text as="b" fontSize="md" textAlign="center" mt={2}>
                                            bruno.marin@outlook.es
                                        </Text>
                                    </Flex>
                                </Box>
                            ))}
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}

export default Introduction;
