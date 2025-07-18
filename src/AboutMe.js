import React from 'react';
import { Box, Heading, Text, VStack, Link, Button, Divider, Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Flex, Center } from '@chakra-ui/react';
import Profile from './components/Profile';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Description from './components/Description';
import Education from './components/Education';
import { InfoOutlineIcon, SunIcon, WarningIcon } from '@chakra-ui/icons'

function AboutMe() {
  return (
    <Box
      maxH='100%'
      maxW="100vw"
      m={5}
      p={6}
      textAlign="center"
      bg="gray.1000"
      color="white"
      borderColor="#04471c"
      borderWidth={3}
      borderRadius="lg">

      <Tabs variant='unstyled' size='lg'>

        <TabList display='flex' gap={5} alignItems='center'>
          <SunIcon boxSize={10} color='#16db65' />
          <Tab>Sobre mí</Tab>
          <Tab>Mi trabajo</Tab>
        </TabList>

        <TabIndicator mt='-1.5px' height='2px' bg='#04471c' borderRadius='1px' />
        <Divider />

        <TabPanels>

          <TabPanel>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              flexWrap="nowrap"
              gap={4}
              justify="center"
              align="stretch"
            >
              <Box w={{ base: "100%", md: "33%" }}>
                <Profile />
              </Box>
              <Box w={{ base: "100%", md: "66%" }}>
                <Introduction />
              </Box>
            </Flex>
          </TabPanel>


          <TabPanel>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              flexWrap="nowrap"
              gap={4}
              justify="center"
              align="stretch"
            >
              <Box w={{ base: "100%", md: "33%" }}>
                <Experience />
              </Box>
              <Center height='800px'>
                <Divider orientation='vertical' />
              </Center>
              <Box w={{ base: "100%", md: "33%" }}>
                <Education />
              </Box>
              <Center height='800px'>
                <Divider orientation='vertical' />
              </Center>
              <Box w={{ base: "100%", md: "33%" }}>
                <Description />
              </Box>
            </Flex>
          </TabPanel>

        </TabPanels>
      </Tabs>

    </Box>
  );
}

export default AboutMe;