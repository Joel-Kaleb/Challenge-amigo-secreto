# 🎁 Amigo Secreto - Sorteo Aleatorio

Un proyecto web interactivo para realizar sorteos de amigo secreto de manera sencilla y divertida.

## 📋 Descripción

Esta aplicación permite agregar nombres a una lista y realizar un sorteo aleatorio para determinar quién será el "amigo secreto". Es perfecta para organizar intercambios de regalos en oficinas, familias o grupos de amigos.

## ✨ Características

- ✅ **Agregar amigos**: Añade nombres a la lista de participantes
- ✅ **Validación de entrada**: Previene agregar nombres vacíos
- ✅ **Lista dinámica**: Visualiza todos los participantes en tiempo real
- ✅ **Sorteo aleatorio**: Selecciona un ganador de forma imparcial
- ✅ **Interfaz limpia**: Diseño simple y fácil de usar

## 🚀 Funcionalidades

### Agregar Participantes
- Ingresa el nombre en el campo de texto
- Presiona "Adicionar" o Enter para agregarlo a la lista
- Los nombres vacíos o solo con espacios son rechazados

### Realizar Sorteo
- Presiona "Sortear amigo" para seleccionar un ganador aleatorio
- El resultado se muestra claramente en pantalla
- La lista se limpia automáticamente después del sorteo

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura de la página
- **CSS3**: Estilos y diseño responsive
- **JavaScript ES6**: Lógica de programación y manipulación del DOM

## 📁 Estructura del Proyecto

```
amigo-secreto/
│
├── assets              # Carpeta que contiene recursos visuales
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── app.js             # Lógica de JavaScript
└── README.md          # Este archivo
```

## 🎯 Cómo Usar

1. **Clonar o descargar** el proyecto
2. **Abrir** `index.html` en tu navegador web
3. **Agregar nombres** de los participantes uno por uno
4. **Presionar "Sortear amigo"** cuando tengas todos los nombres
5. **¡Ver el resultado!** del sorteo aleatorio

## 💻 Instalación

No requiere instalación. Simplemente:

```bash
# Clonar el repositorio
git clone [tu-repositorio-url]

# Navegar al directorio
cd amigo-secreto

# Abrir en el navegador
# Hacer doble clic en index.html
```

## 🧪 Ejemplo de Uso

1. Escribe "Ana" y presiona "Adicionar"
2. Escribe "Carlos" y presiona "Adicionar"  
3. Escribe "María" y presiona "Adicionar"
4. Presiona "Sortear amigo"
5. El sistema mostrará: "El amigo secreto sorteado es: Carlos"

## 🎨 Capturas de Pantalla

*(Aquí podrías agregar imágenes de tu aplicación funcionando)*

## 🔧 Funciones Principales

### `agregarAmigo()`
- Valida la entrada del usuario
- Agrega nombres al array de amigos
- Actualiza la lista visual

### `sortearAmigo()`
- Verifica que hay participantes
- Genera un índice aleatorio
- Muestra el resultado del sorteo

### `agregarAmigoLista()`
- Itera sobre el array de amigos
- Genera elementos HTML dinámicamente
- Actualiza la lista en el DOM

## 🎯 Objetivos de Aprendizaje

Este proyecto me ayudó a practicar:

- ✅ Manipulación del DOM con JavaScript
- ✅ Validación de formularios
- ✅ Uso de arrays y bucles
- ✅ Generación de números aleatorios
- ✅ Eventos y funciones
- ✅ Buenas prácticas de programación

## 👨‍💻 Autor

**[Joel Kaleb Moreno Valenzuela]**
- GitHub: [@Joel-Kaleb](https://github.com/Joel-Kaleb)
- Email: joelkalebmoreno@gmail.com

## 🙏 Agradecimientos

- Al programa Oracle Next Education

---

⭐ **¡Si te gustó este proyecto, no olvides darle una estrella!** ⭐