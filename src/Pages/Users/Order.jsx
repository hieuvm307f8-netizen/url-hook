import { useParams } from 'react-router-dom';

const Order = () => {
    const { productId } = useParams();
  return (
    <div>   
      <h1>Order Page {productId}</h1>
    </div>
  )
}

export default Order;
