const path = require('path');
require('dotenv').config();

module.exports = {
    outputDir: path.resolve(__dirname,'../server/public'),
    runtimeCompiler: true,
    devServer: {
        host: 'localhost',
        proxy: {
            '/api': {
                target: `http://localhost:${process.env.PORT}/`,
                ws: true,
                changeOrigin: true
            }    
        }
    }
}