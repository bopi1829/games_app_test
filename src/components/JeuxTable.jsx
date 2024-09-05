import JeuxCategory from "./JeuxCategory";
import JeuxRow from "./JeuxRow";
import PropTypes from 'prop-types';

export default function JeuxTable({jeux, filterText, inStockOnly}){
  //console.log("JeuxTable: ", jeux)

  const rows =[]
  jeux.forEach(jeu => {
    if(jeu.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return
    }
    if (inStockOnly && !jeu.stocked) {
      return
    }
    rows.push(<JeuxRow key={jeu.name} jeu={jeu} />)
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
        <JeuxCategory category={"FPS"} />
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
