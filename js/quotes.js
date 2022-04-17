const quotes = [
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "Improvements are invented only by those who can feel that something is not good.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Zeus does not bring all men's plans to fulfillment.",
    author: "Homer",
  },
  {
    quote:
      "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein",
  },
  {
    quote:
      "A little sincerity is a dangerous thing, and a great deal of it is absolutely fatal.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Indolence is a delightful but distressing state; we must be doing something to be happy.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "I do beseech you to direct your efforts more to preparing youth for the path and less to preparing the path for the youth.",
    author: "Ben Lindsey",
  },
  {
    quote: "Weakness of attitude becomes weakness of character.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Someone's sitting in the shade today because someone planted a tree a long time ago.",
    author: "Warren Buffett",
  },
  {
    quote:
      "Make no little plans; they have no magic to stir men's blood...Make big plans, aim high in hope and work.",
    author: "Daniel H. Burnham",
  },
  {
    quote:
      "With malice toward none, with charity for all, ...let us strive on to finish the work we are in, ...to do all which may achieve and cherish a just and lasting peace among ourselves and with all nations.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "There is no pleasure in having nothing to do; the fun is in having lots to do and not doing it.",
    author: "Mary Wilson Little",
  },
  {
    quote:
      "My philosophy is that not only are you responsible for your life, but doing the best at this moment puts you in the best place for the next moment.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "A man is but the product of his thoughts. What he thinks, he becomes.",
    author: "Mahatma GandhiMahatma Gandhi",
  },
  {
    quote:
      "I think that anyone who comes upon a Nautilus machine suddenly will agree with me that its prototype was clearly invented at some time in history when torture was considered a reasonable alternative to diplomacy.",
    author: "Anna Quindlen",
  },
  {
    quote:
      "I like weights. You know where you stand with them. Well, sometimes you're lying under them, trying not to let them crush you, but you see, you KNOW they'd crush you if they could. There's honesty.",
    author: "T. Campbell",
  },
  {
    quote: "That indolent but agreeable condition of doing nothing.",
    author: "Pliny the Younger",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
