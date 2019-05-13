const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.phpComplete', function () {
        const pos = vscode.window.activeTextEditor.selection.active;
        const range = vscode.window.activeTextEditor.document.getWordRangeAtPosition(pos);
        const word = vscode.window.activeTextEditor.document.getText(range);
        if (word === 'if') {
            const ifString = new vscode.SnippetString(" ($1) {\n\t$2\n}");
            vscode.window.activeTextEditor.insertSnippet(ifString, pos);
        } else if (word === 'dd') {
            const ifString = new vscode.SnippetString("($1);");
            vscode.window.activeTextEditor.insertSnippet(ifString, pos);
        } else if (word === 'fore') {
            const ifString = new vscode.SnippetString("foreach ($1 as $2) {\n\t$3\n}");
            replace(ifString, range);
        } else if (word === 'pubf') {
            const ifString = new vscode.SnippetString("public function $1 () \n{\n\t$2\n}");
            replace(ifString, range);
        } else if (word === 'tabfor') {
            const ifString = new vscode.SnippetString("\\$table->integer('$1_id')->unsigned();\n\\$table->foreign('$1_id')->references('id')->on('$1s')->onDelete('cascade');");
            replace(ifString, range);
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