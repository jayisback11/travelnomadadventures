import React, { useEffect, useState } from 'react';
import {
  Anchor,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  Compass,
  Facebook,
  Globe2,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  TreePalm,
  Phone,
  Ship,
  Sparkles,
  Users,
  X,
} from 'lucide-react';

const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Services', 'services'],
  ['Story', 'story'],
  ['Contact', 'contact'],
];

const valueCards = [
  {
    icon: <Globe2 size={28} />,
    title: 'Veteran-Led, Globally Inspired',
    text: 'Our founder’s military service shaped a deep appreciation for culture, structure, and meaningful adventure. We bring that same global insight and precision to every trip we plan.',
  },
  {
    icon: <Compass size={28} />,
    title: 'The FUN BOSS Difference',
    text: 'We don’t just plan trips—we guide experiences. Our FUN BOSS energy brings joy, laughter, and creativity to each interaction. Expect clarity, encouragement, and above all: fun.',
  },
  {
    icon: <Users size={28} />,
    title: 'Client-Centered, Culture-Focused',
    text: 'Our travelers are more than clients—they’re part of the tribe. You’ll get personalized service and cultural insight that reflect who you are and what you value.',
  },
];

const services = [
  { icon: <BriefcaseBusiness />, title: 'Personalized Vacation Planning', text: 'Custom itineraries crafted to match your dreams—from solo escapes to family adventures.' },
  { icon: <Users />, title: 'Group Travel Coordination', text: 'Smooth, fun, and stress-free travel for groups of friends, family, or organizations.' },
  { icon: <Ship />, title: 'Cruise Bookings', text: 'Departing from New Orleans & Galveston to tropical, cultural, and bucket-list destinations.' },
  { icon: <Building2 />, title: 'European Travel Experiences', text: 'Old-world charm, modern luxury, and everything in between.' },
  { icon: <TreePalm />, title: 'All-Inclusive Getaways', text: 'Pack your bags—we’ll handle the rest. Resorts, flights, and peace of mind included.' },
  { icon: <Sparkles />, title: 'Signature Touchpoints', text: 'Expect thoughtful moments and curated extras that elevate your experience.' },
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-wrap">
          <button className="brand" onClick={() => scrollToId('home')} aria-label="Travel Nomad home">
            <span className="brand-mark"><Compass size={28} strokeWidth={1.8} /></span>
            <span>
              <strong>TRAVEL NOMAD</strong>
              <small>ADVENTURES</small>
            </span>
          </button>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => { scrollToId(id); setMenuOpen(false); }}>{label}</button>
            ))}
            <button className="nav-cta mobile-only" onClick={() => { scrollToId('contact'); setMenuOpen(false); }}>Plan Your Journey</button>
          </nav>

          <button className="nav-cta desktop-only" onClick={() => scrollToId('contact')}>Plan Your Journey</button>
          <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-anchor">
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div className="hero-copy reveal-up">
              <div className="eyebrow">Veteran-led • culture-driven • memory-made</div>
              <h1>Travel Beyond<br />the Ordinary</h1>
              <p>Personalized. Worry-free. Unforgettable.<br />Journeys designed around you.</p>
              <button className="btn-primary" onClick={() => scrollToId('contact')}>
                Plan Your Journey <ChevronRight size={18} />
              </button>
            </div>

            <div className="travel-collage" aria-hidden="true">
              <div className="polaroid city"><img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80" alt="" /></div>
              <div className="polaroid beach"><img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85" alt="" /></div>
              <div className="polaroid ship"><img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=85" alt="" /></div>
              <div className="stamp stamp-one">ADVENTURE<br />AWAITS</div>
              <div className="stamp stamp-two">EXPLORE<br />THE WORLD</div>
            </div>
          </div>
        </section>

        <section id="about" className="intro section-anchor">
          <div className="container">
            <div className="intro-top">
              <div className="intro-copy">
                <span className="section-kicker">Travel with intention</span>
                <h2>Feel the Journey. Live the Story.</h2>
                <p>At Travel Nomad, we believe travel is more than just a vacation—it’s a gift. A gift of presence, perspective, and possibility. Our mission is to design stress-free journeys that don’t just take you away, but take you deeper into experience, culture, and joy.</p>
                <p>Whether you’re planning a relaxing all-inclusive in the Caribbean, a cultural immersion in Europe, or a fun cruise with friends from Galveston or New Orleans, we handle the details so you can hold onto the moment.</p>
              </div>

              <div className="pillars">
                <div className="pillar"><Globe2 /><strong>Meaningful Experiences</strong><span>Deeper connections, real memories.</span></div>
                <div className="pillar"><BadgeCheck /><strong>Expert Planning</strong><span>Every detail handled with care.</span></div>
                <div className="pillar"><Heart /><strong>Clients First</strong><span>You’re not just a trip—you’re part of the tribe.</span></div>
              </div>
            </div>

            <div className="value-grid">
              {valueCards.map((card) => (
                <article className="value-card" key={card.title}>
                  <div className="card-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services section-anchor">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">What we plan</span>
              <h2>From Port to Paradise, With You All the Way</h2>
              <p>Personalized, worry-free travel planning tailored to your style and interests. We make sure you never wonder if you’re missing out.</p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="story section-anchor">
          <div className="story-grid">
            <div className="story-copy">
              <span className="section-kicker">Our story</span>
              <h2>Veteran-Led. Culture-Driven. Memory-Made.</h2>
              <p>Before Travel Nomad was a business, it was a belief: that travel is a doorway, not just a destination. Our founder grew up chasing stories from his Navy dad—each one beginning with “Hong Kong.” That curiosity sparked a lifelong love of exploration and eventually, a career of service in the Navy.</p>
              <p>Travel Nomad was created for seekers, memory-makers, and the curious at heart. Every trip we design carries the belief that travel is a gift—a reminder to be bold, to be present, and to believe in wonder again.</p>
              <div className="signature">Travel Nomad</div>
              <small>Founder, U.S. Navy Veteran & Global Wanderer</small>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85" alt="Balanced stones beside a beautiful coastline" />
              <div className="story-badge"><Anchor size={23} /> TRAVEL IS A GIFT</div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-anchor">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="section-kicker light">Start your next story</span>
              <h2>Let’s Connect</h2>
              <p>Ready to turn your next trip into a story worth telling? Reach out and let’s chat about where your adventure begins.</p>
              <div className="contact-details">
                <a href="mailto:info@travelnomadadventures.com"><Mail /> info@travelnomadadventures.com</a>
                <a href="tel:+12252086730"><Phone /> 225-208-6730</a>
              </div>
              <div className="hours">
                <strong>Business Hours</strong>
                <span>Mon–Fri: 12:00 PM – 5:00 PM</span>
                <span>Saturday: By Appointment</span>
                <span>Sunday: Closed</span>
              </div>
              <div className="socials">
                <a href="#" aria-label="Facebook"><Facebook /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin /></a>
                <a href="#" aria-label="Instagram"><Instagram /></a>
              </div>
            </div>

            <form className="contact-card" onSubmit={(e) => e.preventDefault()}>
              <span className="mini-label">Tell us what you're dreaming about</span>
              <h3>Ready to Plan Your Next Adventure?</h3>
              <div className="form-row">
                <input aria-label="Name" placeholder="Your name" />
                <input aria-label="Email" type="email" placeholder="Email address" />
              </div>
              <input aria-label="Destination" placeholder="Dream destination" />
              <textarea aria-label="Trip details" rows="4" placeholder="Tell us about the trip you have in mind..." />
              <button className="btn-primary full" type="submit">Plan Your Journey <ChevronRight size={18} /></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand"><Compass size={24} /><div><strong>TRAVEL NOMAD</strong><span>ADVENTURES</span></div></div>
          <div className="footer-links">{navItems.map(([label, id]) => <button key={id} onClick={() => scrollToId(id)}>{label}</button>)}</div>
          <div className="copyright">© {new Date().getFullYear()} Travel Nomad Adventures. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
