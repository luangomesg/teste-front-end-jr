// import viteLogo from '/vite.svg';
import ShieldCheck from './assets/ShieldCheck.svg';
import truck from './assets/Truck.svg';
import creditCard from './assets/CreditCard.svg';
import logo from './assets/Group35.svg';
import vector from './assets/Vector.svg';
import favorite from './assets/favorite.svg';
import perfil from './assets/perfil.svg';
import cart from './assets/cart.svg';
import crow from './assets/crow.svg';

function Home() {
  return (
    <>
      <header>
        <div className='header-info'>
          <div><img src={ShieldCheck} alt="shield" /> <p>Compra <span>100% segura</span></p></div>
          <div><img src={truck} alt="truck"></img> <p><span>Frete grátis</span> acima de R$ 200</p></div>
          <div><img src={creditCard} alt="Credit Card" /> <p><span>Parcele</span> suas compras</p></div>
        </div>
        
        <div className='header-buttons'>
          <img src={logo} alt="logo" />
          <input type="text" placeholder='O que você está buscando?' />
          <div className='header-icons'>
            <img src={vector} alt="market" />
            <img src={favorite} alt="favorite" />
            <img src={perfil} alt="perfil" />
            <img src={cart} alt="cart" />
          </div>
        </div>

        <div className='header-areas'>
          <p>TODAS CATEGORIAS</p>
          <p>SUPERMERCADO</p>
          <p>LIVROS</p>
          <p>MODA</p>
          <p>LANÇAMENTOS</p>
          <span>OFERTAS DO DIA</span>
          <div><img src={crow} alt="crow" /> <p>ASSINATURA</p></div>
        </div>
      </header>

      <div className='promotion'>
        <div>
          <h1>Venha conhecer nossas promoções</h1>
          <h2>50% off nos produtos</h2>
          <button>Ver produto</button>
        </div>
      </div>
    </>
  )
}

export default Home
