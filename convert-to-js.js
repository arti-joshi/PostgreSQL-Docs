const fs = require('fs');
const path = require('path');

function convertTsToJs(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      convertTsToJs(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Remove TypeScript specific syntax
      let jsContent = content
        .replace(/: React\.FC(\<.*?\>)?/g, '')
        .replace(/: JSX\.Element/g, '')
        .replace(/: \(.*?\) =>/g, '=')
        .replace(/: string/g, '')
        .replace(/: number/g, '')
        .replace(/: boolean/g, '')
        .replace(/: any/g, '')
        .replace(/: void/g, '')
        .replace(/: never/g, '')
        .replace(/: null/g, '')
        .replace(/: undefined/g, '')
        .replace(/: \{[^}]+\}/g, '')
        .replace(/: \[.*?\]/g, '')
        .replace(/: [A-Z][A-Za-z]+/g, '')
        .replace(/interface [^{]+\{[^}]+\}/g, '')
        .replace(/type [^=]+=.*?;/g, '')
        .replace(/<[^>]+>/g, '')
        .replace(/export type.*?;/g, '')
        .replace(/import type.*?;/g, '')
        .replace(/import \{.*?type.*?\} from/g, 'import {')
        .replace(/\[\s*key\s*:\s*string\s*\]/g, '');
      
      // Write the JavaScript file
      const newPath = filePath.replace(/\.tsx?$/, '.jsx');
      fs.writeFileSync(newPath, jsContent);
      
      // Delete the TypeScript file
      fs.unlinkSync(filePath);
      
      console.log(`Converted ${file} to JavaScript`);
    }
  });
}

// Convert files in components/ui and hooks directories
['components/ui', 'hooks', 'components', 'lib'].forEach(dir => {
  if (fs.existsSync(dir)) {
    convertTsToJs(dir);
  }
}); 