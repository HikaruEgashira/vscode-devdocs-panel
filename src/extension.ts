// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import htmlViewPanel from './htmlViewPanel'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const openDocs = vscode.commands.registerCommand('extension.devdocs', () => {
    const panel = vscode.window.createWebviewPanel(
      'devdocs',
      'devdocs.io',
      vscode.ViewColumn.Two,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
        enableCommandUris: true,
      }
    )

    panel.webview.html = htmlViewPanel('https://devdocs.io/')
  })

  context.subscriptions.push(openDocs)
}

// this method is called when your extension is deactivated
export function deactivate() {}
