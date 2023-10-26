import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {

  const videoArray = [
    {"i": "1", "link": 'https//player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882'},
    {"i": "2", "link": 'https//player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf'},
    {"i": "3", "link": 'https//player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174'},
    {"i": "4", "link": 'https//player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174'},
    {"i": "5", "link": 'https//player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78'},
    {"i": "6", "link": 'https//player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281'},
    {"i": "7", "link": 'https//player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614'}
  ]

  const [videoSrc, setVideoSrc] = useState({sIndex: videoArray[0].i, sLink: videoArray[0].link});
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        {/* {console.log(item.i + " " + item.link)} */}
        <video
          controls
          controlsList='nodownload'
          style={{ width: "100%" }}
          src={videoSrc.sLink}
        >
        </video>
        <VStack
          alignItems={'flex-start'}
          p={'8'}
          w={'full'}
          overflowY={'auto'}
        >
          <Heading>Sample Video {videoSrc.sIndex}</Heading>
          <Text>This is a dummy video for testing purposes. This is descriptive video.</Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'} p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {videoArray.map((item, index) => {
          return <Button
            onClick={() => {
              setVideoSrc({sIndex: item.i, sLink: item.link})
              console.log(item.i + " " + item.link) 
            }}
            variant={'ghost'}
            colorScheme={'purple'}
            key={item.i}
          >
            Video {index + 1}
          </Button>
        })}
      </VStack>
    </Stack>
  )
}

export default Videos
