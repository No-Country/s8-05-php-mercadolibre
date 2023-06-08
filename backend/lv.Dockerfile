FROM php:8.1-fpm

COPY composer*.json /var/www/

WORKDIR /var/www/

RUN apt-get update && apt-get install -y \
    build-essential \
    libzip-dev \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libonig-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    git \
    curl

RUN docker-php-ext-install pdo_mysql zip exif pcntl
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd

RUN curl -sS 'https://getcomposer.org/installer' | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer install --no-ansi --no-dev --no-interaction --no-progress --optimize-autoloader --no-scripts

#RUN chmod -R 777 storage bootstrap/cache

COPY . /var/www/

EXPOSE 9000

CMD ["php-fpm"]