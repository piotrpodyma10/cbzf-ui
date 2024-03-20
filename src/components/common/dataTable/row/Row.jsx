import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Tooltip from '@mui/material/Tooltip'
import './Row.scss'

function Row({ ids, row }) {
  return (
    <TableRow className='table-row' hover sx={{ '& > *': { borderBottom: 'unset' } }}>
      {ids.map((id, index) => {
        let value = row?.[id] || ''
        if (id?.includes('.')) {
          const obj = id.split('.')

          if (typeof row[obj[0]] === 'object') {
            value = row[obj[0]][obj[1]]
          }
        }

        if (typeof value === 'string' && value?.includes('\n')) {
          const splitValue = value.split('\n')
          value = (
            <>
              {splitValue[0]} <div>{splitValue[1]}</div>{' '}
            </>
          )
        }

        if (typeof value === 'boolean' || row?.[id] === false) {
          value = value ? 'Tak' : 'Nie'
        }

        return (
          // <TableCell className={`table-cell ${index ? 'center' : 'left'}`} align={index ? 'center' : 'left'}>
          <TableCell key={index} className={`table-cell ${index ? 'center' : 'left'}`} align={'center'}>
            {value}
          </TableCell>
        )
      })}
    </TableRow>
  )
}

{
  /* <TableCell className='table-cell' component='th' scope='row'>
        {row.formattedDate}
      </TableCell>
      <TableCell className='table-cell' align='center'>
        {row.userName}
      </TableCell>
      {transactionBanner(row.formattedFunds, row.currency)}
      <TableCell className='table-cell' align='center'>
        {row.balanceType}
      </TableCell>
      <TableCell className='table-cell' align='center'>
        {row.balanceName}
      </TableCell> */
}
{
  /* // </TableRow> */
}
{
  /* //   ) */
}
{
  /* // } */
}

export default Row
