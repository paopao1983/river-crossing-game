# Resumen del Proceso AI-DLC — Puzzle del Cruce del Río

Este documento consolida todos los artefactos producidos durante el flujo de trabajo AI-DLC para este proyecto.

---

## Fase 1 — Ideación

### Planteamiento del Problema

No existe una implementación simple y disponible en el navegador del clásico puzzle del Granjero, el Zorro, el Pollo y el Grano que permita a usuarios casuales jugar de forma interactiva sin instalar nada.

### Cliente Objetivo

Público general / usuarios casuales. No se requiere conocimiento técnico.

### Alcance

| Capacidad | Prioridad |
|---|---|
| Movimiento del bote — cargar/descargar personajes y cruzar el río | Obligatorio |
| Aplicación de restricciones — evitar pares peligrosos sin supervisión | Obligatorio |
| Detección de victoria — estado de éxito cuando todos llegan al otro banco | Obligatorio |
| Animaciones del bote y personajes | Deseable (post-MVP) |

**Fuera de alcance**: backend, cuentas de usuario, tabla de clasificación, múltiples variantes del puzzle, revelar solución, transiciones animadas.

### Decisión de Arranque

**ADELANTE.** El alcance es claro, la viabilidad está confirmada, sin bloqueadores.

---

## Fase 2 — Inicio

### Requisitos

**Funcionales**

| ID | Requisito |
|---|---|
| FR1.1 | Mostrar tablero: río, dos orillas, bote, cuatro personajes en la orilla izquierda al inicio |
| FR1.2 | El tablero refleja las posiciones actuales después de cada movimiento |
| FR2.1 | El usuario puede hacer clic en un personaje de la misma orilla que el bote para seleccionarlo |
| FR2.2 | El personaje seleccionado se distingue visualmente |
| FR2.3 | Clic en el bote para cargar al personaje seleccionado (máx. 1 pasajero + Granjero) |
| FR2.4 | Clic en el bote para cruzar — el Granjero siempre debe estar a bordo |
| FR2.5 | Los personajes se descargan en la orilla de destino al llegar |
| FR3.1 | Validar que ningún par peligroso quede sin supervisión después de cada movimiento |
| FR3.2 | Los movimientos inválidos se bloquean — el estado del juego no cambia |
| FR4.1 | Mostrar contador de movimientos con el total de cruces realizados |
| FR4.2 | El contador incrementa en 1 por cada cruce exitoso |
| FR5.1 | Detectar cuando los cuatro personajes están en la orilla derecha |
| FR5.2 | Mostrar mensaje "¡Lo resolviste!" con el conteo final de movimientos |
| FR5.3 | Botón de jugar de nuevo que reinicia el juego al estado inicial |

**No Funcionales**

| ID | Requisito |
|---|---|
| NFR1 | Funciona en las últimas 2 versiones de Chrome, Firefox, Edge, Safari — escritorio y móvil |
| NFR2 | Desplegable como un paquete estático independiente (HTML, CSS, JS) |
| NFR3 | Carga e interactivo en menos de 3 segundos en banda ancha |
| NFR4 | Todos los elementos interactivos son táctiles (mínimo 44×44px) |

### Decisiones de Arquitectura

**ADR-001 — HTML/CSS/JS puro, sin paso de compilación**
HTML, CSS y JavaScript planos. Sin framework, sin bundler. Se abre `index.html` directamente en el navegador.
- ✅ Configuración cero, máxima portabilidad
- ✅ Sin curva de aprendizaje de framework
- ❌ Sin tipado estático — mitigado por codebase pequeño y bien estructurado

**ADR-002 — Clase GameState dedicada**
Una única clase `GameState` gestiona todo el estado del juego y expone métodos de mutación explícitos. Fuente única de verdad.
- ✅ Límite claro de API entre lógica e interfaz
- ✅ Testeable de forma independiente sin DOM

**ADR-003 — Descomposición en tres componentes**
`GameEngine` / `UIRenderer` / `MoveCounter` como archivos separados con responsabilidades distintas.
- ✅ Cada componente tiene una única responsabilidad clara
- ✅ MoveCounter puede actualizarse sin disparar un re-render completo del tablero

### Plan de Entrega (Bolts)

**Bolt 1 — Esqueleto Funcional ⚡**
Shell estático HTML/CSS — tablero visible en el navegador, sin lógica JavaScript aún.
- Listo cuando: `index.html` abre y muestra el tablero correctamente en escritorio y móvil.

**Bolt 2 — Juego Completo 🎮**
Implementación completa: `game.js`, `ui.js`, `counter.js`, pruebas unitarias.
- Listo cuando: todos los requisitos FR pasan, 17/17 pruebas unitarias pasan, puzzle jugable de principio a fin.

---

## Fase 3 — Construcción

### Reglas de Negocio

| ID | Regla | Categoría |
|---|---|---|
| BR1.1 | El Granjero siempre debe operar el bote | restricción |
| BR1.2 | El bote lleva máximo 1 pasajero + Granjero | restricción |
| BR2.1 | Zorro + Pollo sin supervisión en el mismo banco → inválido | restricción |
| BR2.2 | Pollo + Grano sin supervisión en el mismo banco → inválido | restricción |
| BR3.1 | Solo se pueden seleccionar personajes en la orilla del bote | validación |
| BR4.1 | El contador incrementa en 1 por cada cruce exitoso | cálculo |
| BR5.1 | Victoria = los cuatro personajes en la orilla derecha | restricción |

### Archivos Entregados

| Archivo | Descripción |
|---|---|
| `index.html` | Estructura de la página y marcado del tablero |
| `style.css` | Estilos visuales completos, diseño responsive, toast de feedback |
| `game.js` | GameEngine — clase GameState, lógica de restricciones, detección de victoria |
| `counter.js` | MoveCounter — visualización del contador en el DOM |
| `ui.js` | UIRenderer — renderizado DOM, manejadores de eventos, overlay de victoria |
| `game.test.js` | 17 pruebas unitarias (runner integrado de Node 18+) |

### Resultados de Pruebas

| Suite | Pruebas | Resultado |
|---|---|---|
| Estado inicial | 2 | ✔ PASS |
| selectCharacter (BR3.1) | 4 | ✔ PASS |
| loadToBoat (BR1.2) | 2 | ✔ PASS |
| cross (BR1.1, BR2.1, BR2.2, BR4.1) | 4 | ✔ PASS |
| Detección de victoria (BR5.1) | 1 | ✔ PASS |
| unloadFromBoat | 3 | ✔ PASS |
| Reset | 1 | ✔ PASS |
| **Total** | **17** | **✔ 17/17 PASS** |

---

## Mejoras Post-MVP

| Mejora | Descripción |
|---|---|
| Toast de feedback | Los movimientos inválidos muestran un mensaje rojo explicando el motivo (ej. "¡El Zorro se comería al Pollo!") |
| Descargar del bote | Clic en el bote con pasajero → lo devuelve a la orilla |
| Reemplazo directo de pasajero | Seleccionar nuevo personaje → clic en bote → reemplaza al pasajero en un solo clic |

---

## Solución Óptima

El puzzle se puede resolver en un mínimo de **7 movimientos**:

| # | Acción |
|---|---|
| 1 | Granjero + Pollo → derecha |
| 2 | Granjero solo ← izquierda |
| 3 | Granjero + Zorro → derecha |
| 4 | Granjero + Pollo ← izquierda |
| 5 | Granjero + Grano → derecha |
| 6 | Granjero solo ← izquierda |
| 7 | Granjero + Pollo → derecha |

---

## Despliegue

Sitio estático — no requiere servidor. Alojado en GitHub Pages:
[https://paopao1983.github.io/river-crossing-game](https://paopao1983.github.io/river-crossing-game)
