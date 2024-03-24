'use client'

import React from 'react'
import { AbsoluteCenter, Box, Heading } from '@chakra-ui/react'

const HomeScreen: React.FC = () => (
    <Box position='relative' h='100vh'>
        <AbsoluteCenter axis='both'>
            <Heading>Uzi</Heading>
        </AbsoluteCenter>
    </Box>
)

export default HomeScreen
