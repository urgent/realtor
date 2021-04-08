/** @jsxImportSource theme-ui */
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '@rebass/preset'
import { Box, Button } from 'rebass'
import Realtor from './Realtor'

function App() {
  return <ThemeProvider theme={theme}>
    <Box pt="1" sx={{ bg: "secondary", minHeight: "100vh", }}>
      <Button bg='secondary' />
      <Box
        backgroundColor="primary"
        sx={{
          maxWidth: "40em",
          mx: 'auto',
          px: 3,
          boxShadow: "3px 3px 3px rgb(0 0 0 / 10%)"
        }}>
        <Realtor />
      </Box>
    </Box>
  </ThemeProvider >
}

export default App