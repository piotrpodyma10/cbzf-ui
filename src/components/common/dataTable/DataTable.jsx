import { useState } from 'react'
import { getComparator, stableSort } from '../../../utils/sortUtils'
import { TableSortLabel } from '@mui/material'
import { visuallyHidden } from '@mui/utils'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import Pagination from './pagination/Pagination'
import Box from '@mui/material/Box'
import Row from './row/Row'
import './DataTable.scss'

export default function DataTable({ className = '', data, noPagination, all, isScroll = false }) {
  const { rows, columns } = data
  const [rowsPerPage, setRowsPerPage] = useState(all ? -1 : 10)
  const [orderBy, setOrderBy] = useState('status')
  const [order, setOrder] = useState('asc')
  const [page, setPage] = useState(0)

  const ids = columns.map((column) => column.id)

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const createSortHandler = (property) => () => {
    handleRequestSort(property)
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const sortSliceData = (rows) => {
    if (noPagination && isScroll) {
      return stableSort(rows, getComparator(order, orderBy)).map((row, index) => (
        <Row key={index} index={index} row={row} ids={ids} />
      ))
    }
    return stableSort(rows, getComparator(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row, index) => <Row key={index} index={index} row={row} ids={ids} />)
  }

  return (
    <div className='data-table'>
      {/* <Filters /> */}
      <TableContainer className={`table-container ${className}`}>
        <Table>
          <TableHead>
            <TableRow>
              <>
                {columns.map((column, index) => {
                  let displayLabel = column.label
                  if (displayLabel.includes('\n')) {
                    const splitValue = displayLabel.split('\n')
                    displayLabel = (
                      <div>
                        <div>{splitValue[0]}</div> <div>{splitValue[1]}</div>{' '}
                      </div>
                    )
                  }

                  return (
                    <TableCell
                      className='header-cell'
                      align={'center'}
                      key={index}
                      sortDirection={orderBy === column.id ? order : false}
                    >
                      <TableSortLabel
                        active={orderBy === column.id}
                        direction={orderBy === column.id ? order : 'asc'}
                        onClick={createSortHandler(column.id)}
                      >
                        {displayLabel}
                        {orderBy === column.id ? (
                          <Box sx={visuallyHidden}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</Box>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                  )
                })}
              </>
            </TableRow>
          </TableHead>
          <TableBody>{sortSliceData(rows)}</TableBody>
        </Table>
      </TableContainer>
      {!noPagination && (
        <TableFooter>
          <TableRow>
            <TablePagination
              className='table-pagination'
              rowsPerPageOptions={[5, 10, 15, 25, { label: 'All', value: -1 }]}
              labelRowsPerPage={'Ilość wierszy na strone'}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={Pagination}
            />
          </TableRow>
        </TableFooter>
      )}
    </div>
  )
}
