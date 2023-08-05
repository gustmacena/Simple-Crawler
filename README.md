# Simple-Web-Crawler-for-Extracting-Subtitles

Web Crawler simples para extrair legendas

**Descrição:**
Este é um código simples de web crawler escrito em Node.js para extrair títulos de filmes mais assistidos em uma página da web. O programa utiliza as bibliotecas `axios` e `cheerio` para realizar requisições HTTP e analisar o HTML da página, respectivamente.

**Funcionamento:**
1. A URL de destino é definida no início do código. Neste exemplo, usamos 'https://canaltech.com.br/cinema/filmes-mais-assistidos-semana-29072023/' como URL de exemplo, mas você pode substituí-la por qualquer outra URL que contenha os títulos desejados.
2. A função `crawl()` é definida como assíncrona para permitir o uso do operador `await`. Ela recebe a URL como parâmetro.
3. A função `crawl()` realiza uma requisição HTTP usando o `axios.get()` para obter o conteúdo HTML da página.
4. O HTML é carregado em uma estrutura de dados utilizada pela biblioteca `cheerio`, que permite fazer seleções e operações nos elementos HTML como se estivesse usando o jQuery.
5. Através de seletores CSS, a função seleciona todos os elementos `<h2>` da página, que geralmente contêm os títulos dos filmes.
6. Com o método `.map()` do cheerio, o texto de cada elemento `<h2>` é extraído e armazenado em um array.
7. O array de títulos é transformado em uma única string utilizando o método `.join('\n')`, separando cada título por uma quebra de linha.
8. O conteúdo dos títulos é então salvo em um arquivo chamado 'subTitles.txt' utilizando o `fs.writeFile()`.
9. Se ocorrer algum erro durante o processo, ele é tratado pelo bloco `catch` e uma mensagem de erro é exibida no console.

**Observações:**
- Certifique-se de ter instalado o Node.js antes de executar o código.
- O uso desse crawler em sites reais deve ser feito com responsabilidade, respeitando os termos de uso e políticas de privacidade dos sites acessados.
- Substitua a URL 'https://canaltech.com.br/cinema/filmes-mais-assistidos-semana-29072023/' pela URL desejada antes de executar o código para obter títulos de filmes de outras páginas.
