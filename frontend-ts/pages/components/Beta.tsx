import React from 'react';
import { Stack, Text, Button, Center } from '@chakra-ui/react';
import { FcLock } from 'react-icons/fc';

export default function SimpleCookiePreference() {
  return (
    <Stack p="6" boxShadow="lg" m="5" borderRadius="md">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">BETA</Text>
        <FcLock />
      </Stack>

      <Center
        // direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          Please note that this platform is still in development.
        </Text>
        
      </Center>
    </Stack>
  );
}
