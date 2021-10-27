import React from 'react'

import { QueryRenderer } from '@cubejs-client/react'
import { Card } from 'react-bootstrap'

const Chart = ({ cubejsApi, title, query, render }) => (
   <Card>
      <Card.Body>
         <Card.Title tag='h5'>{title}</Card.Title>
         <Card.Text>
            <QueryRenderer
               query={query}
               cubejsApi={cubejsApi}
               render={({ resultSet }) => {
                  if (!resultSet) {
                     return <div className='loader' />
                  }

                  return render(resultSet)
               }}
            />
         </Card.Text>
      </Card.Body>
   </Card>
)

export default Chart
