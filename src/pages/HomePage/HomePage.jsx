import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import slider4 from "../../assets/images/slider4.png";

import { Col, Row } from "antd";
import { Typography } from "antd";
import CardComponent from "../../components/CardComponent/CardComponent";

import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const { Title } = Typography;
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

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
            return (
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <TypeProduct name={item}/>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            );
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
          <Title level={4} style={{ marginTop: "10px" }}>
            Most favorable products
          </Title>
        </Row>
        <Row>
          <div style={{ display: "flex", gap: "20px" }}>
            <CardComponent />
          </div>
        </Row>
      </div>
    </>
  );
};
