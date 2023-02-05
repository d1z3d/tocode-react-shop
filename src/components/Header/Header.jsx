import React from 'react'
import propTypes, { object } from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { app } from '_config'

import { Container } from 'layouts'

import './Header.scss'

//store
import { ProductsContext } from 'Store'

// icons:
import { ReactComponent as LogoIcon } from 'assets/img/logo.svg'
import { ReactComponent as BagIcon } from 'assets/img/bag.svg'

const menuLinks = [
  {
    title: 'Home',
    alias: '/',
  },
  {
    title: 'About',
    alias: '/about',
  },
  {
    title: <BagIcon />,
    alias: '/checkout',
  },
]



const Header = ({ isLogo, isFixed, className, ...attrs }) => {
  const classes = classNames('Header', className, {
    isFixed,
  })
  const [products] = React.useContext(ProductsContext)
  
  return (
    <header className={classes} {...attrs}>
      <Container>
        <div className='flex justify-between py-2 mb-4'>
          <div className='Logo'>
            {isLogo && <LogoIcon />}
            <span>{app.name}</span>
          </div>
          <div className='HeaderList'>
          {menuLinks.map((item) => (
          <li key={item.alias}>
            <NavLink to={item.alias}>
              <div className='ui-button isLink'>
                {item.title}
                {item.alias === '/checkout' && <div className='ui-badge'>{products.length}</div>}
              </div>
            </NavLink>
          </li>))}

          </div>
        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {
  isLogo: propTypes.bool,
  isFixed: propTypes.bool,
  className: propTypes.string,
}

Header.defaultProps = {
  isLogo: false,
  isFixed: false,
  className: '',
}

export default Header
