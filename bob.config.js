module.exports = {
  source: 'src',
  output: 'lib',
  targets: [
    [
      'commonjs',
      {
        esm: true,
      },
    ],
    [
      'module',
      {
        esm: true,
      },
    ],
    [
      'typescript',
      {
        project: 'tsconfig.build.json',
        esm: true,
      },
    ],
  ],
};
