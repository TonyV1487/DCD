import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ServLevelCards from "../components/ServLvlCards";
import data from "../data/services";
import { useParams } from "react-router-dom";

const Services = () => {
  let { id } = useParams();
  const [serviceName, setServiceName] = useState();
  const [serviceDescrip, setServiceDescrip] = useState();
  const [serviceLvls, setServiceLvls] = useState([]);

  // console.log(id);
  useEffect(() => {
    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
      // console.log(data[i].index);
      if (data[i].index === id) {
        // console.log(id);
        // console.log("Yes");
        setServiceName(data[i].service);
        setServiceDescrip(data[i].detail[0].long);
        var servLvlArray = data[i].servLevel.length;
        var serviceLvlDataArray = [];
        for (var y = 0; y < servLvlArray; y++) {
          serviceLvlDataArray.push(data[i].servLevel[y]);
          console.log(serviceLvlDataArray);
        }
        setServiceLvls(serviceLvlDataArray);
      } else {
        // console.log(id);
        // console.log("No");
      }
    }
  }, []);

  return (
    <>
      <Row>
        <Image src="http://placehold.it/2000x500" fluid />
      </Row>
      <Row>
        <Col md={2} />
        <Col md={8}>{serviceDescrip}</Col>
        <Col md={2} />
      </Row>
      <Row>
        <ServLevelCards
          key={serviceName}
          type={serviceName}
          info={serviceLvls}
        />
      </Row>
    </>
  );
};

export default Services;
