module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _components: './src/Components',
          _screens: './src/Components/screens',
          _services: './src/services',
        },
      },
    },
  },
};