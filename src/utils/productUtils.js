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
  let indexLetter = ''

  if (index === 'en') {
    if (!value) {
      return
    }
    indexImage = ENA
    indexLetter = 'A'
    if (value >= 100 && value <= 200) {
      indexImage = ENB
      indexLetter = 'B'
    }
    if (value >= 201 && value <= 300) {
      indexImage = ENC
      indexLetter = 'C'
    }
    if (value >= 301 && value <= 500) {
      indexImage = END
      indexLetter = 'D'
    }
    if (value >= 501 && value <= 700) {
      indexImage = ENE
      indexLetter = 'E'
    }
    if (value > 700) {
      indexImage = ENF
      indexLetter = 'F'
    }
  }

  if (index === 'ff') {
    if (!value) {
      return
    }
    indexImage = FFA
    // indexLetter = 'A'
    if (value >= 1 && value <= 2) {
      indexImage = FFB
      // indexLetter = 'B'
    }
    if (value >= 3 && value <= 4) {
      indexImage = FFC
      // indexLetter = 'C'
    }
    if (value >= 5 && value <= 6) {
      indexImage = FFD
      // indexLetter = 'D'
    }
    if (value >= 7 && value <= 8) {
      indexImage = FFE
      // indexLetter = 'E'
    }
    if (value > 8) {
      indexImage = FFF
      // indexLetter = 'F'
    }
  }

  if (index === 'cl') {
    if (!value) {
      return
    }
    indexImage = CLA
    // indexLetter = 'A'
    if (value >= 1 && value <= 2) {
      indexImage = CLB
      // indexLetter = 'B'
    }
    if (value >= 3 && value <= 4) {
      indexImage = CLC
      // indexLetter = 'C'
    }
    if (value >= 5 && value <= 6) {
      indexImage = CLD
      // indexLetter = 'D'
    }
    if (value >= 7 && value <= 9) {
      indexImage = CLE
      // indexLetter = 'E'
    }
    if (value > 10) {
      indexImage = CLF
      // indexLetter = 'F'
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span>{indexLetter}</span>
      <img height={28} src={indexImage} />
    </div>
  )
}
