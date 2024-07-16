module.exports = {
  // Other Jest config options...
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^axios$': '<rootDir>/node_modules/axios/index.js',
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|gif|svg)$": '<rootDir>/empty-module.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(axios|other-module-to-include)/)',
    '\\.css$',
    '\\.pnp\\.[^\\/]+$',
    '\\.png$'
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
};
