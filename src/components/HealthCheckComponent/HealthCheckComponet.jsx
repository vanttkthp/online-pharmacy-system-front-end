
import React from 'react'
import "./style.css"
import healthCheckImg from '../../assets/images/health-check-img.png'

import nao from '../../assets/images/sa_sut_tri_tue.webp'
import tim from '../../assets/images/tim_mach.webp'
import da_day from '../../assets/images/da_day.png'

const HealthCheckComponet = () => {
    const healthCheck = ["Kiểm tra nguy cơ mắc bệnh tim mạch", "Kiểm tra nguy cơ mắc bệnh Alzheimer", "Kiểm tra nguy cơ mắc bệnh trào ngược dạ dày"];
    const imgSrcs = [tim, nao, da_day];
  return (
    <div className='health-check-ctn'>
        <div className='health-check-heading'>
            Kiểm tra sức khỏe
        </div>
        <div style={{color:"#fff"}}>
            Kết quả đánh giá sẽ cho bạn lời khuyên xử trí phù hợp!
        </div>
        <div className='health-check-list'>
            {healthCheck.map((text, index) => (
                <div key={index} className='health-check-case-item'>
                    <div className='health-check-case-item-img'>
                        <img src={imgSrcs[index]} />
                    </div>
                    <div>
                        <div className='health-check-case-item-content'>
                            {text}
                        </div>
                        <a className='health-check-link' href=''>
                            Bắt đầu
                        </a>
                    </div>
                    
                </div>
            ))}
        </div>
        <div className='health-check-img'>
            <img src={healthCheckImg} alt="" />
        </div>
    </div>  
  )
}

export default HealthCheckComponet