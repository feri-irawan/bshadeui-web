module.exports = {
    content: ["./dist/**/*.{html,njk,js}"],
    css: ["./src/css/BshadeUI.min.css", "./src/css/custom.css"],
    // defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    defaultExtractor: (content) => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
    output: "./dist/css/",
};
