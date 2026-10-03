/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Sprout,
  GraduationCap,
  Mountain,
  Users,
  Leaf,
  Home as HomeIcon,
} from "lucide-react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

import hero5 from "../assets/hero5.jpg";
import hero4 from "../assets/hero4.jpg";

const heroImages = [hero1, hero2, hero3,hero4];
const heroImagess = [hero1, hero2, hero3,hero4];

const initiatives = [
  {
    icon: Mountain,
    title: "Media & Awareness",
    text: "Documenting Himalayan ecosystems and communities through documentaries, conversations and digital media.",
  },
  {
    icon: Sprout,
    title: "Empowering Farmers",
    text: "Connecting Himalayan farmers directly with consumers while supporting organic farming and local enterprises.",
  },

  {
    icon: HomeIcon,
    title: "Sustainable Tourism",
    text: "Supporting village homestays and cultural tourism to create sustainable income opportunities.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Providing children in remote villages with access to digital learning and professional educators.",
  },
  {
    icon: Users,
    title: "Employment",
    text: "Building skills and connecting people with opportunities in tourism, agriculture and other sectors.",
  },
  {
    icon: Leaf,
    title: "Environmental Conservation",
    text: "Integrating ecological protection into every initiative undertaken by ADHR.",
  },
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const [selectedImage, setSelectedImage] = useState(null);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
    //@ts-ignore
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      {/* ================= HERO ================= */}

      <section
        className="hero"
        id="home"
        style={{
          backgroundImage: `url("${heroImages[currentImage]}")`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="eyebrow">
            Alternative Development of Himalayan Region
          </span>

          <h1>
            Preserving the Himalayas.
            <br />
            <span>Empowering Communities.</span>
          </h1>

          <p>
            Building a sustainable future for the Himalayan ecosystem and the
            communities that call it home.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => scrollToSection("initiatives")}
            >
              Explore Our Work
              <ArrowRight size={18} />
            </button>

            <button
              className="secondary-btn"
              onClick={() => scrollToSection("contact")}
            >
              Get Involved
            </button>
          </div>
        </div>

        <div className="hero-bottom">
          <span>Uttarakhand, India</span>
          <span>Conservation • Community • Sustainability</span>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="about section" id="about">
        <div className="section-label">WHO WE ARE</div>

        <div className="about-grid">
          <div>
            <h2>
              Development that works
              <span> with the Himalayas.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              Alternative Development of Himalayan Region (ADHR) is a registered
              trust dedicated to conservation of the Himalayas and improving the
              lives of people living in Himalayan states.
            </p>

            <p>
              Our work currently focuses on Uttarakhand as a model region, where
              we bring together communities, experts, farmers, educators and
              volunteers to create sustainable solutions.
            </p>

            <button
              className="text-btn"
              onClick={() => scrollToSection("initiatives")}
            >
              Discover our initiatives
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}

      <section className="impact">
        <div className="impact-container">
          <div>
            <strong>10+</strong>
            <span>NCR families connected with Himalayan farmers</span>
          </div>

          <div>
            <strong>7</strong>
            <span>Areas of community development</span>
          </div>

          <div>
            <strong>1</strong>
            <span>Model region — Uttarakhand</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Possibilities for Himalayan communities</span>
          </div>
        </div>
      </section>

      {/* ================= INITIATIVES ================= */}

      <section className="initiatives section" id="initiatives">
        <div className="section-heading">
          <div>
            <div className="section-label">WHAT WE DO</div>
            <h2>Our Initiatives</h2>
          </div>

          <p>
            Our approach connects environmental conservation with sustainable
            livelihoods and community development.
          </p>
        </div>

        <div className="initiative-grid">
          {initiatives.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="initiative-card" key={item.title}>
                <div className="initiative-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="initiative-icon">
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span className="card-arrow">
                  <ArrowRight size={18} />
                </span>
              </article>
            );
          })}
        </div>
      </section>

      {/* ================= FEATURED PROJECT ================= */}

      <section className="project">
        <div
          className="project-image"
          style={{
            backgroundImage: `url(${hero5})`,
          }}
        ></div>

        <div className="project-content">
          <div className="section-label">FEATURED PROJECT</div>

          <h2>
            Bringing a village
            <br />
            back to <span>water.</span>
          </h2>

          <p>
            In Kunjetha village, ADHR is working with local communities and
            experts to revive a dwindling natural water stream.
          </p>

          <p>
            The project combines scientific consultation with local youth
            participation to encourage long-term water conservation.
          </p>

          <button className="primary-btn">
            Learn About The Project
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ================= GALLERY ================= */}

<section className="gallery section" id="gallery">

  <div className="section-heading">
    <div>
      <div className="section-label">OUR JOURNEY</div>
      <h2>Moments from the Himalayas</h2>
    </div>

    <p>
      A glimpse into the landscapes, communities and work
      that inspire our journey.
    </p>
  </div>

  <div className="gallery-grid">
    {heroImagess.map((image, index) => (
      <button
        className={`gallery-item gallery-item-${index + 1}`}
        key={image}
        //@ts-expect-error
        onClick={() => setSelectedImage(image)}
      >
        <img
          src={image}
          alt={`Himalayan landscape ${index + 1}`}
        />

        <div className="gallery-overlay">
          <span>View Image</span>
        </div>
      </button>
    ))}
  </div>

</section>

{/* ================= IMAGE MODAL ================= */}

{selectedImage && (
  <div
    className="image-modal"
    onClick={() => setSelectedImage(null)}
  >
    <button
      className="modal-close"
      onClick={() => setSelectedImage(null)}
      aria-label="Close image"
    >
      ×
    </button>

    <img
      src={selectedImage}
      alt="Himalayan landscape"
      onClick={(event) => event.stopPropagation()}
    />
  </div>
)}

      {/* ================= CTA ================= */}

      <section className="cta" id="contact">
        <div className="cta-container">
          {/* LEFT SIDE */}
          <div className="cta-content">
            <div className="section-label">BE PART OF THE CHANGE</div>

            <h2>
              The Himalayas need
              <br />
              <span>all of us.</span>
            </h2>

            <p>
              Support our work through your expertise, resources, partnerships
              or contributions.
            </p>

            <button className="primary-btn">
              Get Involved
              <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="cta-video">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/5zaS1DQfthQ"
                title="ADHR YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-mark">A</div>

              <div>
                <div className="logo-name">ADHR</div>

                <div className="logo-subtitle">
                  Alternative Development of Himalayan Region
                </div>
              </div>
            </div>

            <p>
              Preserving the Himalayas,
              <br />
              empowering communities.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Explore</h4>
              <a href="#about">About Us</a>
              <a href="#initiatives">Our Initiatives</a>
              <a href="#contact">Get Involved</a>
            </div>

            <div>
              <h4>Connect</h4>
              <a href="#contact">Contact Us</a>
              <a href="#home">YouTube</a>
              <a href="#home">Updates</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ADHR. All rights reserved.</span>

          <span>Uttarakhand, India</span>
        </div>
      </footer>
    </main>
  );
}

export default Home;
