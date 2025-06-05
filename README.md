# 🧹 LIMPIA CACHE — Extensión para limpiar datos del navegador

**LIMPIA CACHE** es una extensión de navegador para Google Chrome y Microsoft Edge que permite limpiar rápidamente todos los datos del sitio actual con un solo clic. Ideal para desarrolladores, testers o usuarios avanzados que necesitan evitar problemas de caché o cookies obsoletos.

---

## 🚀 Características

- 🔄 Limpia **caché**, **cookies**, **IndexedDB**, **localStorage**, **sessionStorage** y **service workers**.
- 🧠 Detecta automáticamente el dominio activo.
- ⚡ Extremadamente rápida y fácil de usar.
- 🔐 Sólo actúa sobre el **sitio web actual**, no sobre todos los dominios.

---

## 🛠 Instalación (modo desarrollador)

1. Descarga este repositorio o el archivo `.zip` de la extensión.
2. Ve a `chrome://extensions/` o `edge://extensions/`.
3. Activa **Modo desarrollador**.
4. Haz clic en **"Cargar descomprimida"**.
5. Selecciona la carpeta del proyecto.
6. Haz clic en el ícono de la extensión en la barra superior.

---

## 📁 Archivos del proyecto

- `manifest.json`: Manifest V3 con permisos de navegación y pestañas.
- `popup.html`: Interfaz con botón y librería SweetAlert2.
- `popup.js`: Lógica de limpieza + recarga con alerta elegante.
- `background.js`: Listener básico para inicialización.
- `icon.png`: Ícono de 128x128 px para Web Store.

---

## ✨ Créditos
- Compatible con navegadores basados en Chromium.

---

## 📄 Licencia

MIT — Libre de usar y modificar.
