import { Command } from 'commander';
export interface contextType {
    program: Command;
    params: string[];
}
export declare const specialField: string[];
