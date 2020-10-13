# Info

Appends a semicolon or inserts a snippet

```php
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
} else if (word === 'prif') {
    const ifString = new vscode.SnippetString("private function $1 () \n{\n\t$2\n}");
    replace(ifString, range);
} else if (word === 'prof') {
    const ifString = new vscode.SnippetString("protected function $1 () \n{\n\t$2\n}");
    replace(ifString, range);
} else if (word === 're') {
    const ifString = new vscode.SnippetString("return $1");
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
```