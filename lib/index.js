"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const plugins_1 = require("./plugins");
// pbp-cli -v、pbp-cli -V、 pbp-cli --version
/* eslint-disable @typescript-eslint/no-var-requires */
commander_1.program
    .version(`v${require('../package.json').version}`, '-v -V --version')
    // pbp-cli -r <path>
    .option('-r --register <path>', 'register plugin 注册插件(命令)', plugins_1.register)
    .parse(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7R0FTRzs7QUFFSCx5Q0FBb0M7QUFFcEMsdUNBQXFDO0FBRXJDLDJDQUEyQztBQUMzQyx1REFBdUQ7QUFDdkQsbUJBQU87S0FDSixPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQztJQUNyRSxvQkFBb0I7S0FDbkIsTUFBTSxDQUFDLHNCQUFzQixFQUFFLDBCQUEwQixFQUFFLGtCQUFRLENBQUM7S0FDcEUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyJ9