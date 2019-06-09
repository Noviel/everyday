import { createModel } from "./lib";

const run = () => {
  console.log(`Hello world! Check: ${createModel(1).data}`);
};

export { run };

export default run;
