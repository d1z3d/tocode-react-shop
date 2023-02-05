import React from 'react'
import { Link } from 'react-router-dom'

// store
import { ProductsContext } from 'Store'

// components:
import { Container } from 'layouts'

const productStyles = {
  width: '100%',
  padding: '10px',
  backgroundColor: 'var(--ui-g-100)',
  borderRadius: '16px',
}

const CheckoutPage = () => {
  const [products, setProducts] = React.useContext(ProductsContext)

  // content
  const renderContent =
    products && products.length && products.length > 0
      ? products.map((item, i) => (
          <div
            key={i}
            className='flex items-center mb-8'
            style={productStyles}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{ maxWidth: '140px' }}
            />
            <div className='flex flex-col items-start'>
              <p className='ui-title-3 mb-2'>{item.title}</p>
              <p className='mb-4'>{item.price}</p>
              <Link to={`/products/${item.alias}`}>
                <span className='ui-link isPrimary'>See more</span>
              </Link>
            </div>
          </div>
        ))
      : 'Cart is empty'

  // controls
  const renderControls = (
    <div className='flex mt-4'>
      <Link className='ui-button isLink' to='/'>
        Back to home
      </Link>
      {products && products.length > 0 && (
        <div className='ui-button isPrimary' onClick={() => setProducts([])}>
          Refresh the cart
        </div>
      )}
    </div>
  )

  return (
    <Container>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h1 className='ui-title-1 text-center'>Checkout</h1>
        <div className='flex flex-col items-center'>
          {renderContent}
          {renderControls}
        </div>
      </div>
    </Container>
  )
}

export default CheckoutPage
