import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Button,
  IconButton
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import Link from 'next/link'
import {
  faGithub,
  faTwitch,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from '../components/socials'

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
          <SocialIcon>
            <IconButton mr={2}>
              <FontAwesomeIcon icon={faTwitch} fixedWidth />
            </IconButton>
            <IconButton mr={2}>
              <FontAwesomeIcon icon={faYoutube} fixedWidth />
            </IconButton>
            <IconButton>
              <FontAwesomeIcon icon={faGithub} fixedWidth />
            </IconButton>
          </SocialIcon>
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
          <NextLink href="/documents/resume.pdf" rel="noopener noreferrer">
            <Button rightIcon={<ChevronRightIcon />} ml={{ base: 5, md: 5 }}>
              My Resume
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Libya.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Started freelance web development for small businesses.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed Bachelors in Computer Science at Rutgers University.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          <Link href="/photography">Photography</Link>, Art, Fashion, Keyboards,
          and Music
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
