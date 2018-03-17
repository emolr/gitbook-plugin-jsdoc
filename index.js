const Path = require("path");
const Process = require("process");
const jsdoc2md = require("jsdoc-to-markdown");

let jsdoc2mdOptions = {};

module.exports = {
  hooks: {
    config: function(config) {
      jsdoc2mdOptions = config.pluginsConfig.jsdoc.options;
      return config;
    }
  },
  filters: {
    jsdoc: path => {
      try {
        const options = Object.assign(
          { files: Path.join(Process.cwd(), path) },
          jsdoc2mdOptions
        );

        const docs = jsdoc2md.renderSync(options);

        return docs;
        
      } catch (err) {
        console.error(err);
      }
    }
  }
};
