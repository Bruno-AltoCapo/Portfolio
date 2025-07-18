import React from 'react';
import { Box, Heading, Text, Image, Flex, Tag, space, Divider } from '@chakra-ui/react';
import { FaReact, FaNode, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

function Experience() {
    return (
        <Box
            fontSize={'lg'}
            position="relative"
            width={{ base: "100%", md: "45%", lg: "33%" }}
            minW="100%"
            m={2}
            p={2}
            bgSize="cover"
            bgPosition="center"
            color="white"
            borderRadius="3xl"
            boxShadow="lg"
            borderWidth={0}
            overflow="hidden"
            minH="100%"
        >
            <Heading justifySelf={'left'}>Intereses</Heading>

            <Text mt={5} align={'left'}>Busco fortalecer mis conocimientos de backend para encontrar un equilibrio entre la optimización
                de rendimiento y la facilidad de uso con el diseño atractivo para la mejor experiencia de los usuarios</Text>

            <Divider my={7} />

            <Heading justifySelf={'left'}>Hardskills</Heading>

            <Box
                borderWidth={2}
                borderRadius={'2xl'}
                my={50}
                mx={5}
                p={5}
                bgColor={'blackAlpha.200'}>

                <Flex align="flex-start" gap={7}>

                    <FaReact size={50} /><FaNode size={50} /><FaHtml5 size={50} /><FaCss3Alt size={50} /><SiMongodb size={50} />
                </ Flex>
            </Box>
            <Divider my={7} />
            <Heading justifySelf={'left'}>Softskills</Heading>
<Box
    borderWidth={2}
    borderRadius={'2xl'}
    my={50}
    mx={5}
    p={5}
    bgColor={'blackAlpha.200'}
>
    <Flex wrap="wrap" gap={3}>
        <Box
            display="inline-block"
            borderWidth={2}
            borderRadius="2xl"
            px={3}
            py={1}
            bg="whiteAlpha.900"
            color="blackAlpha.900"
        >
            <Text>Trabajo en equipo</Text>
        </Box>
        <Box
            display="inline-block"
            borderWidth={2}
            borderRadius="2xl"
            px={3}
            py={1}
            bg="whiteAlpha.100"
        >
            <Text>Aprendo rápido</Text>
        </Box>
        <Box
            display="inline-block"
            borderWidth={2}
            borderRadius="2xl"
            px={3}
            py={1}
            bg="whiteAlpha.100"
        >
            <Text>Comunicación</Text>
        </Box>
        <Box
            display="inline-block"
            borderWidth={2}
            borderRadius="2xl"
            px={3}
            py={1}
            bg="whiteAlpha.100"
        >
            <Text>En remoto</Text>
        </Box>
        <Box
            display="inline-block"
            borderWidth={2}
            borderRadius="2xl"
            px={3}
            py={1}
            bg="whiteAlpha.100"
        >
            <Text>Presencial</Text>
        </Box>
        <Box
            display="inline-block"
            borderWidth={2}
            borderRadius="2xl"
            px={3}
            py={1}
            bg="whiteAlpha.100"
        >
            <Text>Junior</Text>
        </Box>
        <Box
            display="inline-block"
            borderWidth={2}
            borderRadius="2xl"
            px={3}
            py={1}
            bg="whiteAlpha.100"
        >
            <Text>Resolutivo</Text>
        </Box>
        <Box
            display="inline-block"
            borderWidth={2}
            borderRadius="2xl"
            px={3}
            py={1}
            bg="green.500"
        >
            <Text>Proactivo</Text>
        </Box>
    </Flex>
</Box>

        </Box>
    );
}

export default Experience;
