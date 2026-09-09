# 🩺 Licenciatura en Enfermería — ISUAN

![Estado](https://img.shields.io/badge/estado-activo-brightgreen)
![Tecnología](https://img.shields.io/badge/tecnología-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)
![Deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-black)
![Tipo](https://img.shields.io/badge/tipo-Landing%20Page%20%2F%20Programa%20Académico-blue)

Landing page específica de captación para la **Licenciatura en Enfermería** del **Instituto Superior Universitario Amado Nervo (ISUAN)**. A diferencia del sitio institucional principal, esta página está enfocada 100% en un solo programa: presenta el **plan de estudios completo (8 semestres)**, información de R.V.O.E. y un formulario de registro para captar prospectos interesados específicamente en esta carrera.

🔗 **Demo en vivo:** [https://giomerida.github.io/isuan/](https://giomerida.github.io/isuan/)

---

## 📋 Tabla de Contenidos

- [Sobre el proyecto](#-sobre-el-proyecto)
- [Capturas de pantalla](#-capturas-de-pantalla)
- [Tecnologías utilizadas](#-tecnologías-utilizadas)
- [Instalación y uso](#-instalación-y-uso)
- [Plan de estudios](#-plan-de-estudios)
- [Formulario de registro](#-formulario-de-registro)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Roadmap](#-roadmap)
- [Autor](#-autor)

---

## 📌 Sobre el proyecto

Esta página forma parte de la estrategia de captación de ISUAN, funcionando como una **landing page de programa específico** (_program-specific landing page_), un patrón común en marketing educativo donde cada carrera cuenta con su propia página de aterrizaje optimizada para conversión — en este caso, para campañas dirigidas exclusivamente a la **Licenciatura en Enfermería**.

**Datos clave del programa mostrados en el sitio:**

| Dato                        | Valor                      |
| --------------------------- | -------------------------- |
| Reconocimiento oficial      | R.V.O.E. Federal 2022-2023 |
| Inicio de ciclo             | Febrero 2026               |
| Duración                    | 8 semestres                |
| Campus de Centro de Trabajo | Chiapa de Corzo            |
| Clave                       | 07PPL2420E                 |
| C.V.E.                      | DSP 4500Z                  |

---

## 📸 Capturas de pantalla

### 🏠 Encabezado con logo institucional

![Header](img/capturas/captura%20header.png)

### 📖 Plan de estudios por semestre

![Plan de estudios](img/capturas/captura%20semestres.png)

### 📝 Formulario de registro

![Formulario](img/capturas/captura%20formularios.png)

---

## 🛠️ Tecnologías utilizadas

| Tecnología               | Uso                                                            |
| ------------------------ | -------------------------------------------------------------- |
| **HTML5**                | Estructura semántica del contenido curricular                  |
| **CSS3**                 | Estilos, diseño responsivo y presentación por semestre         |
| **JavaScript (Vanilla)** | Validación del formulario y generación del mensaje de WhatsApp |
| **GitHub Pages**         | Hosting y despliegue continuo                                  |

---

## 🚀 Instalación y uso

Este proyecto no requiere instalación de dependencias ni backend. Solo clona el repositorio y abre el archivo principal.

### Clonar el repositorio

```bash
git clone https://github.com/giomerida/isuan.git
cd isuan
```

### Ejecutar localmente

```bash
# Con Python 3
python -m http.server 8080

# Con Node.js
npx serve .
```

Visita `http://localhost:8080` en tu navegador.

### Despliegue en GitHub Pages

El sitio está listo para desplegarse directamente en GitHub Pages activando esta opción en la configuración del repositorio.

---

## 📖 Plan de estudios

La malla curricular completa se presenta organizada por semestre, con fotografía ilustrativa alternada cada dos bloques:

| Semestre | Materias destacadas                                                                                                                          |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **1º**   | Legislación en Enfermería · Bioquímica y Nutrición · Filosofía de la Enfermería · Anatomía y Fisiología I · Inglés I                         |
| **2º**   | Fundamentos de Enfermería · Historia de la Enfermería en México · Epidemiología y Saneamiento · Anatomía y Fisiología II · Inglés II         |
| **3º**   | Enfermería Clínica · Medicina Preventiva y Curativa · Farmacología · Biología y Fisiología · Inglés III                                      |
| **4º**   | Educación para la Salud · Enfermería de la Mujer · Enfermería Materno-Neonatal · Salud Mental · Inglés IV                                    |
| **5º**   | Terapéutica para el Cuidado Holístico · Enfermería Pediátrica · Medicina de Urgencias · Lengua Indígena Tzeltal I                            |
| **6º**   | Enfermería Médico Quirúrgica · Enfermería del Adulto y Adulto Mayor · Gerencia de Servicios de Salud · Lenguas Tzotzil I / Tzeltal II        |
| **7º**   | Gestión del Cuidado · Enfermería Tanatológica · Enfermería Geriátrica · Enfermería Comunitaria · Lengua Tzotzil II                           |
| **8º**   | Enfermería Comunitaria · Gerencia Salud y Enfermería · Administración en Investigación Clínica · Seminario de Titulación · Lengua Tzotzil II |

> 🌐 El plan de estudios incluye formación en **lenguas indígenas** (Tzeltal y Tzotzil) a partir del 5º semestre, reflejando el contexto cultural de la región de Chiapas.

---

## 📝 Formulario de registro

Formulario simplificado enfocado en conversión rápida, con los siguientes campos:

- Nombre completo
- Correo electrónico
- Teléfono / WhatsApp
- Mensaje / comentario _(opcional)_

Al enviarse, se puede complementar con un enlace directo de contacto por WhatsApp con mensaje precargado ("Hola, me gustaría recibir más información").

**Datos de contacto:**

- 📧 Correo: [admisisiones@isan.mx](mailto:admisisiones@isan.mx)
- 📱 WhatsApp: [+52 961 138 9301](https://wa.me/5219611389301)
- 📍 Domicilio: 3a. Oriente Norte 840, Col. Centro, Tuxtla Gutiérrez, Chiapas

---

## 📁 Estructura del proyecto

```
isuan/
├── index.html                     # Página principal (landing de Enfermería)
├── img/
│   ├── isuan logo.png             # Logotipo institucional
│   ├── img_semestre_2.png         # Fotografía — bloque semestre 2
│   ├── img_semestre_4.png         # Fotografía — bloque semestre 4
│   ├── img_semestre_6.png         # Fotografía — bloque semestre 6
│   ├── img_semestre_8.png         # Fotografía — bloque semestre 8
│   └── giodev_blk.png             # Logo del desarrollador (footer)
├── css/                            # (Sugerido) Hojas de estilo
├── js/                              # (Sugerido) Lógica de formulario y WhatsApp
└── README.md                       # Este archivo
```

---

## 🗺️ Roadmap

- [ ] Conectar el formulario a un backend real (correo automático o CRM de admisiones)
- [ ] Replicar el mismo modelo de landing page para otras licenciaturas (Derecho, Administración, Ingeniería en Sistemas, etc.)
- [ ] Agregar sección de costos y becas disponibles
- [ ] Incluir video institucional o testimonios de estudiantes de Enfermería
- [ ] Agregar contador regresivo para el inicio de ciclo (Febrero 2026)
- [ ] Optimizar imágenes propias (compresión y formatos modernos como WebP)

---

## 👨‍💻 Autor

Desarrollado por **Giodev — Alexis Giovanni Mérida Arévalo**

- 🌐 Sitio web: [giomerida.dev](https://www.giomerida.dev)
- 🐙 GitHub: [@giomerida](https://github.com/giomerida)

---

<div align="center">

© 2026 **Instituto Superior Universitario Amado Nervo** · Licenciatura en Enfermería
Desarrollado por **GioDev**

</div>
