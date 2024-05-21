import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Portfolio() {
  return (
    <>
      <nav className="navbar">
        <Nav />
      </nav>
      <main className="main">
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

const Nav = () => {
  return (
    <>
      <ul>
        <li>Home</li> <span>|</span>
        <li>About</li> <span>|</span>
        <li>Projects</li> <span>|</span>
        <li>Achievement</li> <span>|</span>
        <li>Contacts</li>
      </ul>
    </>
  );
};

const Main = () => {
  return (
    <>
      <h1>Hi Geeks !</h1>
      <hr />
      <h2>About Me</h2>
      <div className="twoSection">
        <img src="./avatar1.png" alt="avatar" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          quia ut fuga sapiente ipsam consectetur vitae ex iure. Iure ut
          sapiente ex vero accusamus optio maxime quaerat consectetur porro
          fugiat? Vero aperiam vitae perspiciatis obcaecati voluptatibus
          nesciunt reprehenderit unde quas quibusdam delectus doloremque totam
          facere amet ipsum minima eius, veniam praesentium culpa eaque dolores
          libero nobis qui. Magnam, nam dolore. Officiis similique facere odit
          molestiae aspernatur necessitatibus fuga blanditiis architecto
          repellat, expedita nesciunt reiciendis tempore nemo impedit magnam! Id
          unde distinctio voluptatibus libero sunt blanditiis ratione odit
          nostrum et veritatis? Porro rem ut obcaecati maiores quod facere
          repellendus velit praesentium ratione molestiae asperiores aperiam
          nihil quo consectetur vitae enim laboriosam cupiditate architecto,
          aliquid veritatis perspiciatis nostrum. Voluptas perferendis impedit
          facilis? Nobis fugit dolorum, quas sequi doloremque, amet provident
          quam quisquam molestias rem necessitatibus minima beatae non officia
          dolor dignissimos facere porro voluptate unde ex nisi itaque, eveniet
          velit ipsa? Voluptatum.
        </p>
      </div>
    </>
  );
};
const Footer = () => {};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Portfolio />);
