import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
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

        if (row?.[id] === 0 && row?.indeks === 0) {
          value = 0
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
          <TableCell key={index} className={`table-cell ${index ? 'center' : 'left'}`} align={'center'}>
            {value}
          </TableCell>
        )
      })}
    </TableRow>
  )
}

export default Row
