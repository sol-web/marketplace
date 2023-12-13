import { useContract, useNFTs } from '@thirdweb-dev/react'
import React from 'react'
import { NFT_COLLECTION_ADDRESS } from '../const/addresses'
import { Container, Heading, Text } from '@chakra-ui/react'
import NFTGrid from '../components/NFTGrid'

export default function BuyPage() {
  const { contract } = useContract(NFT_COLLECTION_ADDRESS)
  const { data, isLoading } = useNFTs(contract)

  return (
    <Container maxW={'1200px'} p={5}>
      <Heading>Buy NFTs</Heading>
      <Text>Browse and buy NFTs from this collection.</Text>
      <NFTGrid
        isLoading={isLoading}
        data={data}
        emptyText={'No NFTs found'}
      />{' '}
      {/*그리드 불러와 나열 */}
    </Container>
  )
}
