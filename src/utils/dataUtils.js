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
  { field: 'indeks', type: 'number', label: 'Indeks' },
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
  { field: 'skladnikIlosc', type: 'number', label: 'Składnik Ilość' },
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
  { field: 'poOtwarciu', type: 'string', label: 'Po Otwarciu' },
  { field: 'par1Nutrition', type: 'string', label: 'Par 1 Nutrition' },
  { field: 'par2Nutrition', type: 'string', label: 'Par 2 Nutrition' },
  { field: 'porcja', type: 'number', label: 'Porcja' },
  { field: 'idNutrient', type: 'string', label: 'Id Nutrient' },
  { field: 'nazwaGrupy', type: 'string', label: 'Nazwa Grupy' },
  { field: 'nazwa', type: 'string', label: 'Nazwa' },
  { field: 'zawartosc', type: 'number', label: 'Zawartość' },
  { field: 'jednostka', type: 'string', label: 'Jednostka' },
  { field: 'procentRws', type: 'number', label: 'Procent RWS' },
  { field: 'zawartoscPorcja', type: 'string', label: 'Zawartość Porcja' },
  { field: 'procentRwsPorcja', type: 'number', label: 'Procent RWS Porcja' },
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
  { field: 'pi', type: 'string', label: 'Dostawca' },
  { field: 'name', type: 'string', label: 'Nazwa Produktu' },
  { field: 'kodEAN', type: 'string', label: 'Etykieta Cyfrowa Produktu' },
]
