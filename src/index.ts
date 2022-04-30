/*
 * @Author: WuDeXiong
 * @Date: 2022-04-30 16:27:39
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-04-30 18:46:06
 * @FilePath: \pbp-cli\src\index.ts
 * @Description: 入口文件
 *
 * Copyright (c) 2022 by WuDeXiong, All Rights Reserved.
 */

import { program } from 'commander';

// pbp-cli -v、pbp-cli -V、 pbp-cli --version
// 临时禁用规则，保证这里可以通过 require 方法获取 package.json 中的版本号
/* eslint-disable @typescript-eslint/no-var-requires */
program
  .version(`v${require('../package.json').version}`, '-v -V --version')
  .usage('<command> [options]');

program.parse(process.argv);
