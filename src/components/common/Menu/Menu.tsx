import "./Menu.scss";
import CloseIcon from "../../../assets/close-icon.svg";
import classNames from "classnames";

export const Menu = () => {
  return (
    <div
      className={classNames({
        "menu-content hidden md:block md:order-2": true,
      })}
    >
      <div className="style-modal md:hidden"></div>
      <ul className="list-menu">
        <li className="list-menu-item md:hidden">
          <label
            htmlFor="close"
            onClick={() => {
              const rootMenu = document.getElementById("root-menu");
              const menuElement = rootMenu?.firstChild;
              (menuElement as HTMLElement).classList.remove("show-menu");
            }}
          >
            <img src={CloseIcon} alt="Close menu" />
          </label>
        </li>
        <li className="list-menu-item">Collections</li>
        <li className="list-menu-item">Men</li>
        <li className="list-menu-item">Women</li>
        <li className="list-menu-item">About</li>
        <li className="list-menu-item">Contact</li>
      </ul>
    </div>
  );
};
