var randomQuote = [
  {
    paragraph: "“So many books, so little time.”",
    authorName: "--Frank Zappa",
  },
  {
    paragraph: "“Be yourself; everyone else is already taken.”",
    authorName: "--Oscar Wilde",
  },
  {
    paragraph: "“A room without books is like a body without a soul.”",
    authorName: "--Marcus Tullius Cicero",
  },
  {
    paragraph: "“You only live once, but if you do it right, once is enough.”",
    authorName: "--Mae West",
  },
  {
    paragraph: "“If you tell the truth, you don't have to remember anything.”",
    authorName: "--Mark Twain",
  },
  {
    paragraph: "“Always forgive your enemies; nothing annoys them so much.”",
    authorName: "--Oscar Wilde",
  },
  {
    paragraph:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    authorName: "--Andre Gide, Autumn Leaves",
  },
  {
    paragraph: "“We accept the love we think we deserve.”",
    authorName: "--Stephen Chbosky, The Perks of Being a Wallflower",
  },
  {
    paragraph:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    authorName: "--Mahatma Gandhi",
  },
  {
    paragraph:
      "“A friend is someone who knows all about you and still loves you.”",
    authorName: "--Elbert Hubbard",
  },
];

var storage;
var newQuote = [];

function quote() {
  var x = Math.floor(Math.random() * randomQuote.length);

  if (newQuote.length === randomQuote.length) {
    newQuote = [];
  }

  if (newQuote.indexOf(x) != -1) {
    return quote();
  }

  newQuote.push(x);

  document.getElementById("paragraph").innerHTML = randomQuote[x].paragraph;
  document.getElementById("authorName").innerHTML = randomQuote[x].authorName;

  storage = x;
  return x;
}
