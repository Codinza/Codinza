// Game state variables
let currentLanguage = '';
let currentQuestionIndex = 0;
let score = 0;
let level = 1;
let questions = [];
let selectedAnswer = null;
let gameEnded = false;

// Code Protection - Prevent copying and stealing
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showProtectionMessage('لا يمكن استخدام القائمة اليمنى');
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});

// Disable keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Prevent Ctrl+A (Select All)
    if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();
        showProtectionMessage('لا يمكن تحديد كل النص');
    }
    // Prevent Ctrl+C (Copy)
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        showProtectionMessage('لا يمكن نسخ النص');
    }
    // Prevent Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        showProtectionMessage('لا يمكن عرض الكود المصدري');
    }
    // Prevent F12 (Developer Tools)
    if (e.key === 'F12') {
        e.preventDefault();
        showProtectionMessage('لا يمكن فتح أدوات المطور');
    }
    // Prevent Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        showProtectionMessage('لا يمكن فتح أدوات المطور');
    }
    // Prevent Ctrl+Shift+C (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        showProtectionMessage('لا يمكن فتح أدوات المطور');
    }
});

// Show protection message
function showProtectionMessage(message) {
    const protectionDiv = document.createElement('div');
    protectionDiv.className = 'protection-message';
    protectionDiv.textContent = message;
    protectionDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #f44336, #d32f2f);
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        animation: protectionPulse 0.5s ease;
    `;
    
    document.body.appendChild(protectionDiv);
    
    setTimeout(() => {
        protectionDiv.remove();
    }, 2000);
}

// Add CSS for protection message animation
const protectionStyle = document.createElement('style');
protectionStyle.textContent = `
    @keyframes protectionPulse {
        0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    
    body {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
`;
document.head.appendChild(protectionStyle);

// Questions database
const questionsDatabase = {
    html: [
        {
            question: "ما هو العنصر المستخدم لإنشاء عنوان رئيسي في HTML؟",
            options: ["<title>", "<h1>", "<header>", "<main>"],
            correct: 1,
            explanation: "العنصر <h1> يستخدم لإنشاء العنوان الرئيسي في الصفحة"
        },
        {
            question: "أي من العناصر التالية يستخدم لإنشاء رابط في HTML؟",
            options: ["<link>", "<a>", "<url>", "<href>"],
            correct: 1,
            explanation: "العنصر <a> يستخدم لإنشاء الروابط في HTML"
        },
        {
            question: "ما هو العنصر الصحيح لإنشاء قائمة مرتبة؟",
            options: ["<ul>", "<ol>", "<li>", "<list>"],
            correct: 1,
            explanation: "العنصر <ol> يستخدم لإنشاء قائمة مرتبة (ordered list)"
        },
        {
            question: "كيف يتم إدراج صورة في HTML؟",
            options: ["<img src='image.jpg'>", "<image src='image.jpg'>", "<picture src='image.jpg'>", "<photo src='image.jpg'>"],
            correct: 0,
            explanation: "العنصر <img> مع السمة src يستخدم لإدراج الصور"
        },
        {
            question: "ما هو العنصر المستخدم لإنشاء نموذج في HTML؟",
            options: ["<form>", "<input>", "<submit>", "<button>"],
            correct: 0,
            explanation: "العنصر <form> يستخدم لإنشاء النماذج في HTML"
        },
        {
            question: "أي من العناصر التالية يستخدم لإنشاء فقرة نصية؟",
            options: ["<text>", "<p>", "<paragraph>", "<div>"],
            correct: 1,
            explanation: "العنصر <p> يستخدم لإنشاء الفقرات النصية"
        },
        {
            question: "كيف يتم إنشاء تعليق في HTML؟",
            options: ["<!-- تعليق -->", "// تعليق", "/* تعليق */", "<!-- تعليق"],
            correct: 0,
            explanation: "التعليقات في HTML تبدأ بـ <!-- وتنتهي بـ -->"
        },
        {
            question: "ما هو العنصر المستخدم لإنشاء جدول في HTML؟",
            options: ["<table>", "<grid>", "<chart>", "<data>"],
            correct: 0,
            explanation: "العنصر <table> يستخدم لإنشاء الجداول في HTML"
        }
    ],
    css: [
        {
            question: "ما هي الخاصية المستخدمة لتغيير لون النص في CSS؟",
            options: ["text-color", "color", "font-color", "text-style"],
            correct: 1,
            explanation: "الخاصية color تستخدم لتغيير لون النص"
        },
        {
            question: "كيف يتم تعيين خلفية للعنصر في CSS؟",
            options: ["background-color", "bg-color", "color-background", "element-background"],
            correct: 0,
            explanation: "الخاصية background-color تستخدم لتعيين لون الخلفية"
        },
        {
            question: "ما هي الخاصية المستخدمة لتغيير حجم الخط؟",
            options: ["text-size", "font-size", "size", "text-height"],
            correct: 1,
            explanation: "الخاصية font-size تستخدم لتغيير حجم الخط"
        },
        {
            question: "كيف يتم إضافة حدود للعنصر؟",
            options: ["border", "outline", "frame", "edge"],
            correct: 0,
            explanation: "الخاصية border تستخدم لإضافة حدود للعنصر"
        },
        {
            question: "ما هي الخاصية المستخدمة لتوسيط العنصر أفقياً؟",
            options: ["center", "align-center", "text-align: center", "margin: auto"],
            correct: 3,
            explanation: "margin: auto تستخدم لتوسيط العنصر أفقياً"
        },
        {
            question: "كيف يتم إضافة مساحة داخلية للعنصر؟",
            options: ["margin", "padding", "space", "inside"],
            correct: 1,
            explanation: "الخاصية padding تستخدم لإضافة مساحة داخلية"
        },
        {
            question: "ما هي الخاصية المستخدمة لتغيير نمط الخط؟",
            options: ["font-family", "text-family", "font-style", "text-font"],
            correct: 0,
            explanation: "الخاصية font-family تستخدم لتغيير نمط الخط"
        },
        {
            question: "كيف يتم إخفاء عنصر في CSS؟",
            options: ["hide", "display: none", "visible: false", "show: none"],
            correct: 1,
            explanation: "display: none تستخدم لإخفاء العنصر"
        }
    ],
    javascript: [
        {
            question: "كيف يتم تعريف متغير في JavaScript؟",
            options: ["var x = 5", "variable x = 5", "let x = 5", "const x = 5"],
            correct: 2,
            explanation: "let و const و var تستخدم لتعريف المتغيرات"
        },
        {
            question: "ما هي الدالة المستخدمة لطباعة نص في وحدة التحكم؟",
            options: ["print()", "console.log()", "alert()", "write()"],
            correct: 1,
            explanation: "console.log() تستخدم لطباعة النص في وحدة التحكم"
        },
        {
            question: "كيف يتم إنشاء دالة في JavaScript؟",
            options: ["function myFunction()", "def myFunction()", "func myFunction()", "create myFunction()"],
            correct: 0,
            explanation: "function تستخدم لإنشاء الدوال في JavaScript"
        },
        {
            question: "ما هو الرمز المستخدم للمقارنة المتساوية في القيمة والنوع؟",
            options: ["==", "===", "=", "!="],
            correct: 1,
            explanation: "=== تستخدم للمقارنة المتساوية في القيمة والنوع"
        },
        {
            question: "كيف يتم إنشاء مصفوفة في JavaScript؟",
            options: ["array[]", "[]", "new Array()", "array()"],
            correct: 1,
            explanation: "[] تستخدم لإنشاء مصفوفة جديدة"
        },
        {
            question: "ما هي الدالة المستخدمة لإضافة عنصر في نهاية المصفوفة؟",
            options: ["push()", "add()", "append()", "insert()"],
            correct: 0,
            explanation: "push() تستخدم لإضافة عنصر في نهاية المصفوفة"
        },
        {
            question: "كيف يتم التحقق من وجود خاصية في كائن؟",
            options: ["hasOwnProperty()", "hasProperty()", "contains()", "exists()"],
            correct: 0,
            explanation: "hasOwnProperty() تستخدم للتحقق من وجود خاصية"
        },
        {
            question: "ما هو الرمز المستخدم للتعليق في JavaScript؟",
            options: ["<!-- -->", "//", "/* */", "##"],
            correct: 1,
            explanation: "// تستخدم للتعليق في سطر واحد"
        }
    ]
};

// Initialize game
function initGame() {
    showMenu();
}

// Show main menu
function showMenu() {
    document.querySelector('.game-menu').style.display = 'grid';
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'none';
}

// Start game with selected language
function startGame(language) {
    currentLanguage = language;
    currentQuestionIndex = 0;
    score = 0;
    level = 1;
    selectedAnswer = null;
    gameEnded = false;
    
    questions = [...questionsDatabase[language]];
    shuffleArray(questions);
    
    document.querySelector('.game-menu').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
    
    updateGameTitle();
    updateScore();
    showQuestion();
}

// Update game title based on language
function updateGameTitle() {
    const titles = {
        html: 'تعلم HTML',
        css: 'تعلم CSS',
        javascript: 'تعلم JavaScript'
    };
    document.getElementById('gameTitle').textContent = titles[currentLanguage];
}

// Show current question
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endGame();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionElement);
    });
    
    document.getElementById('nextBtn').style.display = 'none';
    selectedAnswer = null;
    
    updateProgress();
}

// Select answer
function selectAnswer(answerIndex) {
    if (selectedAnswer !== null || gameEnded) return;
    
    selectedAnswer = answerIndex;
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    options.forEach((option, index) => {
        option.onclick = null; // Disable further clicks
        
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === answerIndex && answerIndex !== question.correct) {
            option.classList.add('incorrect');
        }
    });
    
    if (answerIndex === question.correct) {
        score += 10;
        updateScore();
        showMessage('إجابة صحيحة! 🎉', 'success');
    } else {
        showMessage(`إجابة خاطئة! الإجابة الصحيحة هي: ${question.options[question.correct]}`, 'error');
    }
    
    document.getElementById('nextBtn').style.display = 'inline-block';
}

// Show message
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        background: ${type === 'success' ? 'linear-gradient(45deg, #4caf50, #45a049)' : 'linear-gradient(45deg, #f44336, #d32f2f)'};
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex % 3 === 0) {
        level++;
        updateScore();
    }
    showQuestion();
}

// Update score display
function updateScore() {
    document.getElementById('score').textContent = score;
    document.getElementById('level').textContent = level;
}

// Update progress bar
function updateProgress() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

// End game
function endGame() {
    gameEnded = true;
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    
    document.getElementById('finalScore').textContent = score;
    
    // Show stars based on score
    const starsContainer = document.getElementById('stars');
    const maxScore = questions.length * 10;
    const percentage = (score / maxScore) * 100;
    
    let stars = '';
    if (percentage >= 80) {
        stars = '⭐⭐⭐';
    } else if (percentage >= 60) {
        stars = '⭐⭐';
    } else if (percentage >= 40) {
        stars = '⭐';
    } else {
        stars = '😔';
    }
    
    starsContainer.textContent = stars;
}

// Play again
function playAgain() {
    startGame(currentLanguage);
}

// Back to menu
function backToMenu() {
    showMenu();
}

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Add CSS animation for messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', initGame); 