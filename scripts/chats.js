const matchData = {
	"Snergle": {
	  prompt1: ["In a parallel universe, I'm definitely...", "A polar bear who noms on fish all day"],
	  prompt2: ["One rule of society I'd totally rewrite...", "SUPERS MUST HAVE A SET MENU! I NEED TO KNOW THE MOZZIE STICK SCHEDULE."],
	  prompt3: ["A letter to future me would definitely include...", "I hope you made 1 million dollars, my lakehouse dreams are counting on it."],
	  selectedPrompts: [
		"In a parallel universe, I'm definitely...",
		"One rule of society I'd totally rewrite...",
		"A letter to future me would definitely include..."
	  ]
	}
  };
  

document.addEventListener('DOMContentLoaded', function() {
	localStorage.removeItem('messages');

	console.log("Chat.js loaded!");
	const inputField = document.getElementById('userInput');
	const sendIcon = document.querySelector('.send-icon');
	const msgPage = document.querySelector('.msg-page');

	// TEMP: Show a match's random prompts as the first message
	const matchName = "Snergle";
	const match = matchData[matchName];

	// Update header name
	const nameElement = document.querySelector('.active-user p');
	if (nameElement) {
	nameElement.textContent = matchName;
	}

	const reportBtn = document.querySelector('.report-btn');
	const unmatchBtn = document.querySelector('.unmatch-btn');

	if (reportBtn) {
		reportBtn.addEventListener('click', () => {
			alert("This user has been reported. Thank you.");
		});
	}

	if (unmatchBtn) {
		unmatchBtn.addEventListener('click', () => {
		alert("You have unmatched with this user.");
		// What now? clear chat, remove from localStorage, redirect..?
		});
	}

	// hardcoded for promt2
	const promptKey = "prompt2";
	const [prompt, answer] = match[promptKey];

	const msgHTML = `
    <div class="received-chats">
      <div class="received-chats-img">
        <img src="images/profile.png" />
      </div>
      <div class="received-msg">
        <div class="received-msg-inbox">
          <p><strong>${prompt}</strong><br>${answer}</p>
          <span class="time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    </div>`;
	msgPage.insertAdjacentHTML('beforeend', msgHTML);

	// Load stored messages from localStorage, to be implemented later.
	const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
	storedMessages.forEach(message => addMessageToChat(message));

	// click to send message
	sendIcon.addEventListener('click', handleSend);

	inputField.addEventListener('keydown', function(e) {
		if (e.key === 'Enter') handleSend();

	});

	function handleSend() {
		const message = inputField.value.trim();
		if (message !== '') {
			const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' })
			const newMsg = { text: message, time};

			// Save to localStorage
			storedMessages.push(newMsg);
			localStorage.setItem('messages', JSON.stringify(storedMessages))

			addMessageToChat(newMsg);
      		inputField.value = '';
      		msgPage.scrollTop = msgPage.scrollHeight;
		}
	}
	
	function addMessageToChat({ text, time }) {
		const msgHTML = `
			<div class="outgoing-msg">
			  <div class="outgoing-chats-msg">
				<p>${text}</p>
				<span class="time">${time}</span>
			  </div>
			</div>`;
		msgPage.insertAdjacentHTML('beforeend', msgHTML);
	}

});