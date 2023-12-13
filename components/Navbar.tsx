import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import { Box, Flex, Link, Heading, Text, Avatar } from '@chakra-ui/react'
import NextLink from 'next/link'

export function Navbar() {
  const address = useAddress()

  return (
    <Box
      maxW={'1800px'}
      m={'auto'}
      py={'10px'}
      px={'40px'}
      bg={'purple'}
      textColor={'white'}
    >
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        {' '}
        {/*space-betwind 바에서 구간 정하기*/}
        <Link as={NextLink} href="/">
          <Heading> NFT Marketplace </Heading>
        </Link>
        <Flex direction={'row'}>
          <Link as={NextLink} href="/buy" mx={2}>
            <Text fontSize={'xl'} as="b">
              {' '}
              Buy{' '}
            </Text>
          </Link>
          <Link as={NextLink} href="/sell" mx={2.5}>
            <Text fontSize={'xl'} as="b">
              {' '}
              Sell{' '}
            </Text>
          </Link>
        </Flex>
        <Flex dir={'row'} alignItems={'center'}>
          <ConnectWallet /> {/*Address가 있을 때만 && */}
          {address && (
            <Link as={NextLink} href={`/profile/${address}`}>
              {' '}
              {/*자바 쓰려면 중괄호 안에다가*/}
              <Avatar src="https://bit.ly/broken-link" ml={'20px'} />
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}
