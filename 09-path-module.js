const path = require("path");

// Get the platform-specific path separator
const sep = path.sep;
console.log(sep); // This will print '/' on Unix-like systems and '\' on Windows

// Join path segments to create a new path
const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath); // This will print '/content/subfolder/text.txt'

// Extract the base filename from a path
const base = path.basename(filePath);
console.log(base); // This will print 'text.txt'

// Resolve a path relative to the current working directory
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute); // This will print the absolute path to the file