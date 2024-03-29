import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleSale, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/huge.png'
import { useNavigate } from 'react-router-dom'
// import { convertPrice } from '../../utils'

const CardComponent = (props) => {
    const { countInStock, description, image, name, price, rating, type, discount, selled, id } = props
    const navigate = useNavigate()
    const handleDetailsProduct = (id) => {
        navigate(`/product-details/${id}`)
    }
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029616_mind_engergy_jpanwell_60v_1132_6017_large_9e18e6bcc0.JPG" />}
            onClick={() =>  handleDetailsProduct(id)}
        >
            <WrapperStyleSale>
                -80.000đ
            </WrapperStyleSale>
            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>{rating} </span> <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                </span>
                <WrapperStyleTextSell> | Da ban {selled || 1000}+</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
                {/* <span style={{ marginRight: '8px' }}>{convertPrice(price)}</span> */}
                <span style={{ marginRight: '8px' }}>10000</span>
                <WrapperDiscountText>
                    - {discount || 5} %
                </WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent;