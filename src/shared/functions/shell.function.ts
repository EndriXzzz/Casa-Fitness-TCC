import { exec } from "child_process";

export function execute(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
        exec(command, function (error, stdout, stderr) {
            if (error) reject(error);
            resolve(stdout);
        });
    });
};
