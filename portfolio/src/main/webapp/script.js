// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random fact to the page.
 */
function addRandomFact() {
  const facts =
      ['I can juggle (badly)', 'I am 18', 'My favorite apes are gibbons', 'I love korean bbq!', 'My favorite dessert is cookies', 'My third favorite animal are cows', 'I dont know how to whistle or snap!', 'My favorite childhood TV show is Phineas and Ferb'];

  // Pick a random fact.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}

async function giveBookRecc() {
    const responseFromServer = await fetch('/bookRecc');
    //const textFromResponse = await responseFromServer.text();
    const books = await responseFromServer.json();
    const bookContainer = document.getElementById('bookRecc-container');
    bookContainer.innerText = books["book"];
  }

  async function seeMessages()
  {
    const responseFromServer = await fetch('/list-messages');
    const messages = await responseFromServer.json();
    const messageListElement = document.getElementById('messages-container');
    messages.forEach((message) => {
        const messageElement = document.createElement('li');
        messageElement.innerText = message.messageText;
        messageListElement.appendChild(messageElement);
    })
}


