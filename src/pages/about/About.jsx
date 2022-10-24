import './about.css';
import Header from '../../components/Header';
import Image from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';

const About = () => {
  return (
    <>
      <Header title="About Us" image={Image}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam necessitatibus quia suscipit, vero veritatis est
        nihil, dolores id ipsa, hic delectus eos nobis ad voluptas.
        Esse a quis quaerat voluptatibus.
      </Header>

      <section className="about__kstory">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="StoryImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Ullam quas non sint debitis fugiat rem, nisi
              inventore perferendis dicta nesciunt laudantium alias
              architecto voluptatum deleniti corporis quod placeat vel
              eligendi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Asperiores facilis dicta quo ipsam architecto,
              nesciunt perferendis exercitationem veniam est ipsum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat numquam illum eaque.
            </p>
          </div>
        </div>
      </section>

      <section className="about__kstory">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Ullam quas non sint debitis fugiat rem, nisi
              inventore perferendis dicta nesciunt laudantium alias
              architecto voluptatum deleniti corporis quod placeat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Asperiores facilis dicta quo ipsam architecto,
              nesciunt perferendis exercitationem veniam est ipsum.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="VisionImage" />
          </div>
        </div>
      </section>

      <section className="about__kstory">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="MissionImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Ullam quas non sint debitis fugiat rem, nisi
              inventore perferendis dicta nesciunt laudantium alias
              architecto voluptatum deleniti corporis quod placeat vel
              eligendi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Asperiores facilis dicta quo ipsam architecto,
              nesciunt perferendis exercitationem veniam est ipsum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat numquam illum eaque.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
