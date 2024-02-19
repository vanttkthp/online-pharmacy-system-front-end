import { Button } from 'antd'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {
  const {
    size, placeholder, textButton,
    bordered, backgroundColorInput = '#fff',
    backgroundColorButton = 'rgb(13, 92, 182)',
    colorButton = 'black'
  } = props

  return (
    <div style={{ display: 'flex'}}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput, borderBottomLeftRadius: '100px',borderTopLeftRadius: '100px',borderBottomRightRadius: '0px',borderTopRightRadius: '0px',}}
        {...props}
      />
      <ButtonComponent
        size={size}
        styleButton={{ background: backgroundColorButton, border: !bordered && 'none', borderBottomRightRadius: '100px',borderTopRightRadius: '100px',borderBottomLeftRadius: '0px',borderTopLeftRadius: '0px'}}
        icon={<SearchOutlined color={colorButton} style={{ color: 'black' }} />}
        textButton={textButton}
        styleTextButton={{ color: colorButton }}
      />
    </div>
  )
}

export default ButtonInputSearch;