
# Netflix Clone Application Setup Guide

This guide will help you set up and run the Netflix Clone application using Spring Boot (backend) and React (frontend).

## Project Structure

The project is structured as follows:

1. **Frontend (React)**: This repository contains the React frontend application.
2. **Backend (Spring Boot)**: A separate repository will be created for the Spring Boot microservices backend.

## Frontend Setup

The frontend is a React application built with TypeScript, React Router, and Tailwind CSS.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Running the Frontend

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The application will be available at `http://localhost:8080`

## Backend Setup (Spring Boot Microservices)

The backend consists of several Spring Boot microservices:

1. **API Gateway**: Routes requests to appropriate services
2. **Auth Service**: Handles user authentication and authorization
3. **User Service**: Manages user accounts and profiles
4. **Content Service**: Provides movie and TV show metadata
5. **Subscription Service**: Manages subscription plans and billing

### Prerequisites

- Java 17+
- Maven
- IntelliJ IDEA

### Setting Up in IntelliJ IDEA

1. Clone the backend repository (separate from this frontend repository)
2. Open IntelliJ IDEA
3. Select "Open" and navigate to the cloned backend repository
4. Wait for IntelliJ to import and index the Maven project
5. Set up the Run Configurations for each microservice:
   - Click "Add Configuration" in the top right
   - Click the "+" button and select "Spring Boot"
   - Name it (e.g., "AuthService")
   - Set the Main class to the appropriate service's Application class
   - Configure JDK to Java 17+
   - Set VM options if necessary (e.g., `-Dserver.port=8081`)
   - Repeat for each microservice

### Starting the Microservices

Start the microservices in the following order:

1. API Gateway
2. Auth Service
3. User Service
4. Content Service
5. Subscription Service

Each service will run on its own port (as configured in its application.properties file).

## Static Service Discovery

This application uses static service discovery for simplicity. Each service has hardcoded URLs to other services in its configuration.

In a production environment, you would use a service registry like Eureka or Consul.

## Authentication Flow

1. User registers/logs in through the frontend
2. Auth Service validates credentials and generates a JWT token
3. The token is stored in localStorage on the frontend
4. Subsequent API requests include this token in the Authorization header
5. API Gateway validates the token before routing requests to other services

## Subscription Management

1. After registration, users are prompted to select a subscription plan
2. The Subscription Service records the user's selected plan
3. Frontend displays appropriate UI based on subscription status
4. A subscription popup reminds users to subscribe if they haven't already

## Development Workflow

1. Run the backend microservices through IntelliJ
2. Run the frontend using `npm run dev`
3. Make changes to the code as needed
4. Use the browser developer tools to debug frontend issues
5. Use IntelliJ's debugger for backend issues

## Deployment

For deployment:

1. Build the frontend: `npm run build`
2. Build each microservice with Maven: `mvn clean package`
3. Deploy the frontend to a static hosting service (e.g., Netlify, Vercel)
4. Deploy each microservice as a separate application to your chosen platform (e.g., AWS, Heroku)

## Note on Backend Implementation

This repository contains only the frontend implementation. For the backend services:

1. Create separate Spring Boot applications for each microservice
2. Implement the RESTful APIs needed by the frontend
3. Configure CORS to allow requests from the frontend
4. Implement JWT authentication in the Auth Service
5. Implement data persistence using JPA/Hibernate with a database of your choice

These backend services should be built in separate repositories, following microservice architecture best practices.
