import { addLint } from './add-lint';

const run = (ctx: any) => {
  if (ctx[2] === `add-lint`) {
    addLint(
      {
        project: {
          name: 'unknown',
        },
        rootPath: process.cwd(),
      },
      {
        prettier: true,
        react: false,
        lintStaged: true,
        typescript: true,
      }
    );
  }
};

export { run };

export default run;
