"use strict";
/*
 * @Author: WuDeXiong
 * @Date: 2022-04-30 20:32:00
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-04-30 23:06:31
 * @FilePath: \pbp-cli\src\utils\common.ts
 * @Description: 通用的工具方法
 * Copyright (c) 2022 by WuDeXiong, All Rights Reserved.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearConsole = exports.getProjectPath = void 0;
const console_clear_1 = __importDefault(require("console-clear"));
const path_1 = require("path");
/**
 * 获取项目绝对路径
 * @param projectName 项目名
 * @return {string} 项目绝对路径
 */
function getProjectPath(projectName) {
    return (0, path_1.resolve)(process.cwd(), projectName);
}
exports.getProjectPath = getProjectPath;
/**
 * @description: 清空命令行
 * @param {boolean} isSoft
 * @return {void}
 */
function clearConsole(isSoft) {
    (0, console_clear_1.default)(isSoft);
}
exports.clearConsole = clearConsole;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7O0dBUUc7Ozs7OztBQUVILGtFQUFrQztBQUNsQywrQkFBK0I7QUFFL0I7Ozs7R0FJRztBQUNILFNBQWdCLGNBQWMsQ0FBQyxXQUFtQjtJQUNoRCxPQUFPLElBQUEsY0FBTyxFQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBRkQsd0NBRUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsWUFBWSxDQUFDLE1BQTRCO0lBQ3ZELElBQUEsdUJBQUssRUFBQyxNQUFNLENBQUMsQ0FBQztBQUNoQixDQUFDO0FBRkQsb0NBRUMifQ==