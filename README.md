# Reticuli Technologies

A modern, responsive website for Reticuli Technologies, a defense contracting startup specializing in advanced defense systems, cyber security, and aerospace solutions.

![Reticuli Technologies](https://via.placeholder.com/1200x600/0F1117/3B82F6?text=Reticuli+Technologies)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Professional Design**: Modern UI tailored for defense industry
- **Responsive Layout**: Mobile-first approach ensures compatibility across all devices
- **Contact Forms**: Integrated contact system with email notifications
- **Project Showcase**: Portfolio section displaying past and current projects
- **Technology Showcase**: Highlighting technology expertise
- **Admin Dashboard**: Secure admin area for content management
- **Authentication**: JWT-based user authentication
- **Performance Optimized**: Fast loading times with code splitting and caching

## Tech Stack

### Frontend
- **React**: Component-based UI library
- **React Router**: Navigation and routing
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Axios**: HTTP client
- **React Query**: Data fetching and caching
- **Zustand/Jotai**: State management

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **JWT**: Authentication
- **Nodemailer**: Email sending
- **Multer**: File uploads
- **Helmet**: Security middleware

### DevOps
- **Jest/React Testing Library**: Testing
- **ESLint/Prettier**: Code quality
- **Husky/lint-staged**: Git hooks
- **GitHub Actions**: CI/CD
- **Heroku/AWS**: Deployment options

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/reticuli-technologies.git
cd reticuli-technologies
```

2. **Install dependencies**

```bash
# Install root dependencies
npm install

# Install server dependencies
npm run install-server

# Install client dependencies
npm run install-client

# Or install all at once
npm run install-all
```

3. **Set up environment variables**

Create a `.env` file in the root directory (use the provided `.env.example` as a template) and configure your environment variables.

4. **Start the development server**

```bash
# Run both frontend and backend
npm run dev

# Run only backend
npm run server

# Run only frontend
npm run client
```

## Project Structure

```
reticuli-technologies/
├── client/                 # React frontend
│   ├── public/             # Public assets
│   └── src/                # React source code
│       ├── components/     # Reusable components
│       ├── pages/          # Page components
│       ├── context/        # React context
│       ├── hooks/          # Custom hooks
│       ├── api/            # API service functions
│       └── utils/          # Utility functions
│
├── server/                 # Node.js backend
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── middleware/         # Custom middleware
│   └── utils/              # Utility functions
│
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
└── package.json            # Root package.json
```

## Development

### Code Style

We use ESLint and Prettier to enforce code style. Run linting with:

```bash
# Check for linting issues
npm run lint

# Fix linting issues
npm run lint-fix

# Format code with Prettier
npm run format
```

### Testing

```bash
# Run all tests
npm test

# Run backend tests
npm run test-server

# Run frontend tests
npm run test-client
```

### Adding New Features

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Implement your feature
3. Write tests
4. Submit a pull request

## Deployment

### Building for Production

```bash
# Build the client
npm run build
```

### Deployment Options

#### Heroku

```bash
# Login to Heroku
heroku login

# Create a new Heroku app
heroku create reticuli-technologies

# Set environment variables
heroku config:set MONGO_URI=your_production_mongodb_uri
heroku config:set JWT_SECRET=your_production_jwt_secret
# Set other environment variables...

# Push to Heroku
git push heroku main
```

#### AWS

1. Set up an EC2 instance with Node.js
2. Configure MongoDB Atlas
3. Clone the repository to the server
4. Install dependencies and build
5. Use PM2 to manage the Node.js process

```bash
npm install -g pm2
pm2 start server/server.js
```

## Security

- All API routes are protected with rate limiting
- JWT authentication with refresh tokens
- Input validation with express-validator
- HTTPS enforced in production
- Security headers with Helmet
- XSS protection
- CSRF protection
- Environment variables for sensitive information

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

© 2025 Reticuli Technologies. All Rights Reserved.