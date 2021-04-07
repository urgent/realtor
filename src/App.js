import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from './theme.js'
import { Box } from 'rebass'
import Realtor from './Realtor'

function App() {
  return <ThemeProvider theme={theme}>
    <Box backgroundColor="#FAFAFA" pt="3rem" sx={{ minHeight: "100vh" }}>
      <Box
        backgroundColor="#FFFFFF"
        sx={{
          maxWidth: "40em",
          mx: 'auto',
          px: 3,
          boxShadow: "3px 3px 3px rgb(0 0 0 / 10%)"
        }}>
        <Realtor />
      </Box>
    </Box>
  </ThemeProvider>
}

export default App