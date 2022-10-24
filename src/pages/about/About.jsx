import './about.css';
import Header from '../../components/Header';
import Image from '../../images/header_bg_1.jpg';

const About = () => {
  return (
    <>
      <Header title="About Us" image={Image}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam necessitatibus quia suscipit, vero veritatis est
        nihil, dolores id ipsa, hic delectus eos nobis ad voluptas.
        Esse a quis quaerat voluptatibus.
      </Header>
    </>
  );
};

export default About;
