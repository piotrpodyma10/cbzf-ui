export const handleFields = (e, f, setFields, fields) => {
  let value = e.target.value
  if (f.type === 'number') {
    value = e.target.valueAsNumber
  }

  if (value === '' || (isNaN(value) && f.type === 'number')) {
    const currentFields = { ...fields }
    delete currentFields[f.field]
    setFields(currentFields)
    return
  }

  if (f.field) {
    setFields({ ...fields, [f.field]: value })
  }

  if (f.id) {
    console.log('DANE', f, fields)
    if (f.max) {
      if (value <= f.max) {
        setFields({ ...fields, [f.id]: value })
      }

      return
    }
    setFields({ ...fields, [f.id]: value })
  }
}

export const EMAIL_REGEX =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export const areRequiredFieldsSet = (setFields, allFields) => {
  const requiredFields = allFields.filter((columns) => columns.required)
  const valueIds = Object.keys(setFields)
  if (valueIds.length < requiredFields.length) {
    return false
  }

  requiredFields.forEach((field) => {
    if (!valueIds.includes(field.id)) {
      return false
    }
  })

  return true
}
