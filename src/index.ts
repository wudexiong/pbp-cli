/*
 * @Author: WuDeXiong
 * @Date: 2022-04-30 16:27:39
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-04-30 23:59:00
 * @FilePath: \pbp-cli\src\index.ts
 * @Description: 入口文件
 *
 * Copyright (c) 2022 by WuDeXiong, All Rights Reserved.
 */

import { program } from 'commander';

import { register } from './plugins';

// pbp-cli -v、pbp-cli -V、 pbp-cli --version
/* eslint-disable @typescript-eslint/no-var-requires */
program
  .version(`v${require('../package.json').version}`, '-v -V --version')
  // pbp-cli -r <path>
  .option('-r --register <path>', 'register plugin 注册插件(命令)', register)
  .parse(process.argv);
