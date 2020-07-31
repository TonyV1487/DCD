import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ServLevelCards from "../components/Service Cards";
import data from "../data/services";

const Services = () => {
  return (
    <>
      <Row>
        <Image src="http://placehold.it/2000x500" />
      </Row>
      <Row>
        <Col md={2} />
        <Col md={8}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eget enim mi. Nunc ut dui ut est ultrices mattis. Morbi pulvinar
            aliquet laoreet. In posuere pharetra felis. Donec eget blandit nisl.
            Donec ultricies dapibus fermentum. Aenean ut ullamcorper lacus,
            aliquam commodo lectus. Mauris vel mauris condimentum, dapibus ipsum
            sit amet, euismod nisi. Donec non sodales turpis, ut lobortis
            tortor. Nam nec mauris sollicitudin, sollicitudin sem vel,
            scelerisque diam. Suspendisse et tincidunt tortor. Nam id mi tellus.
            Morbi ut pellentesque nisi.
          </p>
          <p>
            Sed facilisis justo in convallis sagittis. Quisque a eleifend orci,
            eu rutrum arcu. Ut congue neque a gravida malesuada. Maecenas
            fringilla eu dui sed interdum. Nulla facilisi. Donec ut elementum
            risus. Integer eget est arcu. Nullam tincidunt pretium nisl vitae
            vestibulum. Vivamus fermentum nec ex a maximus. Cras pellentesque,
            magna et consectetur tristique, felis odio tincidunt massa, sed
            rutrum erat lectus eget enim. Etiam efficitur urna at sagittis
            blandit. Ut non mauris odio.
          </p>
          <p>
            Morbi aliquam lectus non orci ultrices elementum. In et accumsan
            lorem. Nam egestas nisl sed diam sollicitudin imperdiet non vel
            urna. Vivamus mi lacus, consectetur a erat vitae, consectetur
            bibendum lacus. Aenean fermentum, felis in congue fringilla, ex arcu
            tempor metus, facilisis scelerisque nisl nisi nec arcu. Duis nisi
            lectus, tempor at euismod in, consectetur a arcu. Integer tempus
            accumsan metus eu condimentum. Phasellus ultricies, ex in faucibus
            aliquam, tortor mi egestas est, vitae suscipit risus eros non
            tortor.
          </p>
        </Col>
        <Col md={2} />
      </Row>
      <Row>
        {data.map((service) => (
          <ServLevelCards
            key={service.type}
            type={service.type}
            info={service.info}
          />
        ))}
      </Row>
    </>
  );
};

export default Services;
