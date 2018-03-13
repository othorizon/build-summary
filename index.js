var process = require('child_process');

module.exports = {
    hooks: {
        init: function () {

            //直接调用命令
            process.exec("./buildsummary.sh",
                function (error, stdout, stderr) {
                    if (error !== null) {
                        console.log('stdout: ' + stdout);
                        console.log('stderr: ' + stderr);
                        console.log('exec error: ' + error);
                    }
                });

        }
    }
}