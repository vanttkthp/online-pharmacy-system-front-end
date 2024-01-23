import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import slider4 from "../../assets/images/slider4.png";

import { Col, Row } from "antd";
import { Typography } from 'antd';
import CardComponent from "../../components/CardComponent/CardComponent";

const { Title } = Typography;

export const HomePage = () => {
  const arr = [
    "Medicines",
    "Vitamins",
    "First Aid Supplies",
    "Personal Care Items",
    "Health Supplements",
  ];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{ backgroundColor: "#eaeffa", padding: "0 120px" }}
      >
        <SliderComponent arrImages={[slider1, slider2, slider3, slider4]} />
      </div>
      <div
        id="container"
        style={{ backgroundColor: "#fff3e1", padding: "0px 120px" }}
      >
        <Row>
        <Title level={4} style={{marginTop:"10px"}}>Most favorable products</Title>
        </Row>
        <Row>
          <div style={{display: 'flex', gap: '20px'}}>
          <CardComponent />
          </div>
        </Row>
      </div>
    </>
  );
};
