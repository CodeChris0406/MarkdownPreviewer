document.addEventListener('DOMContentLoaded', function() {
  const editor = document.getElementById('editor');
  const preview = document.getElementById('preview');
marked.setOptions({
  breaks: true
});

  editor.value = `
# Welcome to my Markdown Previewer!

## This is a sub-heading...
### And other things:

for example code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can make text **bold**, _italic_, and **_both_**
You can also ~~crossing stuff out~~.

That's a link to our favourite site: [links](https://www.freecodecamp.org), and
> Block Quotes

- And there are lists.
  - bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. Last but not least, images:

![React Logo w/ Text](https://raw.githubusercontent.com/facebook/react/main/fixtures/dom/public/react-logo.svg)

React Logo
`;

  document.addEventListener('DOMContentLoaded', function() {

  marked.setOptions({
    breaks: true 
  });

  const editor = document.getElementById('editor');
  const preview = document.getElementById('preview');

  editor.value = `# Markdown Previewer ... `; 

  function updatePreview() {
    preview.innerHTML = marked(editor.value);
  }

  editor.addEventListener('input', updatePreview);

  updatePreview();
});
