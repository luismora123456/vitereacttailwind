import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';
import { ShoppingCartContext } from '../../Context';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const params = useParams();
  let index = params.id;
  if (index === 'last') index = context.order?.length - 1;

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></ChevronLeftIcon>
        </Link>
        <h1>MyOrders</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images[0]}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
