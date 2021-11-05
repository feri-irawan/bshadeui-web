const mix = require("laravel-mix");
const { colors, colorLevels } = require("./src/colors.json");
const sidebarMenu = require("./src/sidebar-menu.json");
const classNameList = require("./src/class-list.json");

require("laravel-mix-nunjucks");
const srcPath = "src/";

mix.postCss(`${srcPath}css/BshadeUI.min.css`, "css/BshadeUI.min.css").postCss(`${srcPath}css/custom.css`, "css/custom.css").setPublicPath("dist").options({
    processCssUrls: false,
});

mix.njk("src/*.njk", "dist/", {
    ext: ".html",
    marked: null,
    watch: true,
    data: {
        web_title: "Bellshade Framework",
        colors,
        colorLevels,
        sidebarMenu,
        classNameList,
    },
    block: "content",
    envOptions: {
        watch: true,
        noCache: true,
    },
    //   manageEnv: (nunjucks) => {
    //     nunjucks.addFilter("containString", (str, containStr) => {
    //       if (!str.length) return false;
    //       return str.indexOf(containStr) >= 0;
    //     });
    //     nunjucks.addFilter("startsWith", (str, targetStr) => {
    //       if (!str.length) return false;
    //       return str.startsWith(targetStr);
    //     });
    //   },
});
