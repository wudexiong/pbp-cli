/*
 * @Author: WuDeXiong
 * @Date: 2022-04-30 20:32:00
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-04-30 23:06:31
 * @FilePath: \pbp-cli\src\utils\common.ts
 * @Description: 通用的工具方法
 * Copyright (c) 2022 by WuDeXiong, All Rights Reserved.
 */

import clear from 'console-clear';
import { resolve } from 'path';

/**
 * 获取项目绝对路径
 * @param projectName 项目名
 * @return {string} 项目绝对路径
 */
export function getProjectPath(projectName: string): string {
  return resolve(process.cwd(), projectName);
}

/**
 * @description: 清空命令行
 * @param {boolean} isSoft
 * @return {void}
 */
export function clearConsole(isSoft?: boolean | undefined): void {
  clear(isSoft);
}
