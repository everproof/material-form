import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: [
    { file: 'es/index.js', format: 'es', name: 'material-ui-flip-card' },
    { file: 'lib/index.js', format: 'umd', name: 'material-ui-flip-card' },
  ],
  plugins: [
    resolve({ extensions: ['.js', '.jsx'] }),
    babel({ exclude: 'node_modules/**', plugins: ['external-helpers'] }),
    commonjs({
      namedExports: {
        'node_modules/material-ui/styles/index.js': ['withStyles'],
        'node_modules/redux-form-material-ui/lib/index.js': [
          'Checkbox',
          'RadioGroup',
          'Select',
          'Switch',
          'TextField',
        ],
      },
    }),
  ],
  external: [
    'material-ui',
    'material-ui/Checkbox',
    'material-ui/Form',
    'material-ui/Switch',
    'material-ui/styles',
    'react',
    'react-redux',
    'redux',
    'redux-form',
    'redux-form-material-ui',
  ],
  globals: {
    'material-ui/Checkbox': 'Checkbox',
    'material-ui/Form': 'Form',
    'material-ui/Switch': 'Switch',
    'material-ui/styles': 'styles',
    react: 'React',
    'react-redux': 'ReactRedux',
    redux: 'Redux',
    'redux-form': 'ReduxForm',
    'redux-form-material-ui': 'ReduxFormMaterialUi',
  },
}
