// Services.js
import React from 'react';
import Card from "./Card";

function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Elegan dan Nyaman" img="/img/card1.jpeg" text="Baju polo menggabungkan elegansi dan kenyamanan dengan sempurna. Bahan berkualitas tinggi dan desain yang disempurnakan memberikan penampilan yang elegan tanpa menghilangkan kenyamanan." />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Universal" img="/img/card2.jpeg" text="Polo cocok untuk semua orang, tanpa memandang jenis kelamin atau gaya. Dengan desain menawan dan kenyamanan luar biasa, polo memberikan kesan elegan yang sempurna untuk setiap moment." />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="High Quality" img="/img/card3.jpeg" text="Polo dibuat dengan bahan terbaik dan menggunakan teknik pembuatan yang tinggi. Setiap jahitan, detail, dan kain dipilih dengan hati-hati untuk memastikan polo ini tidak hanya tampak luar biasa tetapi juga tahan lama." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Services;
