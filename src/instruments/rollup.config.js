'use strict';

const os = require('os');
const fs = require('fs');
const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');
const css = require('rollup-plugin-css-only');
const template = require('./template/rollup.js');

const TMPDIR = `${os.tmpdir()}/a32nx-instruments-gen`;

module.exports = fs.readdirSync(`${__dirname}/src`, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.includes('utils'))
  .map(({ name }) => {
    let cssBundle;
    return {
      input: `${__dirname}/src/${name}/index.jsx`,
      output: {
        file: `${TMPDIR}/${name}-gen.js`,
        format: 'iife',
      },
      plugins: [
        babel({
          presets: [
            ['@babel/preset-react', {
              runtime: 'automatic',
            }],
          ],
          babelHelpers: 'bundled',
          exclude: /node_modules/,
        }),
        replace({
          'process.env.NODE_ENV': '"production"',
        }),
        nodeResolve({ extensions: ['.js', '.jsx'] }),
        commonjs({
          include: /node_modules/,
        }),
        css({
          output: (generatedBundle) => {
            cssBundle = generatedBundle;
          },
        }),
        template({
          name,
          getCssBundle() {
            return cssBundle;
          },
          outputDir: `${__dirname}/../../A32NX/html_ui/Pages/VCockpit/Instruments/generated`,
        }),
      ],
    };
  });
