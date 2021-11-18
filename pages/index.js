import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        align="center"
        letterSpacing="1.5px"
        mb={6}
      >
        Hello I'm am Matt and I am a developer
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Matthew Ricio
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/headshot.jpeg"
            alt="Matthew Ricio"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Hello!
        </Heading>
        <Paragraph>
          I'm Matt and I am a freelance and full-stack developer based in NYC
          with a passion for building digital dervices/stuff I want. I have a
          knack and curiousity for all things like lauching products,
          planning/designing, and solving real world problems with code. When I
          am not online, I am building keyboards, giving haircuts, and playing
          with my dog. Currently I am looking for new opportunities!
        </Paragraph>
        <Box align="center" my={4} justifyContent="center">
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} mr={{ base: 5, md: 5 }}>
              My Portfolio
            </Button>
          </NextLink>
          <NextLink href="/documents/resume.pdf">
            <Button rightIcon={<ChevronRightIcon />} ml={{ base: 5, md: 5 }}>
              My Resume
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default Page
