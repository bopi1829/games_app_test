import PropTypes from 'prop-types';

export default function JeuxRow({jeu}){
  //console.log("JeuxRow:", jeu)

  const textColor = jeu.stocked ? jeu.name : <span style={{color: "red"}}>{jeu.name}</span>

  return (
    <tr>
      <td>{textColor}</td>
      <td>{jeu.price}</td>
    </tr>
  )
}

JeuxRow.propTypes = { jeu: PropTypes.object}