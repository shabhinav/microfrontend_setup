// const fs = require('fs');
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper function to generate random number within range
function generateRandomJSX(numLines) {
    const lines = [];
    for (let i = 0; i < numLines; i++) {
        // Create a random JSX element
        const element = `<div>Random Element ${Math.floor(Math.random() * 100)}</div>`;
        lines.push(element);
    }
    return lines.join('\n');
}

// Function to create a React component
function createComponent(componentName) {
    const numLines = Math.floor(Math.random() * (191)) + 10; // Random lines between 10 and 200
    const jsxContent = generateRandomJSX(numLines);
    
    const component = `
import React from 'react';

const ${componentName} = () => {
    return (
        <>
            ${jsxContent}
        </>
    );
};

export default ${componentName};
`;

    return component;
}

// Function to generate components and write to files
function generateComponents(numComponents) {
    for (let i = 1; i <= numComponents; i++) {
        const componentName = `Component${i}`;
        const componentContent = createComponent(componentName);
        const filePath = path.join(__dirname, `${componentName}.jsx`);
        
        fs.writeFileSync(filePath, componentContent, 'utf8');
        console.log(`Generated ${filePath}`);
    }
}

// Generate 50 components
generateComponents(100);
