const { spawn } = require('node:child_process')
const path = require('node:path')

const projectRoot = path.resolve(__dirname, '..')
const wasmDirectory = path.join(projectRoot, 'node_modules', '@next', 'swc-wasm-nodejs')
const nextCli = require.resolve('next/dist/bin/next')

const child = spawn(process.execPath, [nextCli, 'dev', '--webpack', ...process.argv.slice(2)], {
  cwd: projectRoot,
  env: { ...process.env, NEXT_TEST_WASM_DIR: wasmDirectory },
  stdio: 'inherit',
})

child.on('exit', (code) => process.exit(code ?? 1))
