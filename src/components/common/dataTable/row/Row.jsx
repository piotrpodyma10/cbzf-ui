import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Tooltip from '@mui/material/Tooltip'
import './Row.scss'

function Row({ ids, row }) {
  const transactionBanner = (fundsAvailable, currency) => {
    const { floatingValue = 0, spaceValue = '', spaceFloatingValue = '' } = fundsAvailable || {}
    let resultClass = 'positive-value'
    if (floatingValue < 0) resultClass = 'negative-value'
    return (
      <TableCell align={'center'}>
        <Tooltip className='tooltip' title={spaceValue} arrow placement='top'>
          <span className={`status ${resultClass}`}>
            {floatingValue > 0 && '+'}
            {spaceFloatingValue} {currency}
          </span>
        </Tooltip>
      </TableCell>
    )
  }

  return (
    <TableRow className='table-row' hover sx={{ '& > *': { borderBottom: 'unset' } }}>
      {ids.map((id, index) => {
        let value = row[id]
        if (id.includes('.')) {
          const obj = id.split('.')

          value = row[obj[0]][obj[1]]
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
