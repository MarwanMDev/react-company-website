import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import './contact.css';

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Harum minus labore voluptatum id facere delectus quo.
      </Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:support@application.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me/marwan_mostafa"
              target="_blank"
              rel="noreferrer"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+20100832217"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
