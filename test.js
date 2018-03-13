var process = require('child_process');



//直接调用命令
process.execSync("./buildsummary.sh \"./\"",
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        console.log('exec error: ' + error);
    });
