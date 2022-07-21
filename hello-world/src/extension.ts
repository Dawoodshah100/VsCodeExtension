// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "hello-world" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementatiob n of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let helloWorldDisposable = vscode.commands.registerCommand('hello-world.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Hello World!');
		let editor = vscode.window.activeTextEditor;

		if (editor) {
			editor.edit((editBuilder) => {
				editBuilder.delete(editor!.selection);
			}).then((editBuilder) => {
				editor!.edit((editBuilder) => {
					editBuilder.insert(editor!.selection.start, "Hello World!");
				});
			});
		}
		else{
			vscode.window.showErrorMessage('No file is open!');
			vscode.window.showInputBox();
			
		}

		// vscode.window.showOpenDialog();
	});

	context.subscriptions.push(helloWorldDisposable);

	let helloWorldDisposable2 = vscode.commands.registerCommand('hello-world.helloWorld2', () => {
			vscode.window.showInformationMessage('Hello World from Hello World222222222!');
	});

	context.subscriptions.push(helloWorldDisposable2);

	let helloWorldDisposable3 = vscode.commands.registerCommand('hello-world.helloWorld3', () => {

		vscode.window.showInformationMessage('Hello World from Hello World333333333!');

	});

	context.subscriptions.push(helloWorldDisposable3);
}

// this method is called when your extension is deactivated
export function deactivate() { }
