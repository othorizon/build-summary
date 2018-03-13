const process = require('child_process');
const fs = require('fs')

module.exports = {
    hooks: {
        init: function () {

            //直接调用命令
            process.exec("chmod o+x buildsummary.sh&&sh buildsummary.sh",
                function (error, stdout, stderr) {
                    fs.writeFileSync( `${root}/SUMMARY.md`, stdout, { encoding: 'utf8' } )
                    console.log('stdout: ' + stdout);
                    if (error !== null) {
                        // console.log('stdout: ' + stdout);
                        console.log('stderr: ' + stderr);
                        console.log('exec error: ' + error);
                    }
                });

        }
    }
}