import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ScienceIcon from '@mui/icons-material/Science';
import HubIcon from '@mui/icons-material/Hub';
import CalculateIcon from '@mui/icons-material/Calculate';
import PercentIcon from '@mui/icons-material/Percent';
const Widget = ({ type }) => {

  let data;

  switch (type) {
    case "user":
      data = {
        title: "Students",
        isMoney: false,
        link: "See all students",
        query:"users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Physics",
        isMoney: false,
        link: "See all the pdf",
        icon: (
          <HubIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Chemistry",
        isMoney: true,
        link: "See all the pdf",
        icon: (
          <ScienceIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "product":
      data = {
        title: "Maths",
        query:"products",
        link: "See all the pdf",
        icon: (
          <PercentIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
                123
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
            Total
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
