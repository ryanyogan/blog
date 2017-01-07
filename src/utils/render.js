import marked from 'marked';
import Prism from 'prismjs';

const renderer = new marked.Renderer();

/*
 * highlight the code
 *
 * @override
 * @param {any} code
 * @param {any} lang
 * @returns
 */
renderer.code = (code, lang) => {
  const highlight = Prism.highlight(code, Prism.languages[lang]
    || Prism.languages.javascript);

  return `<pre><code class="lang-${escape(lang, true)}">${highlight}</code></pre>`;
};

marked.setOptions({
  renderer,
  breaks: true,
  gfm: true,
});

export default marked;
