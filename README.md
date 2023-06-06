<a name="top"></a>

[![Contributors][contributors-shield]][contributors-url]

<br />
<div align="center">
  <a href="https://mercado-country.vercel.app/">
    <img src="https://i.ibb.co/hfdCmG2/logo.png" alt="Logo" height="120">
  </a>

  <h3 align="center">Lo que necesitas, lo encontrás con nosotros</h3>

  <p align="center">
    <br />
    <a href="https://github.com/No-Country/s8-05-php-mercadolibre/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/No-Country/s8-05-php-mercadolibre/issues">Report Bug</a>
    ·
    <a href="https://github.com/No-Country/s8-05-php-mercadolibre/issues">Request Feature</a>
  </p>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Indice / Tabla de Contenidos</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del proyecto</a>
      <ul>
        <li><a href="#tecnologias-usadas">Tecnologias usadas</a></li>
      </ul>
    </li>
    <li>
      <a href="#empezando">Empezando</a>
      <ul>
        <li><a href="#requisitos">Requisitos</a></li>
        <li><a href="#instalacion">Instalacion</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contribuyentes">Contribuyentes</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Acerca del proyecto

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

MercadoCountry es una adaptación del gran e-commerce conocido a nivel internacional: **MercadoLibre**

Con nuestra aplicacion podrás
* Ver nuestros articulos de compra y venta
* No tendrás que moverte desde el sofá de tu casa y comprar todo lo que necesites
* Tendrás un seguimiento de tu compra en tiempo real
* Metodos de pagos totalmente seguros y confiables

¡Y mucho más!

### Tecnologias usadas

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Tailwindcss][Tailwindcss.com]][Tailwindcss-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![MySQL][MySQL.com]][MySQL-url]
* [![Figma][Figma.com]][Figma-url]
* [![Postman][Postman.com]][Postman-url]
* [![Github][Github.com]][Github-url]
* [![Docker][Docker.com]][Docker-url]
* [![Vercel][Vercel.com]][Vercel-url]
* [![DigitalOcean][DigitalOcean.com]][DigitalOcean-url]

<!-- GETTING STARTED -->
## Empezando

Para comenzar a utilizar éste proyecto en tu máquina local debes seguir las siguientes instrucciones y cumplir con los requisitos mínimos

### Requisitos

1) NPM -> [Download](https://nodejs.org/es)
2) PHP -> [Download](https://www.php.net/downloads.php)
3) Composer -> [Download](https://getcomposer.org/download/)
4) MySQL -> [Download](https://mysql.com/downloads/)
5) GIT -> [Download](https://git-scm.com/downloads)
6) Docker (opcional) -> [Download](https://www.docker.com/)

### Instalacion

_Todos los comandos que se veran a continuación deberán ser ejecutados en el root del proyecto descargado en tu maquina local_

1. Clona el repositorio
   ```bash
    git clone https://github.com/No-Country/s8-05-php-mercadolibre.git
   ```
2. Instalar las dependencias de NPM
    ```sh
      $ cd frontend/
    ```
    ```sh
      $ npm install
    ```
3. Inicializa tu servidor local del frontend
    ```sh
      $ npm run dev
    ```

_Bien, hasta el momento hemos logrado levantar nuestra aplicación frontend, pero... ¿El servidor de backend?_

1. Instalar las dependencias de Composer
    ```bash
      $ cd backend/
    ```
    ```bash
      $ composer install
    ```
2. Configuramos las variables de entorno y generamos nuestra API_KEY
    ```bash
      $ cp .env.example .env && php artisan key:generate
    ```
3. Comprueba que las credenciales de MySQL coincidan con las siguientes variables de entorno **(.env)**
    ```yml
      DB_CONNECTION=mysql
      DB_HOST=your_host_database
      DB_PORT=3306
      DB_DATABASE=mercadocountry
      DB_USERNAME=your_user
      DB_PASSWORD=your_password
    ```
4. Corremos nuestra migraciones de base de datos y generamos datos falsos
    ```bash
      $ php artisan migrate --seed
    ```
5. Inicializamos nuestro servidor de Backend
    ```bash
      $ php artisan serve
    ```

<!-- USAGE EXAMPLES -->
## Uso

Para utilizar la aplicación, solo basta con entrar a la URL que te proporciono el servidor de **Npm**

_[http://localhost:3000/](http://localhost:3000/)_

<!-- ROADMAP -->
## Roadmap

Puedes mirar nuestras [open issues](https://github.com/No-Country/s8-05-php-mercadolibre/issues) para conocer el paso a paso de nuestro desarrollo de la mano de nuestra grandiosa Product Manager

## Contribuyentes

#### Equipo de Backend
* [![linkedin-shield-alansanchez]][linkedin-alansanchez-url] [![Portfolio]][portfolio-alansanchez] [![Github]][github-alansanchez]  <br>
* [![linkedin-shield-luisfelipe]][linkedin-luisfelipe-url] [![Portfolio]][portfolio-luisfelipe] [![Github]][github-luisfelipe]  <br>
* [![linkedin-shield-lorenzo]][linkedin-lorenzo-url] [![Github]][github-lorenzo]  <br>
* [![linkedin-shield-rafael]][linkedin-rafael-url] [![Github]][github-rafael]  <br>

#### Equipo de Frontend
* [![linkedin-shield-felipe]][linkedin-felipe-url] [![Portfolio]][portfolio-felipe] [![Github]][github-felipe]   <br>
* [![linkedin-shield-yennifer]][linkedin-yennifer-url] [![Github]][github-yennifer]  <br>

### Equipo de Design
* [![linkedin-shield-ailin]][linkedin-ailin-url] [![Behance]][behance-ailin] [![Github]][github-ailin]  <br>
* [![linkedin-shield-daniela]][linkedin-daniela-url] [![Behance]][behance-daniela] [![Github]][github-daniela]  <br>
* [![linkedin-shield-elizabeth]][linkedin-elizabeth-url] [![Behance]][behance-elizabeth] [![Github]][github-elizabeth]  <br>

### Product Manager
* [![linkedin-shield-natalia]][linkedin-natalia-url] [![Github]][github-natalia]  <br>

<!-- ACKNOWLEDGMENTS -->
## Agradecimientos

Queremos darles las gracias a [No-Country](https://nocountry.tech/) por darnos espacio en su seleccionado para llevar a cabo este maravilloso proyecto enfocado a un entorno del mundo laboral IT real.

<p align="right">((<a href="#top"> Regresar al comienzo </a>))</p>

<!-- ENLACES DE REFERENCIAS -->

[Portfolio]: https://img.shields.io/badge/Portfolio-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white
[Behance]: https://img.shields.io/badge/Behance-1769ff?style=for-the-badge&logo=behance&logoColor=white
[GitHub]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white

[linkedin-shield-alansanchez]: https://img.shields.io/badge/-Alan_Sanchez-black.svg?style=for-the-badge&logo=linkedin&color=0A66C2
[linkedin-alansanchez-url]: https://linkedin.com/in/alansanchez96
[portfolio-alansanchez]: https://dev-alansan.netlify.app/
[github-alansanchez]: https://github.com/alansanchez96

[linkedin-shield-luisfelipe]: https://img.shields.io/badge/-Luis_Felipe-black.svg?style=for-the-badge&logo=linkedin&color=0A66C2
[linkedin-luisfelipe-url]: https://www.linkedin.com/in/luis-felipe-fern%C3%A1ndez-betancur-474639267/
[portfolio-luisfelipe]: https://dev-alansan.netlify.app/
[github-luisfelipe]: https://github.com/luisfelipe1953

[linkedin-shield-lorenzo]: https://img.shields.io/badge/-Lorenzo_Rueda-black.svg?style=for-the-badge&logo=linkedin&color=0A66C2
[linkedin-lorenzo-url]: https://www.linkedin.com/in/lorenzo-rueda-582758263/
[github-lorenzo]: https://github.com/zightcode

[linkedin-shield-rafael]: https://img.shields.io/badge/-Rafael_Lopez-black.svg?style=for-the-badge&logo=linkedin&color=0A66C2
[linkedin-rafael-url]: https://www.linkedin.com/in/rafael-lopez-942610247/
[github-rafael]: https://github.com/raffarraffa

[linkedin-shield-felipe]: https://img.shields.io/badge/-Felipe_Suarez-black.svg?style=for-the-badge&logo=linkedin&color=0A66C2
[linkedin-felipe-url]: https://www.linkedin.com/in/suarez-felipe/
[portfolio-felipe]: https://felipe-suarez.vercel.app/es
[github-felipe]: https://github.com/Felipe-Suarez

[linkedin-shield-yennifer]: https://img.shields.io/badge/-Yenifer_Ramirez-black.svg?style=for-the-badge&logo=linkedin&color=0A66C2
[linkedin-yennifer-url]: https://www.linkedin.com/in/yeniferrosana/
[portfolio-yennifer]: https://felipe-suarez.vercel.app/es
[github-yennifer]: https://github.com/yeniferrosana

[linkedin-shield-ailin]: https://img.shields.io/badge/-Ailin_Castillo-black.svg?style=for-the-badge&logo=linkedin&color=0A66C2
[linkedin-ailin-url]: https://www.linkedin.com/in/ailin-castillo/
[behance-ailin]: http://www.behance.net/ailincastillo1
[github-ailin]: https://github.com/Aili9381

[linkedin-shield-daniela]: https://img.shields.io/badge/-Daniela_Perea-black.svg?style=for-the-badge&logo=linkedin&color=0A66C2
[linkedin-daniela-url]: https://www.linkedin.com/in/daniela-i-perea/
[behance-daniela]: https://www.behance.net/danielaiperea
[github-daniela]: https://github.com/DanielaPerea7

[linkedin-shield-elizabeth]: https://img.shields.io/badge/-Elizabeth_Leon-black.svg?style=for-the-badge&logo=linkedin&color=0A66C2
[linkedin-elizabeth-url]: https://www.linkedin.com/in/elizabethleonperez/
[behance-elizabeth]: https://www.behance.net/elizabethleonperez
[github-elizabeth]: https://github.com/ElizabethLeonPerez

[linkedin-shield-natalia]: https://img.shields.io/badge/-Natalia_Giraldo-black.svg?style=for-the-badge&logo=linkedin&color=0A66C2
[linkedin-natalia-url]: https://www.linkedin.com/in/nataliagiraldoprojectmanagerscrummaster/
[github-natalia]: https://github.com/naty2023PM

<!-- Others -->

[contributors-shield]: https://img.shields.io/badge/Contribuidores-10-orange?style=for-the-badge&logo=appveyor
[contributors-url]: https://github.com/No-Country/s8-05-php-mercadolibre/graphs/contributors

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com

[Docker.com]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://docker.com

[TailwindCSS.com]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwindcss-url]: https://tailwindcss.com

[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com

[Vercel.com]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com

[DigitalOcean.com]: https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white
[DigitalOcean-url]: https://www.digitalocean.com/

[Postman.com]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white
[Postman-url]: https://www.postman.com/

[Figma.com]: https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white
[Figma-url]: https://www.figma.com/file/wF4p6DiOT0dWbqnL9KOVf9/S8-05-php?type=design&node-id=0-1&t=JyqdyChHdPikGECH-0

[GitHub.com]: https://img.shields.io/badge/github_proyects-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[Github-url]: https://github.com/orgs/No-Country/projects/36

[MySQL.com]: https://camo.githubusercontent.com/b46e59b09c063a31380646688a68018381767a7a206547c93f896df4643671e9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d2532333030303030662e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465
[MySQL-url]: https://www.mysql.com/