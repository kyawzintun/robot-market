const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "src/"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@app": path.resolve(__dirname, "src/app"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
};
