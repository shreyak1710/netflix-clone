
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Backend: React.FC = () => {
  const { toast } = useToast();

  const handleDeployClick = () => {
    toast({
      title: "Deployment Instructions",
      description: "Please follow the MongoDB and Spring Boot setup instructions provided in the chat.",
    });
  };

  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Backend Integration Guide</h1>
        
        <div className="space-y-8">
          <section className="bg-netflix-darkgray p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">MongoDB Setup</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Create a MongoDB Atlas account at <a href="https://www.mongodb.com/cloud/atlas" className="text-netflix-red hover:underline" target="_blank" rel="noreferrer">mongodb.com</a></li>
              <li>Create a new cluster and database</li>
              <li>Create a database user with read/write privileges</li>
              <li>Get your MongoDB connection string</li>
              <li>Set it in your Spring Boot application.properties file</li>
            </ol>
          </section>
          
          <section className="bg-netflix-darkgray p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Spring Boot Setup</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Create a new Spring Boot project with Java 21</li>
              <li>Add dependencies: Spring Web, Spring Data MongoDB, Spring Security, Spring Cloud</li>
              <li>Create the authentication service with register and login endpoints</li>
              <li>Implement JWT token generation and validation</li>
              <li>Connect to MongoDB using the connection string</li>
            </ol>
          </section>
          
          <section className="bg-netflix-darkgray p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">API Endpoints</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">Register User</h3>
                <p className="text-gray-400">POST /api/v1/auth/register</p>
                <pre className="bg-gray-800 p-3 rounded mt-2 overflow-x-auto">
                  {`{
  "email": "user@example.com",
  "password": "password123",
  "name": "User Name"
}`}
                </pre>
              </div>
              
              <div>
                <h3 className="text-xl font-bold">Login</h3>
                <p className="text-gray-400">POST /api/v1/auth/login</p>
                <pre className="bg-gray-800 p-3 rounded mt-2 overflow-x-auto">
                  {`{
  "email": "user@example.com",
  "password": "password123"
}`}
                </pre>
              </div>
            </div>
          </section>
          
          <section className="bg-netflix-darkgray p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Deployment</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Build the Spring Boot application with Gradle</li>
              <li>Deploy to any cloud provider (AWS, GCP, Azure)</li>
              <li>Configure environment variables for MongoDB connection and JWT secret</li>
              <li>Set up CORS to allow requests from your frontend domain</li>
              <li>Update the frontend VITE_API_URL environment variable to point to your deployed backend</li>
            </ol>
            <Button 
              className="mt-4 bg-netflix-red hover:bg-red-700"
              onClick={handleDeployClick}
            >
              Deploy Project
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Backend;
