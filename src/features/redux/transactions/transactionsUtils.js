import moment from 'moment'

export const combineRecords = () => {
  const transactions = [...balances.data.collection]
  transactions.forEach((balance, index) => {
    currencies.data.collection.forEach((currency) => {
      if (balance.currencyId === currency.currencyId) {
        transactions[index].precision = currency.precision
        transactions[index].currency = currency.currencyName || ''
        transactions[index].formattedFunds = addPrecision(transactions[index].fundsAvailable, currency.precision)
        transactions[index].formattedDate = moment.unix(balance.createdAt / 1000).format('DD/MM/YYYY HH:mm')
      }
    })
    users.data.collection.forEach((user, index) => {
      transactions[index].userName = user.userName
    })
  })
  return transactions
}

const addPrecision = (value, precision) => {
  let indexOfPrecision = 1
  let indexOfNumberSpace = 0
  let formattedValue = value.split('')
  let floatingValue = 0
  let spaceFloatingValue
  let isAddedSeparator = false
  for (let i = formattedValue.length - 1; i > 0; i--) {
    if (indexOfPrecision === precision) {
      formattedValue = [...formattedValue.slice(0, i), ',', ...formattedValue.slice(i)]
      floatingValue = parseFloat(parseFloat(formattedValue.join('').replace(',', '.')).toFixed(2))
      spaceFloatingValue = floatingValue.toString()
      isAddedSeparator = true
    }

    if (isAddedSeparator && indexOfNumberSpace === 3) {
      formattedValue = [...formattedValue.slice(0, i), ' ', ...formattedValue.slice(i)]
      spaceFloatingValue = [...formattedValue.slice(0, i), ' ', ...formattedValue.slice(i)]
      indexOfNumberSpace = 0
    }
    if (isAddedSeparator) {
      indexOfNumberSpace++
    }

    indexOfPrecision++
  }
  return {
    spaceValue: formattedValue.join(''),
    spaceFloatingValue: spaceFloatingValue,
    floatingValue: floatingValue,
  }
}
