const vscode = require('vscode');

function activate(context) {
    const channel = vscode.window.createOutputChannel('Complete')
    const config = vscode.workspace.getConfiguration('phpcomplete.completions')
    let disposable = vscode.commands.registerCommand('extension.phpComplete', function () {
        const pos = vscode.window.activeTextEditor.selection.active;
        const range = vscode.window.activeTextEditor.document.getWordRangeAtPosition(pos);
        const word = vscode.window.activeTextEditor.document.getText(range);
        if (word in config) {
            const snip = new vscode.SnippetString(config[word]);
            replace(snip, range)
        } else {
            const line = vscode.window.activeTextEditor.document.lineAt(pos);
            const newPos = line.range.end;
            const ifString = new vscode.SnippetString(";$1");
            vscode.window.activeTextEditor.insertSnippet(ifString, newPos);
        }
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;

function replace(stringData, range) {
    vscode.window.activeTextEditor.edit(e => e.delete(range))
    vscode.window.activeTextEditor.insertSnippet(stringData, range.start);
}

function insert(stringData, pos) {
    vscode.window.activeTextEditor.insertSnippet(stringData, pos);
}