"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const child_process_1 = require("child_process");
function execute(command) {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(command, function (error, stdout, stderr) {
            if (error)
                reject(error);
            resolve(stdout);
        });
    });
}
exports.execute = execute;
;
//# sourceMappingURL=shell.function.js.map