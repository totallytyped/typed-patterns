const tsc = require('typescript');
const tsconfig = require('./tsconfig');

module.exports = {
    process(src, path) {
        if (path.endsWith('.ts') || path.endsWith('.tsx')) {
            return tsc.transpileModule(src, tsconfig.compilerOptions, path, []);
        }
        return src;
    }
};
