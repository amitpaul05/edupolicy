FROM php:8.3-fpm

RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-configure gd \
    && docker-php-ext-install pdo pdo_mysql gd mbstring xml opcache \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/edupolicy
