export const Character = ({ id, name, gender, status}) => {
    return (
      <ul>
        <li>{name}</li>
        <li>{gender}</li>
        <li>{status}</li>
      </ul>
    )
  }
