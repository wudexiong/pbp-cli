"use strict";
/*
 * @Author: WuDeXiong
 * @Date: 2022-04-30 16:27:39
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-04-30 18:26:57
 * @FilePath: \pbp-cli\src\index.ts
 * @Description: 入口文件
 *
 * Copyright (c) 2022 by WuDeXiong, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
// pbp-cli -v、pbp-cli -V、 pbp-cli --version
// 临时禁用规则，保证这里可以通过 require 方法获取 package.json 中的版本号
/* eslint-disable @typescript-eslint/no-var-requires */
commander_1.program
    .version(`v${require('../package.json').version}`, '-v -V --version')
    .usage('<command> [options]');
commander_1.program.parse(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7R0FTRzs7QUFFSCx5Q0FBb0M7QUFFcEMsMkNBQTJDO0FBQzNDLGtEQUFrRDtBQUNsRCx1REFBdUQ7QUFDdkQsbUJBQU87S0FDSixPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQztLQUNwRSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUVoQyxtQkFBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMifQ==