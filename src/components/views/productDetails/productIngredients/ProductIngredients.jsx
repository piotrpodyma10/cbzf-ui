import React from 'react'

export const ProductIngredients = (ingredients) => {
  const {
    aromat,
    dodatekIlosc,
    idDodatek1,
    idDodatek2,
    idDodatek3,
    idDodatek4,
    idDodatek5,
    idDodatek6,
    idDodatek7,
    idDodatek8,
    skladnik1,
    skladnik2,
    skladnik3,
    skladnik4,
    skladnik5,
    skladnik6,
    skladnik7,
    skladnik8,
    skladnik9,
  } = ingredients && ingredients.length > 0 && ingredients[0]

  return (
    <div>
      <div className='title'>Skład</div>
    </div>
  )
}
