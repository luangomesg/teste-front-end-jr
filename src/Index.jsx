// import viteLogo from '/vite.svg';
import { useState, useEffect } from 'react';
import ShieldCheck from './assets/ShieldCheck.svg';
import truck from './assets/Truck.svg';
import creditCard from './assets/CreditCard.svg';
import logo from './assets/Group35.svg';
import vector from './assets/Vector.svg';
import favorite from './assets/favorite.svg';
import perfil from './assets/perfil.svg';
import cart from './assets/cart.svg';
import crow from './assets/crow.svg';
import monitor from './assets/monitor.svg';
import supermercados from './assets/supermercados.svg';
import whiskey from './assets/whiskey.svg';
import ferramentas from './assets/ferramentas.svg';
import saude from './assets/saude.svg';
import corrida from './assets/corrida.svg';
import moda from './assets/moda.svg';
import { Carrossel, TwoCarrossel } from './components/Carrossel.jsx';
import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
import youtube from './assets/youtube.svg'
import visa from './assets/visa.svg';
import elo from './assets/elo.svg';
import alelo from './assets/alelo.svg';
import dinners from './assets/dinners.svg';
import ifood from './assets/ifood.svg';
import mastercard from './assets/mastercard.svg';
import pix from './assets/pix.svg';
import amex from './assets/amex.svg';
import ticket from './assets/ticket.svg';
import sodexo from './assets/sodexo.svg';







function Home() {

  const [photos, setPhotos] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
        const data = await response.json();
        setPhotos(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const slides = photos;


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

      <main>
        <div className='main-areas'>
          <div className='areas-one'>
            <div>
              <img src={monitor} alt="monitor" />
            </div>
            <span>Tecnologia</span>
          </div>
          <div className='areas-one'>
            <div>
              <img src={supermercados} alt="monitor" />
            </div>
            Supermercado
          </div>
          <div className='areas-one'>
            <div>
              <img src={whiskey} alt="monitor" />
            </div>
            Bebidas
          </div>
          <div className='areas-one'>
            <div>
              <img src={ferramentas} alt="monitor" />
            </div>
            Ferramentas
          </div>
          <div className='areas-one'>
            <div>
              <img src={saude} alt="monitor" />
            </div>
            Saúde
          </div>
          <div className='areas-one'>
            <div>
              <img src={corrida} alt="monitor" />
            </div>
            Esportes e Fitness
          </div>
          <div className='areas-one'>
            <div>
              <img src={moda} alt="monitor" />
            </div>
            Moda
          </div>
        </div>

        <h2>Produtos relacionados</h2>

        <div className='main-relacion'>
          <div><span>CELULAR</span></div>
          <div>ACESSÓRIOS</div>
          <div>TABLETS</div>
          <div>NOTEBOOKS</div>
          <div>TVS</div>
          <div>VER TODOS</div>
        </div>

        <Carrossel slides={slides} />

        <div className='main-ad'>
          <div><h2>Parceiros</h2> <p>Lorem ipsum dolor sit amet consectetur.</p> <button>CONFIRA</button></div>
          <div><h2>Parceiros</h2> <p>Lorem ipsum dolor sit amet consectetur.</p> <button>CONFIRA</button></div>
        </div>
        <h2>Produtos relacionados</h2>
        <p>Ver todos</p>

        <Carrossel slides={slides} />

        <div className='main-ad'>
          <div><h2>Parceiros</h2> <p>Lorem ipsum dolor sit amet consectetur.</p> <button>CONFIRA</button></div>
          <div><h2>Parceiros</h2> <p>Lorem ipsum dolor sit amet consectetur.</p> <button>CONFIRA</button></div>
        </div>

        <h2 className='marcas'>Navegue por marcas</h2>

        <TwoCarrossel />

        <h2>Produtos relacionados</h2>
        <p>Ver todos</p>

        <Carrossel slides={slides} />

      </main>

      <footer>
        <div className='footer-one'>
          <div>
            <p>Sobre nós</p>
            <p>CONHEÇA</p>
            <p>COMO COMPRAR</p>
            <p>INDICAÇÃO E DESCONTO</p>
            <div className='social'>
              <img src={facebook} alt="face" />
              <img src={instagram} alt="insta" />
              <img src={youtube} alt="youtube" />
            </div>
          </div>
          <div>
            <p>INFORMAÇÕES ÚTEIS</p>
            <p>FALE CONOSCO</p>
            <p>DÚVIDAS</p>
            <p>PRAZOS E ENTREGA</p>
            <p>FORMAS DE PAGAMENTO</p>
            <p>POLÍTICA DE PRIVACIDADE</p>
            <p>TROCAS E DEVOLUÇÃO</p>
          </div>

          <div className='pgt'>
            <p>FORMAS DE PAGAMENTO</p>
            <img src={visa} alt="visa" />
            <img src={elo} alt="elo" />
            <img src={alelo} alt="alelo" />
            <img src={dinners} alt="dinners" />
            <img src={ifood} alt="ifood" />
            <img src={mastercard} alt="mastercard" />
            <img src={pix} alt="pix" />
            <img src={amex} alt="amex" />
            <img src={ticket} alt="ticket" />
            <img src={sodexo} alt="sodexo" />
          </div>
          <div className='cadastre'>
            <h2><span>Cadastre-se e Receba nossas</span><br/>
              novidades e promoções</h2>
              <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
              <div>
              <input placeholder='SEU E-MAIL' type="text" /> <button>OK</button>
              </div>
          </div>
        </div>
        <div className='footer-two'>

        </div>
      </footer>
    </>
  )
}

export default Home
