import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dataJson from '../json_data/Data.json'


function Flexiblepriceplansection() {

  const [date, setDate] = useState(new Date());
  const handleChange = date => setDate(date);

  const [modal, sertModal] = useState(false);

  const togglebtn = () => { sertModal(!modal) }

  const [posts, setPosts] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/divinehub/pricing_plan`
      );
      if (!response.ok) {
        // oups! something went wrong
        return;
      }
      const posts = await response.json();
      setPosts(posts);
    }
    loadPosts();
  }, []);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="flexible-price-plan-section">
        <div className="flexiblepriceplanwrapper">
          <span className="Pricing-Plans">{dataJson.pricing_plan_title}</span>
          <h2 className="flexible-price-title">
            {dataJson.pricing_plan_sub_title}
          </h2>
          <div className="flexible-price-folder">

            {/*  */}
            <Slider {...settings}>
              {posts.map((post) => {
                return (
                  <React.Fragment key={post.id}>
                    <div className="flexible-price-blog-box-section">
                      <div className="what-we-offer-image-folder">
                        <img src={`${REACT_APP_BASE_URL}${post.field_icon}`} alt={post.field_icon} />
                      </div>
                      <div className="flexible-price-folder1">
                        <div className="flexible-price-image-folder">
                          {/* <h2>{post.title}</h2> */}
                        </div>
                        <span>₹ {post.field_price}</span>
                      </div>
                      <div className="flexible-price-folder2">
                        <h2>{post.title.replace(/<\/?[^>]+(>|$)/g, "")}</h2>
                        <p>
                          {post.field_sub_title.replace(/<\/?[^>]+(>|$)/g, "")}
                        </p>
                      </div>
                      <div className="flexible-price-des-section">
                        <div className="flexible-price-des-folder1">
                          <p>
                            {post.field_description.replace(
                              /<\/?[^>]+(>|$)/g,
                              ""
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flexible-price-btn" onClick={togglebtn}>
                        <a
                          href="/"//{post.field_razorpay_link}
                        // rel="noreferrer"
                        // target="_blank"
                        >
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a
                          href="/"//{post.field_razorpay_link}
                          // rel="noreferrer"
                          // target="_blank"
                          className="Choose-Plan"
                        >
                          {dataJson.plan_btn}
                        </a>
                      </div>
                    </div>
                  </React.Fragment>

                );
              })}
            </Slider>
          </div>
        </div>
        {modal && (
          <div className="fexlibel-pricing-popup-folder">
            <div className="flexivel-pricing-popup">
              <h2>Contact Form</h2>
              <div className="form-folder">
                <input type="text" className="form-inner-input" placeholder="Firts Name" />
                <input type="text" className="form-inner-input" placeholder="Last Name" />
              </div>
              <div className="form-folder">
                <input type="text" className="form-inner-input" placeholder="Company Name" />
                <input type="text" className="form-inner-input" placeholder="Company Email" />
              </div>
              <div className="form-folder">
                <input type="text" className="form-inner-input" placeholder="Phone Number" />
                <input type="text" className="form-inner-input" placeholder="Meeting Rooms" />
              </div>
              <div className="form-folder">
                <input type="text" className="form-inner-input" placeholder="Number of Guests" />
                <DatePicker className="form-inner-input" selected={date} onChange={handleChange} />
                {/* <input type="Date" className="form-inner-input" placeholder="Date"/> */}
              </div>
              <div className="form-folder">
                <input type="text" className="form-inner-input" placeholder="Slot Available" />
                <select className="form-inner-input">
                  <option>select</option>
                  <option value="">Virtual Office</option>
                  <option value="">DAY PASS</option>
                  <option value="">Private Offices</option>
                  <option value="">Dedicated Desks</option>
                </select>
              </div>
              <textarea cols="30" rows="8" className="form-inner-input" placeholder="Massege" />
              <div className="form-submit-btns">
                <a href="/">Submit</a>
              </div>
              <div className="close-btn-folder" onClick={togglebtn}>
                <div className="close-btn"><i class="fa-solid fa-xmark"></i></div>
              </div>
            </div>
          </div>
        )}
      </div>

    </>
  );
}

export default Flexiblepriceplansection;