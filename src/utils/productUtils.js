import ENA from '../assets/imgs/indexes/en/A.png'
import ENB from '../assets/imgs/indexes/en/B.png'
import ENC from '../assets/imgs/indexes/en/C.png'
import END from '../assets/imgs/indexes/en/D.png'
import ENE from '../assets/imgs/indexes/en/E.png'
import ENF from '../assets/imgs/indexes/en/F.png'
import FFA from '../assets/imgs/indexes/ff/A.png'
import FFB from '../assets/imgs/indexes/ff/B.png'
import FFC from '../assets/imgs/indexes/ff/C.png'
import FFD from '../assets/imgs/indexes/ff/D.png'
import FFE from '../assets/imgs/indexes/ff/E.png'
import FFF from '../assets/imgs/indexes/ff/F.png'
import CLA from '../assets/imgs/indexes/cl/A.png'
import CLB from '../assets/imgs/indexes/cl/B.png'
import CLC from '../assets/imgs/indexes/cl/C.png'
import CLD from '../assets/imgs/indexes/cl/D.png'
import CLE from '../assets/imgs/indexes/cl/E.png'
import CLF from '../assets/imgs/indexes/cl/F.png'

export const getIndex = (value, index = 'en') => {
  let indexImage = ''

  if (index === 'en') {
    if (!value) {
      return
    }
    indexImage = ENA
    if (value >= 100 && value <= 200) {
      indexImage = ENB
    }
    if (value >= 201 && value <= 300) {
      indexImage = ENC
    }
    if (value >= 301 && value <= 500) {
      indexImage = END
    }
    if (value >= 501 && value <= 700) {
      indexImage = ENE
    }
    if (value > 700) {
      indexImage = ENF
    }
  }

  if (index === 'ff') {
    if (!value) {
      return
    }
    indexImage = FFA
    if (value >= 1 && value <= 2) {
      indexImage = FFB
    }
    if (value >= 3 && value <= 4) {
      indexImage = FFC
    }
    if (value >= 5 && value <= 6) {
      indexImage = FFD
    }
    if (value >= 7 && value <= 8) {
      indexImage = FFE
    }
    if (value > 8) {
      indexImage = FFF
    }
  }

  if (index === 'cl') {
    if (!value) {
      return
    }
    indexImage = CLA
    if (value >= 1 && value <= 2) {
      indexImage = CLB
    }
    if (value >= 3 && value <= 4) {
      indexImage = CLC
    }
    if (value >= 5 && value <= 6) {
      indexImage = CLD
    }
    if (value >= 7 && value <= 9) {
      indexImage = CLE
    }
    if (value > 10) {
      indexImage = CLF
    }
  }

  return <img height={28} src={indexImage} />
}
