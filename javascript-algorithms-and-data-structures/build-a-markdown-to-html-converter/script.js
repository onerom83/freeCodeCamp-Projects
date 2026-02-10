
const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let texto = markdownInput.value;
  
  texto = texto.replace(/^(#{1,3})\s+(.+)$/gm, (match, grupo1, grupo2) => `<h${grupo1.length}>${grupo2}</h${grupo1.length}>`);

  texto = texto.replace(/(\*\*|__)(.*?)\1/g,"<strong>$2</strong>");

  texto = texto.replace(/(\*|_)(.*?)\1/g, "<em>$2</em>");

  texto = texto.replace(/!\[(.*?)\]\((.*?)\)/g, "<img alt='$1' src='$2'>");

  texto = texto.replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2'>$1</a>");

  texto = texto.replace(/^>\s+(.+)$/gm, "<blockquote>$1</blockquote>");
  
  return texto;
}

markdownInput.addEventListener("input", () => {
  const resultado = convertMarkdown();
  htmlOutput.textContent = resultado;
  preview.innerHTML = resultado;
});

console.log(convertMarkdown());
