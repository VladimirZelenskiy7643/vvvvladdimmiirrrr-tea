// Helper function to generate a random alphanumeric string of a given length
function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Helper function to debounce a function (useful to limit how often a function is called)
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Helper function to flatten a nested array (1 level deep)
function flattenArray(arr) {
    return arr.reduce((flat, next) => flat.concat(next), []);
}

// Helper function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Helper function to convert a string to title case
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Example usage
console.log("Random String:", generateRandomString(8));                 // e.g., "aB3dE6Gh"
console.log("Flatten Array:", flattenArray([[1, 2], [3, 4], [5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log("Remove Duplicates:", removeDuplicates([1, 2, 2, 3, 3]));  // [1, 2, 3]
console.log("Title Case:", toTitleCase("hello world from js"));        // "Hello World From Js"

// Debounce example: Only runs after 300ms pause
const processSearch = debounce(() => console.log("Searching..."), 300);
processSearch(); // Call this multiple times to see it execute only once after pause
