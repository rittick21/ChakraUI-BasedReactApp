import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend, AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return <Box
        bgColor={'blackAlpha.900'}
        minW={'40'}
        padding={'16'}
        color={'white'}
    >
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
                    Connect Us
                </Heading>
                <HStack
                    borderBottom={'2px solid white'}
                    py={'2'}
                >
                    <Input placeholder='Enter Email here' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor={'none'} />
                    <Button
                        p={'0'}
                        color={'purple'}
                        variant={'ghost'}
                        borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={'20'} />
                    </Button>
                </HStack>
            </VStack>

            <VStack w={'full'}
                borderLeft={['none', '1px solid white']}
                borderRight={['none', '1px solid white']}
            >
                <Heading
                    // size={'md'}
                    textTransform={'uppercase'}
                    textAlign={'center'}
                >
                    Video-mon
                </Heading>
                <Text>All rights received</Text>
            </VStack>

            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme={'white'} display={'flex'}>
                    <a href="https://www.facebook.com/rittick.roy.942/">
                        <AiFillFacebook size={'30px'}/>
                    </a>
                    <p>Facebook</p>
                </Button>

                <Button variant={'link'} colorScheme={'white'} display={'flex'}>
                    <a href="https://www.linkedin.com/in/rittick-roy-05a07a225/">
                        <AiFillLinkedin size={'30px'}/>
                    </a>
                    <p>LinkedIn</p>
                </Button>

                <Button variant={'link'} colorScheme={'white'} display={'flex'}>
                    <a href="https://github.com/rittick21">
                        <AiFillGithub size={'30px'}/>
                    </a>
                    <p>Github</p>
                </Button>
            </VStack>

        </Stack>
    </Box>
}

export default Footer
