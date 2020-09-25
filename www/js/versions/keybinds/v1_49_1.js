export const v1_49_1 = [
    {
        "key": "escape escape",
        "command": "workbench.action.exitZenMode",
        "when": "inZenMode"
    },
    {
        "key": "shift+escape",
        "command": "closeReferenceSearch",
        "when": "inReferenceSearchEditor && !config.editor.stablePeek"
    },
    {
        "key": "escape",
        "command": "closeReferenceSearch",
        "when": "inReferenceSearchEditor && !config.editor.stablePeek"
    },
    {
        "key": "shift+escape",
        "command": "cancelSelection",
        "when": "editorHasSelection && textInputFocus"
    },
    {
        "key": "escape",
        "command": "cancelSelection",
        "when": "editorHasSelection && textInputFocus"
    },
    {
        "key": "ctrl+end",
        "command": "cursorBottom",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+shift+end",
        "command": "cursorBottomSelect",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+shift+alt+down",
        "command": "cursorColumnSelectDown",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+shift+alt+left",
        "command": "cursorColumnSelectLeft",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+shift+alt+pagedown",
        "command": "cursorColumnSelectPageDown",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+shift+alt+pageup",
        "command": "cursorColumnSelectPageUp",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+shift+alt+right",
        "command": "cursorColumnSelectRight",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+shift+alt+up",
        "command": "cursorColumnSelectUp",
        "when": "textInputFocus"
    },
    {
        "key": "down",
        "command": "cursorDown",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+shift+down",
        "command": "cursorDownSelect",
        "when": "textInputFocus"
    },
    {
        "key": "shift+down",
        "command": "cursorDownSelect",
        "when": "textInputFocus"
    },
    {
        "key": "end",
        "command": "cursorEnd",
        "when": "textInputFocus",
        "args": { "sticky": false }
    },
    {
        "key": "shift+end",
        "command": "cursorEndSelect",
        "when": "textInputFocus",
        "args": { "sticky": false }
    },
    {
        "key": "home",
        "command": "cursorHome",
        "when": "textInputFocus"
    },
    {
        "key": "shift+home",
        "command": "cursorHomeSelect",
        "when": "textInputFocus"
    },
    {
        "key": "left",
        "command": "cursorLeft",
        "when": "textInputFocus"
    },
    {
        "key": "shift+left",
        "command": "cursorLeftSelect",
        "when": "textInputFocus"
    },
    {
        "key": "pagedown",
        "command": "cursorPageDown",
        "when": "textInputFocus"
    },
    {
        "key": "shift+pagedown",
        "command": "cursorPageDownSelect",
        "when": "textInputFocus"
    },
    {
        "key": "pageup",
        "command": "cursorPageUp",
        "when": "textInputFocus"
    },
    {
        "key": "shift+pageup",
        "command": "cursorPageUpSelect",
        "when": "textInputFocus"
    },
    {
        "key": "right",
        "command": "cursorRight",
        "when": "textInputFocus"
    },
    {
        "key": "shift+right",
        "command": "cursorRightSelect",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+home",
        "command": "cursorTop",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+shift+home",
        "command": "cursorTopSelect",
        "when": "textInputFocus"
    },
    {
        "key": "up",
        "command": "cursorUp",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+shift+up",
        "command": "cursorUpSelect",
        "when": "textInputFocus"
    },
    {
        "key": "shift+up",
        "command": "cursorUpSelect",
        "when": "textInputFocus"
    },
    {
        "key": "shift+backspace",
        "command": "deleteLeft",
        "when": "textInputFocus"
    },
    {
        "key": "backspace",
        "command": "deleteLeft",
        "when": "textInputFocus"
    },
    {
        "key": "delete",
        "command": "deleteRight",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+a",
        "command": "editor.action.selectAll"
    },
    {
        "key": "ctrl+l",
        "command": "expandLineSelection",
        "when": "textInputFocus"
    },
    {
        "key": "shift+tab",
        "command": "outdent",
        "when": "editorTextFocus && !editorReadonly && !editorTabMovesFocus"
    },
    {
        "key": "ctrl+shift+z",
        "command": "redo"
    },
    {
        "key": "ctrl+y",
        "command": "redo"
    },
    {
        "key": "ctrl+down",
        "command": "scrollLineDown",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+up",
        "command": "scrollLineUp",
        "when": "textInputFocus"
    },
    {
        "key": "alt+pagedown",
        "command": "scrollPageDown",
        "when": "textInputFocus"
    },
    {
        "key": "alt+pageup",
        "command": "scrollPageUp",
        "when": "textInputFocus"
    },
    {
        "key": "tab",
        "command": "tab",
        "when": "editorTextFocus && !editorReadonly && !editorTabMovesFocus"
    },
    {
        "key": "ctrl+z",
        "command": "undo"
    },
    {
        "key": "shift+down",
        "command": "cursorColumnSelectDown",
        "when": "editorColumnSelection && textInputFocus"
    },
    {
        "key": "shift+left",
        "command": "cursorColumnSelectLeft",
        "when": "editorColumnSelection && textInputFocus"
    },
    {
        "key": "shift+pagedown",
        "command": "cursorColumnSelectPageDown",
        "when": "editorColumnSelection && textInputFocus"
    },
    {
        "key": "shift+pageup",
        "command": "cursorColumnSelectPageUp",
        "when": "editorColumnSelection && textInputFocus"
    },
    {
        "key": "shift+right",
        "command": "cursorColumnSelectRight",
        "when": "editorColumnSelection && textInputFocus"
    },
    {
        "key": "shift+up",
        "command": "cursorColumnSelectUp",
        "when": "editorColumnSelection && textInputFocus"
    },
    {
        "key": "shift+escape",
        "command": "removeSecondaryCursors",
        "when": "editorHasMultipleSelections && textInputFocus"
    },
    {
        "key": "escape",
        "command": "removeSecondaryCursors",
        "when": "editorHasMultipleSelections && textInputFocus"
    },
    {
        "key": "f12",
        "command": "goToNextReference",
        "when": "inReferenceSearchEditor || referenceSearchVisible"
    },
    {
        "key": "f4",
        "command": "goToNextReference",
        "when": "inReferenceSearchEditor || referenceSearchVisible"
    },
    {
        "key": "shift+f12",
        "command": "goToPreviousReference",
        "when": "inReferenceSearchEditor || referenceSearchVisible"
    },
    {
        "key": "shift+f4",
        "command": "goToPreviousReference",
        "when": "inReferenceSearchEditor || referenceSearchVisible"
    },
    {
        "key": "shift+enter",
        "command": "refactorPreview.apply",
        "when": "refactorPreview.enabled && refactorPreview.enabled && refactorPreview.hasCheckedChanges && focusedView == 'refactorPreview'"
    },
    {
        "key": "escape",
        "command": "notebook.cell.quitEdit",
        "when": "inputFocus && notebookEditorFocused && !editorHasSelection && !editorHoverVisible"
    },
    {
        "key": "ctrl+f",
        "command": "actions.find"
    },
    {
        "key": "enter",
        "command": "breakpointWidget.action.acceptInput",
        "when": "breakpointWidgetVisible && inBreakpointWidget"
    },
    {
        "key": "shift+escape",
        "command": "closeBreakpointWidget",
        "when": "breakpointWidgetVisible && textInputFocus"
    },
    {
        "key": "escape",
        "command": "closeBreakpointWidget",
        "when": "breakpointWidgetVisible && textInputFocus"
    },
    {
        "key": "ctrl+u",
        "command": "cursorUndo",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+right",
        "command": "cursorWordEndRight",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+shift+right",
        "command": "cursorWordEndRightSelect",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+left",
        "command": "cursorWordLeft",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+shift+left",
        "command": "cursorWordLeftSelect",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+backspace",
        "command": "deleteWordLeft",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "ctrl+delete",
        "command": "deleteWordRight",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "ctrl+k ctrl+c",
        "command": "editor.action.addCommentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+d",
        "command": "editor.action.addSelectionToNextFindMatch",
        "when": "editorFocus"
    },
    {
        "key": "shift+alt+.",
        "command": "editor.action.autoFix",
        "when": "editorTextFocus && !editorReadonly && supportedCodeAction =~ /(\\s|^)quickfix\\b/"
    },
    {
        "key": "shift+alt+a",
        "command": "editor.action.blockComment",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "escape",
        "command": "editor.action.cancelSelectionAnchor",
        "when": "editorTextFocus && selectionAnchorSet"
    },
    {
        "key": "ctrl+f2",
        "command": "editor.action.changeAll",
        "when": "editorTextFocus && editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+insert",
        "command": "editor.action.clipboardCopyAction"
    },
    {
        "key": "ctrl+c",
        "command": "editor.action.clipboardCopyAction"
    },
    {
        "key": "shift+delete",
        "command": "editor.action.clipboardCutAction"
    },
    {
        "key": "ctrl+x",
        "command": "editor.action.clipboardCutAction"
    },
    {
        "key": "shift+insert",
        "command": "editor.action.clipboardPasteAction"
    },
    {
        "key": "ctrl+v",
        "command": "editor.action.clipboardPasteAction"
    },
    {
        "key": "ctrl+/",
        "command": "editor.action.commentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+alt+down",
        "command": "editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+alt+up",
        "command": "editor.action.copyLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+k ctrl+k",
        "command": "editor.action.defineKeybinding",
        "when": "editorTextFocus && !editorReadonly && editorLangId == 'jsonc'"
    },
    {
        "key": "ctrl+shift+k",
        "command": "editor.action.deleteLines",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "f7",
        "command": "editor.action.diffReview.next",
        "when": "isInDiffEditor"
    },
    {
        "key": "shift+f7",
        "command": "editor.action.diffReview.prev",
        "when": "isInDiffEditor"
    },
    {
        "key": "alt+f3",
        "command": "editor.action.dirtydiff.next",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+f3",
        "command": "editor.action.dirtydiff.previous",
        "when": "editorTextFocus"
    },
    {
        "key": "enter",
        "command": "editor.action.extensioneditor.findNext",
        "when": "webviewFindWidgetFocused && !editorFocus && activeEditor == 'workbench.editor.extension'"
    },
    {
        "key": "shift+enter",
        "command": "editor.action.extensioneditor.findPrevious",
        "when": "webviewFindWidgetFocused && !editorFocus && activeEditor == 'workbench.editor.extension'"
    },
    {
        "key": "ctrl+f",
        "command": "editor.action.extensioneditor.showfind",
        "when": "!editorFocus && activeEditor == 'workbench.editor.extension'"
    },
    {
        "key": "shift+alt+f",
        "command": "editor.action.formatDocument",
        "when": "editorHasDocumentFormattingProvider && editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
    },
    {
        "key": "shift+alt+f",
        "command": "editor.action.formatDocument.none",
        "when": "editorTextFocus && !editorHasDocumentFormattingProvider && !editorHasDocumentFormattingProvider && !editorReadonly"
    },
    {
        "key": "ctrl+k ctrl+f",
        "command": "editor.action.formatSelection",
        "when": "editorHasDocumentSelectionFormattingProvider && editorHasDocumentSelectionFormattingProvider && editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+f12",
        "command": "editor.action.goToImplementation",
        "when": "editorHasImplementationProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
        "key": "shift+f12",
        "command": "editor.action.goToReferences",
        "when": "editorHasReferenceProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor"
    },
    {
        "key": "ctrl+shift+.",
        "command": "editor.action.inPlaceReplace.down",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+,",
        "command": "editor.action.inPlaceReplace.up",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+]",
        "command": "editor.action.indentLines",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+alt+up",
        "command": "editor.action.insertCursorAbove",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+i",
        "command": "editor.action.insertCursorAtEndOfEachLineSelected",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+down",
        "command": "editor.action.insertCursorBelow",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+enter",
        "command": "editor.action.insertLineAfter",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+enter",
        "command": "editor.action.insertLineBefore",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+\\",
        "command": "editor.action.jumpToBracket",
        "when": "editorTextFocus"
    },
    {
        "key": "alt+f8",
        "command": "editor.action.marker.next",
        "when": "editorFocus"
    },
    {
        "key": "f8",
        "command": "editor.action.marker.nextInFiles",
        "when": "editorFocus"
    },
    {
        "key": "shift+alt+f8",
        "command": "editor.action.marker.prev",
        "when": "editorFocus"
    },
    {
        "key": "shift+f8",
        "command": "editor.action.marker.prevInFiles",
        "when": "editorFocus"
    },
    {
        "key": "alt+down",
        "command": "editor.action.moveLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "alt+up",
        "command": "editor.action.moveLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+k ctrl+d",
        "command": "editor.action.moveSelectionToNextFindMatch",
        "when": "editorFocus"
    },
    {
        "key": "f3",
        "command": "editor.action.nextMatchFindAction",
        "when": "editorFocus"
    },
    {
        "key": "enter",
        "command": "editor.action.nextMatchFindAction",
        "when": "editorFocus && findInputFocussed"
    },
    {
        "key": "ctrl+f3",
        "command": "editor.action.nextSelectionMatchFindAction",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+shift+f2",
        "command": "editor.action.onTypeRename",
        "when": "editorHasRenameProvider && editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+alt+o",
        "command": "editor.action.organizeImports",
        "when": "editorTextFocus && !editorReadonly && supportedCodeAction =~ /(\\s|^)source\\.organizeImports\\b/"
    },
    {
        "key": "ctrl+[",
        "command": "editor.action.outdentLines",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "alt+f12",
        "command": "editor.action.peekDefinition",
        "when": "editorHasDefinitionProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor"
    },
    {
        "key": "ctrl+shift+f12",
        "command": "editor.action.peekImplementation",
        "when": "editorHasImplementationProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor"
    },
    {
        "key": "shift+f3",
        "command": "editor.action.previousMatchFindAction",
        "when": "editorFocus"
    },
    {
        "key": "shift+enter",
        "command": "editor.action.previousMatchFindAction",
        "when": "editorFocus && findInputFocussed"
    },
    {
        "key": "ctrl+shift+f3",
        "command": "editor.action.previousSelectionMatchFindAction",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+.",
        "command": "editor.action.quickFix",
        "when": "editorHasCodeActionsProvider && editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+r",
        "command": "editor.action.refactor",
        "when": "editorHasCodeActionsProvider && editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+k ctrl+u",
        "command": "editor.action.removeCommentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "f2",
        "command": "editor.action.rename",
        "when": "editorHasRenameProvider && editorTextFocus && !editorReadonly"
    },
    {
        "key": "f12",
        "command": "editor.action.revealDefinition",
        "when": "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
        "key": "ctrl+k f12",
        "command": "editor.action.revealDefinitionAside",
        "when": "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
        "key": "ctrl+k ctrl+k",
        "command": "editor.action.selectFromAnchorToCursor",
        "when": "editorTextFocus && selectionAnchorSet"
    },
    {
        "key": "ctrl+shift+l",
        "command": "editor.action.selectHighlights",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+k ctrl+b",
        "command": "editor.action.setSelectionAnchor",
        "when": "editorTextFocus"
    },
    {
        "key": "alt+f1",
        "command": "editor.action.showAccessibilityHelp",
        "when": "editorFocus"
    },
    {
        "key": "shift+f10",
        "command": "editor.action.showContextMenu",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+k ctrl+i",
        "command": "editor.action.showHover",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+right",
        "command": "editor.action.smartSelect.expand",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+left",
        "command": "editor.action.smartSelect.shrink",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+h",
        "command": "editor.action.startFindReplaceAction"
    },
    {
        "key": "ctrl+m",
        "command": "editor.action.toggleTabFocusMode"
    },
    {
        "key": "alt+z",
        "command": "editor.action.toggleWordWrap"
    },
    {
        "key": "ctrl+shift+space",
        "command": "editor.action.triggerParameterHints",
        "when": "editorHasSignatureHelpProvider && editorTextFocus"
    },
    {
        "key": "ctrl+space",
        "command": "editor.action.triggerSuggest",
        "when": "editorHasCompletionItemProvider && textInputFocus && !editorReadonly"
    },
    {
        "key": "ctrl+k ctrl+x",
        "command": "editor.action.trimTrailingWhitespace",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "enter",
        "command": "editor.action.webvieweditor.findNext",
        "when": "webviewFindWidgetFocused && !editorFocus && activeEditor == 'WebviewEditor'"
    },
    {
        "key": "shift+enter",
        "command": "editor.action.webvieweditor.findPrevious",
        "when": "webviewFindWidgetFocused && !editorFocus && activeEditor == 'WebviewEditor'"
    },
    {
        "key": "escape",
        "command": "editor.action.webvieweditor.hideFind",
        "when": "webviewFindWidgetVisible && !editorFocus && activeEditor == 'WebviewEditor'"
    },
    {
        "key": "ctrl+f",
        "command": "editor.action.webvieweditor.showFind",
        "when": "!editorFocus && activeEditor == 'WebviewEditor'"
    },
    {
        "key": "f7",
        "command": "editor.action.wordHighlight.next",
        "when": "editorTextFocus && hasWordHighlights"
    },
    {
        "key": "shift+f7",
        "command": "editor.action.wordHighlight.prev",
        "when": "editorTextFocus && hasWordHighlights"
    },
    {
        "key": "escape",
        "command": "editor.cancelOperation",
        "when": "cancellableOperation"
    },
    {
        "key": "ctrl+k ctrl+i",
        "command": "editor.debug.action.showDebugHover",
        "when": "editorTextFocus && inDebugMode"
    },
    {
        "key": "f9",
        "command": "editor.debug.action.toggleBreakpoint",
        "when": "debuggersAvailable && editorTextFocus"
    },
    {
        "key": "tab",
        "command": "editor.emmet.action.expandAbbreviation",
        "when": "config.emmet.triggerExpansionOnTab && editorTextFocus && !editorReadonly && !editorTabMovesFocus"
    },
    {
        "key": "ctrl+shift+[",
        "command": "editor.fold",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+k ctrl+0",
        "command": "editor.foldAll",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+k ctrl+/",
        "command": "editor.foldAllBlockComments",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+k ctrl+8",
        "command": "editor.foldAllMarkerRegions",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+k ctrl+1",
        "command": "editor.foldLevel1",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+k ctrl+2",
        "command": "editor.foldLevel2",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+k ctrl+3",
        "command": "editor.foldLevel3",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+k ctrl+4",
        "command": "editor.foldLevel4",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+k ctrl+5",
        "command": "editor.foldLevel5",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+k ctrl+6",
        "command": "editor.foldLevel6",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+k ctrl+7",
        "command": "editor.foldLevel7",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+k ctrl+[",
        "command": "editor.foldRecursively",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "f12",
        "command": "editor.gotoNextSymbolFromResult",
        "when": "hasSymbols"
    },
    {
        "key": "escape",
        "command": "editor.gotoNextSymbolFromResult.cancel",
        "when": "hasSymbols"
    },
    {
        "key": "ctrl+k ctrl+l",
        "command": "editor.toggleFold",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+shift+]",
        "command": "editor.unfold",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+k ctrl+j",
        "command": "editor.unfoldAll",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+k ctrl+9",
        "command": "editor.unfoldAllMarkerRegions",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+k ctrl+]",
        "command": "editor.unfoldRecursively",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "tab",
        "command": "insertSnippet",
        "when": "editorTextFocus && hasSnippetCompletions && !editorTabMovesFocus && !inSnippetMode"
    },
    {
        "key": "ctrl+alt+enter",
        "command": "notebook.cell.execute",
        "when": "notebookCellListFocused"
    },
    {
        "key": "alt+enter",
        "command": "notebook.cell.executeAndInsertBelow",
        "when": "notebookCellListFocused"
    },
    {
        "key": "shift+enter",
        "command": "notebook.cell.executeAndSelectBelow",
        "when": "notebookCellListFocused"
    },
    {
        "key": "ctrl+shift+v",
        "command": "notebook.cell.pasteAbove",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "key": "down",
        "command": "notebook.focusNextEditor",
        "when": "editorTextFocus && inputFocus && notebookEditorFocused && notebookEditorCursorAtBoundary != 'none' && notebookEditorCursorAtBoundary != 'top'"
    },
    {
        "key": "up",
        "command": "notebook.focusPreviousEditor",
        "when": "editorTextFocus && inputFocus && notebookEditorFocused && notebookEditorCursorAtBoundary != 'bottom' && notebookEditorCursorAtBoundary != 'none'"
    },
    {
        "key": "shift+alt+f",
        "command": "notebook.formatCell",
        "when": "editorHasDocumentFormattingProvider && editorTextFocus && inCompositeEditor && notebookEditable && !editorReadonly && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "key": "ctrl+enter",
        "command": "openReferenceToSide",
        "when": "listFocus && referenceSearchVisible && !inputFocus"
    },
    {
        "key": "enter",
        "command": "repl.action.acceptInput",
        "when": "inDebugRepl && textInputFocus"
    },
    {
        "key": "ctrl+f",
        "command": "repl.action.filter",
        "when": "inDebugRepl && textInputFocus"
    },
    {
        "key": "ctrl+shift+r",
        "command": "rerunSearchEditorSearch",
        "when": "inSearchEditor"
    },
    {
        "key": "escape",
        "command": "search.action.focusQueryEditorWidget",
        "when": "inSearchEditor"
    },
    {
        "key": "ctrl+shift+backspace",
        "command": "search.searchEditor.action.deleteFileResults",
        "when": "inSearchEditor && inSearchEditor"
    },
    {
        "key": "escape",
        "command": "settings.action.clearSearchResults",
        "when": "inSettingsSearch"
    },
    {
        "key": "ctrl+.",
        "command": "settings.action.editFocusedSetting",
        "when": "inSettingsSearch"
    },
    {
        "key": "enter",
        "command": "settings.action.focusNextSetting",
        "when": "inSettingsSearch"
    },
    {
        "key": "shift+enter",
        "command": "settings.action.focusPreviousSetting",
        "when": "inSettingsSearch"
    },
    {
        "key": "down",
        "command": "settings.action.focusSettingsFile",
        "when": "inSettingsSearch && !suggestWidgetVisible"
    },
    {
        "key": "ctrl+f",
        "command": "settings.action.search",
        "when": "inSettingsEditor"
    },
    {
        "key": "ctrl+/",
        "command": "toggleExplainMode",
        "when": "suggestWidgetVisible"
    },
    {
        "key": "ctrl+k f2",
        "command": "togglePeekWidgetFocus",
        "when": "inReferenceSearchEditor || referenceSearchVisible"
    },
    {
        "key": "alt+f5",
        "command": "workbench.action.editor.nextChange",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+f5",
        "command": "workbench.action.editor.previousChange",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+escape",
        "command": "workbench.action.hideComment",
        "when": "commentEditorFocused"
    },
    {
        "key": "escape",
        "command": "workbench.action.hideComment",
        "when": "commentEditorFocused"
    },
    {
        "key": "ctrl+enter",
        "command": "workbench.action.submitComment",
        "when": "commentEditorFocused"
    },
    {
        "key": "ctrl+left",
        "command": "cursorWordAccessibilityLeft",
        "when": "accessibilityModeEnabled && textInputFocus"
    },
    {
        "key": "ctrl+shift+left",
        "command": "cursorWordAccessibilityLeftSelect",
        "when": "accessibilityModeEnabled && textInputFocus"
    },
    {
        "key": "ctrl+right",
        "command": "cursorWordAccessibilityRight",
        "when": "accessibilityModeEnabled && textInputFocus"
    },
    {
        "key": "ctrl+shift+right",
        "command": "cursorWordAccessibilityRightSelect",
        "when": "accessibilityModeEnabled && textInputFocus"
    },
    {
        "key": "shift+escape",
        "command": "closeFindWidget",
        "when": "editorFocus && findWidgetVisible"
    },
    {
        "key": "escape",
        "command": "closeFindWidget",
        "when": "editorFocus && findWidgetVisible"
    },
    {
        "key": "ctrl+alt+enter",
        "command": "editor.action.replaceAll",
        "when": "editorFocus && findWidgetVisible"
    },
    {
        "key": "ctrl+shift+1",
        "command": "editor.action.replaceOne",
        "when": "editorFocus && findWidgetVisible"
    },
    {
        "key": "enter",
        "command": "editor.action.replaceOne",
        "when": "editorFocus && findWidgetVisible && replaceInputFocussed"
    },
    {
        "key": "alt+enter",
        "command": "editor.action.selectAllMatches",
        "when": "editorFocus && findWidgetVisible"
    },
    {
        "key": "alt+c",
        "command": "toggleFindCaseSensitive",
        "when": "editorFocus"
    },
    {
        "key": "alt+l",
        "command": "toggleFindInSelection",
        "when": "editorFocus"
    },
    {
        "key": "alt+r",
        "command": "toggleFindRegex",
        "when": "editorFocus"
    },
    {
        "key": "alt+w",
        "command": "toggleFindWholeWord",
        "when": "editorFocus"
    },
    {
        "key": "tab",
        "command": "jumpToNextSnippetPlaceholder",
        "when": "editorTextFocus && hasNextTabstop && inSnippetMode"
    },
    {
        "key": "shift+tab",
        "command": "jumpToPrevSnippetPlaceholder",
        "when": "editorTextFocus && hasPrevTabstop && inSnippetMode"
    },
    {
        "key": "escape",
        "command": "leaveEditorMessage",
        "when": "messageVisible"
    },
    {
        "key": "shift+escape",
        "command": "leaveSnippet",
        "when": "editorTextFocus && inSnippetMode"
    },
    {
        "key": "escape",
        "command": "leaveSnippet",
        "when": "editorTextFocus && inSnippetMode"
    },
    {
        "key": "shift+escape",
        "command": "closeDirtyDiff",
        "when": "dirtyDiffVisible"
    },
    {
        "key": "escape",
        "command": "closeDirtyDiff",
        "when": "dirtyDiffVisible"
    },
    {
        "key": "shift+escape",
        "command": "closeMarkersNavigation",
        "when": "editorFocus && markersNavigationVisible"
    },
    {
        "key": "escape",
        "command": "closeMarkersNavigation",
        "when": "editorFocus && markersNavigationVisible"
    },
    {
        "key": "shift+escape",
        "command": "closeParameterHints",
        "when": "editorFocus && parameterHintsVisible"
    },
    {
        "key": "escape",
        "command": "closeParameterHints",
        "when": "editorFocus && parameterHintsVisible"
    },
    {
        "key": "alt+down",
        "command": "showNextParameterHint",
        "when": "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        "key": "down",
        "command": "showNextParameterHint",
        "when": "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        "key": "alt+up",
        "command": "showPrevParameterHint",
        "when": "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        "key": "up",
        "command": "showPrevParameterHint",
        "when": "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        "key": "shift+tab",
        "command": "acceptAlternativeSelectedSuggestion",
        "when": "suggestWidgetVisible && textInputFocus && textInputFocus"
    },
    {
        "key": "shift+enter",
        "command": "acceptAlternativeSelectedSuggestion",
        "when": "suggestWidgetVisible && textInputFocus && textInputFocus"
    },
    {
        "key": "tab",
        "command": "acceptSelectedSuggestion",
        "when": "suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "enter",
        "command": "acceptSelectedSuggestion",
        "when": "acceptSuggestionOnEnter && suggestWidgetVisible && suggestionMakesTextEdit && textInputFocus"
    },
    {
        "key": "shift+escape",
        "command": "hideSuggestWidget",
        "when": "suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "escape",
        "command": "hideSuggestWidget",
        "when": "suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "tab",
        "command": "insertBestCompletion",
        "when": "atEndOfWord && textInputFocus && !hasOtherSuggestions && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on'"
    },
    {
        "key": "tab",
        "command": "insertNextSuggestion",
        "when": "hasOtherSuggestions && textInputFocus && textInputFocus && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on'"
    },
    {
        "key": "shift+tab",
        "command": "insertPrevSuggestion",
        "when": "hasOtherSuggestions && textInputFocus && textInputFocus && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on'"
    },
    {
        "key": "ctrl+pagedown",
        "command": "selectNextPageSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "pagedown",
        "command": "selectNextPageSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "ctrl+down",
        "command": "selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "down",
        "command": "selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "ctrl+pageup",
        "command": "selectPrevPageSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "pageup",
        "command": "selectPrevPageSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "ctrl+up",
        "command": "selectPrevSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "up",
        "command": "selectPrevSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "ctrl+space",
        "command": "toggleSuggestionDetails",
        "when": "suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "ctrl+alt+space",
        "command": "toggleSuggestionFocus",
        "when": "suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "enter",
        "command": "acceptRenameInput",
        "when": "editorFocus && renameInputVisible"
    },
    {
        "key": "shift+enter",
        "command": "acceptRenameInputWithPreview",
        "when": "config.editor.rename.enablePreview && editorFocus && renameInputVisible"
    },
    {
        "key": "shift+escape",
        "command": "cancelOnTypeRenameInput",
        "when": "editorTextFocus && onTypeRenameInputVisible"
    },
    {
        "key": "escape",
        "command": "cancelOnTypeRenameInput",
        "when": "editorTextFocus && onTypeRenameInputVisible"
    },
    {
        "key": "shift+escape",
        "command": "cancelRenameInput",
        "when": "editorFocus && renameInputVisible"
    },
    {
        "key": "escape",
        "command": "cancelRenameInput",
        "when": "editorFocus && renameInputVisible"
    },
    {
        "key": "ctrl+shift+l",
        "command": "addCursorsAtSearchResults",
        "when": "fileMatchOrMatchFocus && searchViewletVisible"
    },
    {
        "key": "ctrl+shift+;",
        "command": "breadcrumbs.focus",
        "when": "breadcrumbsPossible"
    },
    {
        "key": "ctrl+shift+.",
        "command": "breadcrumbs.focusAndSelect",
        "when": "breadcrumbsPossible"
    },
    {
        "key": "ctrl+right",
        "command": "breadcrumbs.focusNext",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "right",
        "command": "breadcrumbs.focusNext",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "ctrl+left",
        "command": "breadcrumbs.focusPrevious",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "left",
        "command": "breadcrumbs.focusPrevious",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "ctrl+enter",
        "command": "breadcrumbs.revealFocused",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "space",
        "command": "breadcrumbs.revealFocused",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "ctrl+enter",
        "command": "breadcrumbs.revealFocusedFromTreeAside",
        "when": "breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus"
    },
    {
        "key": "down",
        "command": "breadcrumbs.selectFocused",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "enter",
        "command": "breadcrumbs.selectFocused",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "ctrl+shift+.",
        "command": "breadcrumbs.toggleToOn",
        "when": "!config.breadcrumbs.enabled"
    },
    {
        "key": "shift+escape",
        "command": "closeAccessibilityHelp",
        "when": "accessibilityHelpWidgetVisible && editorFocus"
    },
    {
        "key": "escape",
        "command": "closeAccessibilityHelp",
        "when": "accessibilityHelpWidgetVisible && editorFocus"
    },
    {
        "key": "escape",
        "command": "closeReplaceInFilesWidget",
        "when": "replaceInputBoxFocus && searchViewletVisible"
    },
    {
        "key": "shift+alt+c",
        "command": "copyFilePath",
        "when": "!editorFocus"
    },
    {
        "key": "ctrl+k ctrl+shift+c",
        "command": "copyRelativeFilePath",
        "when": "!editorFocus"
    },
    {
        "key": "alt+enter",
        "command": "debug.openBreakpointToSide",
        "when": "breakpointsFocused"
    },
    {
        "key": "ctrl+enter",
        "command": "debug.openBreakpointToSide",
        "when": "breakpointsFocused"
    },
    {
        "key": "delete",
        "command": "debug.removeBreakpoint",
        "when": "breakpointsFocused && !breakpointSelected"
    },
    {
        "key": "delete",
        "command": "debug.removeWatchExpression",
        "when": "watchExpressionsFocused && !expressionSelected"
    },
    {
        "key": "alt+-",
        "command": "decreaseSearchEditorContextLines",
        "when": "inSearchEditor"
    },
    {
        "key": "shift+f9",
        "command": "editor.debug.action.toggleInlineBreakpoint",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+enter",
        "command": "editor.refocusCallHierarchy",
        "when": "callHierarchyVisible"
    },
    {
        "key": "shift+alt+h",
        "command": "editor.showCallHierarchy",
        "when": "editorHasCallHierarchyProvider && editorTextFocus && !inReferenceSearchEditor"
    },
    {
        "key": "shift+alt+h",
        "command": "editor.showIncomingCalls",
        "when": "callHierarchyVisible && callHierarchyDirection == 'outgoingCalls'"
    },
    {
        "key": "shift+alt+h",
        "command": "editor.showOutgoingCalls",
        "when": "callHierarchyVisible && callHierarchyDirection == 'incomingCalls'"
    },
    {
        "key": "ctrl+enter",
        "command": "explorer.openToSide",
        "when": "explorerViewletFocus && explorerViewletVisible && !inputFocus"
    },
    {
        "key": "shift+alt+f",
        "command": "filesExplorer.findInFolder",
        "when": "explorerResourceIsFolder && explorerViewletVisible && filesExplorerFocus && !inputFocus"
    },
    {
        "key": "alt+down",
        "command": "history.showNext",
        "when": "historyNavigationEnabled && historyNavigationWidget"
    },
    {
        "key": "down",
        "command": "history.showNext",
        "when": "historyNavigationEnabled && historyNavigationWidget"
    },
    {
        "key": "alt+up",
        "command": "history.showPrevious",
        "when": "historyNavigationEnabled && historyNavigationWidget"
    },
    {
        "key": "up",
        "command": "history.showPrevious",
        "when": "historyNavigationEnabled && historyNavigationWidget"
    },
    {
        "key": "alt+=",
        "command": "increaseSearchEditorContextLines",
        "when": "inSearchEditor"
    },
    {
        "key": "escape",
        "command": "keybindings.editor.clearSearchResults",
        "when": "inKeybindings && inKeybindingsSearch"
    },
    {
        "key": "ctrl+c",
        "command": "keybindings.editor.copyKeybindingEntry",
        "when": "inKeybindings && keybindingFocus"
    },
    {
        "key": "ctrl+k ctrl+k",
        "command": "keybindings.editor.defineKeybinding",
        "when": "inKeybindings && keybindingFocus"
    },
    {
        "key": "ctrl+k ctrl+e",
        "command": "keybindings.editor.defineWhenExpression",
        "when": "inKeybindings && keybindingFocus"
    },
    {
        "key": "down",
        "command": "keybindings.editor.focusKeybindings",
        "when": "inKeybindings && inKeybindingsSearch"
    },
    {
        "key": "alt+k",
        "command": "keybindings.editor.recordSearchKeys",
        "when": "inKeybindings && inKeybindingsSearch"
    },
    {
        "key": "delete",
        "command": "keybindings.editor.removeKeybinding",
        "when": "inKeybindings && keybindingFocus"
    },
    {
        "key": "ctrl+f",
        "command": "keybindings.editor.searchKeybindings",
        "when": "inKeybindings"
    },
    {
        "key": "alt+p",
        "command": "keybindings.editor.toggleSortByPrecedence",
        "when": "inKeybindings"
    },
    {
        "key": "escape",
        "command": "list.clear",
        "when": "listFocus && listHasSelectionOrFocus && !inputFocus"
    },
    {
        "key": "left",
        "command": "list.collapse",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "ctrl+left",
        "command": "list.collapseAll",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "right",
        "command": "list.expand",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "shift+down",
        "command": "list.expandSelectionDown",
        "when": "listFocus && listSupportsMultiselect && !inputFocus"
    },
    {
        "key": "shift+up",
        "command": "list.expandSelectionUp",
        "when": "listFocus && listSupportsMultiselect && !inputFocus"
    },
    {
        "key": "down",
        "command": "list.focusDown",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "home",
        "command": "list.focusFirst",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "end",
        "command": "list.focusLast",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "pagedown",
        "command": "list.focusPageDown",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "pageup",
        "command": "list.focusPageUp",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "up",
        "command": "list.focusUp",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "ctrl+down",
        "command": "list.scrollDown",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "ctrl+up",
        "command": "list.scrollUp",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "enter",
        "command": "list.select",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "ctrl+a",
        "command": "list.selectAll",
        "when": "listFocus && listSupportsMultiselect && !inputFocus"
    },
    {
        "key": "space",
        "command": "list.toggleExpand",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "ctrl+shift+enter",
        "command": "list.toggleSelection",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "y",
        "command": "notebook.cell.changeToCode",
        "when": "notebookEditorFocused && !inputFocus && activeEditor == 'workbench.editor.notebook' && notebookCellType == 'markdown'"
    },
    {
        "key": "m",
        "command": "notebook.cell.changeToMarkdown",
        "when": "notebookEditorFocused && !inputFocus && activeEditor == 'workbench.editor.notebook' && notebookCellType == 'code'"
    },
    {
        "key": "alt+delete",
        "command": "notebook.cell.clearOutputs",
        "when": "notebookCellHasOutputs && notebookEditorFocused && !inputFocus"
    },
    {
        "key": "ctrl+k ctrl+c",
        "command": "notebook.cell.collapseCellContent",
        "when": "notebookCellListFocused && !inputFocus && !notebookCellInputIsCollapsed"
    },
    {
        "key": "ctrl+k t",
        "command": "notebook.cell.collapseCellOutput",
        "when": "notebookCellHasOutputs && notebookCellListFocused && !inputFocus && !notebookCellOutputIsCollapsed"
    },
    {
        "key": "shift+alt+down",
        "command": "notebook.cell.copyDown",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "key": "shift+alt+up",
        "command": "notebook.cell.copyUp",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "key": "delete",
        "command": "notebook.cell.delete",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "key": "enter",
        "command": "notebook.cell.edit",
        "when": "notebookCellListFocused && !inputFocus"
    },
    {
        "key": "ctrl+k ctrl+c",
        "command": "notebook.cell.expandCellContent",
        "when": "notebookCellInputIsCollapsed && notebookCellListFocused"
    },
    {
        "key": "ctrl+k t",
        "command": "notebook.cell.expandCellOutput",
        "when": "notebookCellListFocused && notebookCellOutputIsCollapsed"
    },
    {
        "key": "ctrl+down",
        "command": "notebook.cell.focusInOutput",
        "when": "notebookCellHasOutputs && notebookEditorFocused"
    },
    {
        "key": "ctrl+up",
        "command": "notebook.cell.focusOutOutput",
        "when": "notebookEditorFocused"
    },
    {
        "key": "ctrl+shift+enter",
        "command": "notebook.cell.insertCodeCellAbove",
        "when": "notebookCellListFocused && !inputFocus"
    },
    {
        "key": "ctrl+enter",
        "command": "notebook.cell.insertCodeCellBelow",
        "when": "notebookCellListFocused && !inputFocus"
    },
    {
        "key": "shift+alt+win+j",
        "command": "notebook.cell.joinAbove",
        "when": "notebookEditorFocused"
    },
    {
        "key": "alt+win+j",
        "command": "notebook.cell.joinBelow",
        "when": "notebookEditorFocused"
    },
    {
        "key": "alt+down",
        "command": "notebook.cell.moveDown",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "key": "alt+up",
        "command": "notebook.cell.moveUp",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "key": "ctrl+k ctrl+shift+\\",
        "command": "notebook.cell.split",
        "when": "notebookCellEditable && notebookCellEditorFocused && notebookEditable && notebookEditorFocused"
    },
    {
        "key": "ctrl+l",
        "command": "notebook.centerActiveCell",
        "when": "notebookEditorFocused"
    },
    {
        "key": "ctrl+f",
        "command": "notebook.find",
        "when": "notebookEditorFocused"
    },
    {
        "key": "ctrl+end",
        "command": "notebook.focusBottom",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "key": "ctrl+down",
        "command": "notebook.focusNextEditor",
        "when": "notebookEditorFocused && notebookOutputFocused"
    },
    {
        "key": "ctrl+home",
        "command": "notebook.focusTop",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "key": "left",
        "command": "notebook.fold",
        "when": "notebookEditorFocused && !inputFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "key": "ctrl+shift+[",
        "command": "notebook.fold",
        "when": "notebookEditorFocused && !inputFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "key": "shift+alt+f",
        "command": "notebook.format",
        "when": "notebookEditable && !editorTextFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "key": "escape",
        "command": "notebook.hideFind",
        "when": "notebookEditorFocused && notebookFindWidgetFocused"
    },
    {
        "key": "right",
        "command": "notebook.unfold",
        "when": "notebookEditorFocused && !inputFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "key": "ctrl+shift+]",
        "command": "notebook.unfold",
        "when": "notebookEditorFocused && !inputFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "key": "delete",
        "command": "notification.clear",
        "when": "notificationFocus"
    },
    {
        "key": "left",
        "command": "notification.collapse",
        "when": "notificationFocus"
    },
    {
        "key": "right",
        "command": "notification.expand",
        "when": "notificationFocus"
    },
    {
        "key": "enter",
        "command": "notification.toggle",
        "when": "notificationFocus"
    },
    {
        "key": "space",
        "command": "notification.toggle",
        "when": "notificationFocus"
    },
    {
        "key": "home",
        "command": "notifications.focusFirstToast",
        "when": "notificationFocus && notificationToastsVisible"
    },
    {
        "key": "pageup",
        "command": "notifications.focusFirstToast",
        "when": "notificationFocus && notificationToastsVisible"
    },
    {
        "key": "end",
        "command": "notifications.focusLastToast",
        "when": "notificationFocus && notificationToastsVisible"
    },
    {
        "key": "pagedown",
        "command": "notifications.focusLastToast",
        "when": "notificationFocus && notificationToastsVisible"
    },
    {
        "key": "down",
        "command": "notifications.focusNextToast",
        "when": "notificationFocus && notificationToastsVisible"
    },
    {
        "key": "up",
        "command": "notifications.focusPreviousToast",
        "when": "notificationFocus && notificationToastsVisible"
    },
    {
        "key": "ctrl+c",
        "command": "problems.action.copy",
        "when": "problemFocus"
    },
    {
        "key": "ctrl+f",
        "command": "problems.action.focusFilter",
        "when": "focusedView == 'workbench.panel.markers.view'"
    },
    {
        "key": "ctrl+down",
        "command": "problems.action.focusProblemsFromFilter",
        "when": "problemsFilterFocus"
    },
    {
        "key": "enter",
        "command": "problems.action.open",
        "when": "problemFocus"
    },
    {
        "key": "ctrl+enter",
        "command": "problems.action.openToSide",
        "when": "problemFocus"
    },
    {
        "key": "ctrl+.",
        "command": "problems.action.showQuickFixes",
        "when": "problemFocus"
    },
    {
        "key": "space",
        "command": "refactorPreview.toggleCheckedState",
        "when": "listFocus && refactorPreview.enabled && !inputFocus"
    },
    {
        "key": "shift+alt+r",
        "command": "revealFileInOS",
        "when": "!editorFocus"
    },
    {
        "key": "enter",
        "command": "revealReference",
        "when": "listFocus && referenceSearchVisible && !inputFocus"
    },
    {
        "key": "ctrl+enter",
        "command": "scm.acceptInput",
        "when": "scmRepository"
    },
    {
        "key": "escape",
        "command": "search.action.cancel",
        "when": "listFocus && searchViewletVisible && !inputFocus"
    },
    {
        "key": "ctrl+c",
        "command": "search.action.copyMatch",
        "when": "fileMatchOrMatchFocus"
    },
    {
        "key": "shift+alt+c",
        "command": "search.action.copyPath",
        "when": "fileMatchOrFolderMatchWithResourceFocus"
    },
    {
        "key": "f4",
        "command": "search.action.focusNextSearchResult",
        "when": "hasSearchResult || inSearchEditor"
    },
    {
        "key": "shift+f4",
        "command": "search.action.focusPreviousSearchResult",
        "when": "hasSearchResult || inSearchEditor"
    },
    {
        "key": "ctrl+up",
        "command": "search.action.focusSearchFromResults",
        "when": "firstMatchFocus && searchViewletVisible"
    },
    {
        "key": "alt+enter",
        "command": "search.action.openInEditor",
        "when": "hasSearchResult && searchViewletFocus"
    },
    {
        "key": "enter",
        "command": "search.action.openResult",
        "when": "fileMatchOrMatchFocus && searchViewletVisible"
    },
    {
        "key": "ctrl+enter",
        "command": "search.action.openResultToSide",
        "when": "fileMatchOrMatchFocus && searchViewletVisible"
    },
    {
        "key": "delete",
        "command": "search.action.remove",
        "when": "fileMatchOrMatchFocus && searchViewletVisible"
    },
    {
        "key": "ctrl+shift+1",
        "command": "search.action.replace",
        "when": "matchFocus && replaceActive && searchViewletVisible"
    },
    {
        "key": "ctrl+alt+enter",
        "command": "search.action.replaceAll",
        "when": "replaceActive && searchViewletVisible && !findWidgetVisible"
    },
    {
        "key": "ctrl+shift+enter",
        "command": "search.action.replaceAllInFile",
        "when": "fileMatchFocus && replaceActive && searchViewletVisible"
    },
    {
        "key": "ctrl+shift+1",
        "command": "search.action.replaceAllInFile",
        "when": "fileMatchFocus && replaceActive && searchViewletVisible"
    },
    {
        "key": "ctrl+shift+enter",
        "command": "search.action.replaceAllInFolder",
        "when": "folderMatchFocus && replaceActive && searchViewletVisible"
    },
    {
        "key": "ctrl+shift+1",
        "command": "search.action.replaceAllInFolder",
        "when": "folderMatchFocus && replaceActive && searchViewletVisible"
    },
    {
        "key": "ctrl+down",
        "command": "search.focus.nextInputBox",
        "when": "inSearchEditor && inputBoxFocus || inputBoxFocus && searchViewletVisible"
    },
    {
        "key": "ctrl+up",
        "command": "search.focus.previousInputBox",
        "when": "inSearchEditor && inputBoxFocus || inputBoxFocus && searchViewletVisible && !searchInputBoxFocus"
    },
    {
        "key": "ctrl+shift+l",
        "command": "selectAllSearchEditorMatches",
        "when": "inSearchEditor"
    },
    {
        "key": "down",
        "command": "settings.action.focusSettingsFromSearch",
        "when": "inSettingsSearch && !suggestWidgetVisible"
    },
    {
        "key": "enter",
        "command": "settings.action.focusSettingsList",
        "when": "inSettingsEditor && settingsTocRowFocus"
    },
    {
        "key": "shift+f9",
        "command": "settings.action.showContextMenu",
        "when": "inSettingsEditor"
    },
    {
        "key": "alt+c",
        "command": "toggleSearchCaseSensitive",
        "when": "searchViewletFocus"
    },
    {
        "key": "alt+c",
        "command": "toggleSearchEditorCaseSensitive",
        "when": "inSearchEditor && searchInputBoxFocus"
    },
    {
        "key": "alt+l",
        "command": "toggleSearchEditorContextLines",
        "when": "inSearchEditor"
    },
    {
        "key": "alt+r",
        "command": "toggleSearchEditorRegex",
        "when": "inSearchEditor && searchInputBoxFocus"
    },
    {
        "key": "alt+w",
        "command": "toggleSearchEditorWholeWord",
        "when": "inSearchEditor && searchInputBoxFocus"
    },
    {
        "key": "alt+r",
        "command": "toggleSearchRegex",
        "when": "searchViewletFocus"
    },
    {
        "key": "alt+w",
        "command": "toggleSearchWholeWord",
        "when": "searchViewletFocus"
    },
    {
        "key": "ctrl+w",
        "command": "workbench.action.closeActiveEditor"
    },
    {
        "key": "ctrl+f4",
        "command": "workbench.action.closeActiveEditor"
    },
    {
        "key": "ctrl+k ctrl+w",
        "command": "workbench.action.closeAllEditors"
    },
    {
        "key": "ctrl+k ctrl+shift+w",
        "command": "workbench.action.closeAllGroups"
    },
    {
        "key": "ctrl+k w",
        "command": "workbench.action.closeEditorsInGroup"
    },
    {
        "key": "ctrl+k f",
        "command": "workbench.action.closeFolder"
    },
    {
        "key": "ctrl+w",
        "command": "workbench.action.closeGroup",
        "when": "activeEditorGroupEmpty && multipleEditorGroups"
    },
    {
        "key": "ctrl+f4",
        "command": "workbench.action.closeGroup",
        "when": "activeEditorGroupEmpty && multipleEditorGroups"
    },
    {
        "key": "shift+escape",
        "command": "workbench.action.closeQuickOpen",
        "when": "inQuickOpen"
    },
    {
        "key": "escape",
        "command": "workbench.action.closeQuickOpen",
        "when": "inQuickOpen"
    },
    {
        "key": "ctrl+k u",
        "command": "workbench.action.closeUnmodifiedEditors"
    },
    {
        "key": "ctrl+shift+w",
        "command": "workbench.action.closeWindow"
    },
    {
        "key": "ctrl+w",
        "command": "workbench.action.closeWindow",
        "when": "!editorIsOpen && !multipleEditorGroups"
    },
    {
        "key": "alt+f5",
        "command": "workbench.action.compareEditor.nextChange",
        "when": "textCompareEditorVisible"
    },
    {
        "key": "shift+alt+f5",
        "command": "workbench.action.compareEditor.previousChange",
        "when": "textCompareEditorVisible"
    },
    {
        "key": "f5",
        "command": "workbench.action.debug.continue",
        "when": "inDebugMode"
    },
    {
        "key": "ctrl+shift+f5",
        "command": "workbench.action.debug.restart",
        "when": "inDebugMode"
    },
    {
        "key": "ctrl+f5",
        "command": "workbench.action.debug.run",
        "when": "debuggersAvailable"
    },
    {
        "key": "f5",
        "command": "workbench.action.debug.start",
        "when": "debuggersAvailable && !inDebugMode"
    },
    {
        "key": "shift+f11",
        "command": "workbench.action.debug.stepOut",
        "when": "debugState == 'stopped'"
    },
    {
        "key": "f10",
        "command": "workbench.action.debug.stepOver",
        "when": "debugState == 'stopped'"
    },
    {
        "key": "shift+f5",
        "command": "workbench.action.debug.stop",
        "when": "inDebugMode"
    },
    {
        "key": "ctrl+k m",
        "command": "workbench.action.editor.changeLanguageMode"
    },
    {
        "key": "ctrl+k p",
        "command": "workbench.action.files.copyPathOfActiveFile"
    },
    {
        "key": "ctrl+n",
        "command": "workbench.action.files.newUntitledFile"
    },
    {
        "key": "ctrl+o",
        "command": "workbench.action.files.openFile"
    },
    {
        "key": "ctrl+k ctrl+o",
        "command": "workbench.action.files.openFolder"
    },
    {
        "key": "ctrl+o",
        "command": "workbench.action.files.openLocalFile",
        "when": "remoteFileDialogVisible"
    },
    {
        "key": "ctrl+k ctrl+o",
        "command": "workbench.action.files.openLocalFolder",
        "when": "remoteFileDialogVisible"
    },
    {
        "key": "ctrl+k r",
        "command": "workbench.action.files.revealActiveFileInWindows"
    },
    {
        "key": "ctrl+s",
        "command": "workbench.action.files.save"
    },
    {
        "key": "ctrl+k s",
        "command": "workbench.action.files.saveAll"
    },
    {
        "key": "ctrl+shift+s",
        "command": "workbench.action.files.saveAs"
    },
    {
        "key": "ctrl+shift+s",
        "command": "workbench.action.files.saveLocalFile",
        "when": "remoteFileDialogVisible"
    },
    {
        "key": "ctrl+k ctrl+shift+s",
        "command": "workbench.action.files.saveWithoutFormatting"
    },
    {
        "key": "ctrl+k o",
        "command": "workbench.action.files.showOpenedFileInNewWindow"
    },
    {
        "key": "ctrl+shift+f",
        "command": "workbench.action.findInFiles"
    },
    {
        "key": "ctrl+k ctrl+up",
        "command": "workbench.action.focusAboveGroup"
    },
    {
        "key": "ctrl+k ctrl+down",
        "command": "workbench.action.focusBelowGroup"
    },
    {
        "key": "ctrl+8",
        "command": "workbench.action.focusEighthEditorGroup"
    },
    {
        "key": "ctrl+5",
        "command": "workbench.action.focusFifthEditorGroup"
    },
    {
        "key": "ctrl+1",
        "command": "workbench.action.focusFirstEditorGroup"
    },
    {
        "key": "ctrl+4",
        "command": "workbench.action.focusFourthEditorGroup"
    },
    {
        "key": "ctrl+k ctrl+left",
        "command": "workbench.action.focusLeftGroup"
    },
    {
        "key": "f6",
        "command": "workbench.action.focusNextPart"
    },
    {
        "key": "shift+f6",
        "command": "workbench.action.focusPreviousPart"
    },
    {
        "key": "ctrl+k ctrl+right",
        "command": "workbench.action.focusRightGroup"
    },
    {
        "key": "ctrl+2",
        "command": "workbench.action.focusSecondEditorGroup"
    },
    {
        "key": "ctrl+7",
        "command": "workbench.action.focusSeventhEditorGroup"
    },
    {
        "key": "ctrl+0",
        "command": "workbench.action.focusSideBar"
    },
    {
        "key": "ctrl+6",
        "command": "workbench.action.focusSixthEditorGroup"
    },
    {
        "key": "ctrl+3",
        "command": "workbench.action.focusThirdEditorGroup"
    },
    {
        "key": "ctrl+g",
        "command": "workbench.action.gotoLine"
    },
    {
        "key": "ctrl+shift+o",
        "command": "workbench.action.gotoSymbol"
    },
    {
        "key": "escape",
        "command": "workbench.action.hideInterfaceOverview",
        "when": "interfaceOverviewVisible"
    },
    {
        "key": "down",
        "command": "workbench.action.interactivePlayground.arrowDown",
        "when": "interactivePlaygroundFocus && !editorTextFocus"
    },
    {
        "key": "up",
        "command": "workbench.action.interactivePlayground.arrowUp",
        "when": "interactivePlaygroundFocus && !editorTextFocus"
    },
    {
        "key": "pagedown",
        "command": "workbench.action.interactivePlayground.pageDown",
        "when": "interactivePlaygroundFocus && !editorTextFocus"
    },
    {
        "key": "pageup",
        "command": "workbench.action.interactivePlayground.pageUp",
        "when": "interactivePlaygroundFocus && !editorTextFocus"
    },
    {
        "key": "ctrl+k enter",
        "command": "workbench.action.keepEditor"
    },
    {
        "key": "ctrl+k ctrl+r",
        "command": "workbench.action.keybindingsReference"
    },
    {
        "key": "ctrl+9",
        "command": "workbench.action.lastEditorInGroup"
    },
    {
        "key": "alt+0",
        "command": "workbench.action.lastEditorInGroup"
    },
    {
        "key": "ctrl+k down",
        "command": "workbench.action.moveActiveEditorGroupDown"
    },
    {
        "key": "ctrl+k left",
        "command": "workbench.action.moveActiveEditorGroupLeft"
    },
    {
        "key": "ctrl+k right",
        "command": "workbench.action.moveActiveEditorGroupRight"
    },
    {
        "key": "ctrl+k up",
        "command": "workbench.action.moveActiveEditorGroupUp"
    },
    {
        "key": "ctrl+shift+pageup",
        "command": "workbench.action.moveEditorLeftInGroup"
    },
    {
        "key": "ctrl+shift+pagedown",
        "command": "workbench.action.moveEditorRightInGroup"
    },
    {
        "key": "shift+alt+1",
        "command": "workbench.action.moveEditorToFirstGroup"
    },
    {
        "key": "shift+alt+9",
        "command": "workbench.action.moveEditorToLastGroup"
    },
    {
        "key": "ctrl+alt+right",
        "command": "workbench.action.moveEditorToNextGroup"
    },
    {
        "key": "ctrl+alt+left",
        "command": "workbench.action.moveEditorToPreviousGroup"
    },
    {
        "key": "alt+left",
        "command": "workbench.action.navigateBack"
    },
    {
        "key": "alt+right",
        "command": "workbench.action.navigateForward"
    },
    {
        "key": "ctrl+k ctrl+q",
        "command": "workbench.action.navigateToLastEditLocation"
    },
    {
        "key": "ctrl+shift+n",
        "command": "workbench.action.newWindow"
    },
    {
        "key": "ctrl+pagedown",
        "command": "workbench.action.nextEditor"
    },
    {
        "key": "ctrl+k ctrl+pagedown",
        "command": "workbench.action.nextEditorInGroup"
    },
    {
        "key": "alt+1",
        "command": "workbench.action.openEditorAtIndex1"
    },
    {
        "key": "alt+2",
        "command": "workbench.action.openEditorAtIndex2"
    },
    {
        "key": "alt+3",
        "command": "workbench.action.openEditorAtIndex3"
    },
    {
        "key": "alt+4",
        "command": "workbench.action.openEditorAtIndex4"
    },
    {
        "key": "alt+5",
        "command": "workbench.action.openEditorAtIndex5"
    },
    {
        "key": "alt+6",
        "command": "workbench.action.openEditorAtIndex6"
    },
    {
        "key": "alt+7",
        "command": "workbench.action.openEditorAtIndex7"
    },
    {
        "key": "alt+8",
        "command": "workbench.action.openEditorAtIndex8"
    },
    {
        "key": "alt+9",
        "command": "workbench.action.openEditorAtIndex9"
    },
    {
        "key": "ctrl+k ctrl+s",
        "command": "workbench.action.openGlobalKeybindings"
    },
    {
        "key": "ctrl+r",
        "command": "workbench.action.openRecent"
    },
    {
        "key": "ctrl+,",
        "command": "workbench.action.openSettings"
    },
    {
        "key": "ctrl+shift+u",
        "command": "workbench.action.output.toggleOutput"
    },
    {
        "key": "ctrl+k shift+enter",
        "command": "workbench.action.pinEditor",
        "when": "config.workbench.editor.showTabs && !editorSticky"
    },
    {
        "key": "ctrl+pageup",
        "command": "workbench.action.previousEditor"
    },
    {
        "key": "ctrl+k ctrl+pageup",
        "command": "workbench.action.previousEditorInGroup"
    },
    {
        "key": "ctrl+e",
        "command": "workbench.action.quickOpen"
    },
    {
        "key": "ctrl+p",
        "command": "workbench.action.quickOpen"
    },
    {
        "key": "ctrl+shift+tab",
        "command": "workbench.action.quickOpenLeastRecentlyUsedEditorInGroup"
    },
    {
        "key": "ctrl+tab",
        "command": "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup"
    },
    {
        "key": "ctrl+q",
        "command": "workbench.action.quickOpenView"
    },
    {
        "key": "ctrl+shift+t",
        "command": "workbench.action.reopenClosedEditor"
    },
    {
        "key": "ctrl+shift+h",
        "command": "workbench.action.replaceInFiles"
    },
    {
        "key": "ctrl+shift+j",
        "command": "workbench.action.search.toggleQueryDetails",
        "when": "inSearchEditor || searchViewletFocus"
    },
    {
        "key": "ctrl+k ctrl+t",
        "command": "workbench.action.selectTheme"
    },
    {
        "key": "ctrl+k ctrl+p",
        "command": "workbench.action.showAllEditors"
    },
    {
        "key": "ctrl+t",
        "command": "workbench.action.showAllSymbols"
    },
    {
        "key": "f1",
        "command": "workbench.action.showCommands"
    },
    {
        "key": "ctrl+shift+p",
        "command": "workbench.action.showCommands"
    },
    {
        "key": "ctrl+\\",
        "command": "workbench.action.splitEditor"
    },
    {
        "key": "ctrl+k ctrl+\\",
        "command": "workbench.action.splitEditorOrthogonal"
    },
    {
        "key": "ctrl+shift+b",
        "command": "workbench.action.tasks.build"
    },
    {
        "key": "escape",
        "command": "workbench.action.terminal.clearSelection",
        "when": "terminalFocus && terminalProcessSupported && terminalTextSelected && !terminalFindVisible"
    },
    {
        "key": "ctrl+shift+c",
        "command": "workbench.action.terminal.copySelection",
        "when": "terminalFocus && terminalProcessSupported && terminalTextSelected"
    },
    {
        "key": "ctrl+c",
        "command": "workbench.action.terminal.copySelection",
        "when": "terminalFocus && terminalProcessSupported && terminalTextSelected"
    },
    {
        "key": "f3",
        "command": "workbench.action.terminal.findNext",
        "when": "terminalFindFocused && terminalProcessSupported || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "shift+enter",
        "command": "workbench.action.terminal.findNext",
        "when": "terminalFindFocused && terminalProcessSupported"
    },
    {
        "key": "shift+f3",
        "command": "workbench.action.terminal.findPrevious",
        "when": "terminalFindFocused && terminalProcessSupported || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "enter",
        "command": "workbench.action.terminal.findPrevious",
        "when": "terminalFindFocused && terminalProcessSupported"
    },
    {
        "key": "ctrl+f",
        "command": "workbench.action.terminal.focusFind",
        "when": "terminalFindFocused && terminalProcessSupported || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "alt+down",
        "command": "workbench.action.terminal.focusNextPane",
        "when": "terminalFocus && terminalProcessSupported"
    },
    {
        "key": "alt+right",
        "command": "workbench.action.terminal.focusNextPane",
        "when": "terminalFocus && terminalProcessSupported"
    },
    {
        "key": "alt+up",
        "command": "workbench.action.terminal.focusPreviousPane",
        "when": "terminalFocus && terminalProcessSupported"
    },
    {
        "key": "alt+left",
        "command": "workbench.action.terminal.focusPreviousPane",
        "when": "terminalFocus && terminalProcessSupported"
    },
    {
        "key": "shift+escape",
        "command": "workbench.action.terminal.hideFind",
        "when": "terminalFindVisible && terminalFocus && terminalProcessSupported"
    },
    {
        "key": "escape",
        "command": "workbench.action.terminal.hideFind",
        "when": "terminalFindVisible && terminalFocus && terminalProcessSupported"
    },
    {
        "key": "escape",
        "command": "workbench.action.terminal.navigationModeExit",
        "when": "accessibilityModeEnabled && terminalA11yTreeFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+down",
        "command": "workbench.action.terminal.navigationModeFocusNext",
        "when": "accessibilityModeEnabled && terminalA11yTreeFocus && terminalProcessSupported || accessibilityModeEnabled && terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+up",
        "command": "workbench.action.terminal.navigationModeFocusPrevious",
        "when": "accessibilityModeEnabled && terminalA11yTreeFocus && terminalProcessSupported || accessibilityModeEnabled && terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+shift+`",
        "command": "workbench.action.terminal.new"
    },
    {
        "key": "ctrl+shift+c",
        "command": "workbench.action.terminal.openNativeConsole",
        "when": "!terminalFocus"
    },
    {
        "key": "ctrl+shift+v",
        "command": "workbench.action.terminal.paste",
        "when": "terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+v",
        "command": "workbench.action.terminal.paste",
        "when": "terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+alt+pagedown",
        "command": "workbench.action.terminal.scrollDown",
        "when": "terminalFocus && terminalProcessSupported"
    },
    {
        "key": "shift+pagedown",
        "command": "workbench.action.terminal.scrollDownPage",
        "when": "terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+end",
        "command": "workbench.action.terminal.scrollToBottom",
        "when": "terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+home",
        "command": "workbench.action.terminal.scrollToTop",
        "when": "terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+alt+pageup",
        "command": "workbench.action.terminal.scrollUp",
        "when": "terminalFocus && terminalProcessSupported"
    },
    {
        "key": "shift+pageup",
        "command": "workbench.action.terminal.scrollUpPage",
        "when": "terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+v",
        "command": "workbench.action.terminal.sendSequence",
        "when": "terminalFocus && !accessibilityModeEnabled && terminalShellType == 'pwsh'",
        "args": { "text": "\u0016" }
    },
    {
        "key": "ctrl+backspace",
        "command": "workbench.action.terminal.sendSequence",
        "when": "terminalFocus",
        "args": { "text": "\u0017" }
    },
    {
        "key": "ctrl+backspace",
        "command": "workbench.action.terminal.sendSequence",
        "when": "terminalFocus && terminalShellType == 'cmd'",
        "args": { "text": "\b" }
    },
    {
        "key": "ctrl+delete",
        "command": "workbench.action.terminal.sendSequence",
        "when": "terminalFocus",
        "args": { "text": "\u001bd" }
    },
    {
        "key": "ctrl+shift+5",
        "command": "workbench.action.terminal.split",
        "when": "terminalFocus && terminalProcessSupported"
    },
    {
        "key": "alt+c",
        "command": "workbench.action.terminal.toggleFindCaseSensitive",
        "when": "terminalFindFocused && terminalProcessSupported || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "alt+r",
        "command": "workbench.action.terminal.toggleFindRegex",
        "when": "terminalFindFocused && terminalProcessSupported || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "alt+w",
        "command": "workbench.action.terminal.toggleFindWholeWord",
        "when": "terminalFindFocused && terminalProcessSupported || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+`",
        "command": "workbench.action.terminal.toggleTerminal"
    },
    {
        "key": "shift+alt+0",
        "command": "workbench.action.toggleEditorGroupLayout"
    },
    {
        "key": "f11",
        "command": "workbench.action.toggleFullScreen"
    },
    {
        "key": "ctrl+j",
        "command": "workbench.action.togglePanel"
    },
    {
        "key": "ctrl+b",
        "command": "workbench.action.toggleSidebarVisibility"
    },
    {
        "key": "ctrl+k z",
        "command": "workbench.action.toggleZenMode"
    },
    {
        "key": "ctrl+k shift+enter",
        "command": "workbench.action.unpinEditor",
        "when": "config.workbench.editor.showTabs && editorSticky"
    },
    {
        "key": "ctrl+numpad_add",
        "command": "workbench.action.zoomIn"
    },
    {
        "key": "ctrl+shift+=",
        "command": "workbench.action.zoomIn"
    },
    {
        "key": "ctrl+=",
        "command": "workbench.action.zoomIn"
    },
    {
        "key": "ctrl+numpad_subtract",
        "command": "workbench.action.zoomOut"
    },
    {
        "key": "ctrl+shift+-",
        "command": "workbench.action.zoomOut"
    },
    {
        "key": "ctrl+-",
        "command": "workbench.action.zoomOut"
    },
    {
        "key": "ctrl+numpad0",
        "command": "workbench.action.zoomReset"
    },
    {
        "key": "ctrl+shift+m",
        "command": "workbench.actions.view.problems"
    },
    {
        "key": "ctrl+shift+y",
        "command": "workbench.debug.action.toggleRepl",
        "when": "debuggersAvailable"
    },
    {
        "key": "ctrl+k ctrl+m",
        "command": "workbench.extensions.action.showRecommendedKeymapExtensions"
    },
    {
        "key": "ctrl+k c",
        "command": "workbench.files.action.compareWithClipboard"
    },
    {
        "key": "ctrl+k d",
        "command": "workbench.files.action.compareWithSaved"
    },
    {
        "key": "ctrl+k e",
        "command": "workbench.files.action.focusOpenEditorsView",
        "when": "workbench.explorer.openEditorsView.active"
    },
    {
        "key": "escape",
        "command": "workbench.statusBar.clearFocus",
        "when": "statusBarFocused"
    },
    {
        "key": "home",
        "command": "workbench.statusBar.focusFirst",
        "when": "statusBarFocused"
    },
    {
        "key": "end",
        "command": "workbench.statusBar.focusLast",
        "when": "statusBarFocused"
    },
    {
        "key": "down",
        "command": "workbench.statusBar.focusNext",
        "when": "statusBarFocused"
    },
    {
        "key": "right",
        "command": "workbench.statusBar.focusNext",
        "when": "statusBarFocused"
    },
    {
        "key": "up",
        "command": "workbench.statusBar.focusPrevious",
        "when": "statusBarFocused"
    },
    {
        "key": "left",
        "command": "workbench.statusBar.focusPrevious",
        "when": "statusBarFocused"
    },
    {
        "key": "ctrl+shift+d",
        "command": "workbench.view.debug"
    },
    {
        "key": "ctrl+shift+e",
        "command": "workbench.view.explorer"
    },
    {
        "key": "ctrl+shift+x",
        "command": "workbench.view.extensions"
    },
    {
        "key": "ctrl+shift+g",
        "command": "workbench.view.scm"
    },
    {
        "key": "ctrl+shift+f",
        "command": "workbench.view.search",
        "when": "!searchViewletVisible"
    },
    {
        "key": "ctrl+right",
        "command": "breadcrumbs.focusNextWithPicker",
        "when": "breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus"
    },
    {
        "key": "ctrl+left",
        "command": "breadcrumbs.focusPreviousWithPicker",
        "when": "breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus"
    },
    {
        "key": "escape",
        "command": "breadcrumbs.selectEditor",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "ctrl+k down",
        "command": "views.moveViewDown",
        "when": "focusedView != ''"
    },
    {
        "key": "ctrl+k left",
        "command": "views.moveViewLeft",
        "when": "focusedView != ''"
    },
    {
        "key": "ctrl+k right",
        "command": "views.moveViewRight",
        "when": "focusedView != ''"
    },
    {
        "key": "ctrl+k up",
        "command": "views.moveViewUp",
        "when": "focusedView != ''"
    },
    {
        "key": "f6",
        "command": "workbench.action.debug.pause",
        "when": "debugState == 'running'"
    },
    {
        "key": "f2",
        "command": "debug.renameWatchExpression",
        "when": "watchExpressionsFocused"
    },
    {
        "key": "f2",
        "command": "debug.setVariable",
        "when": "variablesFocused"
    },
    {
        "key": "space",
        "command": "debug.toggleBreakpoint",
        "when": "breakpointsFocused && !inputFocus"
    },
    {
        "key": "shift+delete",
        "command": "deleteFile",
        "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "delete",
        "command": "deleteFile",
        "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceMoveableToTrash && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "escape",
        "command": "editor.closeCallHierarchy",
        "when": "callHierarchyVisible && !config.editor.stablePeek"
    },
    {
        "key": "enter",
        "command": "explorer.openAndPassFocus",
        "when": "explorerViewletFocus && explorerViewletVisible && !explorerResourceIsFolder && !inputFocus"
    },
    {
        "key": "escape",
        "command": "filesExplorer.cancelCut",
        "when": "explorerResourceCut && explorerViewletVisible && filesExplorerFocus && !inputFocus"
    },
    {
        "key": "ctrl+c",
        "command": "filesExplorer.copy",
        "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !inputFocus"
    },
    {
        "key": "ctrl+x",
        "command": "filesExplorer.cut",
        "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !inputFocus"
    },
    {
        "key": "space",
        "command": "filesExplorer.openFilePreserveFocus",
        "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsFolder && !inputFocus"
    },
    {
        "key": "ctrl+v",
        "command": "filesExplorer.paste",
        "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "home",
        "command": "firstCompressedFolder",
        "when": "explorerViewletCompressedFocus && explorerViewletVisible && filesExplorerFocus && !explorerViewletCompressedFirstFocus && !inputFocus"
    },
    {
        "key": "end",
        "command": "lastCompressedFolder",
        "when": "explorerViewletCompressedFocus && explorerViewletVisible && filesExplorerFocus && !explorerViewletCompressedLastFocus && !inputFocus"
    },
    {
        "key": "delete",
        "command": "moveFileToTrash",
        "when": "explorerResourceMoveableToTrash && explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "right",
        "command": "nextCompressedFolder",
        "when": "explorerViewletCompressedFocus && explorerViewletVisible && filesExplorerFocus && !explorerViewletCompressedLastFocus && !inputFocus"
    },
    {
        "key": "left",
        "command": "previousCompressedFolder",
        "when": "explorerViewletCompressedFocus && explorerViewletVisible && filesExplorerFocus && !explorerViewletCompressedFirstFocus && !inputFocus"
    },
    {
        "key": "delete",
        "command": "remote.tunnel.closeInline",
        "when": "tunnelCloseable && tunnelViewFocus"
    },
    {
        "key": "ctrl+c",
        "command": "remote.tunnel.copyAddressInline",
        "when": "tunnelViewFocus && tunnelType == 'Detected' || tunnelViewFocus && tunnelType == 'Forwarded'"
    },
    {
        "key": "f2",
        "command": "remote.tunnel.label",
        "when": "tunnelViewFocus && tunnelType == 'Forwarded'"
    },
    {
        "key": "f2",
        "command": "renameFile",
        "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "f11",
        "command": "workbench.action.debug.stepInto",
        "when": "debugState != 'inactive'"
    },
    {
        "key": "shift+escape",
        "command": "closeReferenceSearch",
        "when": "referenceSearchVisible && !config.editor.stablePeek"
    },
    {
        "key": "escape",
        "command": "closeReferenceSearch",
        "when": "referenceSearchVisible && !config.editor.stablePeek"
    },
    {
        "key": "escape",
        "command": "notifications.hideList",
        "when": "notificationCenterVisible"
    },
    {
        "key": "escape",
        "command": "notifications.hideToasts",
        "when": "notificationToastsVisible"
    },
    {
        "key": "alt+left",
        "command": "workbench.action.quickInputBack",
        "when": "inQuickOpen"
    },
    {
        "key": "ctrl+tab",
        "command": "workbench.action.quickOpenNavigateNextInEditorPicker",
        "when": "inEditorsPicker && inQuickOpen"
    },
    {
        "key": "ctrl+e",
        "command": "workbench.action.quickOpenNavigateNextInFilePicker",
        "when": "inFilesPicker && inQuickOpen"
    },
    {
        "key": "ctrl+p",
        "command": "workbench.action.quickOpenNavigateNextInFilePicker",
        "when": "inFilesPicker && inQuickOpen"
    },
    {
        "key": "ctrl+r",
        "command": "workbench.action.quickOpenNavigateNextInRecentFilesPicker",
        "when": "inQuickOpen && inRecentFilesPicker"
    },
    {
        "key": "ctrl+q",
        "command": "workbench.action.quickOpenNavigateNextInViewPicker",
        "when": "inQuickOpen && inViewsPicker"
    },
    {
        "key": "ctrl+shift+tab",
        "command": "workbench.action.quickOpenNavigatePreviousInEditorPicker",
        "when": "inEditorsPicker && inQuickOpen"
    },
    {
        "key": "ctrl+shift+e",
        "command": "workbench.action.quickOpenNavigatePreviousInFilePicker",
        "when": "inFilesPicker && inQuickOpen"
    },
    {
        "key": "ctrl+shift+p",
        "command": "workbench.action.quickOpenNavigatePreviousInFilePicker",
        "when": "inFilesPicker && inQuickOpen"
    },
    {
        "key": "ctrl+shift+r",
        "command": "workbench.action.quickOpenNavigatePreviousInRecentFilesPicker",
        "when": "inQuickOpen && inRecentFilesPicker"
    },
    {
        "key": "ctrl+shift+q",
        "command": "workbench.action.quickOpenNavigatePreviousInViewPicker",
        "when": "inQuickOpen && inViewsPicker"
    },
    {
        "key": "ctrl+r",
        "command": "workbench.action.reloadWindow",
        "when": "isDevelopment"
    },
    {
        "key": "ctrl+shift+i",
        "command": "workbench.action.toggleDevTools",
        "when": "isDevelopment"
    },
    {
        "key": "f10",
        "command": "extension.node-debug.startWithStopOnEntry",
        "when": "!inDebugMode && debugConfigurationType == 'node'"
    },
    {
        "key": "ctrl+k ctrl+alt+s",
        "command": "git.stageSelectedRanges",
        "when": "isInDiffEditor"
    },
    {
        "key": "ctrl+shift+v",
        "command": "markdown.showPreview",
        "when": "!notebookEditorFocused && editorLangId == 'markdown'"
    },
    {
        "key": "shift+alt+f12",
        "command": "references-view.find",
        "when": "editorHasReferenceProvider"
    },
    {
        "key": "ctrl+k ctrl+n",
        "command": "git.unstageSelectedRanges",
        "when": "isInDiffEditor"
    },
    {
        "key": "ctrl+k v",
        "command": "markdown.showPreviewToSide",
        "when": "!notebookEditorFocused && editorLangId == 'markdown'"
    },
    {
        "key": "f4",
        "command": "references-view.next",
        "when": "reference-list.hasResult"
    },
    {
        "key": "ctrl+k ctrl+r",
        "command": "git.revertSelectedRanges",
        "when": "isInDiffEditor"
    },
    {
        "key": "shift+f4",
        "command": "references-view.prev",
        "when": "reference-list.hasResult"
    },
    {
        "key": "shift+alt+h",
        "command": "references-view.showCallHierarchy",
        "when": "editorHasCallHierarchyProvider"
    },
    {
        "key": null,
        "command": "acceptSelectedSuggestionOnEnter"
    },
    {
        "key": null,
        "command": "acceptSnippet"
    },
    {
        "key": null,
        "command": "actions.findWithSelection"
    },
    {
        "key": null,
        "command": "addRootFolder"
    },
    {
        "key": null,
        "command": "breadcrumbs.toggle"
    },
    {
        "key": null,
        "command": "changeEditorIndentation"
    },
    {
        "key": null,
        "command": "cleanSearchEditorState"
    },
    {
        "key": null,
        "command": "closeReferenceSearchEditor"
    },
    {
        "key": null,
        "command": "codelens.showLensesInCurrentLine"
    },
    {
        "key": null,
        "command": "columnSelect"
    },
    {
        "key": null,
        "command": "compareFiles"
    },
    {
        "key": null,
        "command": "compareSelected"
    },
    {
        "key": null,
        "command": "compositionEnd"
    },
    {
        "key": null,
        "command": "compositionStart"
    },
    {
        "key": null,
        "command": "createCursor"
    },
    {
        "key": null,
        "command": "cursorLineEnd"
    },
    {
        "key": null,
        "command": "cursorLineEndSelect"
    },
    {
        "key": null,
        "command": "cursorLineStart"
    },
    {
        "key": null,
        "command": "cursorLineStartSelect"
    },
    {
        "key": null,
        "command": "cursorRedo"
    },
    {
        "key": null,
        "command": "cursorWordEndLeft"
    },
    {
        "key": null,
        "command": "cursorWordEndLeftSelect"
    },
    {
        "key": null,
        "command": "cursorWordPartLeft"
    },
    {
        "key": null,
        "command": "cursorWordPartLeftSelect"
    },
    {
        "key": null,
        "command": "cursorWordPartRight"
    },
    {
        "key": null,
        "command": "cursorWordPartRightSelect"
    },
    {
        "key": null,
        "command": "cursorWordPartStartLeft"
    },
    {
        "key": null,
        "command": "cursorWordPartStartLeftSelect"
    },
    {
        "key": null,
        "command": "cursorWordRight"
    },
    {
        "key": null,
        "command": "cursorWordRightSelect"
    },
    {
        "key": null,
        "command": "cursorWordStartLeft"
    },
    {
        "key": null,
        "command": "cursorWordStartLeftSelect"
    },
    {
        "key": null,
        "command": "cursorWordStartRight"
    },
    {
        "key": null,
        "command": "cursorWordStartRightSelect"
    },
    {
        "key": null,
        "command": "cut"
    },
    {
        "key": null,
        "command": "debug.addConfiguration"
    },
    {
        "key": null,
        "command": "debug.addToWatchExpressions"
    },
    {
        "key": null,
        "command": "debug.breakWhenValueChanges"
    },
    {
        "key": null,
        "command": "debug.copyEvaluatePath"
    },
    {
        "key": null,
        "command": "debug.copyStackTrace"
    },
    {
        "key": null,
        "command": "debug.copyValue"
    },
    {
        "key": null,
        "command": "debug.enableOrDisableBreakpoint"
    },
    {
        "key": null,
        "command": "debug.installAdditionalDebuggers"
    },
    {
        "key": null,
        "command": "debug.jumpToCursor"
    },
    {
        "key": null,
        "command": "debug.startFromConfig"
    },
    {
        "key": null,
        "command": "default:compositionEnd"
    },
    {
        "key": null,
        "command": "default:compositionStart"
    },
    {
        "key": null,
        "command": "default:cut"
    },
    {
        "key": null,
        "command": "default:paste"
    },
    {
        "key": null,
        "command": "default:redo"
    },
    {
        "key": null,
        "command": "default:replacePreviousChar"
    },
    {
        "key": null,
        "command": "default:type"
    },
    {
        "key": null,
        "command": "default:undo"
    },
    {
        "key": null,
        "command": "deleteAllLeft"
    },
    {
        "key": null,
        "command": "deleteAllRight"
    },
    {
        "key": null,
        "command": "deleteWordEndLeft"
    },
    {
        "key": null,
        "command": "deleteWordEndRight"
    },
    {
        "key": null,
        "command": "deleteWordPartLeft"
    },
    {
        "key": null,
        "command": "deleteWordPartRight"
    },
    {
        "key": null,
        "command": "deleteWordStartLeft"
    },
    {
        "key": null,
        "command": "deleteWordStartRight"
    },
    {
        "key": null,
        "command": "editor.action.addCursorsToBottom"
    },
    {
        "key": null,
        "command": "editor.action.addCursorsToTop"
    },
    {
        "key": null,
        "command": "editor.action.addSelectionToPreviousFindMatch"
    },
    {
        "key": null,
        "command": "editor.action.clipboardCopyWithSyntaxHighlightingAction"
    },
    {
        "key": null,
        "command": "editor.action.detectIndentation"
    },
    {
        "key": null,
        "command": "editor.action.duplicateSelection"
    },
    {
        "key": null,
        "command": "editor.action.findReferences"
    },
    {
        "key": null,
        "command": "editor.action.fixAll"
    },
    {
        "key": null,
        "command": "editor.action.fontZoomIn"
    },
    {
        "key": null,
        "command": "editor.action.fontZoomOut"
    },
    {
        "key": null,
        "command": "editor.action.fontZoomReset"
    },
    {
        "key": null,
        "command": "editor.action.forceRetokenize"
    },
    {
        "key": null,
        "command": "editor.action.format"
    },
    {
        "key": null,
        "command": "editor.action.formatChanges"
    },
    {
        "key": null,
        "command": "editor.action.formatDocument.multiple"
    },
    {
        "key": null,
        "command": "editor.action.formatSelection.multiple"
    },
    {
        "key": null,
        "command": "editor.action.goToDeclaration"
    },
    {
        "key": null,
        "command": "editor.action.goToSelectionAnchor"
    },
    {
        "key": null,
        "command": "editor.action.goToTypeDefinition"
    },
    {
        "key": null,
        "command": "editor.action.indentUsingSpaces"
    },
    {
        "key": null,
        "command": "editor.action.indentUsingTabs"
    },
    {
        "key": null,
        "command": "editor.action.indentationToSpaces"
    },
    {
        "key": null,
        "command": "editor.action.indentationToTabs"
    },
    {
        "key": null,
        "command": "editor.action.inspectTMScopes"
    },
    {
        "key": null,
        "command": "editor.action.joinLines"
    },
    {
        "key": null,
        "command": "editor.action.measureExtHostLatency"
    },
    {
        "key": null,
        "command": "editor.action.moveCarretLeftAction"
    },
    {
        "key": null,
        "command": "editor.action.moveCarretRightAction"
    },
    {
        "key": null,
        "command": "editor.action.moveSelectionToPreviousFindMatch"
    },
    {
        "key": null,
        "command": "editor.action.nextCommentThreadAction"
    },
    {
        "key": null,
        "command": "editor.action.openDeclarationToTheSide"
    },
    {
        "key": null,
        "command": "editor.action.openLink"
    },
    {
        "key": null,
        "command": "editor.action.peekDeclaration"
    },
    {
        "key": null,
        "command": "editor.action.peekTypeDefinition"
    },
    {
        "key": null,
        "command": "editor.action.previewDeclaration"
    },
    {
        "key": null,
        "command": "editor.action.referenceSearch.trigger"
    },
    {
        "key": null,
        "command": "editor.action.reindentlines"
    },
    {
        "key": null,
        "command": "editor.action.reindentselectedlines"
    },
    {
        "key": null,
        "command": "editor.action.revealDeclaration"
    },
    {
        "key": null,
        "command": "editor.action.showDefinitionPreviewHover"
    },
    {
        "key": null,
        "command": "editor.action.showReferences"
    },
    {
        "key": null,
        "command": "editor.action.showSnippets"
    },
    {
        "key": null,
        "command": "editor.action.smartSelect.grow"
    },
    {
        "key": null,
        "command": "editor.action.sortLinesAscending"
    },
    {
        "key": null,
        "command": "editor.action.sortLinesDescending"
    },
    {
        "key": null,
        "command": "editor.action.startDebugTextMate"
    },
    {
        "key": null,
        "command": "editor.action.toggleColumnSelection"
    },
    {
        "key": null,
        "command": "editor.action.toggleMinimap"
    },
    {
        "key": null,
        "command": "editor.action.toggleRenderControlCharacter"
    },
    {
        "key": null,
        "command": "editor.action.toggleRenderWhitespace"
    },
    {
        "key": null,
        "command": "editor.action.transformToLowercase"
    },
    {
        "key": null,
        "command": "editor.action.transformToTitlecase"
    },
    {
        "key": null,
        "command": "editor.action.transformToUppercase"
    },
    {
        "key": null,
        "command": "editor.action.transpose"
    },
    {
        "key": null,
        "command": "editor.action.transposeLetters"
    },
    {
        "key": null,
        "command": "editor.action.wordHighlight.trigger"
    },
    {
        "key": null,
        "command": "editor.debug.action.addLogPoint"
    },
    {
        "key": null,
        "command": "editor.debug.action.conditionalBreakpoint"
    },
    {
        "key": null,
        "command": "editor.debug.action.goToNextBreakpoint"
    },
    {
        "key": null,
        "command": "editor.debug.action.goToPreviousBreakpoint"
    },
    {
        "key": null,
        "command": "editor.debug.action.runToCursor"
    },
    {
        "key": null,
        "command": "editor.debug.action.selectionToRepl"
    },
    {
        "key": null,
        "command": "editor.debug.action.selectionToWatch"
    },
    {
        "key": null,
        "command": "editor.debug.action.stepIntoTargets"
    },
    {
        "key": null,
        "command": "editor.emmet.action.balanceIn"
    },
    {
        "key": null,
        "command": "editor.emmet.action.balanceOut"
    },
    {
        "key": null,
        "command": "editor.emmet.action.decrementNumberByOne"
    },
    {
        "key": null,
        "command": "editor.emmet.action.decrementNumberByOneTenth"
    },
    {
        "key": null,
        "command": "editor.emmet.action.decrementNumberByTen"
    },
    {
        "key": null,
        "command": "editor.emmet.action.evaluateMathExpression"
    },
    {
        "key": null,
        "command": "editor.emmet.action.incrementNumberByOne"
    },
    {
        "key": null,
        "command": "editor.emmet.action.incrementNumberByOneTenth"
    },
    {
        "key": null,
        "command": "editor.emmet.action.incrementNumberByTen"
    },
    {
        "key": null,
        "command": "editor.emmet.action.matchTag"
    },
    {
        "key": null,
        "command": "editor.emmet.action.mergeLines"
    },
    {
        "key": null,
        "command": "editor.emmet.action.nextEditPoint"
    },
    {
        "key": null,
        "command": "editor.emmet.action.prevEditPoint"
    },
    {
        "key": null,
        "command": "editor.emmet.action.reflectCSSValue"
    },
    {
        "key": null,
        "command": "editor.emmet.action.removeTag"
    },
    {
        "key": null,
        "command": "editor.emmet.action.selectNextItem"
    },
    {
        "key": null,
        "command": "editor.emmet.action.selectPrevItem"
    },
    {
        "key": null,
        "command": "editor.emmet.action.splitJoinTag"
    },
    {
        "key": null,
        "command": "editor.emmet.action.toggleComment"
    },
    {
        "key": null,
        "command": "editor.emmet.action.updateImageSize"
    },
    {
        "key": null,
        "command": "editor.emmet.action.updateTag"
    },
    {
        "key": null,
        "command": "editor.emmet.action.wrapIndividualLinesWithAbbreviation"
    },
    {
        "key": null,
        "command": "editor.emmet.action.wrapWithAbbreviation"
    },
    {
        "key": null,
        "command": "emmet.expandAbbreviation"
    },
    {
        "key": null,
        "command": "explorer.download"
    },
    {
        "key": null,
        "command": "explorer.newFile"
    },
    {
        "key": null,
        "command": "explorer.newFolder"
    },
    {
        "key": null,
        "command": "explorer.openWith"
    },
    {
        "key": null,
        "command": "extension.js-debug.debugLink"
    },
    {
        "key": null,
        "command": "extension.js-debug.revealPage"
    },
    {
        "key": null,
        "command": "extension.jsProfileVisualizer.table.clearCodeLenses"
    },
    {
        "key": null,
        "command": "extension.node-debug.attachNodeProcess"
    },
    {
        "key": null,
        "command": "extension.node-debug.toggleAutoAttach"
    },
    {
        "key": null,
        "command": "extension.node-debug.toggleSkippingFile"
    },
    {
        "key": null,
        "command": "extension.node-debug2.toggleSkippingFile"
    },
    {
        "key": null,
        "command": "extension.open"
    },
    {
        "key": null,
        "command": "extension.pwa-chrome-debug.addCustomBreakpoints"
    },
    {
        "key": null,
        "command": "extension.pwa-chrome-debug.removeAllCustomBreakpoints"
    },
    {
        "key": null,
        "command": "extension.pwa-chrome-debug.removeCustomBreakpoint"
    },
    {
        "key": null,
        "command": "extension.pwa-node-debug.attachNodeProcess"
    },
    {
        "key": null,
        "command": "extension.pwa-node-debug.createDebuggerTerminal"
    },
    {
        "key": null,
        "command": "extension.pwa-node-debug.npmScript"
    },
    {
        "key": null,
        "command": "extension.pwa-node-debug.prettyPrint"
    },
    {
        "key": null,
        "command": "extension.pwa-node-debug.startProfile"
    },
    {
        "key": null,
        "command": "extension.pwa-node-debug.stopProfile"
    },
    {
        "key": null,
        "command": "extension.pwa-node-debug.toggleSkippingFile"
    },
    {
        "key": null,
        "command": "extensions.recommendedList.focus"
    },
    {
        "key": null,
        "command": "extensions.recommendedList.resetViewLocation"
    },
    {
        "key": null,
        "command": "files.openTimeline"
    },
    {
        "key": null,
        "command": "filesExplorer.findInWorkspace"
    },
    {
        "key": null,
        "command": "git._syncAll"
    },
    {
        "key": null,
        "command": "git.addRemote"
    },
    {
        "key": null,
        "command": "git.api.getRemoteSources"
    },
    {
        "key": null,
        "command": "git.api.getRepositories"
    },
    {
        "key": null,
        "command": "git.api.getRepositoryState"
    },
    {
        "key": null,
        "command": "git.branch"
    },
    {
        "key": null,
        "command": "git.branchFrom"
    },
    {
        "key": null,
        "command": "git.checkout"
    },
    {
        "key": null,
        "command": "git.clean"
    },
    {
        "key": null,
        "command": "git.cleanAll"
    },
    {
        "key": null,
        "command": "git.cleanAllTracked"
    },
    {
        "key": null,
        "command": "git.cleanAllUntracked"
    },
    {
        "key": null,
        "command": "git.clone"
    },
    {
        "key": null,
        "command": "git.close"
    },
    {
        "key": null,
        "command": "git.commit"
    },
    {
        "key": null,
        "command": "git.commitAll"
    },
    {
        "key": null,
        "command": "git.commitAllAmend"
    },
    {
        "key": null,
        "command": "git.commitAllSigned"
    },
    {
        "key": null,
        "command": "git.commitEmpty"
    },
    {
        "key": null,
        "command": "git.commitStaged"
    },
    {
        "key": null,
        "command": "git.commitStagedAmend"
    },
    {
        "key": null,
        "command": "git.commitStagedSigned"
    },
    {
        "key": null,
        "command": "git.createTag"
    },
    {
        "key": null,
        "command": "git.deleteBranch"
    },
    {
        "key": null,
        "command": "git.deleteTag"
    },
    {
        "key": null,
        "command": "git.fetch"
    },
    {
        "key": null,
        "command": "git.fetchAll"
    },
    {
        "key": null,
        "command": "git.fetchPrune"
    },
    {
        "key": null,
        "command": "git.ignore"
    },
    {
        "key": null,
        "command": "git.init"
    },
    {
        "key": null,
        "command": "git.merge"
    },
    {
        "key": null,
        "command": "git.openChange"
    },
    {
        "key": null,
        "command": "git.openFile"
    },
    {
        "key": null,
        "command": "git.openFile2"
    },
    {
        "key": null,
        "command": "git.openHEADFile"
    },
    {
        "key": null,
        "command": "git.openRepository"
    },
    {
        "key": null,
        "command": "git.openResource"
    },
    {
        "key": null,
        "command": "git.publish"
    },
    {
        "key": null,
        "command": "git.pull"
    },
    {
        "key": null,
        "command": "git.pullFrom"
    },
    {
        "key": null,
        "command": "git.pullRebase"
    },
    {
        "key": null,
        "command": "git.push"
    },
    {
        "key": null,
        "command": "git.pushForce"
    },
    {
        "key": null,
        "command": "git.pushTo"
    },
    {
        "key": null,
        "command": "git.pushToForce"
    },
    {
        "key": null,
        "command": "git.pushWithTags"
    },
    {
        "key": null,
        "command": "git.pushWithTagsForce"
    },
    {
        "key": null,
        "command": "git.rebaseAbort"
    },
    {
        "key": null,
        "command": "git.refresh"
    },
    {
        "key": null,
        "command": "git.removeRemote"
    },
    {
        "key": null,
        "command": "git.renameBranch"
    },
    {
        "key": null,
        "command": "git.restoreCommitTemplate"
    },
    {
        "key": null,
        "command": "git.revealInExplorer"
    },
    {
        "key": null,
        "command": "git.revertChange"
    },
    {
        "key": null,
        "command": "git.setLogLevel"
    },
    {
        "key": null,
        "command": "git.showOutput"
    },
    {
        "key": null,
        "command": "git.stage"
    },
    {
        "key": null,
        "command": "git.stageAll"
    },
    {
        "key": null,
        "command": "git.stageAllMerge"
    },
    {
        "key": null,
        "command": "git.stageAllTracked"
    },
    {
        "key": null,
        "command": "git.stageAllUntracked"
    },
    {
        "key": null,
        "command": "git.stageChange"
    },
    {
        "key": null,
        "command": "git.stash"
    },
    {
        "key": null,
        "command": "git.stashApply"
    },
    {
        "key": null,
        "command": "git.stashApplyLatest"
    },
    {
        "key": null,
        "command": "git.stashDrop"
    },
    {
        "key": null,
        "command": "git.stashIncludeUntracked"
    },
    {
        "key": null,
        "command": "git.stashPop"
    },
    {
        "key": null,
        "command": "git.stashPopLatest"
    },
    {
        "key": null,
        "command": "git.sync"
    },
    {
        "key": null,
        "command": "git.syncRebase"
    },
    {
        "key": null,
        "command": "git.timeline.copyCommitId"
    },
    {
        "key": null,
        "command": "git.timeline.copyCommitMessage"
    },
    {
        "key": null,
        "command": "git.timeline.openDiff"
    },
    {
        "key": null,
        "command": "git.undoCommit"
    },
    {
        "key": null,
        "command": "git.unstage"
    },
    {
        "key": null,
        "command": "git.unstageAll"
    },
    {
        "key": null,
        "command": "github.provide-token"
    },
    {
        "key": null,
        "command": "github.publish"
    },
    {
        "key": null,
        "command": "goToNextReferenceFromEmbeddedEditor"
    },
    {
        "key": null,
        "command": "goToPreviousReferenceFromEmbeddedEditor"
    },
    {
        "key": null,
        "command": "help.tweetFeedback"
    },
    {
        "key": null,
        "command": "imagePreview.zoomIn"
    },
    {
        "key": null,
        "command": "imagePreview.zoomOut"
    },
    {
        "key": null,
        "command": "javascript.goToProjectConfig"
    },
    {
        "key": null,
        "command": "javascript.reloadProjects"
    },
    {
        "key": null,
        "command": "jsBrowserBreakpoints.focus"
    },
    {
        "key": null,
        "command": "jsBrowserBreakpoints.resetViewLocation"
    },
    {
        "key": null,
        "command": "keybindings.editor.copyCommandKeybindingEntry"
    },
    {
        "key": null,
        "command": "keybindings.editor.resetKeybinding"
    },
    {
        "key": null,
        "command": "keybindings.editor.showConflicts"
    },
    {
        "key": null,
        "command": "keybindings.editor.showDefaultKeybindings"
    },
    {
        "key": null,
        "command": "keybindings.editor.showUserKeybindings"
    },
    {
        "key": null,
        "command": "lastCursorLineSelect"
    },
    {
        "key": null,
        "command": "lastCursorLineSelectDrag"
    },
    {
        "key": null,
        "command": "lastCursorWordSelect"
    },
    {
        "key": null,
        "command": "layoutEditorGroups"
    },
    {
        "key": null,
        "command": "lineBreakInsert"
    },
    {
        "key": null,
        "command": "list.focusFirstChild"
    },
    {
        "key": null,
        "command": "list.focusLastChild"
    },
    {
        "key": null,
        "command": "list.focusParent"
    },
    {
        "key": null,
        "command": "list.scrollLeft"
    },
    {
        "key": null,
        "command": "list.scrollRight"
    },
    {
        "key": null,
        "command": "list.selectAndPreserveFocus"
    },
    {
        "key": null,
        "command": "list.toggleFilterOnType"
    },
    {
        "key": null,
        "command": "list.toggleKeyboardNavigation"
    },
    {
        "key": null,
        "command": "markdown.preview.refresh"
    },
    {
        "key": null,
        "command": "markdown.preview.toggleLock"
    },
    {
        "key": null,
        "command": "markdown.showLockedPreviewToSide"
    },
    {
        "key": null,
        "command": "markdown.showPreviewSecuritySelector"
    },
    {
        "key": null,
        "command": "markdown.showSource"
    },
    {
        "key": null,
        "command": "merge-conflict.accept.all-both"
    },
    {
        "key": null,
        "command": "merge-conflict.accept.all-current"
    },
    {
        "key": null,
        "command": "merge-conflict.accept.all-incoming"
    },
    {
        "key": null,
        "command": "merge-conflict.accept.both"
    },
    {
        "key": null,
        "command": "merge-conflict.accept.current"
    },
    {
        "key": null,
        "command": "merge-conflict.accept.incoming"
    },
    {
        "key": null,
        "command": "merge-conflict.accept.selection"
    },
    {
        "key": null,
        "command": "merge-conflict.compare"
    },
    {
        "key": null,
        "command": "merge-conflict.next"
    },
    {
        "key": null,
        "command": "merge-conflict.previous"
    },
    {
        "key": null,
        "command": "notebook.cancelExecution"
    },
    {
        "key": null,
        "command": "notebook.cell.cancelExecution"
    },
    {
        "key": null,
        "command": "notebook.cell.changeLanguage"
    },
    {
        "key": null,
        "command": "notebook.cell.copy"
    },
    {
        "key": null,
        "command": "notebook.cell.cut"
    },
    {
        "key": null,
        "command": "notebook.cell.insertCodeCellAtTop"
    },
    {
        "key": null,
        "command": "notebook.cell.insertMarkdownCellAbove"
    },
    {
        "key": null,
        "command": "notebook.cell.insertMarkdownCellAtTop"
    },
    {
        "key": null,
        "command": "notebook.cell.insertMarkdownCellBelow"
    },
    {
        "key": null,
        "command": "notebook.cell.paste"
    },
    {
        "key": null,
        "command": "notebook.clearAllCellsOutputs"
    },
    {
        "key": null,
        "command": "notebook.diff.cell.revertMetadata"
    },
    {
        "key": null,
        "command": "notebook.diff.cell.revertOutputs"
    },
    {
        "key": null,
        "command": "notebook.diff.switchToText"
    },
    {
        "key": null,
        "command": "notebook.execute"
    },
    {
        "key": null,
        "command": "notebook.inspectLayout"
    },
    {
        "key": null,
        "command": "notebook.renderAllMarkdownCells"
    },
    {
        "key": null,
        "command": "notebook.selectKernel"
    },
    {
        "key": null,
        "command": "notifications.clearAll"
    },
    {
        "key": null,
        "command": "notifications.focusToasts"
    },
    {
        "key": null,
        "command": "notifications.showList"
    },
    {
        "key": null,
        "command": "notifications.toggleList"
    },
    {
        "key": null,
        "command": "npm.debugScript"
    },
    {
        "key": null,
        "command": "npm.focus"
    },
    {
        "key": null,
        "command": "npm.openScript"
    },
    {
        "key": null,
        "command": "npm.refresh"
    },
    {
        "key": null,
        "command": "npm.resetViewLocation"
    },
    {
        "key": null,
        "command": "npm.runInstall"
    },
    {
        "key": null,
        "command": "npm.runScript"
    },
    {
        "key": null,
        "command": "npm.runScriptFromFolder"
    },
    {
        "key": null,
        "command": "npm.runSelectedScript"
    },
    {
        "key": null,
        "command": "openInTerminal"
    },
    {
        "key": null,
        "command": "openReference"
    },
    {
        "key": null,
        "command": "outline.focus"
    },
    {
        "key": null,
        "command": "outline.resetViewLocation"
    },
    {
        "key": null,
        "command": "paste"
    },
    {
        "key": null,
        "command": "perfview.show"
    },
    {
        "key": null,
        "command": "php.untrustValidationExecutable"
    },
    {
        "key": null,
        "command": "problems.action.clearFilterText"
    },
    {
        "key": null,
        "command": "problems.action.copyMessage"
    },
    {
        "key": null,
        "command": "problems.action.copyRelatedInformationMessage"
    },
    {
        "key": null,
        "command": "problems.action.showMultilineMessage"
    },
    {
        "key": null,
        "command": "problems.action.showSinglelineMessage"
    },
    {
        "key": null,
        "command": "refactorPreview.discard"
    },
    {
        "key": null,
        "command": "refactorPreview.focus"
    },
    {
        "key": null,
        "command": "refactorPreview.groupByFile"
    },
    {
        "key": null,
        "command": "refactorPreview.groupByType"
    },
    {
        "key": null,
        "command": "refactorPreview.resetViewContainerLocation"
    },
    {
        "key": null,
        "command": "refactorPreview.resetViewLocation"
    },
    {
        "key": null,
        "command": "refactorPreview.toggleGrouping"
    },
    {
        "key": null,
        "command": "references-view.clear"
    },
    {
        "key": null,
        "command": "references-view.clearHistory"
    },
    {
        "key": null,
        "command": "references-view.copy"
    },
    {
        "key": null,
        "command": "references-view.copyAll"
    },
    {
        "key": null,
        "command": "references-view.copyPath"
    },
    {
        "key": null,
        "command": "references-view.findImplementations"
    },
    {
        "key": null,
        "command": "references-view.pickFromHistory"
    },
    {
        "key": null,
        "command": "references-view.refind"
    },
    {
        "key": null,
        "command": "references-view.refresh"
    },
    {
        "key": null,
        "command": "references-view.remove"
    },
    {
        "key": null,
        "command": "references-view.showIncomingCalls"
    },
    {
        "key": null,
        "command": "references-view.showOutgoingCalls"
    },
    {
        "key": null,
        "command": "references-view.tree.focus"
    },
    {
        "key": null,
        "command": "references-view.tree.resetViewLocation"
    },
    {
        "key": null,
        "command": "remote.tunnel.changeLocalPort"
    },
    {
        "key": null,
        "command": "remote.tunnel.closeCommandPalette"
    },
    {
        "key": null,
        "command": "remote.tunnel.copyAddressCommandPalette"
    },
    {
        "key": null,
        "command": "remote.tunnel.forwardCommandPalette"
    },
    {
        "key": null,
        "command": "remote.tunnel.forwardInline"
    },
    {
        "key": null,
        "command": "remote.tunnel.open"
    },
    {
        "key": null,
        "command": "remote.tunnel.refresh"
    },
    {
        "key": null,
        "command": "removeRootFolder"
    },
    {
        "key": null,
        "command": "repl.action.copyAll"
    },
    {
        "key": null,
        "command": "replacePreviousChar"
    },
    {
        "key": null,
        "command": "revealInExplorer"
    },
    {
        "key": null,
        "command": "saveAll"
    },
    {
        "key": null,
        "command": "scm.openInTerminal"
    },
    {
        "key": null,
        "command": "search.action.clearHistory"
    },
    {
        "key": null,
        "command": "search.action.clearSearchResults"
    },
    {
        "key": null,
        "command": "search.action.collapseSearchResults"
    },
    {
        "key": null,
        "command": "search.action.copyAll"
    },
    {
        "key": null,
        "command": "search.action.expandSearchResults"
    },
    {
        "key": null,
        "command": "search.action.focusSearchList"
    },
    {
        "key": null,
        "command": "search.action.openEditor"
    },
    {
        "key": null,
        "command": "search.action.openNewEditor"
    },
    {
        "key": null,
        "command": "search.action.openNewEditorToSide"
    },
    {
        "key": null,
        "command": "search.action.refreshSearchResults"
    },
    {
        "key": null,
        "command": "search.action.revealInSideBar"
    },
    {
        "key": null,
        "command": "selectFirstSuggestion"
    },
    {
        "key": null,
        "command": "selectForCompare"
    },
    {
        "key": null,
        "command": "selectLastSuggestion"
    },
    {
        "key": null,
        "command": "setContext"
    },
    {
        "key": null,
        "command": "setSelection"
    },
    {
        "key": null,
        "command": "settings.action.focusTOC"
    },
    {
        "key": null,
        "command": "settings.filterByModified"
    },
    {
        "key": null,
        "command": "settings.filterByOnline"
    },
    {
        "key": null,
        "command": "settings.switchToJSON"
    },
    {
        "key": null,
        "command": "showEditorScreenReaderNotification"
    },
    {
        "key": null,
        "command": "terminal.focus"
    },
    {
        "key": null,
        "command": "terminal.resetViewContainerLocation"
    },
    {
        "key": null,
        "command": "terminal.resetViewLocation"
    },
    {
        "key": null,
        "command": "timeline.focus"
    },
    {
        "key": null,
        "command": "timeline.resetViewLocation"
    },
    {
        "key": null,
        "command": "toggle.diff.ignoreTrimWhitespace"
    },
    {
        "key": null,
        "command": "toggle.diff.renderSideBySide"
    },
    {
        "key": null,
        "command": "toggleEscapeSequenceLogging"
    },
    {
        "key": null,
        "command": "typescript.goToProjectConfig"
    },
    {
        "key": null,
        "command": "typescript.openTsServerLog"
    },
    {
        "key": null,
        "command": "typescript.reloadProjects"
    },
    {
        "key": null,
        "command": "typescript.restartTsServer"
    },
    {
        "key": null,
        "command": "typescript.selectTypeScriptVersion"
    },
    {
        "key": null,
        "command": "update.check"
    },
    {
        "key": null,
        "command": "update.checkForVSCodeUpdate"
    },
    {
        "key": null,
        "command": "update.checking"
    },
    {
        "key": null,
        "command": "update.downloadNow"
    },
    {
        "key": null,
        "command": "update.downloading"
    },
    {
        "key": null,
        "command": "update.install"
    },
    {
        "key": null,
        "command": "update.restart"
    },
    {
        "key": null,
        "command": "update.showCurrentReleaseNotes"
    },
    {
        "key": null,
        "command": "update.updating"
    },
    {
        "key": null,
        "command": "workbench.action.acceptSelectedQuickOpenItem"
    },
    {
        "key": null,
        "command": "workbench.action.addComment"
    },
    {
        "key": null,
        "command": "workbench.action.addRootFolder"
    },
    {
        "key": null,
        "command": "workbench.action.alternativeAcceptSelectedQuickOpenItem"
    },
    {
        "key": null,
        "command": "workbench.action.clearCommandHistory"
    },
    {
        "key": null,
        "command": "workbench.action.clearEditorHistory"
    },
    {
        "key": null,
        "command": "workbench.action.clearRecentFiles"
    },
    {
        "key": null,
        "command": "workbench.action.closeEditorInAllGroups"
    },
    {
        "key": null,
        "command": "workbench.action.closeEditorsAndGroup"
    },
    {
        "key": null,
        "command": "workbench.action.closeEditorsInOtherGroups"
    },
    {
        "key": null,
        "command": "workbench.action.closeEditorsToTheLeft"
    },
    {
        "key": null,
        "command": "workbench.action.closeEditorsToTheRight"
    },
    {
        "key": null,
        "command": "workbench.action.closeOtherEditors"
    },
    {
        "key": null,
        "command": "workbench.action.closePanel"
    },
    {
        "key": null,
        "command": "workbench.action.closeSidebar"
    },
    {
        "key": null,
        "command": "workbench.action.configureLanguageBasedSettings"
    },
    {
        "key": null,
        "command": "workbench.action.configureLocale"
    },
    {
        "key": null,
        "command": "workbench.action.configureRuntimeArguments"
    },
    {
        "key": null,
        "command": "workbench.action.debug.configure"
    },
    {
        "key": null,
        "command": "workbench.action.debug.disconnect"
    },
    {
        "key": null,
        "command": "workbench.action.debug.restartFrame"
    },
    {
        "key": null,
        "command": "workbench.action.debug.reverseContinue"
    },
    {
        "key": null,
        "command": "workbench.action.debug.selectandstart"
    },
    {
        "key": null,
        "command": "workbench.action.debug.stepBack"
    },
    {
        "key": null,
        "command": "workbench.action.debug.terminateThread"
    },
    {
        "key": null,
        "command": "workbench.action.decreaseViewSize"
    },
    {
        "key": null,
        "command": "workbench.action.duplicateWorkspaceInNewWindow"
    },
    {
        "key": null,
        "command": "workbench.action.editor.changeEOL"
    },
    {
        "key": null,
        "command": "workbench.action.editor.changeEncoding"
    },
    {
        "key": null,
        "command": "workbench.action.editorLayoutSingle"
    },
    {
        "key": null,
        "command": "workbench.action.editorLayoutThreeColumns"
    },
    {
        "key": null,
        "command": "workbench.action.editorLayoutThreeRows"
    },
    {
        "key": null,
        "command": "workbench.action.editorLayoutTwoByTwoGrid"
    },
    {
        "key": null,
        "command": "workbench.action.editorLayoutTwoColumns"
    },
    {
        "key": null,
        "command": "workbench.action.editorLayoutTwoColumnsBottom"
    },
    {
        "key": null,
        "command": "workbench.action.editorLayoutTwoRows"
    },
    {
        "key": null,
        "command": "workbench.action.editorLayoutTwoRowsRight"
    },
    {
        "key": null,
        "command": "workbench.action.evenEditorWidths"
    },
    {
        "key": null,
        "command": "workbench.action.files.openFileFolderInNewWindow"
    },
    {
        "key": null,
        "command": "workbench.action.files.openFileInNewWindow"
    },
    {
        "key": null,
        "command": "workbench.action.files.openFolderInNewWindow"
    },
    {
        "key": null,
        "command": "workbench.action.files.revert"
    },
    {
        "key": null,
        "command": "workbench.action.files.saveFiles"
    },
    {
        "key": null,
        "command": "workbench.action.firstEditorInGroup"
    },
    {
        "key": null,
        "command": "workbench.action.focusActiveEditorGroup"
    },
    {
        "key": null,
        "command": "workbench.action.focusCommentsPanel"
    },
    {
        "key": null,
        "command": "workbench.action.focusLastEditorGroup"
    },
    {
        "key": null,
        "command": "workbench.action.focusNextGroup"
    },
    {
        "key": null,
        "command": "workbench.action.focusPanel"
    },
    {
        "key": null,
        "command": "workbench.action.focusPreviousGroup"
    },
    {
        "key": null,
        "command": "workbench.action.focusQuickOpen"
    },
    {
        "key": null,
        "command": "workbench.action.generateColorTheme"
    },
    {
        "key": null,
        "command": "workbench.action.increaseViewSize"
    },
    {
        "key": null,
        "command": "workbench.action.inspectContextKeys"
    },
    {
        "key": null,
        "command": "workbench.action.inspectKeyMappings"
    },
    {
        "key": null,
        "command": "workbench.action.inspectKeyMappingsJSON"
    },
    {
        "key": null,
        "command": "workbench.action.joinAllGroups"
    },
    {
        "key": null,
        "command": "workbench.action.joinTwoGroups"
    },
    {
        "key": null,
        "command": "workbench.action.logStorage"
    },
    {
        "key": null,
        "command": "workbench.action.logWorkingCopies"
    },
    {
        "key": null,
        "command": "workbench.action.manageTrustedDomain"
    },
    {
        "key": null,
        "command": "workbench.action.maximizeEditor"
    },
    {
        "key": null,
        "command": "workbench.action.minimizeOtherEditors"
    },
    {
        "key": null,
        "command": "workbench.action.moveEditorToAboveGroup"
    },
    {
        "key": null,
        "command": "workbench.action.moveEditorToBelowGroup"
    },
    {
        "key": null,
        "command": "workbench.action.moveEditorToLeftGroup"
    },
    {
        "key": null,
        "command": "workbench.action.moveEditorToRightGroup"
    },
    {
        "key": null,
        "command": "workbench.action.moveFocusedView"
    },
    {
        "key": null,
        "command": "workbench.action.moveView"
    },
    {
        "key": null,
        "command": "workbench.action.navigateDown"
    },
    {
        "key": null,
        "command": "workbench.action.navigateEditorGroups"
    },
    {
        "key": null,
        "command": "workbench.action.navigateLast"
    },
    {
        "key": null,
        "command": "workbench.action.navigateLeft"
    },
    {
        "key": null,
        "command": "workbench.action.navigateRight"
    },
    {
        "key": null,
        "command": "workbench.action.navigateUp"
    },
    {
        "key": null,
        "command": "workbench.action.newGroupAbove"
    },
    {
        "key": null,
        "command": "workbench.action.newGroupBelow"
    },
    {
        "key": null,
        "command": "workbench.action.newGroupLeft"
    },
    {
        "key": null,
        "command": "workbench.action.newGroupRight"
    },
    {
        "key": null,
        "command": "workbench.action.nextPanelView"
    },
    {
        "key": null,
        "command": "workbench.action.nextSideBarView"
    },
    {
        "key": null,
        "command": "workbench.action.openActiveLogOutputFile"
    },
    {
        "key": null,
        "command": "workbench.action.openDefaultKeybindingsFile"
    },
    {
        "key": null,
        "command": "workbench.action.openDocumentationUrl"
    },
    {
        "key": null,
        "command": "workbench.action.openEditorAtIndex"
    },
    {
        "key": null,
        "command": "workbench.action.openExtensionLogsFolder"
    },
    {
        "key": null,
        "command": "workbench.action.openFolderSettings"
    },
    {
        "key": null,
        "command": "workbench.action.openFolderSettingsFile"
    },
    {
        "key": null,
        "command": "workbench.action.openGlobalKeybindingsFile"
    },
    {
        "key": null,
        "command": "workbench.action.openGlobalSettings"
    },
    {
        "key": null,
        "command": "workbench.action.openIntroductoryVideosUrl"
    },
    {
        "key": null,
        "command": "workbench.action.openIssueReporter"
    },
    {
        "key": null,
        "command": "workbench.action.openLicenseUrl"
    },
    {
        "key": null,
        "command": "workbench.action.openLogFile"
    },
    {
        "key": null,
        "command": "workbench.action.openLogsFolder"
    },
    {
        "key": null,
        "command": "workbench.action.openNewsletterSignupUrl"
    },
    {
        "key": null,
        "command": "workbench.action.openNextRecentlyUsedEditor"
    },
    {
        "key": null,
        "command": "workbench.action.openNextRecentlyUsedEditorInGroup"
    },
    {
        "key": null,
        "command": "workbench.action.openPreviousEditorFromHistory"
    },
    {
        "key": null,
        "command": "workbench.action.openPreviousRecentlyUsedEditor"
    },
    {
        "key": null,
        "command": "workbench.action.openPreviousRecentlyUsedEditorInGroup"
    },
    {
        "key": null,
        "command": "workbench.action.openPrivacyStatementUrl"
    },
    {
        "key": null,
        "command": "workbench.action.openProcessExplorer"
    },
    {
        "key": null,
        "command": "workbench.action.openRawDefaultSettings"
    },
    {
        "key": null,
        "command": "workbench.action.openRemoteSettings"
    },
    {
        "key": null,
        "command": "workbench.action.openRequestFeatureUrl"
    },
    {
        "key": null,
        "command": "workbench.action.openSettings2"
    },
    {
        "key": null,
        "command": "workbench.action.openSettingsJson"
    },
    {
        "key": null,
        "command": "workbench.action.openSnippets"
    },
    {
        "key": null,
        "command": "workbench.action.openTipsAndTricksUrl"
    },
    {
        "key": null,
        "command": "workbench.action.openTwitterUrl"
    },
    {
        "key": null,
        "command": "workbench.action.openView"
    },
    {
        "key": null,
        "command": "workbench.action.openWorkspace"
    },
    {
        "key": null,
        "command": "workbench.action.openWorkspaceConfigFile"
    },
    {
        "key": null,
        "command": "workbench.action.openWorkspaceInNewWindow"
    },
    {
        "key": null,
        "command": "workbench.action.openWorkspaceSettings"
    },
    {
        "key": null,
        "command": "workbench.action.openWorkspaceSettingsFile"
    },
    {
        "key": null,
        "command": "workbench.action.positionPanelBottom"
    },
    {
        "key": null,
        "command": "workbench.action.positionPanelLeft"
    },
    {
        "key": null,
        "command": "workbench.action.positionPanelRight"
    },
    {
        "key": null,
        "command": "workbench.action.previousPanelView"
    },
    {
        "key": null,
        "command": "workbench.action.previousSideBarView"
    },
    {
        "key": null,
        "command": "workbench.action.problems.focus"
    },
    {
        "key": null,
        "command": "workbench.action.quickOpenLeastRecentlyUsedEditor"
    },
    {
        "key": null,
        "command": "workbench.action.quickOpenNavigateNext"
    },
    {
        "key": null,
        "command": "workbench.action.quickOpenNavigateNextInTerminalPicker"
    },
    {
        "key": null,
        "command": "workbench.action.quickOpenNavigatePrevious"
    },
    {
        "key": null,
        "command": "workbench.action.quickOpenNavigatePreviousInTerminalPicker"
    },
    {
        "key": null,
        "command": "workbench.action.quickOpenPreviousEditor"
    },
    {
        "key": null,
        "command": "workbench.action.quickOpenPreviousRecentlyUsedEditor"
    },
    {
        "key": null,
        "command": "workbench.action.quickOpenRecent"
    },
    {
        "key": null,
        "command": "workbench.action.quickOpenSelectNext"
    },
    {
        "key": null,
        "command": "workbench.action.quickOpenSelectPrevious"
    },
    {
        "key": null,
        "command": "workbench.action.quickOpenTerm"
    },
    {
        "key": null,
        "command": "workbench.action.quickPickManyToggle"
    },
    {
        "key": null,
        "command": "workbench.action.quickSwitchWindow"
    },
    {
        "key": null,
        "command": "workbench.action.quit"
    },
    {
        "key": null,
        "command": "workbench.action.reloadWindowWithExtensionsDisabled"
    },
    {
        "key": null,
        "command": "workbench.action.remote.showMenu"
    },
    {
        "key": null,
        "command": "workbench.action.removeRootFolder"
    },
    {
        "key": null,
        "command": "workbench.action.reopenWithEditor"
    },
    {
        "key": null,
        "command": "workbench.action.reportPerformanceIssueUsingReporter"
    },
    {
        "key": null,
        "command": "workbench.action.resetFocusedViewLocation"
    },
    {
        "key": null,
        "command": "workbench.action.resetViewLocations"
    },
    {
        "key": null,
        "command": "workbench.action.restartExtensionHost"
    },
    {
        "key": null,
        "command": "workbench.action.revertAndCloseActiveEditor"
    },
    {
        "key": null,
        "command": "workbench.action.saveWorkspaceAs"
    },
    {
        "key": null,
        "command": "workbench.action.selectIconTheme"
    },
    {
        "key": null,
        "command": "workbench.action.selectProductIconTheme"
    },
    {
        "key": null,
        "command": "workbench.action.setLogLevel"
    },
    {
        "key": null,
        "command": "workbench.action.showAboutDialog"
    },
    {
        "key": null,
        "command": "workbench.action.showAllEditorsByMostRecentlyUsed"
    },
    {
        "key": null,
        "command": "workbench.action.showEditorsInActiveGroup"
    },
    {
        "key": null,
        "command": "workbench.action.showEditorsInGroup"
    },
    {
        "key": null,
        "command": "workbench.action.showEmmetCommands"
    },
    {
        "key": null,
        "command": "workbench.action.showErrorsWarnings"
    },
    {
        "key": null,
        "command": "workbench.action.showInteractivePlayground"
    },
    {
        "key": null,
        "command": "workbench.action.showInterfaceOverview"
    },
    {
        "key": null,
        "command": "workbench.action.showLogs"
    },
    {
        "key": null,
        "command": "workbench.action.showRuntimeExtensions"
    },
    {
        "key": null,
        "command": "workbench.action.showWelcomePage"
    },
    {
        "key": null,
        "command": "workbench.action.splitEditorDown"
    },
    {
        "key": null,
        "command": "workbench.action.splitEditorLeft"
    },
    {
        "key": null,
        "command": "workbench.action.splitEditorRight"
    },
    {
        "key": null,
        "command": "workbench.action.splitEditorUp"
    },
    {
        "key": null,
        "command": "workbench.action.switchWindow"
    },
    {
        "key": null,
        "command": "workbench.action.tasks.configureDefaultBuildTask"
    },
    {
        "key": null,
        "command": "workbench.action.tasks.configureDefaultTestTask"
    },
    {
        "key": null,
        "command": "workbench.action.tasks.configureTaskRunner"
    },
    {
        "key": null,
        "command": "workbench.action.tasks.manageAutomaticRunning"
    },
    {
        "key": null,
        "command": "workbench.action.tasks.openUserTasks"
    },
    {
        "key": null,
        "command": "workbench.action.tasks.openWorkspaceFileTasks"
    },
    {
        "key": null,
        "command": "workbench.action.tasks.reRunTask"
    },
    {
        "key": null,
        "command": "workbench.action.tasks.restartTask"
    },
    {
        "key": null,
        "command": "workbench.action.tasks.showLog"
    },
    {
        "key": null,
        "command": "workbench.action.tasks.showTasks"
    },
    {
        "key": null,
        "command": "workbench.action.tasks.terminate"
    },
    {
        "key": null,
        "command": "workbench.action.tasks.test"
    },
    {
        "key": null,
        "command": "workbench.action.tasks.toggleProblems"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.clear"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.focus"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.focusAtIndex1"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.focusAtIndex2"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.focusAtIndex3"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.focusAtIndex4"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.focusAtIndex5"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.focusAtIndex6"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.focusAtIndex7"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.focusAtIndex8"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.focusAtIndex9"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.focusNext"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.focusPrevious"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.kill"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.manageWorkspaceShellPermissions"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.newInActiveWorkspace"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.relaunch"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.rename"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.resizePaneDown"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.resizePaneLeft"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.resizePaneRight"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.resizePaneUp"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.runActiveFile"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.runSelectedText"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.scrollToNextCommand"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.scrollToPreviousCommand"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.selectAll"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.selectDefaultShell"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.selectToNextCommand"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.selectToNextLine"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.selectToPreviousCommand"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.selectToPreviousLine"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.showEnvironmentInformation"
    },
    {
        "key": null,
        "command": "workbench.action.terminal.splitInActiveWorkspace"
    },
    {
        "key": null,
        "command": "workbench.action.toggleActivityBarVisibility"
    },
    {
        "key": null,
        "command": "workbench.action.toggleAutoSave"
    },
    {
        "key": null,
        "command": "workbench.action.toggleCenteredLayout"
    },
    {
        "key": null,
        "command": "workbench.action.toggleEditorType"
    },
    {
        "key": null,
        "command": "workbench.action.toggleEditorVisibility"
    },
    {
        "key": null,
        "command": "workbench.action.toggleEditorWidths"
    },
    {
        "key": null,
        "command": "workbench.action.toggleKeybindingsLog"
    },
    {
        "key": null,
        "command": "workbench.action.toggleMaximizedPanel"
    },
    {
        "key": null,
        "command": "workbench.action.toggleMenuBar"
    },
    {
        "key": null,
        "command": "workbench.action.toggleMultiCursorModifier"
    },
    {
        "key": null,
        "command": "workbench.action.toggleScreencastMode"
    },
    {
        "key": null,
        "command": "workbench.action.toggleSearchOnType"
    },
    {
        "key": null,
        "command": "workbench.action.toggleSharedProcess"
    },
    {
        "key": null,
        "command": "workbench.action.toggleSidebarPosition"
    },
    {
        "key": null,
        "command": "workbench.action.toggleStatusbarVisibility"
    },
    {
        "key": null,
        "command": "workbench.action.toggleTabsVisibility"
    },
    {
        "key": null,
        "command": "workbench.action.url.openUrl"
    },
    {
        "key": null,
        "command": "workbench.action.webview.openDeveloperTools"
    },
    {
        "key": null,
        "command": "workbench.action.webview.reloadWebviewAction"
    },
    {
        "key": null,
        "command": "workbench.actions.sync.compareWithLocal"
    },
    {
        "key": null,
        "command": "workbench.actions.sync.editMachineName"
    },
    {
        "key": null,
        "command": "workbench.actions.sync.replaceCurrent"
    },
    {
        "key": null,
        "command": "workbench.actions.sync.resolveResource"
    },
    {
        "key": null,
        "command": "workbench.actions.sync.turnOffSyncOnMachine"
    },
    {
        "key": null,
        "command": "workbench.actions.treeView.jsBrowserBreakpoints.collapseAll"
    },
    {
        "key": null,
        "command": "workbench.actions.treeView.jsBrowserBreakpoints.refresh"
    },
    {
        "key": null,
        "command": "workbench.actions.treeView.npm.collapseAll"
    },
    {
        "key": null,
        "command": "workbench.actions.treeView.npm.refresh"
    },
    {
        "key": null,
        "command": "workbench.actions.treeView.references-view.tree.collapseAll"
    },
    {
        "key": null,
        "command": "workbench.actions.treeView.references-view.tree.refresh"
    },
    {
        "key": null,
        "command": "workbench.actions.treeView.workbench.views.sync.localActivity.collapseAll"
    },
    {
        "key": null,
        "command": "workbench.actions.treeView.workbench.views.sync.localActivity.refresh"
    },
    {
        "key": null,
        "command": "workbench.actions.treeView.workbench.views.sync.machines.collapseAll"
    },
    {
        "key": null,
        "command": "workbench.actions.treeView.workbench.views.sync.machines.refresh"
    },
    {
        "key": null,
        "command": "workbench.actions.treeView.workbench.views.sync.merges.collapseAll"
    },
    {
        "key": null,
        "command": "workbench.actions.treeView.workbench.views.sync.merges.refresh"
    },
    {
        "key": null,
        "command": "workbench.actions.treeView.workbench.views.sync.remoteActivity.collapseAll"
    },
    {
        "key": null,
        "command": "workbench.actions.treeView.workbench.views.sync.remoteActivity.refresh"
    },
    {
        "key": null,
        "command": "workbench.actions.view.toggleProblems"
    },
    {
        "key": null,
        "command": "workbench.debug.action.focusBreakpointsView"
    },
    {
        "key": null,
        "command": "workbench.debug.action.focusCallStackView"
    },
    {
        "key": null,
        "command": "workbench.debug.action.focusRepl"
    },
    {
        "key": null,
        "command": "workbench.debug.action.focusVariablesView"
    },
    {
        "key": null,
        "command": "workbench.debug.action.focusWatchView"
    },
    {
        "key": null,
        "command": "workbench.debug.breakPointsView.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.debug.callStackView.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.debug.loadedScriptsView.focus"
    },
    {
        "key": null,
        "command": "workbench.debug.loadedScriptsView.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.debug.panel.action.clearReplAction"
    },
    {
        "key": null,
        "command": "workbench.debug.variablesView.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.debug.viewlet.action.addFunctionBreakpointAction"
    },
    {
        "key": null,
        "command": "workbench.debug.viewlet.action.disableAllBreakpoints"
    },
    {
        "key": null,
        "command": "workbench.debug.viewlet.action.enableAllBreakpoints"
    },
    {
        "key": null,
        "command": "workbench.debug.viewlet.action.reapplyBreakpointsAction"
    },
    {
        "key": null,
        "command": "workbench.debug.viewlet.action.removeAllBreakpoints"
    },
    {
        "key": null,
        "command": "workbench.debug.watchExpressionsView.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.debug.welcome.focus"
    },
    {
        "key": null,
        "command": "workbench.debug.welcome.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.explorer.fileView.focus"
    },
    {
        "key": null,
        "command": "workbench.explorer.fileView.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.explorer.openEditorsView.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.checkForUpdates"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.clearExtensionsSearchResults"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.configure"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.copyExtension"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.copyExtensionId"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.debugExtensionHost"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.disableAll"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.disableAllWorkspace"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.disableAutoUpdate"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.enableAll"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.enableAllWorkspace"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.enableAutoUpdate"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.extensionHostProfile"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.install.specificVersion"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.installExtensions"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.installVSIX"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.listBuiltInExtensions"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.listOutdatedExtensions"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.manageAuthorizedExtensionURIs"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.openExtensionsFolder"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.reinstall"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.saveExtensionHostProfile"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.showAzureExtensions"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.showDisabledExtensions"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.showEnabledExtensions"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.showExtensionsForLanguage"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.showExtensionsWithIds"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.showInstalledExtensions"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.showLanguageExtensions"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.showPopularExtensions"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.showRecommendedExtensions"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.stopExtensionHostProfile"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.toggleIgnoreExtension"
    },
    {
        "key": null,
        "command": "workbench.extensions.action.updateAllExtensions"
    },
    {
        "key": null,
        "command": "workbench.files.action.acceptLocalChanges"
    },
    {
        "key": null,
        "command": "workbench.files.action.collapseExplorerFolders"
    },
    {
        "key": null,
        "command": "workbench.files.action.compareFileWith"
    },
    {
        "key": null,
        "command": "workbench.files.action.focusFilesExplorer"
    },
    {
        "key": null,
        "command": "workbench.files.action.refreshFilesExplorer"
    },
    {
        "key": null,
        "command": "workbench.files.action.revertLocalChanges"
    },
    {
        "key": null,
        "command": "workbench.files.action.saveAllInGroup"
    },
    {
        "key": null,
        "command": "workbench.files.action.showActiveFileInExplorer"
    },
    {
        "key": null,
        "command": "workbench.getCodeExchangeProxyEndpoints"
    },
    {
        "key": null,
        "command": "workbench.output.action.clearOutput"
    },
    {
        "key": null,
        "command": "workbench.output.action.switchBetweenOutputs"
    },
    {
        "key": null,
        "command": "workbench.output.action.toggleAutoScroll"
    },
    {
        "key": null,
        "command": "workbench.panel.markers.resetViewContainerLocation"
    },
    {
        "key": null,
        "command": "workbench.panel.markers.view.focus"
    },
    {
        "key": null,
        "command": "workbench.panel.markers.view.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.panel.output.focus"
    },
    {
        "key": null,
        "command": "workbench.panel.output.resetViewContainerLocation"
    },
    {
        "key": null,
        "command": "workbench.panel.output.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.panel.repl.resetViewContainerLocation"
    },
    {
        "key": null,
        "command": "workbench.panel.repl.view.focus"
    },
    {
        "key": null,
        "command": "workbench.panel.repl.view.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.scm.focus"
    },
    {
        "key": null,
        "command": "workbench.scm.repositories.focus"
    },
    {
        "key": null,
        "command": "workbench.scm.repositories.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.scm.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.userData.actions.openSyncBackupsFolder"
    },
    {
        "key": null,
        "command": "workbench.userData.actions.signin"
    },
    {
        "key": null,
        "command": "workbench.userData.actions.turningOn"
    },
    {
        "key": null,
        "command": "workbench.userDataSync.actions.configure"
    },
    {
        "key": null,
        "command": "workbench.userDataSync.actions.manage"
    },
    {
        "key": null,
        "command": "workbench.userDataSync.actions.resolveKeybindingsConflicts"
    },
    {
        "key": null,
        "command": "workbench.userDataSync.actions.resolveSettingsConflicts"
    },
    {
        "key": null,
        "command": "workbench.userDataSync.actions.resolveSnippetsConflicts"
    },
    {
        "key": null,
        "command": "workbench.userDataSync.actions.settings"
    },
    {
        "key": null,
        "command": "workbench.userDataSync.actions.showLog"
    },
    {
        "key": null,
        "command": "workbench.userDataSync.actions.showSyncedData"
    },
    {
        "key": null,
        "command": "workbench.userDataSync.actions.syncNow"
    },
    {
        "key": null,
        "command": "workbench.userDataSync.actions.turnOff"
    },
    {
        "key": null,
        "command": "workbench.userDataSync.actions.turnOn"
    },
    {
        "key": null,
        "command": "workbench.view.debug.resetViewContainerLocation"
    },
    {
        "key": null,
        "command": "workbench.view.explorer.resetViewContainerLocation"
    },
    {
        "key": null,
        "command": "workbench.view.extension.references-view"
    },
    {
        "key": null,
        "command": "workbench.view.extension.references-view.resetViewContainerLocation"
    },
    {
        "key": null,
        "command": "workbench.view.extension.test"
    },
    {
        "key": null,
        "command": "workbench.view.extension.test.resetViewContainerLocation"
    },
    {
        "key": null,
        "command": "workbench.view.extensions.resetViewContainerLocation"
    },
    {
        "key": null,
        "command": "workbench.view.remote"
    },
    {
        "key": null,
        "command": "workbench.view.remote.resetViewContainerLocation"
    },
    {
        "key": null,
        "command": "workbench.view.scm.resetViewContainerLocation"
    },
    {
        "key": null,
        "command": "workbench.view.search.focus"
    },
    {
        "key": null,
        "command": "workbench.view.search.resetViewContainerLocation"
    },
    {
        "key": null,
        "command": "workbench.view.search.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.view.sync.resetViewContainerLocation"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.builtinFeatureExtensions.focus"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.builtinFeatureExtensions.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.builtinProgrammingLanguageExtensions.focus"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.builtinProgrammingLanguageExtensions.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.builtinThemeExtensions.focus"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.builtinThemeExtensions.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.disabled.focus"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.disabled.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.enabled.focus"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.enabled.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.installed.focus"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.installed.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.marketplace.focus"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.marketplace.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.otherRecommendations.focus"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.otherRecommendations.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.popular.focus"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.popular.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.searchBuiltin.focus"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.searchBuiltin.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.searchDisabled.focus"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.searchDisabled.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.searchEnabled.focus"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.searchEnabled.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.searchInstalled.focus"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.searchInstalled.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.searchOutdated.focus"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.searchOutdated.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.workspaceRecommendations.focus"
    },
    {
        "key": null,
        "command": "workbench.views.extensions.workspaceRecommendations.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.sync.localActivity.focus"
    },
    {
        "key": null,
        "command": "workbench.views.sync.localActivity.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.sync.machines.focus"
    },
    {
        "key": null,
        "command": "workbench.views.sync.machines.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.sync.merges.focus"
    },
    {
        "key": null,
        "command": "workbench.views.sync.merges.resetViewLocation"
    },
    {
        "key": null,
        "command": "workbench.views.sync.remoteActivity.focus"
    },
    {
        "key": null,
        "command": "workbench.views.sync.remoteActivity.resetViewLocation"
    },
]
