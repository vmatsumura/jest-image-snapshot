import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/Routes'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#242424'
    }
  }
})

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>  
      <Routes />
    </Router>
  </ThemeProvider>
)

export default App
