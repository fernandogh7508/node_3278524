# Comandos
``git --version``
``node -v``
``npm -v``

## Inicializar un proyecto
``npm init -y``

## manejo de git
``git init``


``git add .``

``git commit -m "v1"``


``git branch -M master``

``git remote add origin https://github.com/fernandogh7508/node_3278524.gitcls``
 

# 📁Estructura profesionales de una API en Node.js
api-node
    |-src **Aquí vive todo el codigo real del proyecto**
        |-config **Configuraciones globales**
        |-controllers **Controla las peticiones HTTP**
        |-middlewares **intermediarios de seguridad y validación**
        |-models **Representa las tablas de la base de datos**
        |-routes **Define las URLs de la API**
        |-services **Lógica del negocio**
        |-utils **funciones reutilizables**
        |-app.js **configuración de la aplicación**
        |-server.js **Punto de arranque**
