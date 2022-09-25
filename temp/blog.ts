import { blogEntry, contentEntry, convertDateToString, createEntryFile } from "./entry.ts";

if (Deno.args.length !== 1) {
  console.log('Invalid args. Please input only one args.');
  Deno.exit(1);
}

const arg = Deno.args[0];
const today = new Date();

switch (arg) {
  case "--blog": {
    const todayString = convertDateToString(today);
    createEntryFile(blogEntry.replace('_PUBLISH_DATE', todayString), todayString);
    break;
  }
  case "--content": {
    const dateLastDayOfTheMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const stringLastDayOfTheMonth = convertDateToString(dateLastDayOfTheMonth);
    createEntryFile(contentEntry.replace('_PUBLISH_DATE', stringLastDayOfTheMonth), stringLastDayOfTheMonth + '_monthly-contents');
    break;
  }
  default:
    console.log("Args. is only permitted '--blog' or '--conent'.");
    Deno.exit(2);
}

