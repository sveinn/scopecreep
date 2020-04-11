const { initCypressPlugin } = require("@undefinedlabs/scope-agent");

module.exports = async (on, config) => {
  // ... any other plugin goes here
  const newConfig = await initCypressPlugin(on, config);
  return newConfig;
};
