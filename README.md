# challenge-amigo-secreto
Challenge para la formación OracleONE - Juego del amigo secreto

# Amigo Secreto

Aplicación web simple para gestionar y sortear nombres de “amigo secreto”. Permite:
- Agregar amigos a una lista.
- Sortear un amigo al azar sin repetir.
- Vaciar la lista manualmente o automáticamente cuando ya no quedan nombres.
- Ver la lista actualizada en pantalla. 

---

## 📂 Estructura del proyecto

/  ├─ index.html 
   ├─ app.js 
   ├─ style.css 
   └─ assets/ 
      ├─ amigo-secreto.png 
      └─ play_circle_outline.png

---

## 📋 Requisitos

- Navegador moderno actualizado (Chrome, Firefox, Edge, Safari).
- No requiere instalación de dependencias, compilación ni servidor backend.

---

## 🚀 Cómo ejecutar el proyecto en tu computadora (ZIP)


### 1️⃣ Descargar el ZIP del repositorio
- **Desde GitHub:** botón `Code` > **Download ZIP**.
- **Desde un enlace directo:** descargar el archivo y guardarlo en el equipo.

### 2️⃣ Descomprimir
- **Extraer el ZIP** en una carpeta local, por ejemplo:
  - Windows: `C:\Proyectos\amigo-secreto`
  - macOS/Linux: `~/Proyectos/amigo-secreto`

### 3️⃣ Ejecutar en el navegador

#### Opción rápida (sin servidor)
- **Abrir el archivo `index.html`** con doble clic.
- La aplicación debería funcionar sin problemas en el navegador.

#### Opción recomendada (con servidor local)
- Se evitan problemas de rutas y caché.

- **Con Visual Studio Code y Live Server**:
  1. Abrir la carpeta del proyecto en VS Code.
  2. Instalar la extensión "Live Server" de ritwickdey.
  3. Reiniciar VS Code para que los cambios surtan efecto.
  4. Click derecho en `index.html` > **Open with Live Server**.
  5. Abrir http://localhost:5500 en el navegador si el paso 2 no funciona.


## 👨🏻‍🔧 Uso

### 1️⃣ Agregar amigos

   - Escribir un nombre en el campo de texto.
   - Pulsar Enter o el botón Añadir.
   - La lista se actualiza debajo.
   - Validaciones:
      **No permite nombres vacíos.**
      **No permite duplicados exactos.**

### 2️⃣ Sortear amigo

   - Clic en Sortear amigo.
   - Se muestra el resultado en “Amigo sorteado”.
   - El nombre sorteado se elimina de la lista.
   - Al agotarse los nombres, aparece un alert notificando que la lista se vació.

### 3️⃣ Vaciar lista

   - Clic en Vaciar Lista para limpiar la lista y el resultado del sorteo.
   - Aparece un alert confirmando la acción.


### 🚩 Posibles problemas y soluciones:


#### No se ven imágenes del directorio assets

   - Verificar que la carpeta assets/ esté al mismo nivel que index.html.
   - Comprobar nombres y extensiones (respetar mayúsculas/minúsculas).

#### No funciona al abrir doble clic el index.html

   - En ocasiones, algunos navegadores restringen rutas locales.
   - Solución: usar un servidor local ==> Live Server con VS Code (descripto más arriba en detalle como opción recomendada) o http-server.

#### No aparecen alertas

   - Revisar si el navegador bloquea pop-ups. Permitirlos para el archivo local o dominio localhost.

#### Cambios no se reflejan

   - Forzar recarga: Ctrl + F5 (Windows/Linux) o Cmd + Shift + R (macOS).
   - Borrar caché del navegador.

#### Errores en consola

   - Abrir las herramientas de desarrollador (F12) y revisar la pestaña Console.
   - Errores comunes: rutas mal escritas o archivos no encontrados.