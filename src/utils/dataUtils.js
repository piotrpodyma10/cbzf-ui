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
  { id: 'kodProdEan1', type: 'string', label: 'Kod EAN 1', required: true },
  { id: 'kodProdEan2', type: 'string', label: 'Kod EAN 2' },
  { id: 'kodProdEan3', type: 'string', label: 'Kod EAN 3' },
  { id: 'kodProdEan4', type: 'string', label: 'Kod EAN 4' },
  { id: 'kodProdEan5', type: 'string', label: 'Kod EAN 5' },
  { id: 'kodProdEan6', type: 'string', label: 'Kod EAN 6' },
  { id: 'kodProdEan7', type: 'string', label: 'Kod EAN 7' },
  { id: 'kodProdEan8', type: 'string', label: 'Kod EAN 8' },
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
  { field: 'indeksE', type: 'number', label: 'Indeks EN' },
  { field: 'indeksV', type: 'number', label: 'Indeks VIT' },
  { field: 'indeksM', type: 'number', label: 'Indeks MIN' },
  { field: 'indeksO', type: 'number', label: 'Indeks OM3' },
  { field: 'indeksF', type: 'number', label: 'Indeks FIB' },
  { field: 'indeksP', type: 'number', label: 'Indeks PRT' },
  { field: 'indeksS', type: 'number', label: 'Indeks SUM' },
  { field: 'indeksT', type: 'number', label: 'Indeks FF' },
]

export const productCategoryFields = [
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
    procentRws: null,
    indeks: null,
    groupIndeks: 'indeksE',
  },
  {
    nazwaGrupy: 'Białko',
    nazwa: '',
    zawartosc: 0,
    jednostka: 'g',
    procentRws: 0,
    indeks: null,
    groupIndeks: 'indeksP',
  },
  { nazwaGrupy: 'Sól', nazwa: '', zawartosc: 0, jednostka: 'g', procentRws: 0, indeks: null },
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
    nazwa: 'Witamina A',
    zawartosc: 0,

    jednostka: 'mcg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'Witamina B1',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'Witamina B2',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'Witamina B3',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'Witamina B5',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'Witamina B6',
    zawartosc: 0,

    jednostka: 'mg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'Witamina B7',
    zawartosc: 0,

    jednostka: 'mcg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'Witamina B9',
    zawartosc: 0,

    jednostka: 'mcg',
    procentRws: 0,
    indeks: null,
  },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'Witamina B12',
    zawartosc: 0,

    jednostka: 'mcg',
    procentRws: 0,
    indeks: null,
  },
  { nazwaGrupy: 'Witaminy', nazwa: 'Witamina C', zawartosc: 0, jednostka: 'mg', procentRws: 0, indeks: null },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'Witamina D',
    zawartosc: 0,

    jednostka: 'mcg',
    procentRws: 0,
    indeks: null,
  },
  { nazwaGrupy: 'Witaminy', nazwa: 'Witamina E', zawartosc: 0, jednostka: 'mg', procentRws: 0, indeks: null },
  {
    nazwaGrupy: 'Witaminy',
    nazwa: 'Witamina K',
    zawartosc: 0,

    jednostka: 'mcg',
    procentRws: 0,
    indeks: null,
  },
]

export const productNutritionMineralFields = [
  {
    nazwaGrupy: 'Minerały',
    nazwa: 'Sód',
    zawartosc: 0,

    jednostka: 'g',
    procentRws: 0,
    indeks: null,
  },
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
    jednostka: 'j.m.',
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
    nazwaGrupa: 'Posiadane Certyfikaty',
    nazwaPar: 'Produkcja ekologiczna',
    value: false,
  },
  {
    idParametr: 2,
    nazwaGrupa: 'Posiadane Certyfikaty',
    nazwaPar: 'Bez GMO',
    value: false,
  },
  {
    idParametr: 3,
    nazwaGrupa: 'Posiadane Certyfikaty',
    nazwaPar: 'Integrowana Produkcja Roślin (IP)',
    value: false,
  },
  {
    idParametr: 4,
    nazwaGrupa: 'Posiadane Certyfikaty',
    nazwaPar: 'Chronione Oznaczenie Geograficzne',
    value: false,
  },
  {
    idParametr: 5,
    nazwaGrupa: 'Posiadane Certyfikaty',
    nazwaPar: 'Chroniona Nazwa Pochodzenia',
    value: false,
  },
  {
    idParametr: 6,
    nazwaGrupa: 'Posiadane Certyfikaty',
    nazwaPar: 'Gwarantowana Tradycyjna Specjalność',
    value: false,
  },
  {
    idParametr: 7,
    nazwaGrupa: 'Posiadane Certyfikaty',
    nazwaPar: 'System „Jakość Tradycja”',
    value: false,
  },
  {
    idParametr: 8,
    nazwaGrupa: 'Posiadane Certyfikaty',
    nazwaPar: 'QAFP System gwarantowanej jakości żywności',
    value: false,
  },
  {
    idParametr: 9,
    nazwaGrupa: 'Posiadane Certyfikaty',
    nazwaPar: 'QMP System gwarantowania jakości mięsa wołowego',
    value: false,
  },
  {
    idParametr: 10,
    nazwaGrupa: 'Posiadane Certyfikaty',
    nazwaPar: 'V-Label (żywność wegańska i wegetariańska)',
    value: false,
  },
  {
    idParametr: 11,
    nazwaGrupa: 'Posiadane Certyfikaty',
    nazwaPar: 'Pork Quality System (PQS) -System Jakości Wieprzowiny',
    value: false,
  },
  {
    idParametr: 12,
    nazwaGrupa: 'Posiadane Certyfikaty',
    nazwaPar: 'Marine Stewardship Council (MSC) Certyfikat Zrównoważonego Rybołówstwa',
    value: false,
  },
  {
    idParametr: 13,
    nazwaGrupa: 'Posiadane Certyfikaty',
    nazwaPar: 'Bez glutenu, Znak Przekreślonego Kłosa (ESL)',
    value: false,
  },
  {
    idParametr: 14,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Bez glutenu',
    value: false,
  },
  {
    idParametr: 15,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'O bardzo niskiej zawartości glutenu',
    value: false,
  },
  {
    idParametr: 16,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Niska wartość energetyczna',
    value: false,
  },
  {
    idParametr: 17,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Niska zawartość tłuszczu',
    value: false,
  },
  {
    idParametr: 18,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Nie zawiera tłuszczu',
    value: false,
  },
  {
    idParametr: 19,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Bez tłuszczów nasyconych',
    value: false,
  },
  {
    idParametr: 20,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Niska zawartość cukrów',
    value: false,
  },
  {
    idParametr: 21,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Bez dodatku cukru',
    value: false,
  },
  {
    idParametr: 22,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Bez mleka krowiego i produktów pochodnych',
    value: false,
  },
  {
    idParametr: 23,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Bez Beta Kazeiny A1',
    value: false,
  },
  {
    idParametr: 24,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Bez laktozy',
    value: false,
  },
  {
    idParametr: 25,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'O bardzo niskiej zawartości laktozy',
    value: false,
  },
  {
    idParametr: 26,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Wegański (bez produktów zwierzęcych)',
    value: false,
  },
  {
    idParametr: 27,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Wegetariański',
    value: false,
  },
  {
    idParametr: 28,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Bez soli',
    value: false,
  },
  {
    idParametr: 29,
    nazwaGrupa: 'Parametry bez składników',
    nazwaPar: 'Niska zawartość sodu/soli',
    value: false,
  },
  { idParametr: 30, nazwaGrupa: 'Bez dodatków do żywności', nazwaPar: 'bez barwników', value: false },
  { idParametr: 31, nazwaGrupa: 'Bez dodatków do żywności', nazwaPar: 'bez konserwantów', value: false },
  { idParametr: 32, nazwaGrupa: 'Bez dodatków do żywności', nazwaPar: 'bez przeciwutleniaczy', value: false },
  {
    idParametr: 33,
    nazwaGrupa: 'Bez dodatków do żywności',
    nazwaPar: 'bez emulgatorów i środków spulchniających',
    value: false,
  },
  { idParametr: 34, nazwaGrupa: 'Bez dodatków do żywności', nazwaPar: 'bez wzmacniaczy smaku', value: false },
  { idParametr: 35, nazwaGrupa: 'Bez dodatków do żywności', nazwaPar: 'bez azotynów i azotanów', value: false },
  { idParametr: 36, nazwaGrupa: 'Bez dodatków do żywności', nazwaPar: 'bez środków słodzących', value: false },
  { idParametr: 37, nazwaGrupa: 'Bez dodatków do żywności', nazwaPar: 'bez dodatków do żywności', value: false },
  { idParametr: 38, nazwaGrupa: 'Bez dodatków do żywności', nazwaPar: 'bez zagęstników', value: false },
  { idParametr: 39, nazwaGrupa: 'Bez dodatków do żywności', nazwaPar: 'bez aromatów', value: false },
  { idParametr: 40, nazwaGrupa: 'Alegreny (może zawierać)', nazwaPar: 'skorupiaki i produkty pochodne', value: false },
  { idParametr: 41, nazwaGrupa: 'Alegreny (może zawierać)', nazwaPar: 'jaja i produkty pochodne', value: false },
  { idParametr: 42, nazwaGrupa: 'Alegreny (może zawierać)', nazwaPar: 'ryby i produkty pochodne', value: false },
  { idParametr: 43, nazwaGrupa: 'Alegreny (może zawierać)', nazwaPar: 'orzeszki ziemne (arachidowe)', value: false },
  { idParametr: 44, nazwaGrupa: 'Alegreny (może zawierać)', nazwaPar: 'soja i produkty pochodne', value: false },
  { idParametr: 45, nazwaGrupa: 'Alegreny (może zawierać)', nazwaPar: 'mleko i produkty pochodne', value: false },
  { idParametr: 46, nazwaGrupa: 'Alegreny (może zawierać)', nazwaPar: 'orzechy z drzew orzechowych', value: false },
  { idParametr: 47, nazwaGrupa: 'Alegreny (może zawierać)', nazwaPar: 'seler i produkty pochodne', value: false },
  { idParametr: 48, nazwaGrupa: 'Alegreny (może zawierać)', nazwaPar: 'gorczyca i produkty pochodne', value: false },
  { idParametr: 49, nazwaGrupa: 'Alegreny (może zawierać)', nazwaPar: 'sezam i produkty pochodne', value: false },
  { idParametr: 50, nazwaGrupa: 'Alegreny (może zawierać)', nazwaPar: 'siarczyny', value: false },
  { idParametr: 51, nazwaGrupa: 'Alegreny (może zawierać)', nazwaPar: 'łubin i produkty pochodne', value: false },
  { idParametr: 52, nazwaGrupa: 'Alegreny (może zawierać)', nazwaPar: 'mięczaki i produkty pochodne', value: false },

  {
    idParametr: 53,
    nazwaGrupa: 'Specyficzne cechy',
    nazwaPar: 'produkt o dedykowanej strukturze dla osób starszych',
    value: false,
  },
  {
    idParametr: 54,
    nazwaGrupa: 'Specyficzne cechy',
    nazwaPar: 'produkt o dedykowanej strukturze dla dzieci',
    value: false,
  },
  {
    idParametr: 55,
    nazwaGrupa: 'Specyficzne cechy',
    nazwaPar: 'produkt o dedykowanej strukturze dla diety łatwostrawnej',
    value: false,
  },
  {
    idParametr: 56,
    nazwaGrupa: 'Specyficzne cechy',
    nazwaPar: 'Produkt o dedykowanej strukturze dla kobiet w ciąży i karmiących',
    value: false,
  },
  {
    idParametr: 57,
    nazwaGrupa: 'Specyficzne cechy',
    nazwaPar: 'produkt o dedykowanej strukturze dla sportowców',
    value: false,
  },
  {
    idParametr: 58,
    nazwaGrupa: 'Specyficzne cechy',
    nazwaPar: 'produkt o dedykowanej strukturze dla diety wysokobłonnikowej',
    value: false,
  },
  { idParametr: 59, nazwaGrupa: 'Specyficzne cechy', nazwaPar: 'produkt o niskim Indeksie Glikemicznym', value: false },
  { idParametr: 60, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'produkt naturalny', value: false },
  { idParametr: 61, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'mrożenie', value: false },
  { idParametr: 62, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'głębokie mrożenie', value: false },
  { idParametr: 63, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'gotowanie', value: false },
  { idParametr: 64, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'gotowanie na parze', value: false },
  { idParametr: 65, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'pasteryzowanie', value: false },
  { idParametr: 66, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'sterylizowanie', value: false },
  { idParametr: 67, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'smażenie', value: false },
  {
    idParametr: 68,
    nazwaGrupa: 'Zastosowane procesy technologiczne',
    nazwaPar: 'smażenie beztłuszczowe',
    value: false,
  },
  { idParametr: 69, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'liofilizowanie', value: false },
  { idParametr: 70, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'peklowanie', value: false },
  { idParametr: 71, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'ekstrakcja na zimno', value: false },
  {
    idParametr: 72,
    nazwaGrupa: 'Zastosowane procesy technologiczne',
    nazwaPar: 'ekstrakcja rozp. selektywnymi',
    value: false,
  },
  { idParametr: 73, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'rafinowanie', value: false },
  { idParametr: 74, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'utwardzanie tłuszczów', value: false },
  {
    idParametr: 75,
    nazwaGrupa: 'Zastosowane procesy technologiczne',
    nazwaPar: 'estryfikacja tłuszczów',
    value: false,
  },
  { idParametr: 76, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'neutralizacja', value: false },
  { idParametr: 77, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'napromieniowanie', value: false },
  { idParametr: 78, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'ekspandowanie', value: false },
  { idParametr: 79, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'ekstruzja', value: false },
  { idParametr: 80, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'wędzenie na zimno', value: false },
  { idParametr: 81, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'wędzenie na gorąco', value: false },
  { idParametr: 82, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'paskalizacja', value: false },
  { idParametr: 83, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'suszenie', value: false },
  { idParametr: 84, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'fermentacja', value: false },
  { idParametr: 85, nazwaGrupa: 'Zastosowane procesy technologiczne', nazwaPar: 'inne', value: false },
]

export const searchFilters = [
  { field: 'name', type: 'string', label: 'Nazwa Produktu' },
  { field: 'ingredients', type: 'string', label: 'Składniki' },
  { field: 'nutritions', type: 'string', label: 'Wartość odżywcza' },
  { field: 'indeksT', type: 'string', label: 'Indeks F-FOOD' },
]
