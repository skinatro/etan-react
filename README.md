# E-TAN Website (React.js Edition)

## Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **State Management/Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **UI/Layout:** Vanilla CSS with modern aesthetics

## Getting Started

### Prerequisites

- Node.js (v25+)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd etan-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Available Scripts

- `npm start`: Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- `npm run build`: Builds the app for production to the `build` folder.
- `npm test`: Launches the test runner.
- `npm run lint`: Runs ESLint to check for code quality issues.

### Conventional Commits

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages:

- `feat:`: A new feature
- `fix:`: A bug fix
- `docs:`: Documentation only changes
- `style:`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor:`: A code change that neither fixes a bug nor adds a feature
- `test:`: Adding missing tests or correcting existing tests
- `chore:`: General maintenance (package updates, build processes, etc)

### Standards & Quality

Before submitting a Pull Request, please ensure:

1. **Linting**: Run `npm run lint` and fix any errors.
2. **Testing**: Run `npm test` to ensure all tests pass.

### Workflow

1. Fork the project.
2. Create your feature branch (`git checkout -b feat/amazing-feature`).
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`).
4. Push to the branch (`git push origin feat/amazing-feature`).
5. Open a Pull Request.
