import JeuxCategory from "./JeuxCategory";
import JeuxRow from "./JeuxRow";
import PropTypes from 'prop-types';

export default function JeuxTable({jeux, filterText, inStockOnly}){
  //console.log("JeuxTable: ", jeux)

  const rows =[]
  let lastCategory = null
  jeux.forEach(jeu => {
    if(jeu.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return
    }
    if (inStockOnly && !jeu.stocked) {
      return
    }
    if (jeu.category !== lastCategory) {
      rows.push(<JeuxCategory key={jeu.category} category={jeu.category} />)
    }
    rows.push(<JeuxRow key={jeu.name} jeu={jeu} />)
    lastCategory = jeu.category
  });

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    </div>
  )
}

JeuxTable.propTypes = { 
  jeux: PropTypes.array,
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool
}
