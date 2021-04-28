module.exports = {
  webpack = (config) => {
    config.entry = async () => {
      const entries = await config.entry();
      console.log(entries);
      return entries;
    }
    return config;
  },
};
