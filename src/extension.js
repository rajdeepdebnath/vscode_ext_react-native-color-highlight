import { languages } from "vscode";
import { colorProvider } from "./colorProvider";
  
export const documentSelector = [
  { scheme: "file", language: "javascript" },
  { scheme: "file", language: "javascriptreact" }
];

export function activate(context) {  
  // Handle colors
  context.subscriptions.push(
    languages.registerColorProvider(documentSelector, colorProvider)
  );
}
  