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
        <NavbarBrand >
        <a href="/" className="flex gap-2 items-center justify-center">
        <Logo image={image} />
          <p className="font-bold text-inherit">Platzi Store</p>
        </a>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navbar.map(nav => <NavbarItem isActive={nav.href === window.location.pathname} key={nav.label}>
            <Link color="foreground" href={nav.href}>
              {nav.label}
            </Link>
          </NavbarItem>)}
         
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


  const navbar =[{
    href:"/",
    label:"Home"
  },{
    href:"/products",
    label: "Products"
  },{
    href:"/about",
    label:"About"
  }]