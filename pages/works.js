import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import pklThumb from '../public/images/pklThumb.png'
import Section from '../components/section'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mv={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="petkiosklive"
            title="Pet Kiosk Live"
            thumbnail={pklThumb}
          >
            Ecommerce site for tropical fish.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
