# Guía de Configuración Local

Sigue estos pasos para configurar y ejecutar el proyecto **Team Rubén** en local para que funcione perfectamente las apis e interacciones externas.
---

## 1. Requisitos Previos

Este proyecto utiliza **Vite**, por lo que requiere **Node.js** para gestionar las dependencias y el servidor de desarrollo.

1. **Descargar Node.js:** Ve a [nodejs.org](https://nodejs.org/) y descarga la versión **LTS**.
2. **Instalación:** Sigue el asistente de instalación estándar.
3. **Verificación:** Abre una terminal y verifica la instalación:
   ```bash
   node -v
   npm -v
   ```

---

## 2. Configuración del Proyecto

Una vez instalado Node.js, prepara el entorno siguiendo estos pasos:

### Variables de Entorno
Crea un archivo llamado `.env` en la raíz del proyecto para que las funcionalidades de **EmailJS** operen correctamente:

```env
VITE_EMAILJS_SERVICE_ID=tu_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_id_aqui
```

### Instalación de Dependencias
Descarga todas las librerías necesarias ejecutando el siguiente comando en la terminal:
```bash
npm install
```

---

## 3. Ejecución del Servidor

Para ver la web en local ya perfectamente, debes ejecutar el siguiente comando, estando en la carpeta del proyecto:

1. **Lanzar servidor:**
   ```bash
   npm run dev
   ```
2. **Acceder a la Web:** 
   Abre tu navegador y entra en la dirección que indica la terminal (suele ser http://localhost...).
