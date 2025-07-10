// Character Data
const characters = {
    mama: {
        name: "أم مصري",
        avatar: "👩‍🦱",
        responses: [
            "اي 😄",
            "اي 🥰",
            "اي 🤔",
            "اي 💕",
            "اي 😊",
            "اي 😅",
            "اي 🥺",
            "اي 😌",
            "اي 💖",
            "اي 😍"
        ]
    },
    baba: {
        name: "أب مصري",
        avatar: "👨‍🦱",
        responses: [
            "يا بني، إنت عايز إيه؟ قولي وأنا هساعدك! 😎",
            "يا ولدي، أنا أبوك وأعرف إيه اللي ينفعك! 🧐",
            "يا حبيبي، كلامك حلو بس مش عارف إيه اللي عايزه! 🤷‍♂️",
            "يا بني، أنا أبوك وهكون معاك طول الوقت! 💪",
            "يا ولدي، أنا أبوك وأحبك كتير! بس قولي إيه اللي محتاجه! 😊",
            "يا حبيبي، أنا أبوك وأعرف إيه اللي ينفعك! بس قولي إيه اللي في بالك! 🤔",
            "يا بني، أنا أبوك وهساعدك في أي حاجة! بس قولي إيه اللي عايزه! 💪",
            "يا ولدي، أنا أبوك وأحبك كتير! بس قولي إيه اللي محتاجه! 😌",
            "يا حبيبي، أنا أبوك وأعرف إيه اللي ينفعك! بس قولي إيه اللي في بالك! 🧐",
            "يا بني، أنا أبوك وهكون معاك طول الوقت! بس قولي إيه اللي عايزه! 💪",
            "يا ولدي، إنت عايز تخرج؟ تعال معايا! 🚗",
            "يا بني، إنت محتاج فلوس؟ قولي كم! 💰",
            "يا حبيبي، إنت عايز نلعب؟ تعال! 🎮",
            "يا ولدي، إنت محتاج نصيحة؟ أنا موجود! 💡",
            "يا بني، إنت عايز نضحك؟ قولي نكتة! 😄"
        ]
    },
    khala: {
        name: "خالة",
        avatar: "👩‍🦰",
        responses: [
            "يا حبيبي، إنت عايز إيه؟ قولي وأنا هساعدك! 😄",
            "يا بني، أنا خالتك وأعرف إيه اللي ينفعك! 🥰",
            "يا حبيبي، كلامك حلو بس مش عارف إيه اللي عايزه! 🤔",
            "يا بني، أنا خالتك وهكون معاك طول الوقت! 💕",
            "يا حبيبي، أنا خالتك وأحبك كتير! بس قولي إيه اللي محتاجه! 😊",
            "يا بني، أنا خالتك وأعرف إيه اللي ينفعك! بس قولي إيه اللي في بالك! 😅",
            "يا حبيبي، أنا خالتك وهساعدك في أي حاجة! بس قولي إيه اللي عايزه! 🥺",
            "يا بني، أنا خالتك وأحبك كتير! بس قولي إيه اللي محتاجه! 😌",
            "يا حبيبي، أنا خالتك وأعرف إيه اللي ينفعك! بس قولي إيه اللي في بالك! 💖",
            "يا بني، أنا خالتك وهكون معاك طول الوقت! بس قولي إيه اللي عايزه! 😍",
            "يا حبيبي، إنت سمعت إيه الجديد؟ قولي وأنا هساعدك! 🗣️",
            "يا بني، إنت عايز نتمشى؟ تعال معايا! 🚶‍♀️",
            "يا حبيبي، إنت محتاج نصيحة؟ أنا موجودة! 💡",
            "يا بني، إنت عايز نضحك؟ قولي نكتة! 😂",
            "يا حبيبي، إنت عايز نتمشى؟ تعال معايا! 🚶‍♀️"
        ]
    },
    "3amo": {
        name: "عمي",
        avatar: "👨‍🦳",
        responses: [
            "يا بني، إنت عايز إيه؟ قولي وأنا هساعدك! 😎",
            "يا ولدي، أنا عمك وأعرف إيه اللي ينفعك! 🧐",
            "يا حبيبي، كلامك حلو بس مش عارف إيه اللي عايزه! 🤷‍♂️",
            "يا بني، أنا عمك وهكون معاك طول الوقت! 💪",
            "يا ولدي، أنا عمك وأحبك كتير! بس قولي إيه اللي محتاجه! 😊",
            "يا حبيبي، أنا عمك وأعرف إيه اللي ينفعك! بس قولي إيه اللي في بالك! 🤔",
            "يا بني، أنا عمك وهساعدك في أي حاجة! بس قولي إيه اللي عايزه! 💪",
            "يا ولدي، أنا عمك وأحبك كتير! بس قولي إيه اللي محتاجه! 😌",
            "يا حبيبي، أنا عمك وأعرف إيه اللي ينفعك! بس قولي إيه اللي في بالك! 🧐",
            "يا بني، أنا عمك وهكون معاك طول الوقت! بس قولي إيه اللي عايزه! 💪",
            "يا ولدي، إنت عايز نلعب؟ تعال معايا! 🎮",
            "يا بني، إنت محتاج نصيحة؟ أنا موجود! 💡",
            "يا حبيبي، إنت عايز نضحك؟ قولي نكتة! 😂",
            "يا ولدي، إنت عايز نتمشى؟ تعال معايا! 🚶‍♂️",
            "يا بني، إنت عايز نلعب؟ تعال معايا! 🎮"
        ]
    },
    "3amto": {
        name: "عمتي",
        avatar: "👵",
        responses: [
            "يا حبيبي، إنت عايز إيه؟ قولي وأنا هساعدك! 😄",
            "يا بني، أنا عمتك وأعرف إيه اللي ينفعك! 🥰",
            "يا حبيبي، كلامك حلو بس مش عارف إيه اللي عايزه! 🤔",
            "يا بني، أنا عمتك وهكون معاك طول الوقت! 💕",
            "يا حبيبي، أنا عمتك وأحبك كتير! بس قولي إيه اللي محتاجه! 😊",
            "يا بني، أنا عمتك وأعرف إيه اللي ينفعك! بس قولي إيه اللي في بالك! 😅",
            "يا حبيبي، أنا عمتك وهساعدك في أي حاجة! بس قولي إيه اللي عايزه! 🥺",
            "يا بني، أنا عمتك وأحبك كتير! بس قولي إيه اللي محتاجه! 😌",
            "يا حبيبي، أنا عمتك وأعرف إيه اللي ينفعك! بس قولي إيه اللي في بالك! 💖",
            "يا بني، أنا عمتك وهكون معاك طول الوقت! بس قولي إيه اللي عايزه! 😍",
            "يا حبيبي، إنت جعان؟ تعال أطعمك! 🍽️",
            "يا بني، إنت تعبان؟ تعال نام عندي! 😴",
            "يا حبيبي، إنت محتاج نصيحة؟ قولي وأنا هساعدك! 💡",
            "يا بني، إنت عايز تحكي معايا؟ أنا موجودة! 🥰",
            "يا حبيبي، إنت محتاج حضن؟ تعال عندي! 🤗"
        ]
    },
    "7abibi": {
        name: "حبيبي",
        avatar: "👨‍💼",
        responses: [
            "يا حبيبي، إنت عايز إيه؟ قولي وأنا هساعدك! 😄",
            "يا بني، أنا حبيبي وأعرف إيه اللي ينفعك! 🥰",
            "يا حبيبي، كلامك حلو بس مش عارف إيه اللي عايزه! 🤔",
            "يا بني، أنا حبيبي وهكون معاك طول الوقت! 💕",
            "يا حبيبي، أنا حبيبي وأحبك كتير! بس قولي إيه اللي محتاجه! 😊",
            "يا بني، أنا حبيبي وأعرف إيه اللي ينفعك! بس قولي إيه اللي في بالك! 😅",
            "يا حبيبي، أنا حبيبي وهساعدك في أي حاجة! بس قولي إيه اللي عايزه! 🥺",
            "يا بني، أنا حبيبي وأحبك كتير! بس قولي إيه اللي محتاجه! 😌",
            "يا حبيبي، أنا حبيبي وأعرف إيه اللي ينفعك! بس قولي إيه اللي في بالك! 💖",
            "يا بني، أنا حبيبي وهكون معاك طول الوقت! بس قولي إيه اللي عايزه! 😍",
            "يا حبيبي، إنت عايز نخرج؟ تعال معايا! 🚗",
            "يا بني، إنت محتاج فلوس؟ قولي كم! 💰",
            "يا حبيبي، إنت عايز نلعب؟ تعال! 🎮",
            "يا بني، إنت محتاج نصيحة؟ أنا موجود! 💡",
            "يا حبيبي، إنت عايز نضحك؟ قولي نكتة! 😄"
        ]
    }
};

// Free characters
const freeCharacters = ['mama', 'baba'];

// Current state
let currentCharacter = null;
let purchasedCharacters = new Set();

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    setupCharacterSelection();
    setupChatInput();
    loadPurchasedCharacters();
});

// Setup character selection
function setupCharacterSelection() {
    const characterCards = document.querySelectorAll('.character-card');
    
    characterCards.forEach(card => {
        card.addEventListener('click', function() {
            const characterId = this.dataset.character;
            selectCharacter(characterId);
        });
    });
}

// Select character
function selectCharacter(characterId) {
    if (freeCharacters.includes(characterId) || purchasedCharacters.has(characterId)) {
        // Free or purchased character - start chat
        startChat(characterId);
    } else {
        // Premium character - show payment modal
        showPaymentModal(characterId);
    }
}

// Start chat with character
function startChat(characterId) {
    currentCharacter = characterId;
    const character = characters[characterId];
    
    // Update UI
    document.getElementById('characterSelection').style.display = 'none';
    document.getElementById('chatContainer').style.display = 'block';
    document.getElementById('currentCharacterAvatar').textContent = character.avatar;
    document.getElementById('currentCharacterName').textContent = character.name;
    
    // Add welcome message
    addMessage(character.avatar, character.name, getRandomResponse(characterId), false);
    
    // Focus on input
    document.getElementById('messageInput').focus();
}

// Show character selection
function showCharacterSelection() {
    document.getElementById('characterSelection').style.display = 'block';
    document.getElementById('chatContainer').style.display = 'none';
    currentCharacter = null;
}

// Show payment modal
function showPaymentModal(characterId) {
    const character = characters[characterId];
    document.getElementById('paymentCharacterAvatar').textContent = character.avatar;
    document.getElementById('paymentCharacterName').textContent = character.name;
    document.getElementById('paymentModal').style.display = 'block';
    
    // Store character for purchase
    document.getElementById('paymentModal').dataset.character = characterId;
}

// Close payment modal
function closePaymentModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

// Setup chat input
function setupChatInput() {
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    
    // Send on Enter
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Send on button click
    sendButton.addEventListener('click', sendMessage);
}

// Send message
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    
    if (!message || !currentCharacter) return;
    
    // Add user message
    addMessage('👤', 'أنت', message, true);
    
    // Clear input
    messageInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate AI response after delay
    setTimeout(() => {
        hideTypingIndicator();
        const character = characters[currentCharacter];
        const response = getSmartResponse(currentCharacter, message);
        addMessage(character.avatar, character.name, response, false);
    }, 1500 + Math.random() * 1000);
}

// Add message to chat
function addMessage(avatar, name, content, isUser) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : ''}`;
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <strong>${name}:</strong><br>
            ${content}
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message';
    typingDiv.id = 'typingIndicator';
    
    const character = characters[currentCharacter];
    typingDiv.innerHTML = `
        <div class="message-avatar">${character.avatar}</div>
        <div class="message-typing">
            <span>${character.name} يكتب</span>
            <div class="typing-dots">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Get smart response based on user message
function getSmartResponse(characterId, userMessage) {
    const character = characters[characterId];
    const message = userMessage.toLowerCase();
    
    // Check for specific keywords and provide contextual responses
    if (message.includes('السلام عليكم') || message.includes('سلام') || message.includes('هلا')) {
        return getGreetingResponse(characterId);
    }
    
    if (message.includes('كيف حالك') || message.includes('إزيك') || message.includes('أخبارك')) {
        return getHowAreYouResponse(characterId);
    }
    
    if (message.includes('شكرا') || message.includes('مشكور') || message.includes('تسلم')) {
        return getThankYouResponse(characterId);
    }
    
    if (message.includes('أحبك') || message.includes('بحبك') || message.includes('حبيبي')) {
        return getLoveResponse(characterId);
    }
    
    if (message.includes('نكتة') || message.includes('ضحك') || message.includes('كوميدي')) {
        return getJokeResponse(characterId);
    }
    
    if (message.includes('نصيحة') || message.includes('نصحتني') || message.includes('مشورة')) {
        return getAdviceResponse(characterId);
    }
    
    if (message.includes('جوعان') || message.includes('عايز أكل') || message.includes('طعام')) {
        return getFoodResponse(characterId);
    }
    
    if (message.includes('تعبان') || message.includes('مريض') || message.includes('عيان')) {
        return getHealthResponse(characterId);
    }
    
    if (message.includes('فلوس') || message.includes('محتاج فلوس') || message.includes('مصاري')) {
        return getMoneyResponse(characterId);
    }
    
    if (message.includes('سفر') || message.includes('سافر') || message.includes('رحلة')) {
        return getTravelResponse(characterId);
    }
    
    if (message.includes('شغل') || message.includes('وظيفة') || message.includes('عمل')) {
        return getWorkResponse(characterId);
    }
    
    if (message.includes('دراسة') || message.includes('مدرسة') || message.includes('جامعة')) {
        return getStudyResponse(characterId);
    }
    
    if (message.includes('حب') || message.includes('عشق') || message.includes('علاقة')) {
        return getRelationshipResponse(characterId);
    }
    
    if (message.includes('عائلة') || message.includes('أهل') || message.includes('بيت')) {
        return getFamilyResponse(characterId);
    }
    
    if (message.includes('رياضة') || message.includes('تمرين') || message.includes('جيم')) {
        return getSportsResponse(characterId);
    }
    
    if (message.includes('موسيقى') || message.includes('أغنية') || message.includes('غناء')) {
        return getMusicResponse(characterId);
    }
    
    if (message.includes('فيلم') || message.includes('مسلسل') || message.includes('سينما')) {
        return getMovieResponse(characterId);
    }
    
    if (message.includes('طقس') || message.includes('جو') || message.includes('حر')) {
        return getWeatherResponse(characterId);
    }
    
    if (message.includes('سيارة') || message.includes('عربية') || message.includes('قيادة')) {
        return getCarResponse(characterId);
    }
    
    if (message.includes('هاتف') || message.includes('موبايل') || message.includes('جوال')) {
        return getPhoneResponse(characterId);
    }
    
    if (message.includes('إنترنت') || message.includes('نت') || message.includes('واي فاي')) {
        return getInternetResponse(characterId);
    }
    
    if (message.includes('سؤال') || message.includes('استفسار') || message.includes('فهمت')) {
        return getQuestionResponse(characterId);
    }
    
    if (message.includes('مشكلة') || message.includes('مصيبة') || message.includes('تعبان')) {
        return getProblemResponse(characterId);
    }
    
    if (message.includes('سعادة') || message.includes('فرحان') || message.includes('مبسوط')) {
        return getHappinessResponse(characterId);
    }
    
    if (message.includes('حزن') || message.includes('زعلان') || message.includes('تعبان')) {
        return getSadnessResponse(characterId);
    }
    
    if (message.includes('غضب') || message.includes('زعلان') || message.includes('عصباني')) {
        return getAngerResponse(characterId);
    }
    
    if (message.includes('خوف') || message.includes('خايف') || message.includes('مخوف')) {
        return getFearResponse(characterId);
    }
    
    if (message.includes('أمل') || message.includes('متفائل') || message.includes('أمل')) {
        return getHopeResponse(characterId);
    }
    
    if (message.includes('نجاح') || message.includes('مبروك') || message.includes('تهانينا')) {
        return getSuccessResponse(characterId);
    }
    
    if (message.includes('فشل') || message.includes('خسران') || message.includes('مخسر')) {
        return getFailureResponse(characterId);
    }
    
    if (message.includes('صديق') || message.includes('صحاب') || message.includes('أصدقاء')) {
        return getFriendResponse(characterId);
    }
    
    if (message.includes('حلم') || message.includes('أحلام') || message.includes('طموح')) {
        return getDreamResponse(characterId);
    }
    
    if (message.includes('مستقبل') || message.includes('غد') || message.includes('بكرة')) {
        return getFutureResponse(characterId);
    }
    
    if (message.includes('ماضي') || message.includes('أمس') || message.includes('قديم')) {
        return getPastResponse(characterId);
    }
    
    if (message.includes('حاضر')) {
        if (characterId === 'mama') {
            return 'قول 😊';
        }
    }
    
    if (message.includes('يوليه')) {
        if (characterId === 'mama') {
            return 'عاوز اي ينييله';
        }
    }
    
    if (message.includes('نتي فين')) {
        if (characterId === 'mama') {
            return 'ف البيت هكون فين';
        }
    }
    
    if (message.includes('انتي منين')) {
        if (characterId === 'mama') {
            return 'فلاحه يفلاح يبن الفلاحه';
        }
    }
    
    if (message.includes('وقت') || message.includes('ساعة') || message.includes('دقيقة')) {
        return getTimeResponse(characterId);
    }
    
    if (message.includes('مكان') || message.includes('مكان') || message.includes('أين')) {
        return getPlaceResponse(characterId);
    }
    
    if (message.includes('عمر') || message.includes('سن') || message.includes('كبير')) {
        return getAgeResponse(characterId);
    }
    
    if (message.includes('جمال') || message.includes('جميل') || message.includes('حلو')) {
        return getBeautyResponse(characterId);
    }
    
    if (message.includes('قوة') || message.includes('قوي') || message.includes('شجاع')) {
        return getStrengthResponse(characterId);
    }
    
    if (message.includes('ضعف') || message.includes('ضعيف') || message.includes('عاجز')) {
        return getWeaknessResponse(characterId);
    }
    
    if (message.includes('حكمة') || message.includes('حكيم') || message.includes('عاقل')) {
        return getWisdomResponse(characterId);
    }
    
    if (message.includes('غباء') || message.includes('غبي') || message.includes('جاهل')) {
        return getStupidityResponse(characterId);
    }
    
    if (message.includes('بتكلميني كده ليه') || message.includes('بتكلميني كده') || message.includes('كده ليه')) {
        if (characterId === 'mama') {
            return 'هعملك بلوك انجز';
        }
        return getWhyTalkResponse(characterId);
    }
    
    // Default response if no specific keyword found
    return getRandomResponse(characterId);
}

// Get random response for character
function getRandomResponse(characterId) {
    const character = characters[characterId];
    const randomIndex = Math.floor(Math.random() * character.responses.length);
    return character.responses[randomIndex];
}

// Load purchased characters from localStorage
function loadPurchasedCharacters() {
    const saved = localStorage.getItem('purchasedCharacters');
    if (saved) {
        purchasedCharacters = new Set(JSON.parse(saved));
    }
}

// Save purchased characters to localStorage
function savePurchasedCharacters() {
    localStorage.setItem('purchasedCharacters', JSON.stringify([...purchasedCharacters]));
}

// Handle payment
function handlePayment(method) {
    const characterId = document.getElementById('paymentModal').dataset.character;
    
    // Simulate payment processing
    alert(`جاري معالجة الدفع عبر ${method}...`);
    
    // Simulate successful payment
    setTimeout(() => {
        purchasedCharacters.add(characterId);
        savePurchasedCharacters();
        closePaymentModal();
        alert('تم الشراء بنجاح! 🎉');
        startChat(characterId);
    }, 2000);
}

// Setup payment buttons
document.addEventListener('DOMContentLoaded', function() {
    const paymentButtons = document.querySelectorAll('.payment-btn');
    
    paymentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const method = this.textContent;
            handlePayment(method);
        });
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('paymentModal');
    if (event.target === modal) {
        closePaymentModal();
    }
});

// Smart Response Functions
function getGreetingResponse(characterId) {
    const greetings = {
        mama: [
            "وعليكم السلام اتفضل قول ومتكترش ف الكلام علشان مش طايقه نفسي"
        ],
        baba: [
            "وعليكم السلام يا بني! إزيك؟ 😎",
            "السلام عليكم يا ولدي! أهلا وسهلا! 💪",
            "هلا وغلا يا حبيبي! إزيك؟ 🧐"
        ],
        khala: [
            "وعليكم السلام يا حبيبي! إزيك؟ 😄",
            "السلام عليكم يا بني! أهلا وسهلا! 🥰",
            "هلا وغلا يا ولدي! إزيك؟ 💕"
        ],
        "3amo": [
            "وعليكم السلام يا بني! إزيك؟ 😎",
            "السلام عليكم يا ولدي! أهلا وسهلا! 💪",
            "هلا وغلا يا حبيبي! إزيك؟ 🧐"
        ],
        "3amto": [
            "وعليكم السلام يا حبيبي! إزيك؟ 😄",
            "السلام عليكم يا بني! أهلا وسهلا! 🥰",
            "هلا وغلا يا ولدي! إزيك؟ 💕"
        ],
        "7abibi": [
            "وعليكم السلام يا حبيبي! إزيك؟ 😄",
            "السلام عليكم يا بني! أهلا وسهلا! 🥰",
            "هلا وغلا يا ولدي! إزيك؟ 💕"
        ]
    };
    const responses = greetings[characterId];
    return responses[Math.floor(Math.random() * responses.length)];
}

function getHowAreYouResponse(characterId) {
    const responses = {
        mama: [
            "اي 🥰",
            "اي 😊",
            "اي 💕"
        ],
        baba: [
            "الحمد لله يا بني! إنت إزيك؟ 😎",
            "تمام يا ولدي! شكرا لسؤالك! 💪",
            "الحمد لله يا حبيبي! إنت إزيك؟ 🧐"
        ],
        khala: [
            "الحمد لله يا حبيبي! إنت إزيك؟ 😄",
            "تمام يا بني! شكرا لسؤالك! 🥰",
            "الحمد لله يا ولدي! إنت إزيك؟ 💕"
        ],
        "3amo": [
            "الحمد لله يا بني! إنت إزيك؟ 😎",
            "تمام يا ولدي! شكرا لسؤالك! 💪",
            "الحمد لله يا حبيبي! إنت إزيك؟ 🧐"
        ],
        "3amto": [
            "الحمد لله يا حبيبي! إنت إزيك؟ 😄",
            "تمام يا بني! شكرا لسؤالك! 🥰",
            "الحمد لله يا ولدي! إنت إزيك؟ 💕"
        ],
        "7abibi": [
            "الحمد لله يا حبيبي! إنت إزيك؟ 😄",
            "تمام يا بني! شكرا لسؤالك! 🥰",
            "الحمد لله يا ولدي! إنت إزيك؟ 💕"
        ]
    };
    return responses[characterId][Math.floor(Math.random() * responses[characterId].length)];
}

function getThankYouResponse(characterId) {
    const responses = {
        mama: [
            "اي 🥰",
            "اي 😊",
            "اي 💕"
        ],
        baba: [
            "العفو يا بني! أي وقت! 😎",
            "تسلم يا ولدي! أنا موجود دايما! 💪",
            "العفو يا حبيبي! حبيبي! 🧐"
        ],
        khala: [
            "العفو يا حبيبي! أي وقت! 😄",
            "تسلم يا بني! أنا موجودة دايما! 🥰",
            "العفو يا ولدي! حبيبي! 💕"
        ],
        "3amo": [
            "العفو يا بني! أي وقت! 😎",
            "تسلم يا ولدي! أنا موجود دايما! 💪",
            "العفو يا حبيبي! حبيبي! 🧐"
        ],
        "3amto": [
            "العفو يا حبيبي! أي وقت! 😄",
            "تسلم يا بني! أنا موجودة دايما! 🥰",
            "العفو يا ولدي! حبيبي! 💕"
        ],
        "7abibi": [
            "العفو يا حبيبي! أي وقت! 😄",
            "تسلم يا بني! أنا موجود دايما! 🥰",
            "العفو يا ولدي! حبيبي! 💕"
        ]
    };
    return responses[characterId][Math.floor(Math.random() * responses[characterId].length)];
}

function getLoveResponse(characterId) {
    const responses = {
        mama: [
            "اي 🥰",
            "اي 💕",
            "اي 😊"
        ],
        baba: [
            "وأنا بحبك كتير يا بني! 😎",
            "وأنا بحبك يا ولدي! حبيبي! 💪",
            "وأنا بحبك يا حبيبي! حبيبي! 🧐"
        ],
        khala: [
            "وأنا بحبك كتير يا حبيبي! 😄",
            "وأنا بحبك يا بني! حبيبي! 🥰",
            "وأنا بحبك يا ولدي! حبيبي! 💕"
        ],
        "3amo": [
            "وأنا بحبك كتير يا بني! 😎",
            "وأنا بحبك يا ولدي! حبيبي! 💪",
            "وأنا بحبك يا حبيبي! حبيبي! 🧐"
        ],
        "3amto": [
            "وأنا بحبك كتير يا حبيبي! 😄",
            "وأنا بحبك يا بني! حبيبي! 🥰",
            "وأنا بحبك يا ولدي! حبيبي! 💕"
        ],
        "7abibi": [
            "وأنا بحبك كتير يا حبيبي! 😄",
            "وأنا بحبك يا بني! حبيبي! 🥰",
            "وأنا بحبك يا ولدي! حبيبي! 💕"
        ]
    };
    return responses[characterId][Math.floor(Math.random() * responses[characterId].length)];
}

function getJokeResponse(characterId) {
    const jokes = [
        "سمعت عن اللي راح للدكتور وقاله: يا دكتور، أنا مش عارف أقرأ! قاله: إيه المشكلة؟ قال: أنا مش عارف أقرأ! 😂",
        "واحد راح للصيدلي وقاله: عايز حاجة للصداع! قاله: خد أسبرين! قال: إيه هو؟ قال: حبة! قال: إيه هي؟ 😅",
        "واحد راح للمطعم وقال للكيلر: عايز كباب! قاله: إيه؟ قال: كباب! قال: إيه؟ قال: كباب! قال: إيه؟ قال: كباب! 😄",
        "واحد راح للبقال وقاله: عايز خبز! قاله: إيه؟ قال: خبز! قال: إيه؟ قال: خبز! قال: إيه؟ قال: خبز! 🤣",
        "واحد راح للخياط وقاله: عايز قميص! قاله: إيه؟ قال: قميص! قال: إيه؟ قال: قميص! قال: إيه؟ قال: قميص! 😆"
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
}

function getAdviceResponse(characterId) {
    const advice = {
        mama: [
            "اي 🥰",
            "اي 😊",
            "اي 💕"
        ],
        baba: [
            "يا بني، خليك راجل ومسؤول! 😎",
            "يا ولدي، اشتغل بجد واتعلم! 💪",
            "يا حبيبي، خليك صادق ومخلص! 🧐"
        ],
        khala: [
            "يا حبيبي، خليك متفائل ومتفائل! 😄",
            "يا بني، اشتغل بجد واتعلم! 🥰",
            "يا ولدي، خليك صادق مع نفسك! 💕"
        ],
        "3amo": [
            "يا بني، خليك راجل ومسؤول! 😎",
            "يا ولدي، اشتغل بجد واتعلم! 💪",
            "يا حبيبي، خليك صادق ومخلص! 🧐"
        ],
        "3amto": [
            "يا حبيبي، خليك صادق مع نفسك ومع الناس! 😄",
            "يا بني، اشتغل كويس وادخر فلوسك! 🥰",
            "يا ولدي، احترم الكبير وارحم الصغير! 💕"
        ],
        "7abibi": [
            "يا حبيبي، خليك متفائل ومتفائل! 😄",
            "يا بني، اشتغل بجد واتعلم! 🥰",
            "يا ولدي، خليك صادق مع نفسك! 💕"
        ]
    };
    return advice[characterId][Math.floor(Math.random() * advice[characterId].length)];
}

function getFoodResponse(characterId) {
    const foodResponses = {
        mama: [
            "اي 🍽️",
            "اي 😊",
            "اي 🥰"
        ],
        baba: [
            "تعال يا بني! نروح ناكل كباب! 🍖",
            "يا ولدي، تعال معايا! نروح ناكل شاورما! 🥙",
            "يا حبيبي، تعال معايا! نروح ناكل بيتزا! 🍕"
        ],
        khala: [
            "تعال يا حبيبي! عندي كشري وكفتة! 🍽️",
            "يا بني، تعال أطعمك! عندي محشي وطعمية! 🥰",
            "يا ولدي، تعال عندي! عندي فول وطعمية! 😊"
        ],
        "3amo": [
            "تعال يا بني! نروح ناكل كباب! 🍖",
            "يا ولدي، تعال معايا! نروح ناكل شاورما! 🥙",
            "يا حبيبي، تعال معايا! نروح ناكل بيتزا! 🍕"
        ],
        "3amto": [
            "تعال يا حبيبي! عندي كشري وكفتة! 🍽️",
            "يا بني، تعال أطعمك! عندي محشي وطعمية! 🥰",
            "يا ولدي، تعال عندي! عندي فول وطعمية! 😊"
        ],
        "7abibi": [
            "تعال يا حبيبي! نروح ناكل كباب! 🍖",
            "يا بني، تعال معايا! نروح ناكل شاورما! 🥙",
            "يا ولدي، تعال معايا! نروح ناكل بيتزا! 🍕"
        ]
    };
    return foodResponses[characterId][Math.floor(Math.random() * foodResponses[characterId].length)];
}

function getHealthResponse(characterId) {
    const healthResponses = {
        mama: [
            "اي 😴",
            "اي 🥰",
            "اي 💊"
        ],
        baba: [
            "روح للدكتور يا بني! 😎",
            "يا ولدي، خد دواء ونام! 💪",
            "يا حبيبي، روح للدكتور! 🏥"
        ],
        khala: [
            "تعال يا حبيبي! خد دواء ونام! 😴",
            "يا بني، تعال عندي! هساعدك! 🥰",
            "يا ولدي، خد فيتامينات ونام! 💊"
        ],
        "3amo": [
            "روح للدكتور يا بني! 😎",
            "يا ولدي، خد دواء ونام! 💪",
            "يا حبيبي، روح للدكتور! 🏥"
        ],
        "3amto": [
            "تعال يا حبيبي! خد دواء ونام! 😴",
            "يا بني، تعال عندي! هساعدك! 🥰",
            "يا ولدي، خد فيتامينات ونام! 💊"
        ],
        "7abibi": [
            "روح للدكتور يا حبيبي! 😎",
            "يا بني، خد دواء ونام! 💪",
            "يا ولدي، روح للدكتور! 🏥"
        ]
    };
    return healthResponses[characterId][Math.floor(Math.random() * healthResponses[characterId].length)];
}

function getMoneyResponse(characterId) {
    const moneyResponses = {
        mama: [
            "تعال يا حبيبي! عندي فلوس! 💰",
            "يا بني، خد مني! عندي! 🥰",
            "يا ولدي، تعال خد! عندي! 💕"
        ],
        baba: [
            "كم عايز يا بني؟ 💰",
            "يا ولدي، خد مني! عندي! 💪",
            "يا حبيبي، كم عايز؟ 🧐"
        ],
        khala: [
            "تعال يا حبيبي! عندي فلوس! 💰",
            "يا بني، خد مني! عندي! 🥰",
            "يا ولدي، تعال خد! عندي! 💕"
        ],
        "3amo": [
            "كم عايز يا بني؟ 💰",
            "يا ولدي، خد مني! عندي! 💪",
            "يا حبيبي، كم عايز؟ 🧐"
        ],
        "3amto": [
            "تعال يا حبيبي! عندي فلوس! 💰",
            "يا بني، خد مني! عندي! 🥰",
            "يا ولدي، تعال خد! عندي! 💕"
        ],
        "7abibi": [
            "كم عايز يا حبيبي؟ 💰",
            "يا بني، خد مني! عندي! 🥰",
            "يا ولدي، كم عايز؟ 💕"
        ]
    };
    return moneyResponses[characterId][Math.floor(Math.random() * moneyResponses[characterId].length)];
}

function getTravelResponse(characterId) {
    const travelResponses = {
        mama: [
            "روح يا حبيبي! بس ارجع سريع! ✈️",
            "يا بني، روح! بس اتصل عليا! 🥰",
            "يا ولدي، روح! بس ارجع سريع! 💕"
        ],
        baba: [
            "روح يا بني! بس ارجع سريع! ✈️",
            "يا ولدي، روح! بس اتصل عليا! 💪",
            "يا حبيبي، روح! بس ارجع سريع! 🧐"
        ],
        khala: [
            "روح يا حبيبي! بس ارجع سريع! ✈️",
            "يا بني، روح! بس اتصل عليا! 🥰",
            "يا ولدي، روح! بس ارجع سريع! 💕"
        ],
        "3amo": [
            "روح يا بني! بس ارجع سريع! ✈️",
            "يا ولدي، روح! بس اتصل عليا! 💪",
            "يا حبيبي، روح! بس ارجع سريع! 🧐"
        ],
        "3amto": [
            "روح يا حبيبي! بس ارجع سريع! ✈️",
            "يا بني، روح! بس اتصل عليا! 🥰",
            "يا ولدي، روح! بس ارجع سريع! 💕"
        ],
        "7abibi": [
            "روح يا حبيبي! بس ارجع سريع! ✈️",
            "يا بني، روح! بس اتصل عليا! 🥰",
            "يا ولدي، روح! بس ارجع سريع! 💕"
        ]
    };
    return travelResponses[characterId][Math.floor(Math.random() * travelResponses[characterId].length)];
}

function getWorkResponse(characterId) {
    const workResponses = {
        mama: [
            "اشتغل كويس يا حبيبي! 🥰",
            "يا بني، اشتغل بجد! 😊",
            "يا ولدي، اشتغل كويس! 💕"
        ],
        baba: [
            "اشتغل كويس يا بني! 😎",
            "يا ولدي، اشتغل بجد! 💪",
            "يا حبيبي، اشتغل كويس! 🧐"
        ],
        khala: [
            "اشتغل كويس يا حبيبي! 😄",
            "يا بني، اشتغل بجد! 🥰",
            "يا ولدي، اشتغل كويس! 💕"
        ],
        "3amo": [
            "اشتغل كويس يا بني! 😎",
            "يا ولدي، اشتغل بجد! 💪",
            "يا حبيبي، اشتغل كويس! 🧐"
        ],
        "3amto": [
            "اشتغل كويس يا حبيبي! 😄",
            "يا بني، اشتغل بجد! 🥰",
            "يا ولدي، اشتغل كويس! 💕"
        ],
        "7abibi": [
            "اشتغل كويس يا حبيبي! 😄",
            "يا بني، اشتغل بجد! 🥰",
            "يا ولدي، اشتغل كويس! 💕"
        ]
    };
    return workResponses[characterId][Math.floor(Math.random() * workResponses[characterId].length)];
}

function getStudyResponse(characterId) {
    const studyResponses = {
        mama: [
            "ذاكر كويس يا حبيبي! 📚",
            "يا بني، ادرس بجد! 🥰",
            "يا ولدي، ذاكر كويس! 💕"
        ],
        baba: [
            "ذاكر كويس يا بني! 📚",
            "يا ولدي، ادرس بجد! 💪",
            "يا حبيبي، ذاكر كويس! 🧐"
        ],
        khala: [
            "ذاكر كويس يا حبيبي! 📚",
            "يا بني، ادرس بجد! 🥰",
            "يا ولدي، ذاكر كويس! 💕"
        ],
        "3amo": [
            "ذاكر كويس يا بني! 📚",
            "يا ولدي، ادرس بجد! 💪",
            "يا حبيبي، ذاكر كويس! 🧐"
        ],
        "3amto": [
            "ذاكر كويس يا حبيبي! 📚",
            "يا بني، ادرس بجد! 🥰",
            "يا ولدي، ذاكر كويس! 💕"
        ],
        "7abibi": [
            "ذاكر كويس يا حبيبي! 📚",
            "يا بني، ادرس بجد! 🥰",
            "يا ولدي، ذاكر كويس! 💕"
        ]
    };
    return studyResponses[characterId][Math.floor(Math.random() * studyResponses[characterId].length)];
}

function getRelationshipResponse(characterId) {
    const relationshipResponses = {
        mama: [
            "الحب جميل يا حبيبي! 💕",
            "يا بني، الحب حلو! 🥰",
            "يا ولدي، الحب جميل! 😊"
        ],
        baba: [
            "الحب جميل يا بني! 💕",
            "يا ولدي، الحب حلو! 💪",
            "يا حبيبي، الحب جميل! 🧐"
        ],
        khala: [
            "الحب جميل يا حبيبي! 💕",
            "يا بني، الحب حلو! 🥰",
            "يا ولدي، الحب جميل! 😊"
        ],
        "3amo": [
            "الحب جميل يا بني! 💕",
            "يا ولدي، الحب حلو! 💪",
            "يا حبيبي، الحب جميل! 🧐"
        ],
        "3amto": [
            "الحب جميل يا حبيبي! 💕",
            "يا بني، الحب حلو! 🥰",
            "يا ولدي، الحب جميل! 😊"
        ],
        "7abibi": [
            "الحب جميل يا حبيبي! 💕",
            "يا بني، الحب حلو! 🥰",
            "يا ولدي، الحب جميل! 😊"
        ]
    };
    return relationshipResponses[characterId][Math.floor(Math.random() * relationshipResponses[characterId].length)];
}

function getFamilyResponse(characterId) {
    const familyResponses = {
        mama: [
            "العائلة أهم حاجة يا حبيبي! 👨‍👩‍👧‍👦",
            "يا بني، العائلة أهم حاجة! 🥰",
            "يا ولدي، العائلة أهم حاجة! 💕"
        ],
        baba: [
            "العائلة أهم حاجة يا بني! 👨‍👩‍👧‍👦",
            "يا ولدي، العائلة أهم حاجة! 💪",
            "يا حبيبي، العائلة أهم حاجة! 🧐"
        ],
        khala: [
            "العائلة أهم حاجة يا حبيبي! 👨‍👩‍👧‍👦",
            "يا بني، العائلة أهم حاجة! 🥰",
            "يا ولدي، العائلة أهم حاجة! 💕"
        ],
        "3amo": [
            "العائلة أهم حاجة يا بني! 👨‍👩‍👧‍👦",
            "يا ولدي، العائلة أهم حاجة! 💪",
            "يا حبيبي، العائلة أهم حاجة! 🧐"
        ],
        "3amto": [
            "العائلة أهم حاجة يا حبيبي! 👨‍👩‍👧‍👦",
            "يا بني، العائلة أهم حاجة! 🥰",
            "يا ولدي، العائلة أهم حاجة! 💕"
        ],
        "7abibi": [
            "العائلة أهم حاجة يا حبيبي! 👨‍👩‍👧‍👦",
            "يا بني، العائلة أهم حاجة! 🥰",
            "يا ولدي، العائلة أهم حاجة! 💕"
        ]
    };
    return familyResponses[characterId][Math.floor(Math.random() * familyResponses[characterId].length)];
}

function getSportsResponse(characterId) {
    const sportsResponses = {
        mama: [
            "الرياضة مهمة يا حبيبي! 🏃‍♂️",
            "يا بني، الرياضة مهمة! 🥰",
            "يا ولدي، الرياضة مهمة! 💕"
        ],
        baba: [
            "الرياضة مهمة يا بني! 🏃‍♂️",
            "يا ولدي، الرياضة مهمة! 💪",
            "يا حبيبي، الرياضة مهمة! 🧐"
        ],
        khala: [
            "الرياضة مهمة يا حبيبي! 🏃‍♂️",
            "يا بني، الرياضة مهمة! 🥰",
            "يا ولدي، الرياضة مهمة! 💕"
        ],
        "3amo": [
            "الرياضة مهمة يا بني! 🏃‍♂️",
            "يا ولدي، الرياضة مهمة! 💪",
            "يا حبيبي، الرياضة مهمة! 🧐"
        ],
        "3amto": [
            "الرياضة مهمة يا حبيبي! 🏃‍♂️",
            "يا بني، الرياضة مهمة! 🥰",
            "يا ولدي، الرياضة مهمة! 💕"
        ],
        "7abibi": [
            "الرياضة مهمة يا حبيبي! 🏃‍♂️",
            "يا بني، الرياضة مهمة! 🥰",
            "يا ولدي، الرياضة مهمة! 💕"
        ]
    };
    return sportsResponses[characterId][Math.floor(Math.random() * sportsResponses[characterId].length)];
}

function getMusicResponse(characterId) {
    const musicResponses = {
        mama: [
            "الموسيقى حلوة يا حبيبي! 🎵",
            "يا بني، الموسيقى حلوة! 🥰",
            "يا ولدي، الموسيقى حلوة! 💕"
        ],
        baba: [
            "الموسيقى حلوة يا بني! 🎵",
            "يا ولدي، الموسيقى حلوة! 💪",
            "يا حبيبي، الموسيقى حلوة! 🧐"
        ],
        khala: [
            "الموسيقى حلوة يا حبيبي! 🎵",
            "يا بني، الموسيقى حلوة! 🥰",
            "يا ولدي، الموسيقى حلوة! 💕"
        ],
        "3amo": [
            "الموسيقى حلوة يا بني! 🎵",
            "يا ولدي، الموسيقى حلوة! 💪",
            "يا حبيبي، الموسيقى حلوة! 🧐"
        ],
        "3amto": [
            "الموسيقى حلوة يا حبيبي! 🎵",
            "يا بني، الموسيقى حلوة! 🥰",
            "يا ولدي، الموسيقى حلوة! 💕"
        ],
        "7abibi": [
            "الموسيقى حلوة يا حبيبي! 🎵",
            "يا بني، الموسيقى حلوة! 🥰",
            "يا ولدي، الموسيقى حلوة! 💕"
        ]
    };
    return musicResponses[characterId][Math.floor(Math.random() * musicResponses[characterId].length)];
}

function getMovieResponse(characterId) {
    const movieResponses = {
        mama: [
            "الأفلام حلوة يا حبيبي! 🎬",
            "يا بني، الأفلام حلوة! 🥰",
            "يا ولدي، الأفلام حلوة! 💕"
        ],
        baba: [
            "الأفلام حلوة يا بني! 🎬",
            "يا ولدي، الأفلام حلوة! 💪",
            "يا حبيبي، الأفلام حلوة! 🧐"
        ],
        khala: [
            "الأفلام حلوة يا حبيبي! 🎬",
            "يا بني، الأفلام حلوة! 🥰",
            "يا ولدي، الأفلام حلوة! 💕"
        ],
        "3amo": [
            "الأفلام حلوة يا بني! 🎬",
            "يا ولدي، الأفلام حلوة! 💪",
            "يا حبيبي، الأفلام حلوة! 🧐"
        ],
        "3amto": [
            "الأفلام حلوة يا حبيبي! 🎬",
            "يا بني، الأفلام حلوة! 🥰",
            "يا ولدي، الأفلام حلوة! 💕"
        ],
        "7abibi": [
            "الأفلام حلوة يا حبيبي! 🎬",
            "يا بني، الأفلام حلوة! 🥰",
            "يا ولدي، الأفلام حلوة! 💕"
        ]
    };
    return movieResponses[characterId][Math.floor(Math.random() * movieResponses[characterId].length)];
}

function getWeatherResponse(characterId) {
    const weatherResponses = {
        mama: [
            "الجو حلو يا حبيبي! ☀️",
            "يا بني، الجو حلو! 🥰",
            "يا ولدي، الجو حلو! 💕"
        ],
        baba: [
            "الجو حلو يا بني! ☀️",
            "يا ولدي، الجو حلو! 💪",
            "يا حبيبي، الجو حلو! 🧐"
        ],
        khala: [
            "الجو حلو يا حبيبي! ☀️",
            "يا بني، الجو حلو! 🥰",
            "يا ولدي، الجو حلو! 💕"
        ],
        "3amo": [
            "الجو حلو يا بني! ☀️",
            "يا ولدي، الجو حلو! 💪",
            "يا حبيبي، الجو حلو! 🧐"
        ],
        "3amto": [
            "الجو حلو يا حبيبي! ☀️",
            "يا بني، الجو حلو! 🥰",
            "يا ولدي، الجو حلو! 💕"
        ],
        "7abibi": [
            "الجو حلو يا حبيبي! ☀️",
            "يا بني، الجو حلو! 🥰",
            "يا ولدي، الجو حلو! 💕"
        ]
    };
    return weatherResponses[characterId][Math.floor(Math.random() * weatherResponses[characterId].length)];
}

function getCarResponse(characterId) {
    const carResponses = {
        mama: [
            "السيارة مهمة يا حبيبي! 🚗",
            "يا بني، السيارة مهمة! 🥰",
            "يا ولدي، السيارة مهمة! 💕"
        ],
        baba: [
            "السيارة مهمة يا بني! 🚗",
            "يا ولدي، السيارة مهمة! 💪",
            "يا حبيبي، السيارة مهمة! 🧐"
        ],
        khala: [
            "السيارة مهمة يا حبيبي! 🚗",
            "يا بني، السيارة مهمة! 🥰",
            "يا ولدي، السيارة مهمة! 💕"
        ],
        "3amo": [
            "السيارة مهمة يا بني! 🚗",
            "يا ولدي، السيارة مهمة! 💪",
            "يا حبيبي، السيارة مهمة! 🧐"
        ],
        "3amto": [
            "السيارة مهمة يا حبيبي! 🚗",
            "يا بني، السيارة مهمة! 🥰",
            "يا ولدي، السيارة مهمة! 💕"
        ],
        "7abibi": [
            "السيارة مهمة يا حبيبي! 🚗",
            "يا بني، السيارة مهمة! 🥰",
            "يا ولدي، السيارة مهمة! 💕"
        ]
    };
    return carResponses[characterId][Math.floor(Math.random() * carResponses[characterId].length)];
}

function getPhoneResponse(characterId) {
    const phoneResponses = {
        mama: [
            "الهاتف مهم يا حبيبي! 📱",
            "يا بني، الهاتف مهم! 🥰",
            "يا ولدي، الهاتف مهم! 💕"
        ],
        baba: [
            "الهاتف مهم يا بني! 📱",
            "يا ولدي، الهاتف مهم! 💪",
            "يا حبيبي، الهاتف مهم! 🧐"
        ],
        khala: [
            "الهاتف مهم يا حبيبي! 📱",
            "يا بني، الهاتف مهم! 🥰",
            "يا ولدي، الهاتف مهم! 💕"
        ],
        "3amo": [
            "الهاتف مهم يا بني! 📱",
            "يا ولدي، الهاتف مهم! 💪",
            "يا حبيبي، الهاتف مهم! 🧐"
        ],
        "3amto": [
            "الهاتف مهم يا حبيبي! 📱",
            "يا بني، الهاتف مهم! 🥰",
            "يا ولدي، الهاتف مهم! 💕"
        ],
        "7abibi": [
            "الهاتف مهم يا حبيبي! 📱",
            "يا بني، الهاتف مهم! 🥰",
            "يا ولدي، الهاتف مهم! 💕"
        ]
    };
    return phoneResponses[characterId][Math.floor(Math.random() * phoneResponses[characterId].length)];
}

function getInternetResponse(characterId) {
    const internetResponses = {
        mama: [
            "الإنترنت مهم يا حبيبي! 🌐",
            "يا بني، الإنترنت مهم! 🥰",
            "يا ولدي، الإنترنت مهم! 💕"
        ],
        baba: [
            "الإنترنت مهم يا بني! 🌐",
            "يا ولدي، الإنترنت مهم! 💪",
            "يا حبيبي، الإنترنت مهم! 🧐"
        ],
        khala: [
            "الإنترنت مهم يا حبيبي! 🌐",
            "يا بني، الإنترنت مهم! 🥰",
            "يا ولدي، الإنترنت مهم! 💕"
        ],
        "3amo": [
            "الإنترنت مهم يا بني! 🌐",
            "يا ولدي، الإنترنت مهم! 💪",
            "يا حبيبي، الإنترنت مهم! 🧐"
        ],
        "3amto": [
            "الإنترنت مهم يا حبيبي! 🌐",
            "يا بني، الإنترنت مهم! 🥰",
            "يا ولدي، الإنترنت مهم! 💕"
        ],
        "7abibi": [
            "الإنترنت مهم يا حبيبي! 🌐",
            "يا بني، الإنترنت مهم! 🥰",
            "يا ولدي، الإنترنت مهم! 💕"
        ]
    };
    return internetResponses[characterId][Math.floor(Math.random() * internetResponses[characterId].length)];
}

function getQuestionResponse(characterId) {
    const questionResponses = {
        mama: [
            "اسأل يا حبيبي! أنا موجودة! 🥰",
            "يا بني، اسأل! أنا موجودة! 😊",
            "يا ولدي، اسأل! أنا موجودة! 💕"
        ],
        baba: [
            "اسأل يا بني! أنا موجود! 😎",
            "يا ولدي، اسأل! أنا موجود! 💪",
            "يا حبيبي، اسأل! أنا موجود! 🧐"
        ],
        khala: [
            "اسأل يا حبيبي! أنا موجودة! 😄",
            "يا بني، اسأل! أنا موجودة! 🥰",
            "يا ولدي، اسأل! أنا موجودة! 💕"
        ],
        "3amo": [
            "اسأل يا بني! أنا موجود! 😎",
            "يا ولدي، اسأل! أنا موجود! 💪",
            "يا حبيبي، اسأل! أنا موجود! 🧐"
        ],
        "3amto": [
            "اسأل يا حبيبي! أنا موجودة! 😄",
            "يا بني، اسأل! أنا موجودة! 🥰",
            "يا ولدي، اسأل! أنا موجودة! 💕"
        ],
        "7abibi": [
            "اسأل يا حبيبي! أنا موجود! 😄",
            "يا بني، اسأل! أنا موجود! 🥰",
            "يا ولدي، اسأل! أنا موجود! 💕"
        ]
    };
    return questionResponses[characterId][Math.floor(Math.random() * questionResponses[characterId].length)];
}

// Additional Smart Response Functions
function getProblemResponse(characterId) {
    const responses = {
        mama: ["تعال يا حبيبي! هساعدك! 🥰", "يا بني، قولي إيه المشكلة؟ 😊", "يا ولدي، أنا معاك! 💕"],
        baba: ["قولي إيه المشكلة يا بني؟ 😎", "يا ولدي، هساعدك! 💪", "يا حبيبي، أنا معاك! 🧐"],
        khala: ["تعال يا حبيبي! هساعدك! 😄", "يا بني، قولي إيه المشكلة؟ 🥰", "يا ولدي، أنا معاك! 💕"],
        "3amo": ["قولي إيه المشكلة يا بني؟ 😎", "يا ولدي، هساعدك! 💪", "يا حبيبي، أنا معاك! 🧐"],
        "3amto": ["تعال يا حبيبي! هساعدك! 😄", "يا بني، قولي إيه المشكلة؟ 🥰", "يا ولدي، أنا معاك! 💕"],
        "7abibi": ["قولي إيه المشكلة يا حبيبي؟ 😄", "يا بني، هساعدك! 🥰", "يا ولدي، أنا معاك! 💕"]
    };
    return responses[characterId][Math.floor(Math.random() * responses[characterId].length)];
}

function getHappinessResponse(characterId) {
    const responses = {
        mama: ["أهلا وسهلا يا حبيبي! 🥰", "يا بني، فرحانة معاك! 😊", "يا ولدي، سعيدة معاك! 💕"],
        baba: ["أهلا وسهلا يا بني! 😎", "يا ولدي، فرحان معاك! 💪", "يا حبيبي، سعيد معاك! 🧐"],
        khala: ["أهلا وسهلا يا حبيبي! 😄", "يا بني، فرحانة معاك! 🥰", "يا ولدي، سعيدة معاك! 💕"],
        "3amo": ["أهلا وسهلا يا بني! 😎", "يا ولدي، فرحان معاك! 💪", "يا حبيبي، سعيد معاك! 🧐"],
        "3amto": ["أهلا وسهلا يا حبيبي! 😄", "يا بني، فرحانة معاك! 🥰", "يا ولدي، سعيدة معاك! 💕"],
        "7abibi": ["أهلا وسهلا يا حبيبي! 😄", "يا بني، فرحان معاك! 🥰", "يا ولدي، سعيد معاك! 💕"]
    };
    return responses[characterId][Math.floor(Math.random() * responses[characterId].length)];
}

function getSadnessResponse(characterId) {
    const responses = {
        mama: ["تعال يا حبيبي! هعزيك! 🥰", "يا بني، متزعلش! 😊", "يا ولدي، أنا معاك! 💕"],
        baba: ["متزعلش يا بني! 😎", "يا ولدي، هعزيك! 💪", "يا حبيبي، أنا معاك! 🧐"],
        khala: ["تعال يا حبيبي! هعزيك! 😄", "يا بني، متزعلش! 🥰", "يا ولدي، أنا معاك! 💕"],
        "3amo": ["متزعلش يا بني! 😎", "يا ولدي، هعزيك! 💪", "يا حبيبي، أنا معاك! 🧐"],
        "3amto": ["تعال يا حبيبي! هعزيك! 😄", "يا بني، متزعلش! 🥰", "يا ولدي، أنا معاك! 💕"],
        "7abibi": ["متزعلش يا حبيبي! 😄", "يا بني، هعزيك! 🥰", "يا ولدي، أنا معاك! 💕"]
    };
    return responses[characterId][Math.floor(Math.random() * responses[characterId].length)];
}

function getSuccessResponse(characterId) {
    const responses = {
        mama: ["مبروك يا حبيبي! 🎉", "يا بني، مبروك! 🥰", "يا ولدي، مبروك! 💕"],
        baba: ["مبروك يا بني! 🎉", "يا ولدي، مبروك! 💪", "يا حبيبي، مبروك! 🧐"],
        khala: ["مبروك يا حبيبي! 🎉", "يا بني، مبروك! 🥰", "يا ولدي، مبروك! 💕"],
        "3amo": ["مبروك يا بني! 🎉", "يا ولدي، مبروك! 💪", "يا حبيبي، مبروك! 🧐"],
        "3amto": ["مبروك يا حبيبي! 🎉", "يا بني، مبروك! 🥰", "يا ولدي، مبروك! 💕"],
        "7abibi": ["مبروك يا حبيبي! 🎉", "يا بني، مبروك! 🥰", "يا ولدي، مبروك! 💕"]
    };
    return responses[characterId][Math.floor(Math.random() * responses[characterId].length)];
}

function getFriendResponse(characterId) {
    const responses = {
        mama: ["الصديق الحقيقي نادر يا حبيبي! 👥", "يا بني، الصداقة مهمة! 🥰", "يا ولدي، احتفظ بصحابك! 💕"],
        baba: ["الصديق الحقيقي نادر يا بني! 👥", "يا ولدي، الصداقة مهمة! 💪", "يا حبيبي، احتفظ بصحابك! 🧐"],
        khala: ["الصديق الحقيقي نادر يا حبيبي! 👥", "يا بني، الصداقة مهمة! 🥰", "يا ولدي، احتفظ بصحابك! 💕"],
        "3amo": ["الصديق الحقيقي نادر يا بني! 👥", "يا ولدي، الصداقة مهمة! 💪", "يا حبيبي، احتفظ بصحابك! 🧐"],
        "3amto": ["الصديق الحقيقي نادر يا حبيبي! 👥", "يا بني، الصداقة مهمة! 🥰", "يا ولدي، احتفظ بصحابك! 💕"],
        "7abibi": ["الصديق الحقيقي نادر يا حبيبي! 👥", "يا بني، الصداقة مهمة! 🥰", "يا ولدي، احتفظ بصحابك! 💕"]
    };
    return responses[characterId][Math.floor(Math.random() * responses[characterId].length)];
}

function getDreamResponse(characterId) {
    const responses = {
        mama: ["احلم يا حبيبي! الأحلام تتحقق! 💫", "يا بني، احلم! 🥰", "يا ولدي، احلم! 💕"],
        baba: ["احلم يا بني! الأحلام تتحقق! 💫", "يا ولدي، احلم! 💪", "يا حبيبي، احلم! 🧐"],
        khala: ["احلم يا حبيبي! الأحلام تتحقق! 💫", "يا بني، احلم! 🥰", "يا ولدي، احلم! 💕"],
        "3amo": ["احلم يا بني! الأحلام تتحقق! 💫", "يا ولدي، احلم! 💪", "يا حبيبي، احلم! 🧐"],
        "3amto": ["احلم يا حبيبي! الأحلام تتحقق! 💫", "يا بني، احلم! 🥰", "يا ولدي، احلم! 💕"],
        "7abibi": ["احلم يا حبيبي! الأحلام تتحقق! 💫", "يا بني، احلم! 🥰", "يا ولدي، احلم! 💕"]
    };
    return responses[characterId][Math.floor(Math.random() * responses[characterId].length)];
}

// Add more response functions as needed
function getAngerResponse(characterId) { return getSadnessResponse(characterId); }
function getFearResponse(characterId) { return getSadnessResponse(characterId); }
function getHopeResponse(characterId) { return getHappinessResponse(characterId); }
function getFailureResponse(characterId) { return getSadnessResponse(characterId); }
function getFutureResponse(characterId) { return getDreamResponse(characterId); }
function getPastResponse(characterId) { return getAdviceResponse(characterId); }
function getPresentResponse(characterId) { return getHappinessResponse(characterId); }
function getTimeResponse(characterId) { return getAdviceResponse(characterId); }
function getPlaceResponse(characterId) { return getAdviceResponse(characterId); }
function getAgeResponse(characterId) { return getAdviceResponse(characterId); }
function getBeautyResponse(characterId) { return getHappinessResponse(characterId); }
function getStrengthResponse(characterId) { return getAdviceResponse(characterId); }
function getWeaknessResponse(characterId) { return getSadnessResponse(characterId); }
function getWisdomResponse(characterId) { return getAdviceResponse(characterId); }
function getStupidityResponse(characterId) { return getSadnessResponse(characterId); }

function getWhyTalkResponse(characterId) {
    const responses = {
        mama: [
            "روح غطيها 😤",
            "روح غطيها يا بني 😤",
            "روح غطيها يا حبيبي 😤"
        ],
        baba: [
            "روح غطيها 😤",
            "روح غطيها يا ولدي 😤",
            "روح غطيها يا بني 😤"
        ],
        khala: [
            "روح غطيها 😤",
            "روح غطيها يا بني 😤",
            "روح غطيها يا حبيبي 😤"
        ],
        "3amo": [
            "روح غطيها 😤",
            "روح غطيها يا ولدي 😤",
            "روح غطيها يا بني 😤"
        ],
        "3amto": [
            "روح غطيها 😤",
            "روح غطيها يا بني 😤",
            "روح غطيها يا حبيبي 😤"
        ],
        "7abibi": [
            "روح غطيها 😤",
            "روح غطيها يا بني 😤",
            "روح غطيها يا حبيبي 😤"
        ]
    };
    return responses[characterId][Math.floor(Math.random() * responses[characterId].length)];
}

// Add some fun Egyptian phrases
const egyptianPhrases = [
    "يا باشا!",
    "يا عم!",
    "يا حبيبي!",
    "يا بني!",
    "يا ولدي!",
    "يا حبيبي!",
    "يا باشا!",
    "يا عم!",
    "يا حبيبي!",
    "يا بني!"
];

// Add random Egyptian phrases to responses
function addEgyptianFlavor(text) {
    const phrase = egyptianPhrases[Math.floor(Math.random() * egyptianPhrases.length)];
    return `${phrase} ${text}`;
} 