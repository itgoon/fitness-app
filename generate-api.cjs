// const Config = require("./env/Config.ts");

const shell = require("shelljs");
const API_URL = "http://15.164.245.239/swagger-ui/json";

if (API_URL) {
  const out = "src/api";
  shell.exec(
    `openapi-generator-cli generate -i ${API_URL} -g typescript-axios -o ${out} --additional-properties=useSingleRequestParameter=true --skip-validate-spec`
  );

  // remove unneces
  shell.exec(`rm -rf ${out}/.openapi-generator`);
  shell.exec(`rm ${out}/.openapi-generator-ignore`);
  shell.exec(`rm ${out}/.gitignore`);
  shell.exec(`rm ${out}/.npmignore`);
  shell.exec(`rm ${out}/git_push.sh`);
} else {
  throw new Error("GEN_API_URL is undefined");
}
