import React from "react";
import { Col, Input } from "antd";
import {
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";
import {
  CaretDownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from 'react-router-dom';
const { Search } = Input;


export const HeaderComponent = () => {
  const navigate = useNavigate()
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={4}>
          <WrapperTextHeader>Pharmacy</WrapperTextHeader>
        </Col>
        <Col span={13}>
          <ButtonInputSearch
            size="large"
            bordered={false}
            textButton="Tìm kiếm"
            placeholder="Tìm tên thuốc, bệnh lý, thực phẩm chức năng,..."
            backgroundColorButton="#fff"
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems:"center", justifyContent:"space-between" }}
        >
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}} >
              <WrapperTextHeaderSmall>Login/Sign in</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Account</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
            <WrapperTextHeaderSmall>Cart</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};
