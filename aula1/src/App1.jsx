import './App1.css'
import React from 'react';
import './App1.css';


const Header = () => {
return (
<header className="header">
<div className="logo"><img src='image.png'></img> Help Pet</div>
<nav>
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">Sobre nós</a></li>
<li><a href="#">Serviços</a></li>
<li><a href="#">Login</a></li>
</ul>
</nav>
<button className="start-button">Entrar</button>
</header>
);
};

const SobreNos = () => {
return (
<section className="sobre-nos">
<h2>Sobre Nós</h2>
<p>Bem-vindo ao <strong>Help Pet</strong>, uma plataforma dedicada a conectar amantes de animais com ONGs e protetores de animais em sua região. Nosso objetivo é facilitar a adoção de animais abandonados, promover lares temporários e incentivar doações para os animais que muito necessitam.</p>
</section>
);
};

const Servicos = () => {
return (
<section className="servicos">
<div className="servico">
<h3>Nossos Serviços</h3>
<ul>
<li><strong>Adoção:</strong> Conectamos você com ONGs para facilitar a adoção de animais.</li>
<li><strong>Lar Temporário:</strong> Ajudamos a encontrar ONGs que precisam de lares temporários.</li>
<li><strong>Doações:</strong> Facilitamos doações para ONGs que cuidam de animais abandonados.</li>
</ul>
</div>
<div className="servico">
<h3>Como Funciona</h3>
<p>Nosso site é um hub que centraliza informações de várias ONGs, facilitando a adoção de animais, a oferta de lares temporários e as doações. Com uma interface intuitiva, você pode facilmente navegar entre as opções disponíveis e contribuir para o bem-estar dos animais.</p>
</div>
<div className="servico">
<h3>Junte-se a Nós</h3>
<p>Acreditamos que cada animal merece uma chance e que, juntos, podemos fazer a diferença! Explore nossos serviços, conheça os animais disponíveis e descubra como você pode ajudar!</p>
</div>
</section>
);
};

const App = () => {
return (
<div className="App">
<Header />
<SobreNos />
<Servicos />
</div>
);
};


export default App;


