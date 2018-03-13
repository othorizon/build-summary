var process = require('child_process');

module.exports = {
    hooks: {
        init: function () {

            //直接调用命令
            process.exec("ls -l&&sh buildsummary.sh",
                function (error, stdout, stderr) {
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