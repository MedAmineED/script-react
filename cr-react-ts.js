const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Replace 'your-project-name' with the desired project name or use a command line argument
const projectName = process.argv[2] || 'your-project-name';

try {
  // Step 1: Create a new React project using Vite with TypeScript template
  console.log('Creating Vite project...');
  execSync(`yarn create vite ${projectName} --template react-ts`, { stdio: 'inherit' });

  // Step 2: Change the directory to the project folder
  process.chdir(projectName);

  // Step 3: Install dependencies
  console.log('Installing dependencies...');
  execSync('yarn', { stdio: 'inherit' });

  // Step 4: Install additional dependencies (axios, react-router-dom, react-hook-form)
  console.log('Installing additional dependencies...');
  execSync('yarn add axios react-router-dom react-hook-form', { stdio: 'inherit' });

  // Step 5: Create folders in the src directory
  const folders = ['ApiUrls', 'ApiServices', 'Entities', 'Utils', 'hooks', 'view', 'components'];
  folders.forEach(folder => {
    const dirPath = path.join('src', folder);
    fs.mkdirSync(dirPath, { recursive: true });
  });

  console.log('Project setup complete!');
} catch (error) {
  console.error('Error during project setup:', error);
}
