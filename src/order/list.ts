/*
 * @Author: WuDeXiong
 * @Date: 2022-05-01 19:36:22
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-05-01 20:04:59
 * @FilePath: \pbp-cli\src\order\list.ts
 * @Description: 命令列表
 *
 * Copyright (c) 2022 by WuDeXiong, All Rights Reserved.
 */

import { readdirSync } from 'fs';
import { join, basename, extname } from 'path';
export default {
  name: 'list',
  apply() {
    const files = readdirSync(join(__dirname));
    files.forEach((path) => {
      if (extname(path) === '.js') {
        console.log(basename(path, '.js'));
      }
    });
  },
};
