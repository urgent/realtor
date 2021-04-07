import React from 'react'
import { Card, Flex, Box, Image, Heading, Text } from 'rebass/'

function Realtor(props) {
    return <Card>
        <Flex >
            <Box p="3">
                <Image src="/bio/Georgeanna-Newmones.jpg" />
            </Box>
            <Box p="3">
                <Heading fontSize="2">Georgeanna Newmones</Heading>
                <Text>Executive Realtors</Text>
                <Text>3817 Ventnor Ave</Text>
                <Text>Atlantic City, NJ 8401</Text>
                <Text>Office - 609-645-0303</Text>
            </Box>
        </Flex>
    </Card>
}

export default Realtor