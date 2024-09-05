import { useState } from "react";
import JeuxTable from "./JeuxTable";
import SearchCompo from "./SearchCompo";
import PropTypes from 'prop-types';


export default function FilterableJeuxTable({jeux}) {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)
  //console.log("FilterableJeuxTable: ", jeux)

  return (
  <div>FilterableJeuxTable
    <SearchCompo 
      filterText={filterText}
      inStockOnly={inStockOnly}
      handleFilterTextChange={setFilterText}
      handleInStockChange={setInStockOnly}

    />
    <JeuxTable
      filterText={filterText}
      inStockOnly={inStockOnly}
      jeux={jeux}
    />
  </div>
  )
}

FilterableJeuxTable.propTypes = { jeux: PropTypes.array}