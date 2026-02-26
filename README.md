# Angular 21 Employee Management Application

A modern Angular 21 application demonstrating employee management with routing and data visualization.

## Quick Start

```bash
npm install
npm start
```

Navigate to [http://localhost:4200](http://localhost:4200)

## Tech Stack

- **Angular 21.2.0** - Latest stable release
- **TypeScript 5.9.3** - Strict mode enabled
- **RxJS 7.8.1** - Reactive programming
- **Signals** - Modern state management
- **Standalone Components** - No NgModules required

## Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run E2E tests
npm run e2e
```

## Application Routes

- `/employees` - Employee list view
- `/employees/:id` - Employee detail view
- `/statistics` - Employee statistics dashboard

## Project Structure

```
src/app/
├── employee/
│   ├── employee-loader.service.ts
│   ├── employee-list/
│   ├── employee-detail/
│   └── employee-statistics/
├── shared/
│   └── employee-header/
├── app.component.ts
├── app.routes.ts
└── main.ts
```

## Development

This project uses Angular 21 with standalone components, signals, and modern routing patterns.

## License

MIT
