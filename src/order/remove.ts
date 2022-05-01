/*
 * @Author: WuDeXiong
 * @Date: 2022-05-01 19:53:30
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-05-01 20:04:03
 * @FilePath: \pbp-cli\src\order\remove.ts
 * @Description: 删除命令
 *
 * Copyright (c) 2022 by WuDeXiong, All Rights Reserved.
 */

import { contextType, specialField } from '../index';
import { rmSync } from 'fs';
import { join } from 'path';
export default {
  name: 'remove',
  apply({ params }: contextType) {
    const cmd = params[0];
    if (!cmd || specialField.indexOf(cmd) >= 0) {
      return console.log('要删除的命令不存在或该命令为特殊字段，无法删除！');
    }
    try {
      rmSync(join(__dirname, cmd));
      console.log('删除成功！');
    } catch (e) {
      console.log('删除失败！');
    }
  },
};
