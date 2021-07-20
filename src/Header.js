import'./styles/Header.css'

function Header () {
    let movement = window.scrollY
    console.log(movement)
    return (
      <header>
          <div className='cover'>
          </div>
        <nav>
            <p>Green Gables</p>
        </nav>
      </header>
    )
  }

export default Header;