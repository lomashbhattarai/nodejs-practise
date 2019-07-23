const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 5150

module.exports = {
    outputDir: path.resolve(__dirname,'../server/public'),
    runtimeCompiler: true,
    devServer: {
        host: 'localhost',
        proxy: {
            '/api': {
                target: `http://localhost:${port}/`,
                ws: true,
                changeOrigin: true
            }    
        }
    }
}