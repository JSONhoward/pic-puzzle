import * as React from 'react';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { theme } from './Styles/theme';
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App
