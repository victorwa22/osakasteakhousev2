import { useState } from 'react'
import './App.css'

const MENU_DINE_IN_URL =
  'https://drive.google.com/file/d/1-4QADWJxZr3Z_bBCGm22CUZ2tHfpkl6z/view?usp=sharing'
const MENU_TO_GO_URL =
  'https://drive.google.com/file/d/1qh9sDo8Roo7BM_a_j7mKoiy5Ua0JYeAu/view?usp=sharing'

const MENU_CAROUSEL = {
  hibachi: [
    {
      title: 'Ginger Salmon Hibachi',
      description: 'Grilled salmon finished with house ginger sauce and steamed rice straight from the grill.',
      image: '/images/GINGER SALMON 2.JPG',
      alt: 'Ginger Salmon hibachi',
      menuHref: MENU_DINE_IN_URL,
      linkLabel: 'View menu',
    },
    {
      title: 'Hibachi Rice & Noodles',
      description: 'Your favorite hibachi dishes — steak, chicken, shrimp, and more from the grill with the show.',
      image: '/images/hibachi rice.jpg',
      alt: 'Hibachi rice',
      menuHref: MENU_DINE_IN_URL,
      linkLabel: 'View menu',
     
    },
    {
      title: 'Off-Grill Hibachi Dinners',
      description: 'All the bold hibachi flavors you love,  cooked fresh in our kitchen.',
      image: '/images/rice on oranges.jpg',
      alt: 'Hibachi rice and citrus',
      menuHref: MENU_DINE_IN_URL,
      linkLabel: 'View menu',
    },
  ],
  sushi: [
    {
      title: 'Rock N\' Roll',
      description: 'A crowd-pleasing specialty roll with bold flavors and our signature touch.',
      image: "/images/Rock N' Roll.JPG",
      alt: 'Rock N Roll sushi roll',
      menuHref: MENU_DINE_IN_URL,
      linkLabel: 'View menu',
    },
    {
      title: 'Red Had Roll',
      description: 'A house favorite roll with vibrant flavor and top-tier ingredients.',
      image: '/images/red had.jpg',
      alt: 'Red Had roll',
      menuHref: MENU_DINE_IN_URL,
      linkLabel: 'View menu',
    },
    {
      title: 'Woosaa Roll',
      description: 'Savory, satisfying, and unforgettable.',
      image: '/images/woosaa roll 1.jpg',
      alt: 'Woosaa roll',
      menuHref: MENU_DINE_IN_URL,
      linkLabel: 'View menu',
    },
  ],
}

function App() {
  const [menuCategory, setMenuCategory] = useState('hibachi')
  const [navOpen, setNavOpen] = useState(false)
  const closeNav = () => setNavOpen(false)
  return (
    <div className="page">
      <header className="site-header">
        <nav className="nav">
          <a href="#top" className="nav-logo">
            <img
              src="/osaka-logo.png"
              alt="Osaka Japanese Steakhouse logo"
              className="nav-logo-img"
            />
          </a>
          <button
            type="button"
            className={`nav-toggle ${navOpen ? 'is-open' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            onClick={() => setNavOpen(!navOpen)}
          >
            <span />
          </button>
          <ul className={`nav-links ${navOpen ? 'is-open' : ''}`}>
            <li>
              <a href="#menu" onClick={closeNav}>Menu</a>
            </li>
            <li>
              <a href="#specials" onClick={closeNav}>Specials</a>
            </li>
            <li>
              <a href="#contact" onClick={closeNav}>Visit</a>
            </li>
            <li>
              <a href="tel:937-320-1188" className="nav-call-btn" onClick={closeNav}>Call Now</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="top">
        <section id="hero" className="hero">
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-image hero-image-top" />
              <div className="hero-image hero-image-bottom" />
            </div>
            <div className="hero-right">
              <div className="hero-text">
                <h1 className="hero-title">
                  <span className="hero-title-accent">Osaka</span> Japanese Steakhouse
                </h1>
                <p className="hero-subtitle">
                  Fire, flavor, and fresh sushi all under one roof.
                </p>
                <div className="hero-buttons">
                  <a
                    href={MENU_DINE_IN_URL}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dine-In Menu
                  </a>
                  <a
                    href={MENU_TO_GO_URL}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    To-Go Menu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="menu-highlight">
          <header className="menu-header">
            <p className="eyebrow">Explore our food</p>
            <h2>From hibachi flames to specialty sushi rolls</h2>
            <p>Featuring hibachi dinners and specialty rolls — we've got your every palate covered.</p>
          </header>
          <article className="menu-carousel">
            <nav className="menu-carousel-nav" aria-label="Menu categories">
              <button
                type="button"
                className={`menu-carousel-nav__btn ${menuCategory === 'hibachi' ? 'is-nav-selected' : ''}`}
                onClick={() => setMenuCategory('hibachi')}
                aria-label={menuCategory === 'hibachi' ? 'Hibachi selected' : 'Hibachi'}
              >
                Hibachi
              </button>
              <button
                type="button"
                className={`menu-carousel-nav__btn ${menuCategory === 'sushi' ? 'is-nav-selected' : ''}`}
                onClick={() => setMenuCategory('sushi')}
                aria-label={menuCategory === 'sushi' ? 'Sushi selected' : 'Sushi'}
              >
                Sushi
              </button>
            </nav>

            <div className="menu-carousel__main">
              <div
                className="menu-carousel__track"
                style={{ transform: `translateX(${menuCategory === 'hibachi' ? 0 : -50}%)` }}
              >
                <div className="menu-carousel__slide">
                  {MENU_CAROUSEL.hibachi.map((item) => (
                    <article key={item.title} className="menu-item-card">
                      <div className="menu-item-card__image-frame">
                        <img
                          className="menu-item-card__image"
                          src={item.image}
                          alt={item.alt}
                          width="600"
                          height="600"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="menu-item-card__title">{item.title}</h3>
                      <div className="menu-item-card__description">
                        <p>{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="menu-carousel__slide">
                  {MENU_CAROUSEL.sushi.map((item) => (
                    <article key={item.title} className="menu-item-card">
                      <div className="menu-item-card__image-frame">
                        <img
                          className="menu-item-card__image"
                          src={item.image}
                          alt={item.alt}
                          width="600"
                          height="600"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="menu-item-card__title">{item.title}</h3>
                      <div className="menu-item-card__description">
                        <p>{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <div className="menu-carousel__cta">
              <a
                href={MENU_DINE_IN_URL}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dine-In Menu
              </a>
              <a
                href={MENU_TO_GO_URL}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                To-Go Menu
              </a>
            </div>
          </article>
        </section>

        <section id="specials" className="story-row">
          <div className="story-row-inner">
            <div className="story-text">
              <p className="eyebrow">Specials</p>
              <h2>Discounts &amp; events</h2>
              <div className="specials-list">
                <div className="special-block">
                  <h3 className="special-block__title">Discounts</h3>
                  <ul className="special-block__items">
                    <li>10% Senior Citizens</li>
                    <li>10% Military Special</li>
                    <li>10% off for WPAFB – ID holders</li>
                  </ul>
                </div>
                <div className="special-block">
                  <h3 className="special-block__title">Wine Tasting</h3>
                  <ul className="special-block__items">
                    <li>Wednesdays and Fridays 5–8 PM</li>
                    <li>Wine and Craft Beer</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="story-media" />
          </div>
        </section>

        
            

        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <div className="contact-block">
              <h3>Contact us</h3>
      
              <p>Phone: <a href="tel:937-320-1188" className="contact-phone-link">937-320-1188</a></p>
            </div>
            <div className="contact-block">
              <h3>Hours</h3>
              <p>
                Mon – Thurs: 11:00 AM – 2:00 PM, 4:30 – 9:00 PM<br />
                Fri: 11:00 AM – 2:00 PM, 4:30 – 10:00 PM<br />
                Sat: 1:00 PM – 10:00 PM<br />
                Sun: 12:00 PM – 9:00 PM
              </p>
            </div>
            <div className="contact-map">
              <h3>Location</h3>
              <div className="map-frame">
                <iframe
                  title="Osaka Japanese Steakhouse location"
                  src="https://www.google.com/maps?q=2476+Commons+Blvd+Suite+G+Beavercreek+OH+45431&z=15&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p>2476 Commons Blvd, Suite G<br />Beavercreek, OH 45431</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <small>© {new Date().getFullYear()} Osaka Japanese Steakhouse. All rights reserved.</small>
        </div>
      </footer>
    </div>
  )
}

export default App
