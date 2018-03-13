const process = require('child_process');
const fs = require('fs')

module.exports = {
    hooks: {
        output: function () {
            const root = this.resolve('')
            console.log("prcess generate summary ,root: " + root);
            //直接调用命令
            process.execSync(root + "/node_modules/gitbook-plugin-build-summary/buildsummary.sh \"" + root + "\"",
                function (error, stdout, stderr) {
                    console.log(stdout);
                    if (error !== null) {
                        // console.log('stdout: ' + stdout);
                        console.log('stderr: ' + stderr);
                        console.log('exec error: ' + error);
                    }
                });
            // fs.writeFileSync(`${root}/SUMMARY.md`, "etest", { encoding: 'utf8' })
            process.exec("cat " + root + "/SUMMARY.md",
                function (error, stdout, stderr) {
                    console.log(stdout);
                    if (error !== null) {
                        // console.log('stdout: ' + stdout);
                        console.log('stderr: ' + stderr);
                        console.log('exec error: ' + error);
                    }
                });
            console.log("prcess generate finished");

        }
    }
}