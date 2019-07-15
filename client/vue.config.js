const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname,'../server/public'),
    runtimeCompiler: true,
    devServer: {
        host: 'localhost',
        proxy: {
            '/api': {
                target: `http://localhost:5150/`,
                ws: true,
                changeOrigin: true
            }    
        }
    }
}