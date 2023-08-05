const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// URL que você deseja fazer o crawling
const url = 'https://canaltech.com.br/cinema/filmes-mais-assistidos-semana-29072023/';

// Função que faz a requisição HTTP e extrai informações do HTML
async function crawl(url) {
  try {
    const response = await axios.get(url);

    // Carrega o conteúdo HTML usando a biblioteca Cheerio
    const $ = cheerio.load(response.data);

    // Gera o conteúdo do arquivo
    const content = $('h2').map((index, element) => $(element).text()).get().join('\n');

    // Cria o arquivo 'subTitles.txt' e salva o conteúdo nele
    fs.writeFile('subTitles.txt', content, 'utf8', (err) => {
      if (err) {
        console.error('Erro ao salvar o arquivo:', err);
      } else {
        console.log('Arquivo subTitles.txt salvo com sucesso!');
      }
    });
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

// Chama a função de crawling
crawl(url);
