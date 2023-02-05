import React from 'react'
import propTypes from 'prop-types'

export const ProductsContext = React.createContext()

const Store = ({ children }) => {
  const [products, setProducts] = React.useState([])
  const productsContext = React.useMemo(
    () => [products, setProducts],
    [products, setProducts]
  )

  // test
  // React.useEffect(() => console.log(products), [products])

  return (
    <ProductsContext.Provider value={productsContext}>
      {children}
    </ProductsContext.Provider>
  )
}

Store.propTypes = {
  children: propTypes.node.isRequired,
}

export default Store
