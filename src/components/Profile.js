import React from 'react';
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';

function Profile() {
  return (
    <Box
      position="relative"
      width={{ base: "100%", md: "45%", lg: "33%" }}
      minW="100%"
      m={2}
      p={6}
      bgImage="url('/photo.jpeg')"
      bgSize="cover"
      bgPosition="center"
      color="white"
      borderRadius="3xl"
      boxShadow="lg"
      borderWidth={1}
      overflow="hidden"
      minH={{ base: "500px", md: "100%" }} // ✅ Asegura altura mínima en móvil
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={0}
      />

      {/* Contenido principal */}
      <Flex
        position="relative"
        zIndex={1}
        align="center"
        justify="space-between"
        direction={{ base: 'column', md: 'row' }}
        gap={4}
      >
        <Box textAlign={{ base: 'center', md: 'left' }} mb={{ base: 4, md: 0 }}>
          <Text fontSize="md">Hola, mi nombre es</Text>
          <Heading mb={2} color="#119822">
            Bruno Marín Figueredo
          </Heading>
        </Box>

        <Image
          src="/profilepicture.jpeg"
          alt="Foto de Bruno"
          borderRadius="full"
          boxSize="150px"
          ml={{ base: 0, md: 2 }}
          mt={{ base: 4, md: 0 }}
          zIndex={1}
        />
      </Flex>

      {/* Texto en la esquina inferior derecha */}
      <Text
        position="absolute"
        bottom={4}
        right={4}
        zIndex={1}
        fontSize="md"
        fontWeight="medium"
        textAlign="right"
        maxW="90%"
        noOfLines={{ base: 5, md: 4 }}
      >
        He vivido siempre en Cartagena pero recientemente me mudé a Granada. Tengo 24 años y muchas ganas de aprender y desarrollar mi carrera en el mundo de la programación.
      </Text>
    </Box>


  );
}

export default Profile;
