import React from 'react'

import cubejs from '@cubejs-client/core'
import { CubeProvider } from '@cubejs-client/react'

import WebSocketTransport from '@cubejs-client/ws-transport'
import Header from './components/Header'

const cubejsApi = cubejs({
   transport: new WebSocketTransport({
      authorization: process.env.REACT_APP_CUBEJS_TOKEN,
      apiUrl: process.env.REACT_APP_API_URL,
   }),
})

const AppLayout = ({ children }) => (
   <>
      <Header />
      {children}
   </>
)

const App = ({ children }) => (
   <CubeProvider cubejsApi={cubejsApi}>
      <AppLayout>{children}</AppLayout>
   </CubeProvider>
)

export default App
