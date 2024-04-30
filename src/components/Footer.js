import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">Polo</h1>
                <p className="footer-text">
                  website promosi brand polo
        
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >rizkiramadanidalimunthe@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#" > rizki_rmdnii</Link>
                  </li>
                  <li>
                    <Link to="#" >+62 822 8914 4904</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/rizkii_rmdnii?igsh=NzA4cmlhYXJkejE4&utm_source=qr" > Instagram</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://youtube.com/@Rizkiramadani2310?si=vMSbHPtALs9p6Qib" > Youtube</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@reyyy_yt?_t=8lx7G9jmqdL&_r=1"> Tiktok</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
