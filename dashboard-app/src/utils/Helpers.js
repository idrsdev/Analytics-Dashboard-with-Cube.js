import moment from 'moment'
import numeral from 'numeral'

export const numberFormatter = (item) => numeral(item).format('0,0')
export const dateFormatter = (item) => {
   const date = moment(item).format('MMM YY')
   return date
}
