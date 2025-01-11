# Plugin Boilerplate for LogLayer

This is a template for creating plugins for use with [LogLayer](https://loglayer.dev).

See the [Creating Plugins](https://loglayer.dev/plugins/creating-plugins.html) documentation
for more information.

## Installation

```bash
npm install
```

## Run Tests

```bash
npm run test
```

## Lint + Fix

Uses [Biome](https://biomejs.dev/) for linting and formatting.

```bash
npm run lint
```

## Build

Uses [tsup](https://github.com/egoist/tsup) to build commonjs and esm versions.

```bash
npm run build
```

## Project Structure

```plaintext
.
├── src/
│   ├── __tests__/                # Test files
│   ├── index.ts                  # Plugin code
```
