import { languages } from "vscode";
import { colorProvider } from "./colorProvider";
  
export const documentSelector = [
  { scheme: "file", language: "javascript" },
  { scheme: "file", language: "javascriptreact" },
  { scheme: "file", language: "typescript" },
  { scheme: "file", language: "typescriptreact" }
];

export function activate(context) {  
  // Handle colors
  context.subscriptions.push(
    languages.registerColorProvider(documentSelector, colorProvider)
  );
}
  