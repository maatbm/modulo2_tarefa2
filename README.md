# React Movie Search Application

This project is a React-based web application that allows users to search and filter a list of movies.

The application provides a user-friendly interface for browsing a collection of movies. It leverages modern web technologies and best practices to deliver a responsive and efficient user experience. The core functionality includes a search bar component that enables users to filter the movie list in real-time.

Key features of this application include:
- A responsive user interface built with React
- Real-time search functionality
- Movie data stored in a JSON format
- TypeScript for enhanced type safety and developer experience
- Vite as the build tool for fast development and optimized production builds

## Repository Structure

```
.
├── public
│   └── movies.json
├── src
│   ├── components
│   │   ├── movieTable
│   │   │   ├── movieTable.tsx
│   │   │   └── style.css
│   │   └── searchBar
│   │       ├── searchBar.tsx
│   │       └── searchBarStyle.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

Key Files:
- `src/main.tsx`: The entry point of the application
- `src/App.tsx`: The main application component
- `src/components/searchBar/searchBar.tsx`: The search bar component
- `public/movies.json`: JSON file containing movie data
- `vite.config.ts`: Configuration file for Vite
- `package.json`: Project metadata and dependencies
- `tsconfig.json`: TypeScript configuration

## Usage Instructions

### Installation

Prerequisites:
- Node.js (version 14 or higher)
- npm (version 6 or higher)

To install the application, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Getting Started

To run the application in development mode:

```
npm run dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` to view the application.

### Building for Production

To create a production build:

```
npm run build
```

This will generate optimized production files in the `dist` directory.

### Linting

To run the ESLint linter:

```
npm run lint
```

### Configuration

The application uses TypeScript for type checking. The TypeScript configuration is split into multiple files:

- `tsconfig.json`: The root configuration file
- `tsconfig.app.json`: Configuration for the application code
- `tsconfig.node.json`: Configuration for Node.js-specific code

To modify TypeScript settings, edit the appropriate configuration file.

### Common Use Cases

1. Searching for a movie:
   - Enter the movie title in the search bar
   - The movie list will update in real-time as you type

2. Viewing movie details:
   - The movie table displays each movie's name, genre, and image

### Troubleshooting

1. Issue: Application fails to start
   - Error message: "Module not found: Error: Can't resolve 'react'"
   - Diagnostic process:
     1. Ensure all dependencies are installed: `npm install`
     2. Check if `react` and `react-dom` are listed in `package.json`
   - Solution: If dependencies are missing, run `npm install react react-dom`

2. Issue: TypeScript compilation errors
   - Error message: "Cannot find module './components/searchBar/searchBar' or its corresponding type declarations."
   - Diagnostic process:
     1. Verify the file path is correct
     2. Check if the file exists in the specified location
   - Solution: Ensure the import statement in `App.tsx` matches the actual file path

### Debugging

To enable debug mode:

1. In `vite.config.ts`, add the following:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     build: {
       sourcemap: true,
     },
   })
   ```

2. Run the application in development mode: `npm run dev`

3. Open your browser's developer tools to view debug information

Log files can be found in the browser's console.

## Data Flow

The application follows a simple data flow:

1. The `movies.json` file in the `public` directory contains the initial movie data.
2. When the application starts, it loads this data.
3. The `SearchBar` component in `src/components/searchBar/searchBar.tsx` accepts user input.
4. As the user types, the search query is used to filter the movie list.
5. The filtered list is then passed to the `MovieTable` component for display.

```
[movies.json] -> [App] -> [SearchBar]
                  |
                  v
            [MovieTable]
```

Note: The actual implementation of data fetching and state management is not provided in the given code snippets. The application likely uses React's state management (e.g., useState, useContext) to handle the data flow between components.