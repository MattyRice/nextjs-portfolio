import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="teal"
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
      </Box>
    </Container>
  )
}

export default Page
