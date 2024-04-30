function About() {
    return (
      <>
        <div className="about-scroll"></div>
  
        <div className="container about">
          <div className="row">
            <div className="col-md-6 text-center">
              <img alt="about" src={process.env.PUBLIC_URL + "/img/img1.png"} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2 className="main-title about-h2">ABOUT</h2>
              <p className="main-p">
              Baju polo dimulai dari inovasi René Lacoste pada tahun 1926, 
              ketika dia menciptakan pakaian fungsional dengan kerah lipat dan kancing 
              depan yang nyaman untuk digunakan saat bermain tenis. Dipopulerkan di Kejuaraan Tenis AS, 
              baju polo Lacoste segera menjadi favorit di luar lapangan tenis, dikenal karena desainnya 
              yang sederhana namun elegan. 
              </p>
  
              <p className="main-p">
              Dengan bahan yang ringan dan bernapas, serta potongan yang nyaman, baju polo menjadi simbol 
              gaya yang serbaguna, cocok untuk berbagai kesempatan dari kegiatan santai hingga acara semi-formal. 
              Sejak itu, baju polo telah menjadi bagian tak terpisahkan dari dunia fashion, terus menginspirasi 
              berbagai merek untuk menciptakan variasi gaya yang beragam sesuai dengan tren dan selera konsumen.
              </p>
        
            </div>
          </div>
        </div>
      </>
    );
  }
  export default About;
  