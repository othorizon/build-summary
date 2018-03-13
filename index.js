const process = require('child_process');
// const fs = require('fs')

module.exports = {
    hooks: {
        init: function () {
            const root = this.resolve('')
            console.log('prcess generate summary ,root: ' + root);
            //直接调用命令
            process.execSync("find "+root+" -maxdepth 1",
                function (error, stdout, stderr) {
                    console.log(stdout);
                    if (error !== null) {
                        // console.log('stdout: ' + stdout);
                        console.log('stderr: ' + stderr);
                        console.log('exec error: ' + error);
                    }
                });
            // fs.writeFileSync( `${root}/SUMMARY.md`, stdout, { encoding: 'utf8' } )
        }
    }
}