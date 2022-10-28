

<h1 align="center">TECHZAZ BOT<br></h1>
<p align="center">
<img src="https://github.com/Techzaz/Zazbot/tree/master/XeonMedia/video/tech.gif" alt="animated" width="540" height="280" />
</p>

<p align="center">
TECHZAZ BOT Multi Device is a automated whatsapp bot created by <a href="https://github.com/Techzaz/Zazbot/" target="_blank">Techzaz</a> using <a href="https://github.com/adiwajshing/Baileys" target="_blank">Baileys</a> and <a href="https://github.com/nodejs" target="_blank">Nodejs</a>. Dont forget to give a star bro.
</p>

-------

## ```Connect With Me```
<p align="center">
<a aria-label="Chat on WhatsApp" href="https://wa.me/923184365151"> <img alt="Chat on WhatsApp" src="https://scontent.fskt2-1.fna.fbcdn.net/v/t39.8562-6/302524815_3448899778679909_2843186333341006023_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6825c5&_nc_ohc=5X9amPP0TvUAX90iQl-&_nc_ht=scontent.fskt2-1.fna&oh=00_AfCRurn5N9GIHWmyUp1A6rxX4rPCNWjak0ptX7xzxP2T8g&oe=6360964F" />
      
</p>

# Setup For Deployment 👇

- FORK THE REPOSITORY [Here](https://github.com/Techzaz/Zazbot/fork)

## `Scan QR Code For Session`
[![Cheems Bot](https://repl.it/badge/github/quiec/whatsasena)](https://replit.com/@DGXeon/Cheems-Bot-Multi-Device-Qr-Code-Generator?output%20only=1&lite=1#index.js)

## `SETTINGS`

- CHANGE OWNER NUMBER VCARD [Here](/blob/master/settings.js#L58)
- CHANGE OWNER NUMBER MENU [Here](https://github.com/Techzaz/Zazbot/blob/master/settings.js#L65)
- CHANGE OWNER NUMBER TAG [Here](https://github.com/Techzaz/Zazbot/blob/master/settings.js#L66)
- CHANGE OWNER NAME [Here](https://github.com/Techzaz/Zazbot/blob/master/settings.js#L59)
- CHANGE BOT NAME [Here](https://github.com/Techzaz/Zazbot//blob/https://github.com/Techzaz/Zazbot/master/settings.js#L67)

## ` BUILDPACKS`

```
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Techzaz/Zazbot/)

# Install Manually 👇
## `Requirements`
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip)
* [Libwebp](https://developers.google.com/speed/webp/download)
* Any text editor
## `Clone Repo & Installation dependencies`
```bash
git clone https://github.com/Techzaz/Zazbot.git
cd Zazbot

npm start
```
## `For Termux/Ssh/Ubuntu`
```bash
apt update
apt upgrade
pkg update && pkg upgrade
pkg install bash
pkg install libwebp
pkg install git -y
pkg install nodejs -y 
pkg install ffmpeg -y 
pkg install wget
pkg install imagemagick -y
git clone https://github.com/Techzaz/Zazbot/
cd Zazbot
npm start
```
## `For VPS`
```bash
apt install nodejs 
apt install git 
apt apt install ffmpeg 
apt apt install libwebp 
apt apt install imagrmagick
apt install bash
git clone https://github.com/Techzaz/Zazbot/
cd Zazbot
npm start
```
## `For 24/7 Activation (Termux)`
```bash
npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
```
