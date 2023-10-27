
import miImagen from '../../images/saborasinaloa.png';
import tiktok from '../../images/tiktok.png';
import youtube from '../../images/youtube.png';
import insta from '../../images/insta.png';
import Image from 'next/image';
import '../css/header.css'
import Link from 'next/link';
function Header() {
  return (
    <div className='header-container-principal'>
      <div className="container-header">
        <Image src={miImagen} alt="" className='img-header-sabor'/>
        <div className="header-opciones">
          <nav>
            <ul>
              <Link href="/home">Home</Link>
              <Link href="/recipes">Recetas</Link>
              <Link href="/">Tips</Link>
              <Link href="/">Cómo</Link>
              <Link href="/">Contactanos</Link>
              <Link href="/" className='redes'>
                <Image src={tiktok} alt="" className='img-header-redes'/>
                <Image src={youtube} alt="" className='img-header-redes'/>
                <Image src={insta} alt="" className='img-header-redes'/>
              </Link>

            </ul>
          </nav>
        </div>
      </div>

    </div>
  );
}
export default Header;