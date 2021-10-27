import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { numberFormatter } from '../utils/Helpers'

import Chart from '../components/Chart'
import UserTimeChart from '../components/UserTimeChart'
import OrderTimeChart from '../components/OrderTimeChart'

const renderSingleValue = (resultSet, key) => (
   <h1 height={300}>{numberFormatter(resultSet.chartPivot()[0][key])}</h1>
)

const Home = ({ cubejsApi }) => {
   return (
      <Container fluid>
         <Row>
            <Col sm={12} md={6} lg={4}>
               <Chart
                  cubejsApi={cubejsApi}
                  title='Total Users'
                  query={{ measures: ['Users.count'] }}
                  render={(resultSet) =>
                     renderSingleValue(resultSet, 'Users.count')
                  }
               />
            </Col>
            <Col sm={12} md={6} lg={4}>
               <Chart
                  cubejsApi={cubejsApi}
                  title='Total Orders'
                  query={{ measures: ['Orders.count'] }}
                  render={(resultSet) =>
                     renderSingleValue(resultSet, 'Orders.count')
                  }
               />
            </Col>
            <Col sm={12} md={6} lg={4}>
               <Chart
                  cubejsApi={cubejsApi}
                  title='Shipped Orders'
                  query={{
                     measures: ['Orders.count'],
                     filters: [
                        {
                           dimension: 'Orders.status',
                           operator: 'equals',
                           values: ['shipped'],
                        },
                     ],
                  }}
                  render={(resultSet) =>
                     renderSingleValue(resultSet, 'Orders.count')
                  }
               />
            </Col>
         </Row>
         <br />

         <Row>
            <Col sm={12} md={6}>
               <UserTimeChart />
            </Col>
            <Col sm={12} md={6}>
               <OrderTimeChart />
            </Col>
         </Row>
      </Container>
   )
}

export default Home
