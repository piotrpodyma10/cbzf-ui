import A from '../assets/imgs/indexes/A.png'
import B from '../assets/imgs/indexes/B.png'
import C from '../assets/imgs/indexes/C.png'
import D from '../assets/imgs/indexes/D.png'
import E from '../assets/imgs/indexes/E.png'

export const getIndex = (value) => {
  let index = A
  if (!value) {
    return
  }
  if (value <= 14 && value >= 11) {
    index = B
  }
  if (value >= 7 && value <= 10) {
    index = C
  }
  if (value >= 3 && value <= 6) {
    index = D
  }
  if (value <= 2) {
    index = E
  }
  return <img src={A} />
}
