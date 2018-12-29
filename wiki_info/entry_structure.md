# Entry Structure

Each entry should have a clear **title** created like this: `# Title`.  
Depending on the length, the title should be followed by a short **summary** of the contents update after each edit.

If the entry is not the top most item in the group, it should **link** to its **parent** like so:  
`[↑ Back to: 'Parent entry title'](./parent.md)` => [↑ Back to: 'Parent entry title'](./parent.md)

> Note: This may be automated in the future by a way of a script used to update table of contents for the group and links to parents and then push to the repo

> Note: other possible arrow symbols: ← → ▲ ▼ ◀ ▶ ➔ ↰ ↱ ↲ ↴ ↳ ↵  
> will decide later

Each _larger_[^larger_fn] entry should contain a ToC generated through VScode extension or written manually.

```
Table of contents
- [Group Structur](#group-structure)
- [test](#test)
  - [test](#test-1)
```

Footnotes are possible through a VScode extension. First a footnote in the actual text is needed. `Here is a footnote[^name_of_fn]` => Here is a footnote[^name_of_fn].  
Then the same tag needs to be placed somewhere in the text. Doesn't matter where, altough it is best if the footnote is written at the end of the file. => `[^name_of_fn]: Example footnote`

> Note: Actually I'm not sure if I want to have footnotes. Will decide later.

[^larger_fn]: This is dependent solely on the authors decision, but it is recomended that every entry with more than 5 headings and/or more than 2 levels of headings should be considered _larger_.
[^name_of_fn]: Example footnote.
