/*
 * @Author: WuDeXiong
 * @Date: 2022-04-30 16:27:39
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-05-01 20:11:26
 * @FilePath: \pbp-cli\src\index.ts
 * @Description: 入口文件
 *
 * Copyright (c) 2022 by WuDeXiong, All Rights Reserved.
 */

import { Command, program } from 'commander';

export interface contextType {
  program: Command;
  params: string[];
}

// 特殊字段命令（禁止注册删除！）
export const specialField = ['register', 'remove', 'list'];

/* eslint-disable @typescript-eslint/no-var-requires */
program
  .version(`v${require('../package.json').version}`, '-v -V --version')
  .usage('pbp-cli <cmd> [params...]')
  .arguments('<cmd> [params...]')
  .action((cmd: string, params: string[]) => {
    try {
      const res = require('./order/' + cmd);
      const context = {
        program,
        params,
      };
      res.default ? res.default.apply(context) : res.apply(context);
    } catch (e) {
      console.log(cmd + ' 不存在这个命令');
    }
  })
  .parse(process.argv);
