import PropTypes from 'prop-types';


export default function JeuxCategory({category}){
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  )
}

JeuxCategory.propTypes = { category: PropTypes.string}
