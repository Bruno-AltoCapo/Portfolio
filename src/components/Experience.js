import React from 'react';
import { Box, Heading, Text, Image, Flex, Tag, space, Divider } from '@chakra-ui/react';

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
            <Heading justifySelf={'left'}>Estudios</Heading>
                        <Box
                            borderWidth={2}
                            borderRadius={'2xl'}
                            my={50}
                            mx={5}
                            p={5}
                            bgColor={'whiteAlpha.800'}
                            color={'blackAlpha.900'}>
            
                            <Flex alignItems={'left'} justifySelf={'space-between'} gap={4}>
                                <Tag bgColor={'green.500'}>2023 - 2025</Tag>
                                <Text fontWeight={'bold'} fontSize={'lg'}>Grado Superior</Text>
                            </Flex>
            
                            <Text mt={5} align={'left'}><Text fontWeight={'bold'}>Desarrollo de Aplicaciones Web</Text>Cursado en Isen FP, Cartagena, Murcia</Text>
                        </Box>
                        <Divider my={5} />
            <Heading justifySelf={'left'}>Experiencia</Heading>
            <Box
                borderWidth={2}
                borderRadius={'2xl'}
                my={50}
                mx={5}
                p={5}
                bgColor={'blackAlpha.200'}>

                <Flex alignItems={'left'} justifySelf={'space-between'} gap={4}>
                    <Tag bgColor={'green.500'}>2025</Tag>
                    <Text fontWeight={'bold'} fontSize={'lg'}>Prácticas</Text>
                </Flex>

                <Text mt={5} align={'left'}><Text fontWeight={'bold'}>Valena Consulting</Text>Desarrollo en proyectos web usando React, Node.js, MongoDB</Text>
            </Box>
            <Box
                borderWidth={2}
                borderRadius={'2xl'}
                my={50}
                mx={5}
                p={5}
                bgColor={'blackAlpha.200'}>

                <Flex alignItems={'left'} justifySelf={'space-between'} gap={4}>
                    <Tag bgColor={'green.500'}>2024</Tag>
                    <Text fontWeight={'bold'} fontSize={'lg'}>Premio Nacional Olimpiadas Teleco</Text>
                </Flex>

                <Text mt={5} align={'left'}><Text fontWeight={'bold'}>Valena Consulting</Text>Desarrollo en proyectos web usando React, Node.js, MongoDB</Text>
            </Box>

        </Box>
    );
}

export default Experience;
