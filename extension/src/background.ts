// Applies a closure to the current tab
// const onCurrentTab = async (callback: (id: number) => void) =>
// 	chrome.tabs.query(
// 		{ currentWindow: true, active: true },
// 		(tabs: chrome.tabs.Tab[]) => callback(tabs[0].id!));

// chrome.runtime.onInstalled.addListener((_) =>
// 	chrome.runtime.sendMessage(Message.GenID));

// On click, move current tab to index 0
// chrome.runtime.onMessage.addListener(
// 	(_) => onCurrentTab((id: number) =>
// 		chrome.tabs.move(id, { index: 0 })));

import { v4 as uuidv4 } from "uuid";
import { Message } from "./mod";

// Signal to generate a UID on installation
// must provide a listener in the foreground
chrome.runtime.onInstalled.addListener((_) =>
  chrome.runtime.sendMessage(Message.GenID)
);

// For testing this method, open background console under  {brave, chrome}://extenstions
chrome.runtime.onMessage.addListener((request: Message) =>
  console.log(`test id: ${uuidv4()}`)
);
