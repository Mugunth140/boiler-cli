#!/usr/bin/env node
import 'dotenv/config';
import { Command } from "commander";
import { publicList } from "../src/handlers/publicList.handler.js";
import { InitLoader } from '../src/utils/loader.util.js';
import { privateList } from '../src/handlers/privateList.handler.js';
import { addPrivateList } from '../src/handlers/addPrivateList.handler.js';

const program = new Command();
const sleep = (ms = 2000) => new Promise(res => setTimeout(res, ms));
console.clear();
InitLoader('Loading Boiler....');
await sleep();
console.clear();

program
   .name("boiler")
   .version("1.2.0")
   .description("A CLI tool for kickstarting your dream project hassel free.");

program
  .command('public')
  .description('List all public templates')
  .action(publicList);

const privateCmd = program
  .command('private')
  .description('Manage your private templates (login required)');

privateCmd
  .command('list')
  .description('List all private templates')
  .action(privateList);

privateCmd
  .command('add')
  .description('Add a private templates')
  .action(addPrivateList);

program.parse();

