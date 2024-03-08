import {
  Navbar as NextuiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Logo from "./Logo";
import { useBoundStore } from "../store/store";
import { FaShopify } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Navbar = () => {
  const user = useBoundStore((state) => state.user);

  const image = {
    src: "/logo.png",
    width: 30,
    height: 30,
    alt: "Platzi",
  };
  return (
    <NextuiNavbar shouldHideOnScroll isBordered>
      <NavbarBrand>
        <a href="/" className="flex gap-2 items-center justify-center">
          <Logo image={image} />
          <p className="font-bold text-sm md:text-base text-inherit">
            Platzi Store
          </p>
        </a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navbar.map((nav) => (
          <NavbarItem
            isActive={nav.href === window.location.pathname}
            key={nav.label}
          >
            <Link color="foreground" href={nav.href}>
              {nav.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {user && (
          <>
            <NavbarItem>{user.username}</NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="/cart">
              <FaBagShopping/>
            </Link>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </NextuiNavbar>
  );
};

export default Navbar;

const navbar = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/about",
    label: "About",
  },
];


