import {
    Navbar as NextuiNavbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,
    Link
  } from "@nextui-org/react";
import Logo from "./Logo";


  
  const Navbar = () => {

    const image = {
        src : "/logo.png",
        width: 40,
        height: 40,
        alt: "Platzi"
    }
    return (
        <NextuiNavbar  shouldHideOnScroll isBordered >
        <NavbarBrand>
          <Logo image={image} />
          <p className="font-bold text-inherit">Platzi</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NextuiNavbar>
    )
  }
  
  export default Navbar