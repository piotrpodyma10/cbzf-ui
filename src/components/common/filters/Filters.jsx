import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useDispatch, useSelector } from 'react-redux'
import { filters, updateBalanceType, updateDate } from '../../../features/redux/filters/filtersSlice'
import './Filters.scss'

function Filters() {
  const dispatch = useDispatch()
  const { date, balanceType } = useSelector(filters)

  const handleDate = (event) => {
    dispatch(updateDate(event.target.value))
  }

  const handleBalanceType = (event) => {
    dispatch(updateBalanceType(event.target.value))
  }

  return (
    <div className='filters'>
      <div className='filters-container'>
        <FormControl className='filter' size='small'>
          <InputLabel>Czas</InputLabel>
          <Select
            value={date}
            label='Czas'
            onChange={handleDate}
            inputProps={{ MenuProps: { disableScrollLock: true } }}
          >
            <MenuItem value={7}>Ostatnie 7 dni</MenuItem>
            <MenuItem value={30}>Ostatnie 30 dni</MenuItem>
            <MenuItem value={90}>Ostatnie 90 dni</MenuItem>
          </Select>
        </FormControl>
        <FormControl className='filter' size='small'>
          <InputLabel>Typ operacji</InputLabel>
          <Select
            value={balanceType}
            label='Typ operacji'
            onChange={handleBalanceType}
            inputProps={{ MenuProps: { disableScrollLock: true } }}
          >
            <MenuItem value={'ADMIN'}>ADMIN</MenuItem>
            <MenuItem value={'USER'}>USER</MenuItem>
            <MenuItem value={'SYSTEM'}>SYSTEM</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default Filters
