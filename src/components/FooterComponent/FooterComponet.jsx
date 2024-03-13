<<<<<<< HEAD
import React from 'react'
import './style.css'

const FooterComponet = () => {
  const arr = [
    {
      title: "Về chúng tôi",
      subItems: ["Giới thiệu", "Quy chế hoạt động", "Chính sách nội dung", "Chính sach giao hàng","Chính sách đổi trả thuốc " ,"Chính sách bảo mật", "Chính sách thanh toán"]
    },
    {
      title: "Danh mục",
      subItems: ["Thực phẩm chức năng", "Dược mỹ phẩm", "Chăm sóc sức khỏe", "Thuốc" ,"Trang thiết bị y tế"]
    },
    {
      title: "Tìm hiểu thêm",
      subItems: ["Góc sức khỏe", "Tra cứu thuốc", "Tra cứu dược liệu", "Bệnh viện", "Tin tức sự kiện"]
    },
    {
      title: "Tổng đài",
      subItems: ["Tư vấn sức khỏe", "Góp ý, khiếu nại"]
    },
    {
      title: "Theo dõi chúng tôi",
      subItems: ["Facebook", "TikTok", "Zalo"]
    }
  ];
  return (
    <div className='footer-ctn'>
      <div className='footer-list' id="container">
        {arr.map((item, index) => (
          <div key={index} className='footer-column'>
            <div className="footer-column-title">{item.title}</div>
            <div className="footer-subitems">
              {item.subItems.map((subItem, subIndex) => (
                <div key={subIndex} className="footer-subitem">{subItem}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='footer-info'>
        <p>2007 - 2022 Công ty Cổ Phần Dược Phẩm FPT Long Châu Số ĐKKD 0315275368 cấp ngày 17/09/2018 tại Sở Kế hoạch Đầu tư TPHCM</p>
      </div>
    </div>
  )
}

=======
import React from 'react'
import './style.css'

const FooterComponet = () => {
  const arr = [
    {
      title: "Về chúng tôi",
      subItems: ["Giới thiệu", "Quy chế hoạt động", "Chính sách nội dung", "Chính sach giao hàng","Chính sách đổi trả thuốc " ,"Chính sách bảo mật", "Chính sách thanh toán"]
    },
    {
      title: "Danh mục",
      subItems: ["Thực phẩm chức năng", "Dược mỹ phẩm", "Chăm sóc sức khỏe", "Thuốc" ,"Trang thiết bị y tế"]
    },
    {
      title: "Tìm hiểu thêm",
      subItems: ["Góc sức khỏe", "Tra cứu thuốc", "Tra cứu dược liệu", "Bệnh viện", "Tin tức sự kiện"]
    },
    {
      title: "Tổng đài",
      subItems: ["Tư vấn sức khỏe", "Góp ý, khiếu nại"]
    },
    {
      title: "Theo dõi chúng tôi",
      subItems: ["Facebook", "TikTok", "Zalo"]
    }
  ];
  return (
    <div className='footer-ctn'>
      <div className='footer-list' id="container">
        {arr.map((item, index) => (
          <div key={index} className='footer-column'>
            <div className="footer-column-title">{item.title}</div>
            <div className="footer-subitems">
              {item.subItems.map((subItem, subIndex) => (
                <div key={subIndex} className="footer-subitem">{subItem}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='footer-info'>
        <p>2007 - 2022 Công ty Cổ Phần Dược Phẩm FPT Long Châu Số ĐKKD 0315275368 cấp ngày 17/09/2018 tại Sở Kế hoạch Đầu tư TPHCM</p>
      </div>
    </div>
  )
}

>>>>>>> 06fc7e0a076a2ccfce9ba5185c49c52f2bc3c7d8
export default FooterComponet