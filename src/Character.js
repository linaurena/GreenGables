import './styles/CharacterCard.css'
//import ImgExample from'./img/example.jpg'

export const Character = ({ id, name, gender, status}) => {
    return (
      <ul className='card'>
        <li className='character-img'></li>
        <li className='character-name'>{name}</li>
        <button className='more-info'> ... </button>
      </ul>
    )
  }
