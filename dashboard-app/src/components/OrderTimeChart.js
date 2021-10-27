import {
   XAxis,
   YAxis,
   Tooltip,
   ResponsiveContainer,
   Legend,
   BarChart,
   Bar,
} from 'recharts'

import Chart from './Chart'
import { numberFormatter } from '../utils/Helpers'
import { dateFormatter } from '../utils/Helpers'

export default function OrderTimeChart({ cubejsApi }) {
   return (
      <Chart
         cubejsApi={cubejsApi}
         title='Orders by Status Over time'
         query={{
            measures: ['Orders.count'],
            timeDimensions: [
               {
                  dimension: 'Orders.createdAt',
                  granularity: 'month',
               },
            ],
            order: {
               'Orders.count': 'desc',
            },
            dimensions: ['Orders.status'],
            filters: [],
         }}
         render={(resultSet) => {
            return (
               <ResponsiveContainer width='100%' height={300}>
                  <BarChart data={resultSet.chartPivot()}>
                     {console.log(resultSet.chartPivot())}
                     <XAxis tickFormatter={dateFormatter} dataKey='x' />
                     <YAxis tickFormatter={numberFormatter} />
                     <Bar
                        stackId='a'
                        dataKey='shipped,Orders.count'
                        name='Shipped'
                        fill='#7DB3FF'
                     />
                     <Bar
                        stackId='a'
                        dataKey='processing,Orders.count'
                        name='Processing'
                        fill='#49457B'
                     />
                     <Bar
                        stackId='a'
                        dataKey='completed,Orders.count'
                        name='Completed'
                        fill='#FF7C78'
                     />
                     <Legend />
                     <Tooltip />
                  </BarChart>
               </ResponsiveContainer>
            )
         }}
      />
   )
}
