# challenge-amigo-secreto
Challenge para la formación OracleONE - Juego del amigo secreto

<h1>Amigo Secreto</h1>

Aplicación web simple para gestionar y sortear nombres de “amigo secreto”. Permite:

Agregar amigos a una lista.

Sortear un amigo al azar sin repetir.

Vaciar la lista manualmente o automáticamente cuando ya no quedan nombres.

Ver la lista actualizada en pantalla.

Estructura del proyecto
Código

´´´/
├─ index.html
├─ app.js
├─ style.css
└─ assets/
   ├─ amigo-secreto.png
   └─ ... (otros .png)
´´´
Requisitos
Navegador moderno actualizado (Chrome, Firefox, Edge, Safari).

No requiere instalación de dependencias, compilación ni servidor backend.

Cómo ejecutar el proyecto en tu computadora (ZIP)
1) Descargar el ZIP del repositorio
Desde GitHub: botón Code > Download ZIP.

Desde un enlace directo: descarga el archivo y guardalo en tu equipo.

2) Descomprimir
Extraé el ZIP en una carpeta local, por ejemplo: C:\Proyectos\amigo-secreto o ~/Proyectos/amigo-secreto.

3) Ejecutar en el navegador
Opción rápida sin servidor:

Abrí el archivo index.html con doble clic.

Verás la aplicación funcionando en tu navegador.

Opción recomendada con servidor local (evita problemas de rutas y caché):

Con Visual Studio Code y la extensión Live Server:

Abrí la carpeta del proyecto en VS Code.

Click derecho en index.html > Open with Live Server.

Con Python 3:

En terminal, dentro de la carpeta del proyecto:

macOS/Linux: python3 -m http.server 5500

Windows: py -m http.server 5500

Abrí http://localhost:5500 en el navegador.

Con Node.js (http-server):

Instalá globalmente: npm i -g http-server

Iniciá: http-server -p 5500

Abrí http://localhost:5500.

Uso
Agregar amigos

Escribí un nombre en el campo de texto.

Enter o botón Añadir para agregarlo.

La lista se actualiza debajo.

Validaciones:

Sin vacío: no permite agregar nombres vacíos.

Sin duplicados: no permite repetir exactamente el mismo texto.

Sortear amigo

Clic en Sortear amigo.

Se muestra el resultado en “Amigo sorteado”.

No se repite: el nombre sorteado se elimina de la lista restante.

Al agotarse los nombres, aparece un alert notificando que se vació la lista.

Vaciar lista

Clic en Vaciar Lista para limpiar la lista y el resultado del sorteo.

Aparece un alert confirmando la acción.

Detalles técnicos clave
Render de lista: la función actualizarListaAmigos():

Obtiene el <ul id="listaAmigos">.

Limpia con innerHTML = "".

Recorre el array amigos y agrega un <li> por nombre.

Sorteo sin repetición: al sortear, se elimina el elemento del array amigos con splice.

Accesibilidad básica: aria-live="polite" para el área de resultados y roles en listas.

Teclado: Enter en el input agrega el amigo automáticamente.

Posibles problemas y soluciones
No se ven imágenes del directorio assets

Verificá que la carpeta assets/ esté al mismo nivel que index.html.

Comprobá nombres y extensiones (respetá mayúsculas/minúsculas).

No funciona al abrir doble clic el index.html

Algunos navegadores restringen rutas locales.

Solución: usar un servidor local (Live Server, Python o http-server).

No aparecen alertas

Revisá si el navegador bloquea pop-ups. Permitilos para el archivo local o dominio localhost.

Cambios no se reflejan

Forzá recarga: Ctrl + F5 (Windows/Linux) o Cmd + Shift + R (macOS).

Borrá caché del navegador.

Errores en consola

Abrí las herramientas de desarrollador (F12) y revisá la pestaña Console.

Errores comunes: rutas mal escritas, archivo no encontrado, typos en IDs.

Personalización
Estilos: modificá style.css para cambiar tipografías, colores y espaciados.

Imágenes: reemplazá o agregá recursos en assets/.

Validaciones: podés adaptar la lógica para permitir nombres similares o agregar alias.

Roadmap sugerido
Persistencia local: guardar y leer la lista desde localStorage.

Importar/Exportar: permitir cargar amigos desde un .txt o .csv.

Accesibilidad ampliada: soporte de lector de pantalla y foco mejorado en alerts.

Animaciones: destacar el nombre sorteado con un efecto visual.

Soporte rápido
¿Se rompe al sortear sin lista? Ya está manejado: se muestra un alert y no ocurre nada.

¿Se agregan duplicados? No: se bloquean por igualdad exacta después de trim().

Licencia
Uso libre con fines educativos y personales. Si lo vas a distribuir o publicar, se recomienda incluir una licencia (por ejemplo, MIT) y los créditos correspondientes.
