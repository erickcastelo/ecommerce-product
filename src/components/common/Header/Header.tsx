import "./Header.scss";
import LogoIcon from "../../../assets/logo-icon.svg";
import CartIcon from "../../../assets/cart-icon.svg";
import ImageAvatar from "../../../assets/image-avatar.png";
import { Menu } from "../Menu/Menu";
import { createPortal } from "react-dom";
import { useUtils } from "../../../hooks/Utils";

const isThereRootMenu = document.getElementById("root-menu");
if (!isThereRootMenu) {
  const root = document.createElement("div");
  root.setAttribute("id", "root-menu");
  const body = document.body;
  body.appendChild(root);
}
export const Header = () => {
  const { isMobile } = useUtils();

  return (
    <header className="container-header">
      <div className="container-menu-hangurguer">
        <label
          htmlFor="menu"
          className="menu-hamburguer md:hidden"
          onClick={() => {
            const rootMenu = document.getElementById("root-menu");
            const menuContent = rootMenu?.firstChild;
            (menuContent as HTMLElement).classList.add("show-menu");
          }}
        >
          <span className="menu-hamburguer-icon container-image"></span>
        </label>

        {isMobile &&
          createPortal(
            <Menu />,
            document.getElementById("root-menu") ||
              document.createElement("div")
          )}

        {!isMobile && <Menu />}

        <img
          className="container-image md:order-1"
          src={LogoIcon}
          alt="Logo from Site"
        />
      </div>
      <div className="container-cart">
        <img className="container-image" src={CartIcon} alt="Cart" />
        <img
          className="container-image avatar"
          src={ImageAvatar}
          alt="Imagem avatar"
        />
      </div>
    </header>
  );
};
