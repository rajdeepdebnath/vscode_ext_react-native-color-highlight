import {
    ExtensionContext,
    languages,
    extensions,
    DocumentSelector,
    window,
  } from "vscode";
  import { colorProvider } from "./colorProvider";
  
  export const documentSelector = [
    { scheme: "file", language: "javascript" }
  ];
  
  export function activate(context) {  
    // Handle colors
    context.subscriptions.push(
      languages.registerColorProvider(documentSelector, colorProvider)
    );
  }
  