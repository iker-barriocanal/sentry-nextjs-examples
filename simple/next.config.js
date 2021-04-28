module.exports = {
  webpack: (config) => {
    const entries = config.entry;
    config.entry = async () => {
      const entriesAwaited = await entries();
      console.log(entriesAwaited);
      return entriesAwaited;
    }
    return config;
  },
};
