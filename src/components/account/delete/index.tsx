'use client'

import { useState } from 'react'
import { AbsoluteCenter, Alert, Box, Button, HStack, InputGroup, InputLeftAddon, Input, Text, VStack } from '@chakra-ui/react'
import useDeleteAccount from 'hooks/delete-account'

export default function DeleteAccount() {
  return (
    <Box position='relative' h='100vh'>
      <AbsoluteCenter axis='both'>
        <Text>
          We are sorry to see you go. Please confirm account deletion by entering you phone number.
        </Text>
        <DeleteForm />
      </AbsoluteCenter>
    </Box>
  )
}

function DeleteForm() {
  const { loading, status, deleteAccount } = useDeleteAccount()
  const [value, setValue] = useState('')
  const handleChange = (e: any) => setValue(e.target.value)

  return (
    <VStack align='stretch'>
      {status != 0 && (
        <Alert status={status == 200 ? 'success' : status == 500 ? 'error' : undefined}>
          {status == 200 && 'Account deleted!'}
          {status == 404 && 'Account not found. Provide a valid registered phone number'}
          {status == 500 && 'Something went horribly wrong!'}
        </Alert>
      )}
      <HStack>
        <InputGroup>
          <InputLeftAddon>+254</InputLeftAddon>
          <Input
            onChange={handleChange}
            placeholder='711 222 333'
          />
        </InputGroup>
        <Button
          isLoading={loading}
          onClick={() => value.length != 0 ? deleteAccount(value) : null}
          colorScheme='red'
        >
          Delete
        </Button>
      </HStack>
    </VStack>
  )
}
