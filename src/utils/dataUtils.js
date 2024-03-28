export const newProviderColumns = [
  { id: 'pi', type: 'string', label: 'Rodzaj dostawcy', required: true },
  { id: 'ileKodowEan', type: 'number', label: 'Ile Kodów EAN', required: true, max: 4 },
  { id: 'par1', type: 'number', label: 'PAR 1', required: true },
  { id: 'nazwaDostawca', type: 'string', label: 'Nazwa Dostawcy', required: true },
  { id: 'adresDostawca', type: 'string', label: 'Adres', required: true },
  { id: 'idKraj', type: 'number', label: 'Id Kraj', required: true },
  { id: 'nipDostawca', type: 'string', label: 'NIP', required: true },
  { id: 'rmsdDostawca', type: 'number', label: 'RMS', required: true, max: 3 },
  { id: 'kontaktDostawca', type: 'string', label: 'Kontakt', required: true },
  { id: 'dlugKodEan1', type: 'number', label: 'Dług Kod EAN 1', required: true },
  { id: 'kodProdEan1', type: 'string', label: 'Kod EAN 1', required: true },
  { id: 'dlugKodEan2', type: 'number', label: 'Dług Kod EAN 2' },
  { id: 'kodProdEan2', type: 'string', label: 'Kod EAN 2' },
  { id: 'dlugKodEan3', type: 'number', label: 'Dług Kod EAN 3' },
  { id: 'kodProdEan3', type: 'string', label: 'Kod EAN 3' },
  { id: 'dlugKodEan4', type: 'number', label: 'Dług Kod EAN 4' },
  { id: 'kodProdEan4', type: 'string', label: 'Kod EAN 4' },
]
export const providerColumns = [{ label: 'ID', id: 'idDostawca', type: 'number' }, ...newProviderColumns]

export const pendingProviderColumns = [
  { label: 'Imie', id: 'user.firstName' },
  { label: 'Nazwisko', id: 'user.lastName' },
  { label: 'Email', id: 'user.email' },
  ...providerColumns,
  { label: 'Akcja', id: 'action' },
]

export const providerTypes = [
  { label: 'Importer', value: 'importer' },
  { label: 'Producent', value: 'producent' },
]

export const pendingProducts = [
  { label: 'Kod EAN', id: 'kodEan' },
  { label: 'Nazwa', id: 'nazwaProdukt' },
  { label: 'Opis', id: 'opisProdukt' },
  { label: 'Waga', id: 'wagaProdukt' },
  { label: 'Opakowanie', id: 'opakowanie' },
  { label: 'Kraj', id: 'idKraj' },
]

export const pendingProductsActions = [...pendingProducts, { label: 'Akcja', id: 'action' }]

export const basicProductFields = [
  { field: 'kodEan', type: 'string', label: 'Kod EAN' },
  { field: 'nazwaProdukt', type: 'string', label: 'Nazwa' },
  { field: 'opisProdukt', type: 'string', label: 'Opis' },
  { field: 'wagaProdukt', type: 'string', label: 'Waga' },
  { field: 'opakowanie', type: 'string', label: 'Opakowanie' },
  { field: 'idKraj', type: 'number', label: 'Id Kraj' },
  { field: 'skladnik1', type: 'string', label: 'Składnik 1' },
  { field: 'skladnik2', type: 'string', label: 'Składnik 2' },
  { field: 'skladnik3', type: 'string', label: 'Składnik 3' },
  { field: 'skladnik4', type: 'string', label: 'Składnik 4' },
  { field: 'skladnik5', type: 'string', label: 'Składnik 5' },
  { field: 'skladnik6', type: 'string', label: 'Składnik 6' },
  { field: 'skladnik7', type: 'string', label: 'Składnik 7' },
  { field: 'skladnik8', type: 'string', label: 'Składnik 8' },
  { field: 'skladnik9', type: 'string', label: 'Składnik 9' },
  { field: 'przechowywanie', type: 'string', label: 'Przechowywanie' },
  { field: 'trwalosc', type: 'string', label: 'Trwałość po otwarciu' },
  { field: 'przygotowanie', type: 'string', label: 'Przygotowanie' },
  { field: 'alergeny', type: 'string', label: 'Alergeny' },
  { field: 'idSprzedawca', type: 'string', label: 'Sprzedawca' },
]

export const praductIndexFields = [
  { field: 'indeksE', type: 'number', label: 'Indeks E' },
  { field: 'indeksV', type: 'number', label: 'Indeks V' },
  { field: 'indeksM', type: 'number', label: 'Indeks M' },
  { field: 'indeksO', type: 'number', label: 'Indeks O' },
  { field: 'indeksF', type: 'number', label: 'Indeks F' },
  { field: 'indeksP', type: 'number', label: 'Indeks P' },
  { field: 'indeksS', type: 'number', label: 'Indeks S' },
  { field: 'indeksT', type: 'number', label: 'Indeks T' },
]

export const productCategoryFields = [
  { field: 'liczbaKat', type: 'number', label: 'Liczba Kategorii' },
  { field: 'kategoria', type: 'string', label: 'Kategoria' },
  { field: 'kat1', type: 'string', label: 'Kategoria 1' },
  { field: 'kat2', type: 'string', label: 'Kategoria 2' },
  { field: 'kat3', type: 'string', label: 'Kategoria 3' },
  { field: 'kat4', type: 'string', label: 'Kategoria 4' },
]

export const productSquadFields = [
  { field: 'skladnikIlosc', type: 'number', label: 'Składnik Ilość', required: true },
  { field: 'skladnik1', type: 'string', label: 'Składnik 1' },
  { field: 'skladnik2', type: 'string', label: 'Składnik 2' },
  { field: 'skladnik3', type: 'string', label: 'Składnik 3' },
  { field: 'skladnik4', type: 'string', label: 'Składnik 4' },
  { field: 'skladnik5', type: 'string', label: 'Składnik 5' },
  { field: 'skladnik6', type: 'string', label: 'Składnik 6' },
  { field: 'skladnik7', type: 'string', label: 'Składnik 7' },
  { field: 'skladnik8', type: 'string', label: 'Składnik 8' },
  { field: 'dodatekIlosc', type: 'number', label: 'Dodatek Ilość' },
  { field: 'idDodatek1', type: 'number', label: 'Dodatek 1' },
  { field: 'idDodatek2', type: 'number', label: 'Dodatek 2' },
  { field: 'idDodatek3', type: 'number', label: 'Dodatek 3' },
  { field: 'idDodatek4', type: 'number', label: 'Dodatek 4' },
  { field: 'idDodatek5', type: 'number', label: 'Dodatek 5' },
  { field: 'idDodatek6', type: 'number', label: 'Dodatek 6' },
  { field: 'idDodatek7', type: 'number', label: 'Dodatek 7' },
  { field: 'idDodatek8', type: 'number', label: 'Dodatek 8' },
  { field: 'aromat', type: 'string', label: 'Aromat' },
]

export const productNutritionGeneralFields = [
  {
    nazwaGrupy: 'Wartość Energetyczna',
    nazwa: '',
    zawartosc: 0,

    jednostka: 'kcal',
    procentRws: 0,
    indeks: null,
    groupIndeks: 'indeksE',
  },
  {
    nazwaGrupy: 'Białko',
    nazwa: '',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
    groupIndeks: 'indeksP',
  },
  { nazwaGrupy: 'Sól', nazwa: '', zawartosc: 0, jednostka: 'mg', procentRws: 0, indeks: null },
]

export const productNutritionFatFields = [
  {
    nazwaGrupy: 'Tłuszcz',
    nazwa: 'Total',
    zawartosc: 0,

    jednostka: 'g',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Tłuszcz',
    nazwa: 'Kwasy nasycone',
    zawartosc: 0,

    jednostka: 'g',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Tłuszcz',
    nazwa: 'Kwasy jednonienasycone',
    zawartosc: 0,

    jednostka: 'g',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Tłuszcz',
    nazwa: 'Kwasy wielonienasycone',
    zawartosc: 0,

    jednostka: 'g',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Tłuszcz',
    nazwa: 'Cholesterol',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionCarboFields = [
  {
    nazwaGrupy: 'Węglowodany',
    nazwa: 'Total',
    zawartosc: 0,

    jednostka: 'g',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Węglowodany',
    nazwa: 'Cukry',
    zawartosc: 0,

    jednostka: 'g',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Węglowodany',
    nazwa: 'Cukry dodane',
    zawartosc: 0,

    jednostka: 'g',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Węglowodany',
    nazwa: 'Poliole',
    zawartosc: 0,

    jednostka: 'g',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Węglowodany',
    nazwa: 'Skrobia',
    zawartosc: 0,

    jednostka: 'g',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Węglowodany',
    nazwa: 'Błonnik',
    zawartosc: 0,

    jednostka: 'g',
    procentRws: 0,
    indeks: null,
    groupIndeks: 'indeksF',
  },
]

export const productNutritionVitaminFields = [
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'Total',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
    groupIndeks: 'indeksV',
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'A',
    zawartosc: 0,

    jednostka: 'mcg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'B1',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'B2',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'B3',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'B5',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'B6',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'B7',
    zawartosc: 0,

    jednostka: 'mcg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'B9',
    zawartosc: 0,

    jednostka: 'mcg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'B12',
    zawartosc: 0,

    jednostka: 'mcg',
    procentRws: 0,
    indeks: null,
  },
  { nazwaGrupy: 'Witaminy', nazwa: 'C', zawartosc: 0, jednostka: 'mg', procentRws: 0, indeks: null },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'D',
    zawartosc: 0,

    jednostka: 'mcg',
    procentRws: 0,
    indeks: null,
  },
  { nazwaGrupy: 'Witaminy', nazwa: 'E', zawartosc: 0, jednostka: 'mg', procentRws: 0, indeks: null },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'K',
    zawartosc: 0,

    jednostka: 'mcg',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionMineralFields = [
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Total',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
    groupIndeks: 'indeksM',
  },
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Sód',
    zawartosc: 0,

    jednostka: 'g',
    procentRws: 0,
    indeks: null,
  }, // ZAPOMNIELI?
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Potas',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Wapń',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Fosfor',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Magnez',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Żelazo',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Cynk',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Fluorek',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Mangan',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Miedź',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Jod',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Selen',
    zawartosc: 0,

    jednostka: 'mcg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Molibden',
    zawartosc: 0,

    jednostka: 'mcg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Chrom',
    zawartosc: 0,

    jednostka: 'mcg',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionOmgaFields = [
  {
    nazwaGrupy: 'Omega-3',
    nazwa: 'Total',
    zawartosc: 0,

    jednostka: 'g',
    procentRws: 0,
    indeks: null,
    groupIndeks: 'indeksO',
  },
  { nazwaGrupy: 'Omega-3', nazwa: 'ALA', zawartosc: 0, jednostka: 'g', procentRws: 0, indeks: null },
  {
    nazwaGrupy: 'Omega-3',
    nazwa: 'EPA+DHA',
    zawartosc: 0,

    jednostka: 'g',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionOtherVitaminsFields = [
  {
    nazwaGrupy: 'Witaminy inne',
    nazwa: 'B4',
    zawartosc: 0,

    jednostka: 'g',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionAntyoksydantyFields = [
  {
    nazwaGrupy: 'Antyoksydanty',
    nazwa: 'ORAC',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Antyoksydanty',
    nazwa: 'Polifenole',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Antyoksydanty',
    nazwa: 'Flawonoidy',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Antyoksydanty',
    nazwa: 'Karotenoidy',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Antyoksydanty',
    nazwa: 'Rezerwa 1',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Antyoksydanty',
    nazwa: 'Rezerwa 2',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Antyoksydanty',
    nazwa: 'Rezerwa 3',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Antyoksydanty',
    nazwa: 'Rezerwa 4',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionBacteriaFields = [
  {
    nazwaGrupy: 'Żywe bakterie',
    nazwa: 'Żywe kultury jogurtowe',
    zawartosc: 0,

    jednostka: 'szt.',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Żywe bakterie',
    nazwa: 'Bifidobacterium',
    zawartosc: 0,

    jednostka: 'szt.',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Żywe bakterie',
    nazwa: 'Lactobacillus',
    zawartosc: 0,

    jednostka: 'szt.',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionOligoFields = [
  {
    nazwaGrupy: 'Oligo/Polisacharydy',
    nazwa: 'Laktuloza',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Oligo/Polisacharydy',
    nazwa: 'Alfa-cyklodekstryna',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Oligo/Polisacharydy',
    nazwa: 'Chitozan',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Oligo/Polisacharydy',
    nazwa: 'Inulina',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionGlikozydyFields = [
  {
    nazwaGrupy: 'Glikozydy',
    nazwa: 'Betanina',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionEnzymyFields = [
  {
    nazwaGrupy: 'Enzymy',
    nazwa: 'Laktaza',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionKwasyOrgFields = [
  {
    nazwaGrupy: 'Kwasy Organiczne',
    nazwa: 'Kreatyna',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Kwasy Organiczne',
    nazwa: 'Kreatyna',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Kwasy Organiczne',
    nazwa: 'Kreatyna',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Kwasy Organiczne',
    nazwa: 'Kreatyna',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Kwasy Organiczne',
    nazwa: 'Kreatyna',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionHormonyFields = [
  {
    nazwaGrupy: 'Hormony',
    nazwa: 'Melatonina',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionSteroleFields = [
  {
    nazwaGrupy: 'Sterole/Stanole',
    nazwa: 'fitosterole/stanole/estry',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionFosfoFields = [
  {
    nazwaGrupy: 'Fosfolipidy',
    nazwa: 'Lecytyna',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionAminoFields = [
  {
    nazwaGrupy: 'Aminokwasy egzogenne',
    nazwa: 'Total',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Aminokwasy egzogenne',
    nazwa: 'Arginina',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Aminokwasy egzogenne',
    nazwa: 'Fenyloalanina ',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Aminokwasy egzogenne',
    nazwa: 'Histydyna',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Aminokwasy egzogenne',
    nazwa: 'Izoleucyna ',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Aminokwasy egzogenne',
    nazwa: 'Leucyna ',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Aminokwasy egzogenne',
    nazwa: 'Lizyna',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Aminokwasy egzogenne',
    nazwa: 'Metionina',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Aminokwasy egzogenne',
    nazwa: 'Treonina',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Aminokwasy egzogenne',
    nazwa: 'Tryptofan',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Aminokwasy egzogenne',
    nazwa: 'Walina',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionInneFields = [
  {
    nazwaGrupy: 'Inne',
    nazwa: 'Węgiel aktywowany',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionCategories = [
  'Wartość Energetyczna',
  'Tłuszcz',
  'Węglowodany',
  'Białko',
  'Sól',
  'Witaminy',
  'Minerały',
]

export const productLabelFields = [
  { field: 'przechowywanie', type: 'string', label: 'Przechowywanie' },
  { field: 'trwalosc', type: 'string', label: 'Trwalosc' },
  { field: 'poOtwarciu', type: 'string', label: 'Po Otwarciu' },
  { field: 'przygotowanie', type: 'string', label: 'Przygotowanie' },
  { field: 'alergeny', type: 'string', label: 'Alergeny' },
]

export const rateProductFields = [
  {
    idParametr: 1,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Bez glutenu',
    value: false,
  },
  {
    idParametr: 2,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'O bardzo niskiej zawartości glutenu',
    value: false,
  },
  {
    idParametr: 3,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Bez beta kazeiny A1',
    value: false,
  },
  {
    idParametr: 4,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Bez mleka krowiego i produktów pochodnych',
    value: false,
  },
  {
    idParametr: 5,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Bez laktozy',
    value: false,
  },
  {
    idParametr: 6,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Wegański (bez produktów zwierzęcych',
    value: false,
  },
  {
    idParametr: 7,
    nazwaGrupa: 'Parametry bez dodatków',
    nazwaPar: 'Bez barwników',
    value: false,
  },
  {
    idParametr: 8,
    nazwaGrupa: 'Parametry bez dodatków',
    nazwaPar: 'Bez wzmacniaczy smaku',
    value: false,
  },
  {
    idParametr: 9,
    nazwaGrupa: 'Parametry bez dodatków',
    nazwaPar: 'Bez azotanów',
    value: false,
  },
  {
    idParametr: 10,
    nazwaGrupa: 'Parametry bez dodatków',
    nazwaPar: 'Bez dodatków do żywności',
    value: false,
  },
  {
    idParametr: 11,
    nazwaGrupa: 'Parametry bez dodatków',
    nazwaPar: 'Bez aromatów',
    value: false,
  },
  {
    idParametr: 12,
    nazwaGrupa: 'Alergeny',
    nazwaPar: 'Gluten',
    value: false,
  },
]

export const searchFilters = [
  { field: 'idKraj', type: 'number', label: 'Kraj' },
  { field: 'idDostawca', type: 'number', label: 'Dostawca' },
  { field: 'name', type: 'string', label: 'Nazwa Produktu' },
  // { field: 'kodEAN', type: 'string', label: 'Etykieta Cyfrowa Produktu' },
  { field: 'indeksT', type: 'string', label: 'Indeks F-FOOD' },
]
