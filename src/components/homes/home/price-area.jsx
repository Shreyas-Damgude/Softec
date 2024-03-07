import price_data_home_one from "@/src/data/price-data-1";
import PriceDotLine from "@/src/svg/price-dot-line";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const price_content = {
  title: "Deliver End-To-End Retail Billing & Solutions",
  sub_title: "Choose a plan tailored to your needs",
};
const { title, sub_title } = price_content;

const PriceArea = () => {
  return (
    <>
      <div className="tp-price__area tp-price__pl-pr p-relative pt-110 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-7 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-price__section-box text-center mb-35">
                <h2 className="tp-section-title">{title}</h2>
                <p>{sub_title}</p>
              </div>
            </div>
          </div>

          <div
            className="row wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="col-12">
              <div className="tp-price__btn-box p-relative mb-50 d-flex justify-content-center">
                <nav>
                  <div
                    className="nav nav-tab tp-price__btn-bg"
                    id="nav-tab"
                    role="tablist"
                  >
                    <span className="test"></span>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="price-tab-content">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabIndex="0"
              >
                <div className="row">
                  {price_data_home_one.slice(0, 3).map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div className={`tp-price__item ${item.cls} p-relative`}>
                        <div className="tp-price__icon">
                          <Image src={item.img} alt="theme-pure" />
                        </div>
                        <div className="tp-price__title-box">
                          <h4 className="tp-price__title-sm">{item.title}</h4>
                          <p>{item.desctiption}</p>
                        </div>
                        <div className="tp-price__feature">
                          <ul>
                            {item.price_feature?.map((list, i) => (
                              <li key={i} className={list.cls}>
                                <span>{list.icon}</span>
                                {list.list}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="tp-price__btn tp-btn-price">
                          <span>Price: {item.pric}</span>
                          <Link href="/price">
                            Purchase Now <i className="fal fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
                tabIndex="0"
              >
                <div className="row">
                  {price_data_home_one.slice(3, 6).map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div className={`tp-price__item ${item.cls} p-relative`}>
                        <div className="tp-price__icon">
                          <Image src={item.img} alt="theme-pure" />
                        </div>
                        <div className="tp-price__title-box">
                          <h4 className="tp-price__title-sm">{item.title}</h4>
                          <p>{item.desctiption}</p>
                        </div>
                        <div className="tp-price__feature">
                          <ul>
                            {item.price_feature?.map((list, i) => (
                              <li key={i} className={list.cls}>
                                <span>{list.icon}</span>
                                {list.list}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="tp-price__btn tp-btn-price">
                          <span>Price: {item.pric}</span>
                          <Link href="/price">
                            Purchase Now <i className="fal fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceArea;
