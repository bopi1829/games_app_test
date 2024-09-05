import PropTypes from 'prop-types';

export default function SearchCompo({filterText, inStockOnly, handleFilterTextChange, handleInStockChange}) {

  return (
  <div>
    <input value={filterText} type="text" placeholder="search" onChange={e => handleFilterTextChange(e.target.value)} />
    <input type="checkbox" checked={inStockOnly} onChange={e => handleInStockChange(e.target.checked)} />
    {' '}
    Produit en stock seulement
  </div>
  )
}

SearchCompo.propTypes = { 
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool,
  handleFilterTextChange: PropTypes.func,
  handleInStockChange: PropTypes.func,
}
