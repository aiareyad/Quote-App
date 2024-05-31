document.addEventListener("DOMContentLoaded", function () {

    var Quotes = [
"When the going gets rough - turn to wonder.\n- Parker Palmer",
        "If you have knowledge, let others light their candles in it.\n- Margaret Fuller",
        "A bird doesn't sing because it has an answer, it sings because it has a song.\n- Maya Angelou",
        "We are not what we know but what we are willing to learn.\n- Mary Catherine Bateson",
        "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.\n- Confucius",
        "The reason people find it so hard to be happy is that they always see the past better than it was, the present worse than it is, and the future less resolved than it will be.\n- Marcel Pagnol",
        "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.\n- Marie Curie",
        "The older I get, the greater power I seem to have to help the world; I am like a snowball - the further I am rolled the more I gain.\n- Susan B. Anthony",
        "Knowledge is love and light and vision.\n- Helen Keller",
        "Wisdom is knowing what to do next. Skill is knowing how to do it. Virtue is doing it.\n- Thomas Jefferson",
        "When one door of happiness closes, another one opens; but we look so long at the closed door that we do not see the one which has opened for us.\n- Helen Keller",
        "Poor eyes limit your sight; poor vision limits your deeds.\n- Franklin Field",
        "I used to ask God to help me. Then I asked if I might help him.\n- Hudson Taylor",
        "The wise person doesn't give the right answers, but poses the right questions.\n- Claude Levi\n-Strauss",
        "What happens is not as important as how you react to what happens.\n- Ellen Glasgow",
        "The journey of a thousand miles begins with one step.\n- Lao Tzu",
        "The only true wisdom is in knowing you know nothing.\n- Socrates",
        "True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us.\n- Socrates",
        "Tell me and I'll forget; show me and I may remember; involve me and I'll understand.\n- Chinese Proverb",
        "Just remember the world is not a playground but a schoolroom. Life is not a holiday but an education. One eternal lesson for us all: to teach us how better we should love.\n- Barbra Jordan",
        "Prayer is the raising of one's mind and heart to God or the requesting of good things from God.\n- St. John Damascene, Theologian (675-746 AD)",
        "Prayer is not an old woman's idle amusement. Properly understood and applied, it is the most potent instrument of action.\n- Mahatma Gandhi",
        "Perhaps instead of bombarding God with requests for what is not, we might try, instead, asking God to open our eyes to see what is.\n- Margaret Silf",
        "Listen to the wind, it talks. Listen to the silence, it speaks. Listen to your heart, it knows.\n– Ojibwe Prayer",
        "Grace is not part of consciousness; it is the amount of light in our souls, not knowledge nor reason.\n- Pope Francis",
        "There are two ways of spreading light: to be the candle or the mirror that reflects it.\n- Edith Wharton",
        "The best way to predict the future is to invent it.\n- Alan Kay",
        "Life is 10% what happens to us and 90% how we react to it.\n- Charles R. Swindoll",
        "Your time is limited, so don't waste it living someone else's life.\n- Steve Jobs",
        "The only way to do great work is to love what you do.\n- Steve Jobs",
        "If you are not willing to risk the usual, you will have to settle for the ordinary.\n- Jim Rohn",
        "Believe you can and you're halfway there.\n- Theodore Roosevelt",
        "Do or do not, there is no try.\n- Yoda"
  ];


  var generateButton = document.getElementById("generateButton");
  var anotherButton = document.getElementById("another");
  var randomIndexDisplay = document.getElementById("randomIndex");
  var authorOutput = document.getElementById("authorOutput");
  var copyButton = document.getElementById("copyBtn");


  generateButton.addEventListener("click", function () {
    // If all items have been used, reset the array
    if (Quotes.length === 0) {
      Quotes = [
        "When the going gets rough - turn to wonder.\n- Parker Palmer",
        "If you have knowledge, let others light their candles in it.\n- Margaret Fuller",
        "A bird doesn't sing because it has an answer, it sings because it has a song.\n- Maya Angelou",
        "We are not what we know but what we are willing to learn.\n- Mary Catherine Bateson",
        "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.\n- Confucius",
        "The reason people find it so hard to be happy is that they always see the past better than it was, the present worse than it is, and the future less resolved than it will be.\n- Marcel Pagnol",
        "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.\n- Marie Curie",
        "The older I get, the greater power I seem to have to help the world; I am like a snowball - the further I am rolled the more I gain.\n- Susan B. Anthony",
        "Knowledge is love and light and vision.\n- Helen Keller",
        "Wisdom is knowing what to do next. Skill is knowing how to do it. Virtue is doing it.\n- Thomas Jefferson",
        "When one door of happiness closes, another one opens; but we look so long at the closed door that we do not see the one which has opened for us.\n- Helen Keller",
        "Poor eyes limit your sight; poor vision limits your deeds.\n- Franklin Field",
        "I used to ask God to help me. Then I asked if I might help him.\n- Hudson Taylor",
        "The wise person doesn't give the right answers, but poses the right questions.\n- Claude Levi\n-Strauss",
        "What happens is not as important as how you react to what happens.\n- Ellen Glasgow",
        "The journey of a thousand miles begins with one step.\n- Lao Tzu",
        "The only true wisdom is in knowing you know nothing.\n- Socrates",
        "True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us.\n- Socrates",
        "Tell me and I'll forget; show me and I may remember; involve me and I'll understand.\n- Chinese Proverb",
        "Just remember the world is not a playground but a schoolroom. Life is not a holiday but an education. One eternal lesson for us all: to teach us how better we should love.\n- Barbra Jordan",
        "Prayer is the raising of one's mind and heart to God or the requesting of good things from God.\n- St. John Damascene, Theologian (675-746 AD)",
        "Prayer is not an old woman's idle amusement. Properly understood and applied, it is the most potent instrument of action.\n- Mahatma Gandhi",
        "Perhaps instead of bombarding God with requests for what is not, we might try, instead, asking God to open our eyes to see what is.\n- Margaret Silf",
        "Listen to the wind, it talks. Listen to the silence, it speaks. Listen to your heart, it knows.\n– Ojibwe Prayer",
        "Grace is not part of consciousness; it is the amount of light in our souls, not knowledge nor reason.\n- Pope Francis",
        "There are two ways of spreading light: to be the candle or the mirror that reflects it.\n- Edith Wharton",
        "The best way to predict the future is to invent it.\n- Alan Kay",
        "Life is 10% what happens to us and 90% how we react to it.\n- Charles R. Swindoll",
        "Your time is limited, so don't waste it living someone else's life.\n- Steve Jobs",
        "The only way to do great work is to love what you do.\n- Steve Jobs",
        "If you are not willing to risk the usual, you will have to settle for the ordinary.\n- Jim Rohn",
        "Believe you can and you're halfway there.\n- Theodore Roosevelt",
        "Do or do not, there is no try.\n- Yoda"
          ];

    }


    var randomIndex = Math.floor(Math.random() * Quotes.length);


    var randomQuote = Quotes[randomIndex];


    Quotes.splice(randomIndex, 1);


    randomIndexDisplay.textContent = randomQuote;

    var parts = randomQuote.split("\n");
    var quote = parts[0];
    var author = parts[1];

    document.getElementById("randomIndex").innerHTML = quote;
    document.getElementById("authorOutput").innerHTML = author;

    anotherButton.addEventListener("click", function () {
        generateButton.click();

        if(clickCount === 12) {

            var lastQuote = Quotes.pop();

            // Display the last quote and author
            var parts = lastQuote.split("\n");
            var quote = parts[0];
            var author = parts[1];
    
            document.getElementById("randomIndex").innerHTML = quote;
            document.getElementById("authorOutput").innerHTML = author;
        }
    });
    
  });
});

function showQuotes() {
  document.getElementById("quoteRight").classList.remove("d-none");
  document.getElementById("quoteLeft").classList.remove("d-none");
  document.getElementById("copyBtn").classList.remove("d-none");
  document.getElementById("quoteRight").classList.replace("d-none", "d-inline");
  document.getElementById("quoteLeft").classList.replace("d-none", "d-inline");
  document.getElementById('quoteDisplay').classList.add("d-none");

  if(clickCount === 12){ 

    document.getElementById('copyBtn').classList.add('d-none');
    document.getElementById('clicks12').classList.remove('d-none');
    
  }
}

document.addEventListener("DOMContentLoaded", function () {

    var copyButton = document.getElementById("copyBtn");


    copyButton.addEventListener("click", function () {

        var quoteText = randomIndexDisplay.textContent;


        copyToClipboard(quoteText);


    });
});


function copyToClipboard(text) {
    var dummy = document.createElement("span");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function copyText(htmlElement) {

    if(!htmlElement) {
        
        return;
    }

    var elementText = htmlElement.innerText;

    var inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
}

document.querySelector('#copyBtn').onclick = function () {

    copyText(document.querySelector('#randomIndex'));
}

function displayAnother(){

    document.getElementById('generateButton').classList.add('d-none');
    document.getElementById('another').classList.remove('d-none');

    if(clickCount === 12){

        targetDiv3.classList.replace('d-none', 'd-block');
        document.getElementById('another').classList.add('d-none');
        document.getElementById('refresh').classList.remove('d-none');
        document.getElementById('copyBtn').classList.add('d-none');
        document.getElementById('clicks').classList.remove('d-none');
        document.getElementById('clicks12').classList.remove('d-none');
        
    }

}

document.getElementById('generateButton').addEventListener('click', () => {
    const card = document.getElementById('trans');
    card.classList.add('transition');

    setTimeout(() => {
        card.classList.remove('transition');
    }, 500);
});



document.getElementById('copyBtn').addEventListener('click', function() {
    var card = document.getElementById('copied');
    card.classList.replace('d-none', 'animate');

    card.addEventListener('animationend', function() {

        card.classList.replace('animate','d-none');
    }, { once: true });


});


    var clickCount = 0;

    button = document.getElementById('another');
    targetDiv = document.getElementById('clicks');
    targetDiv2 = document.getElementById('clicks10');
    targetDiv3 = document.getElementById('clicks11');

    button.addEventListener('click', function() {
        clickCount++;
    
        if (clickCount === 5) {

            targetDiv.classList.replace('d-none', 'd-block');
        }else if (clickCount === 10){

            targetDiv2.classList.replace('d-none', 'd-block');

        }
    
    });
    
    document.getElementById("refresh").addEventListener("click", function() {
        location.reload();
    });


    function showContent(){

        document.getElementById('default-bg').classList.add('d-none')
        document.getElementById('lighter').classList.remove('d-none');

    }

    function light1(){
        
        document.getElementById('second-bg').classList.remove('d-none');
        document.getElementById('first-bg').classList.add('d-none');


    }

    function light2(){

        document.getElementById('second-bg').classList.add('d-none');
        document.getElementById('third-bg').classList.remove('d-none');
    }

    function light3(){

        document.getElementById('third-bg').classList.add('d-none');
        document.getElementById('default-bg').classList.remove('d-none');
    }