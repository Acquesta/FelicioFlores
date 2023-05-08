import '../assets/hoteBar.css'

function HoteBar() {

  return (
    <div className='main'>
      <div className='img'>
        <img src="/src/assets/logofelicio.png" alt="" />
      </div>
      <div className='lista'>
        <ul>
          <li className='link'><a href="/">Home</a>&nbsp;&nbsp;&nbsp;</li>
          <li className='link'><a href="/login">Login</a>&nbsp;&nbsp;&nbsp;</li>
          <li className='link'><a href="/produtos">Produtos</a></li>
        </ul>
      </div>
    </div>
  )
}

export default HoteBar
