"use client";
import { Avatar, Dropdown, Label, Navbar, TextInput } from "flowbite-react";
import Image from "next/image";

export default function NavbarComponent() {
  return (
    <>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="" />
          </div>
          <TextInput id="sarch" type="sarch" placeholder="Buscar algo" />
        </div>
      </form>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://mercadolibre.com/">
          <Image
            src={
              "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__large_plus.png"
            }
            width={150}
            height={50}
            alt="Navbar image"
            className="mr-3 h-6 sm:h-9 just rounded-lg"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            MercadoCountry
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Pepito El Pistolero</span>
              <span className="block truncate font-extrabold text-lg">
                Nivel 45 - Mercado Puntos
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Compras</Dropdown.Item>
            <Dropdown.Item>Preguntas</Dropdown.Item>
            <Dropdown.Item>Opiniones</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Cupones</Dropdown.Item>
            <Dropdown.Item>Préstamos</Dropdown.Item>
            <Dropdown.Item>Películas y series</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Vender</Dropdown.Item>
            <Dropdown.Item>Novedades</Dropdown.Item>
            <Dropdown.Item>Publicaciones</Dropdown.Item>
            <Dropdown.Item>Ventas</Dropdown.Item>
            <Dropdown.Item>Publicidad</Dropdown.Item>
            <Dropdown.Item>Facturacion</Dropdown.Item>
            <Dropdown.Item>Mercado Shops</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Mi perfil</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Salir</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/categories">Categorias</Navbar.Link>
          <Navbar.Link href="/offers">Ofertas</Navbar.Link>
          <Navbar.Link href="/supermarket">Supermercado</Navbar.Link>
          <Navbar.Link href="/fashion">Moda</Navbar.Link>
          <Navbar.Link href="/help">Ayuda</Navbar.Link>
        </Navbar.Collapse>
        <Image
          src={
            "https://http2.mlstatic.com/storage/homes-korriban/assets/images/exhibitors/default_banner_menu.jpg"
          }
          width={250}
          height={50}
          alt="Navbar image"
          className="mr-3 h-6 sm:h-9 just rounded-lg "
        />
      </Navbar>
    </>
  );
}
