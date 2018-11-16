import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import copy from 'rollup-plugin-copy'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'demo/src/index.js',
  output: {
    file: 'demo/dist/demo.js',
    format: 'iife'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs({
      namedExports: {
        'react-dom': ['render', 'unmountComponentAtNode']
      }
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('demo')
    }),
    copy({
      'demo/src/index.html': 'demo/dist/index.html'
    }),
    serve({
      contentBase: 'demo/dist',
      host: 'localhost',
      port: 3030
    }),
    livereload('demo/dist')
  ]
}
