/*
 * @Author: WuDeXiong
 * @Date: 2022-04-30 23:14:46
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-05-01 00:00:28
 * @FilePath: \pbp-cli\src\plugins\register.ts
 * @Description:
 *
 * Copyright (c) 2022 by WuDeXiong, All Rights Reserved.
 */

import { join, basename } from 'path';
import { copyFileSync } from 'fs';
/**
 * @description: 注册组件（命令）
 * @param {string} path
 * @return {void}
 */
export function register(path: string) {
  copyFileSync(join(path), join(__dirname + '/' + basename(path)));
  /* eslint-disable @typescript-eslint/no-var-requires */
  const res = require('./' + basename(path));
  res.default
    ? res.default.apply({ name: '成功' })
    : res.apply({ name: '成功' });
}
