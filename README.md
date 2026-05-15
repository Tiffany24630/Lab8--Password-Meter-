# Password Strength Meter

## Instalación

```bash
bun install
```

## Ejecutar proyecto

```bash
cd password-meter
bun run dev
```

## Ejecutar tests

```bash
bun test
```

## Flujo TDD utilizado

1. Se escribieron primero los tests unitarios para la lógica de fortaleza.
2. Los tests fallaron inicialmente.
3. Se implementó la función `calculatePasswordStrength`.
4. Luego se escribieron los tests del componente React.
5. Finalmente se implementó el componente hasta hacer pasar todos los tests.

El proyecto sigue el ciclo Red → Green → Refactor.
