import React from 'react';
import { Box, Heading, Text, Image, Flex, Tag, space, Divider, Link } from '@chakra-ui/react';

function Education() {
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

            <Heading justifySelf={'left'} >
                Mis proyectos
            </Heading>
            <Box
                borderWidth={2}
                borderRadius={'2xl'}
                my={50}
                mx={5}
                p={5}
                bgColor={'blackAlpha.200'}
            >
                <Text fontWeight={'bold'} fontSize={'lg'}>FichajeApp</Text>

                <Flex wrap="wrap" gap={2} mt={2}>
                    <Tag bgColor={'gray.500'}>React</Tag>
                    <Tag bgColor={'gray.500'}>MongoDB</Tag>
                    <Tag bgColor={'gray.500'}>Node.js</Tag>
                    <Tag bgColor={'gray.500'}>Material UI</Tag>
                </Flex>

                <Text mt={5} align={'left'}>
                    <Text fontWeight={'bold'}>Gestión de horarios de empleados</Text>
                    Portal web donde los empleados registran sus horarios de entrada y salida quedando guardado en una base de datos.
                </Text>

                <Link color='green.400' href='https://github.com/ValenaConsulting/FichajeApp' isExternal>Repositorio de GitHub</Link>
            </Box>

            <Box
                borderWidth={2}
                borderRadius={'2xl'}
                my={50}
                mx={5}
                p={5}
                bgColor={'blackAlpha.200'}
            >
                <Text fontWeight="bold" fontSize="lg">LineCode</Text>

                <Flex wrap="wrap" gap={2} mt={2}>
                    <Tag bgColor="gray.500">React</Tag>
                    <Tag bgColor="gray.500">Chakra UI</Tag>
                    <Tag bgColor="gray.500">API</Tag>
                    <Tag bgColor="gray.500">Google</Tag>
                    <Tag bgColor="gray.500">TFG</Tag>
                </Flex>

                <Text mt={5} mb={2} align={'left'}>
                    <Text fontWeight={'bold'}>Trabajo de fin de grado</Text>
                    Web de gestión escolar alimentada por la API de Google Classroom, alternativa de fácil migración para los centros
                    que ya usen la plataforma.
                </Text>

                <Link color='green.400' href='https://github.com/Bruno-AltoCapo/LineCode' isExternal>Repositorio de GitHub</Link>
            </Box>

        </Box>
    );
}

export default Education;
