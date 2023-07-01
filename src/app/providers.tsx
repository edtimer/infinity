// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import NextAuthProvider from './providers/sessionProvider'

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <NextAuthProvider>

      <CacheProvider>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </NextAuthProvider>
  )
}