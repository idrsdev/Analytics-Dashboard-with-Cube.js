import Chart from './Chart'
import { numberFormatter } from '../utils/Helpers'
import { dateFormatter } from '../utils/Helpers'

import {
   AreaChart,
   Area,
   XAxis,
   YAxis,
   Tooltip,
   ResponsiveContainer,
} from 'recharts'

export default function UserTimeChart({ cubejsApi }) {
   return (
      <Chart
         cubejsApi={cubejsApi}
         title='New Users Over Time'
         query={{
            measures: ['Users.count'],
            timeDimensions: [
               {
                  dimension: 'Users.createdAt',
                  dateRange: ['2019-01-01', '2020-12-31'],
                  granularity: 'month',
               },
            ],
         }}
         render={(resultSet) => (
            <ResponsiveContainer width='100%' height={300}>
               <AreaChart data={resultSet.chartPivot()}>
                  <XAxis dataKey='x' tickFormatter={dateFormatter} />
                  <YAxis tickFormatter={numberFormatter} />
                  <Tooltip labelFormatter={dateFormatter} />
                  <Area
                     type='monotone'
                     dataKey='Users.count'
                     name='Users'
                     stroke='rgb(106, 110, 229)'
                     fill='rgba(106, 110, 229, .16)'
                  />
               </AreaChart>
            </ResponsiveContainer>
         )}
      />
   )
}
