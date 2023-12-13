import { ConnectWallet } from '@thirdweb-dev/react'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { Button, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Container
      maxW={'1200px'}
      backgroundImage="url('metaverse.jpg')"
      backgroundSize="1200px"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Flex h={'80vh'} alignItems={'center'} justifyContent={'center'}>
        <Stack spacing={10} align={'center'}>
          <Heading>Marketplace</Heading>
          <Text fontSize={'xl'} align={'center'}>
            Gateway to the Ethereum blockchain, NFT, Coin <br />
            with Thirdweb, Ethers, Next.js, ChakraUI, Typescript
          </Text>
          <Button as={NextLink} href="/buy" bg="blue.200">
            <Text fontSize={'2xl'} fontWeight={'bold'} p={4}>
              Shop NFTs
            </Text>
          </Button>
        </Stack>
      </Flex>
    </Container>
  )
}

export default Home
