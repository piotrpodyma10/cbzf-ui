import Card from '../../common/card/Card'
import { ProductPanel } from '../product/productPanel/ProductPanel'
import './Consumer.scss'

function Consumer() {
  return (
    <Card className='consumer'>
      <ProductPanel isConsumer />
    </Card>
  )
}

export default Consumer
