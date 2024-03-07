import PriceList from "../svg/price-list";

import pric_img_1 from "../../public/assets/img/price/price-icon-1.png";
import pric_img_2 from "../../public/assets/img/price/price-icon-2.png";
import pric_img_3 from "../../public/assets/img/price/price-icon-3.png";

const price_data_home_one = [
  //  monthly price here 1 to 3
  {
    id: 1,
    img: pric_img_1,
    title: "Starter",
    cls: "",
    pric: "10,000 / Monthly",
    price_feature: [
      {
        list: "Facebook - 8 Posts",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Instagram - 8 Posts",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Youtube - 2 Video (Each video length is 3 min)",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Content Creation",
        icon: <PriceList />,
        cls: "inactive",
      },
      {
        list: "Video Creation",
        icon: <PriceList />,
        cls: "inactive",
      },
      {
        list: "Local SEO",
        icon: <PriceList />,
        cls: "inactive",
      },
      {
        list: "Website Optimization and Updation",
        icon: <PriceList />,
        cls: "inactive",
      },
      {
        list: "Onpage SEO",
        icon: <PriceList />,
        cls: "inactive",
      },
    ],
  },
  {
    id: 2,
    img: pric_img_2,
    title: "Growth",
    cls: "active",
    pric: "15,000 / Monthly",
    price_feature: [
      {
        list: "Facebook - 8 Posts",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Instagram - 8 Posts",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Youtube - 2 Video (Each video length is 3 min)",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Content Creation",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Video Creation",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Local SEO",
        icon: <PriceList />,
        cls: "inactive",
      },
      {
        list: "Website Optimization and Updation",
        icon: <PriceList />,
        cls: "inactive",
      },
      {
        list: "Onpage SEO",
        icon: <PriceList />,
        cls: "inactive",
      },
    ],
  },
  {
    id: 3,
    img: pric_img_3,
    title: "Enterprise",
    cls: "",
    pric: "25,000 / Monthly",
    price_feature: [
      {
        list: "Facebook - 8 Posts",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Instagram - 8 Posts",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Youtube - 2 Video (Each video length is 3 min)",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Content Creation",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Video Creation",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Local SEO",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Website Optimization and Updation",
        icon: <PriceList />,
        cls: "",
      },
      {
        list: "Onpage SEO",
        icon: <PriceList />,
        cls: "",
      },
    ],
  },
];
export default price_data_home_one;
