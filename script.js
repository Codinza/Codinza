// Game state variables
let currentLanguage = '';
let currentQuestionIndex = 0;
let score = 0;
let level = 1;
let questions = [];
let selectedAnswer = null;
let gameEnded = false;
let achievements = {};
let totalScore = 0;
let gamesPlayed = 0;
let correctAnswers = 0;
let consecutiveCorrect = 0;
let languagesCompleted = new Set();

// Initialize achievements from localStorage
function initAchievements() {
    const savedAchievements = localStorage.getItem('codinza_achievements');
    if (savedAchievements) {
        achievements = JSON.parse(savedAchievements);
    } else {
        achievements = {
            totalScore: 0,
            gamesPlayed: 0,
            correctAnswers: 0,
            consecutiveCorrect: 0,
            languagesCompleted: [],
            unlockedAchievements: []
        };
        saveAchievements();
    }
    updateAchievementsCount();
}

// Save achievements to localStorage
function saveAchievements() {
    localStorage.setItem('codinza_achievements', JSON.stringify(achievements));
}

// Update achievements count display
function updateAchievementsCount() {
    const unlockedCount = achievements.unlockedAchievements.length;
    document.getElementById('achievementsCount').textContent = `${unlockedCount}/50`;
}

// Check and unlock achievements
function checkAchievements() {
    const newAchievements = [];
    
    // Score achievements - أكثر تفصيلاً
    if (achievements.totalScore >= 25 && !achievements.unlockedAchievements.includes('beginner')) {
        newAchievements.push('beginner');
    }
    if (achievements.totalScore >= 50 && !achievements.unlockedAchievements.includes('first_50')) {
        newAchievements.push('first_50');
    }
    if (achievements.totalScore >= 100 && !achievements.unlockedAchievements.includes('century')) {
        newAchievements.push('century');
    }
    if (achievements.totalScore >= 250 && !achievements.unlockedAchievements.includes('quarter_master')) {
        newAchievements.push('quarter_master');
    }
    if (achievements.totalScore >= 500 && !achievements.unlockedAchievements.includes('master')) {
        newAchievements.push('master');
    }
    if (achievements.totalScore >= 750 && !achievements.unlockedAchievements.includes('expert_master')) {
        newAchievements.push('expert_master');
    }
    if (achievements.totalScore >= 1000 && !achievements.unlockedAchievements.includes('legend')) {
        newAchievements.push('legend');
    }
    if (achievements.totalScore >= 2000 && !achievements.unlockedAchievements.includes('grandmaster')) {
        newAchievements.push('grandmaster');
    }
    
    // Games played achievements - أكثر تفصيلاً
    if (achievements.gamesPlayed >= 3 && !achievements.unlockedAchievements.includes('starter')) {
        newAchievements.push('starter');
    }
    if (achievements.gamesPlayed >= 5 && !achievements.unlockedAchievements.includes('dedicated')) {
        newAchievements.push('dedicated');
    }
    if (achievements.gamesPlayed >= 10 && !achievements.unlockedAchievements.includes('regular')) {
        newAchievements.push('regular');
    }
    if (achievements.gamesPlayed >= 20 && !achievements.unlockedAchievements.includes('persistent')) {
        newAchievements.push('persistent');
    }
    if (achievements.gamesPlayed >= 50 && !achievements.unlockedAchievements.includes('veteran')) {
        newAchievements.push('veteran');
    }
    if (achievements.gamesPlayed >= 100 && !achievements.unlockedAchievements.includes('addict')) {
        newAchievements.push('addict');
    }
    
    // Correct answers achievements - أكثر تفصيلاً
    if (achievements.correctAnswers >= 5 && !achievements.unlockedAchievements.includes('first_steps')) {
        newAchievements.push('first_steps');
    }
    if (achievements.correctAnswers >= 10 && !achievements.unlockedAchievements.includes('learner')) {
        newAchievements.push('learner');
    }
    if (achievements.correctAnswers >= 25 && !achievements.unlockedAchievements.includes('intermediate')) {
        newAchievements.push('intermediate');
    }
    if (achievements.correctAnswers >= 50 && !achievements.unlockedAchievements.includes('scholar')) {
        newAchievements.push('scholar');
    }
    if (achievements.correctAnswers >= 100 && !achievements.unlockedAchievements.includes('expert')) {
        newAchievements.push('expert');
    }
    if (achievements.correctAnswers >= 200 && !achievements.unlockedAchievements.includes('genius')) {
        newAchievements.push('genius');
    }
    if (achievements.correctAnswers >= 500 && !achievements.unlockedAchievements.includes('savant')) {
        newAchievements.push('savant');
    }
    
    // Consecutive correct achievements - أكثر تفصيلاً
    if (achievements.consecutiveCorrect >= 3 && !achievements.unlockedAchievements.includes('warm_up')) {
        newAchievements.push('warm_up');
    }
    if (achievements.consecutiveCorrect >= 5 && !achievements.unlockedAchievements.includes('streak')) {
        newAchievements.push('streak');
    }
    if (achievements.consecutiveCorrect >= 8 && !achievements.unlockedAchievements.includes('hot_streak')) {
        newAchievements.push('hot_streak');
    }
    if (achievements.consecutiveCorrect >= 12 && !achievements.unlockedAchievements.includes('fire_streak')) {
        newAchievements.push('fire_streak');
    }
    if (achievements.consecutiveCorrect >= 20 && !achievements.unlockedAchievements.includes('unstoppable')) {
        newAchievements.push('unstoppable');
    }
    
    // Language specific achievements
    if (achievements.languagesCompleted.includes('html') && !achievements.unlockedAchievements.includes('html_master')) {
        newAchievements.push('html_master');
    }
    if (achievements.languagesCompleted.includes('css') && !achievements.unlockedAchievements.includes('css_master')) {
        newAchievements.push('css_master');
    }
    if (achievements.languagesCompleted.includes('javascript') && !achievements.unlockedAchievements.includes('js_master')) {
        newAchievements.push('js_master');
    }
    if (achievements.languagesCompleted.includes('python') && !achievements.unlockedAchievements.includes('python_master')) {
        newAchievements.push('python_master');
    }
    if (achievements.languagesCompleted.includes('php') && !achievements.unlockedAchievements.includes('php_master')) {
        newAchievements.push('php_master');
    }
    if (achievements.languagesCompleted.includes('sql') && !achievements.unlockedAchievements.includes('sql_master')) {
        newAchievements.push('sql_master');
    }
    if (achievements.languagesCompleted.includes('react') && !achievements.unlockedAchievements.includes('react_master')) {
        newAchievements.push('react_master');
    }
    if (achievements.languagesCompleted.includes('cpp') && !achievements.unlockedAchievements.includes('cpp_master')) {
        newAchievements.push('cpp_master');
    }
    if (achievements.languagesCompleted.includes('java') && !achievements.unlockedAchievements.includes('java_master')) {
        newAchievements.push('java_master');
    }
    if (achievements.languagesCompleted.includes('typescript') && !achievements.unlockedAchievements.includes('typescript_master')) {
        newAchievements.push('typescript_master');
    }
    if (achievements.languagesCompleted.includes('nodejs') && !achievements.unlockedAchievements.includes('nodejs_master')) {
        newAchievements.push('nodejs_master');
    }
    if (achievements.languagesCompleted.includes('git') && !achievements.unlockedAchievements.includes('git_master')) {
        newAchievements.push('git_master');
    }
    if (achievements.languagesCompleted.includes('dart') && !achievements.unlockedAchievements.includes('dart_master')) {
        newAchievements.push('dart_master');
    }
    if (achievements.languagesCompleted.includes('flutter') && !achievements.unlockedAchievements.includes('flutter_master')) {
        newAchievements.push('flutter_master');
    }
    if (achievements.languagesCompleted.includes('vue') && !achievements.unlockedAchievements.includes('vue_master')) {
        newAchievements.push('vue_master');
    }
    if (achievements.languagesCompleted.includes('angular') && !achievements.unlockedAchievements.includes('angular_master')) {
        newAchievements.push('angular_master');
    }
    if (achievements.languagesCompleted.includes('laravel') && !achievements.unlockedAchievements.includes('laravel_master')) {
        newAchievements.push('laravel_master');
    }
    if (achievements.languagesCompleted.includes('django') && !achievements.unlockedAchievements.includes('django_master')) {
        newAchievements.push('django_master');
    }
    
    // Category achievements - إنجازات حسب الفئات
    const webLanguages = ['html', 'css', 'javascript'];
    const webFrameworks = ['react', 'vue', 'angular'];
    const backendLanguages = ['python', 'php', 'java', 'cpp'];
    const backendFrameworks = ['laravel', 'django', 'nodejs'];
    const mobileDev = ['dart', 'flutter'];
    const tools = ['git', 'sql', 'typescript'];
    
    if (webLanguages.every(lang => achievements.languagesCompleted.includes(lang)) && !achievements.unlockedAchievements.includes('web_developer')) {
        newAchievements.push('web_developer');
    }
    if (webFrameworks.every(framework => achievements.languagesCompleted.includes(framework)) && !achievements.unlockedAchievements.includes('frontend_expert')) {
        newAchievements.push('frontend_expert');
    }
    if (backendLanguages.every(lang => achievements.languagesCompleted.includes(lang)) && !achievements.unlockedAchievements.includes('backend_expert')) {
        newAchievements.push('backend_expert');
    }
    if (backendFrameworks.every(framework => achievements.languagesCompleted.includes(framework)) && !achievements.unlockedAchievements.includes('fullstack_expert')) {
        newAchievements.push('fullstack_expert');
    }
    if (mobileDev.every(tech => achievements.languagesCompleted.includes(tech)) && !achievements.unlockedAchievements.includes('mobile_developer')) {
        newAchievements.push('mobile_developer');
    }
    if (tools.every(tool => achievements.languagesCompleted.includes(tool)) && !achievements.unlockedAchievements.includes('devops_expert')) {
        newAchievements.push('devops_expert');
    }
    
    // All languages achievement
    if (achievements.languagesCompleted.length >= 18 && !achievements.unlockedAchievements.includes('polyglot')) {
        newAchievements.push('polyglot');
    }
    
    // Perfect game achievement
    if (score === questions.length * 10 && !achievements.unlockedAchievements.includes('perfect')) {
        newAchievements.push('perfect');
    }
    
    // Add new achievements
    achievements.unlockedAchievements.push(...newAchievements);
    saveAchievements();
    updateAchievementsCount();
    
    // Show achievement notifications
    newAchievements.forEach(achievementId => {
        showAchievementNotification(achievementId);
    });
}

// Show achievement notification
function showAchievementNotification(achievementId) {
    const achievement = getAchievementData(achievementId);
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="achievement-notification-content">
            <div class="achievement-notification-icon">${achievement.icon}</div>
            <div class="achievement-notification-text">
                <h4>🏆 إنجاز جديد!</h4>
                <p>${achievement.title}</p>
            </div>
        </div>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #ffd700, #ffed4e);
        color: #000;
        padding: 15px 20px;
        border-radius: 10px;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
        animation: achievementSlideIn 0.5s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// Get achievement data
function getAchievementData(achievementId) {
    const achievementsData = {
        beginner: { title: 'مبتدئ', icon: '🌱', description: 'احصل على أول 25 نقطة' },
        first_50: { title: 'أول 50 نقطة', icon: '🎯', description: 'احصل على أول 50 نقطة' },
        century: { title: 'قرن من النقاط', icon: '💯', description: 'احصل على 100 نقطة' },
        quarter_master: { title: 'ربع ماجستير', icon: '🥉', description: 'احصل على 250 نقطة' },
        master: { title: 'ماجستير', icon: '🎓', description: 'احصل على 500 نقطة' },
        expert_master: { title: 'ماجستير خبير', icon: '🏆', description: 'احصل على 750 نقطة' },
        legend: { title: 'أسطورة', icon: '👑', description: 'احصل على 1000 نقطة' },
        grandmaster: { title: 'أستاذ كبير', icon: '🌟', description: 'احصل على 2000 نقطة' },
        starter: { title: 'مبتدئ', icon: '🚀', description: 'العب 3 مرات' },
        dedicated: { title: 'متفانٍ', icon: '🔥', description: 'العب 5 مرات' },
        regular: { title: 'منتظم', icon: '📅', description: 'العب 10 مرات' },
        persistent: { title: 'مثابر', icon: '💪', description: 'العب 20 مرة' },
        veteran: { title: 'محارب قديم', icon: '🛡️', description: 'العب 50 مرة' },
        addict: { title: 'مدمن', icon: '🎮', description: 'العب 100 مرة' },
        first_steps: { title: 'خطوات أولى', icon: '👣', description: 'أجب 5 إجابات صحيحة' },
        learner: { title: 'متعلم', icon: '📚', description: 'أجب 10 إجابات صحيحة' },
        intermediate: { title: 'متوسط', icon: '📖', description: 'أجب 25 إجابة صحيحة' },
        scholar: { title: 'عالم', icon: '🎓', description: 'أجب 50 إجابة صحيحة' },
        expert: { title: 'خبير', icon: '🧠', description: 'أجب 100 إجابة صحيحة' },
        genius: { title: 'عبقري', icon: '💡', description: 'أجب 200 إجابة صحيحة' },
        savant: { title: 'عالم', icon: '🔬', description: 'أجب 500 إجابة صحيحة' },
        warm_up: { title: 'إحماء', icon: '🔥', description: '3 إجابات صحيحة متتالية' },
        streak: { title: 'سلسلة ناجحة', icon: '⚡', description: '5 إجابات صحيحة متتالية' },
        hot_streak: { title: 'سلسلة حارقة', icon: '🔥', description: '8 إجابات صحيحة متتالية' },
        fire_streak: { title: 'سلسلة نارية', icon: '🔥', description: '12 إجابة صحيحة متتالية' },
        unstoppable: { title: 'لا يقهر', icon: '💥', description: '20 إجابة صحيحة متتالية' },
        html_master: { title: 'سيد HTML', icon: '🌐', description: 'أكمل HTML بنجاح' },
        css_master: { title: 'سيد CSS', icon: '🎨', description: 'أكمل CSS بنجاح' },
        js_master: { title: 'سيد JavaScript', icon: '⚡', description: 'أكمل JavaScript بنجاح' },
        python_master: { title: 'سيد Python', icon: '🐍', description: 'أكمل Python بنجاح' },
        php_master: { title: 'سيد PHP', icon: '🐘', description: 'أكمل PHP بنجاح' },
        sql_master: { title: 'سيد SQL', icon: '📊', description: 'أكمل SQL بنجاح' },
        react_master: { title: 'سيد React', icon: '⚛️', description: 'أكمل React بنجاح' },
        cpp_master: { title: 'سيد C++', icon: '💻', description: 'أكمل C++ بنجاح' },
        java_master: { title: 'سيد Java', icon: '☕', description: 'أكمل Java بنجاح' },
        typescript_master: { title: 'سيد TypeScript', icon: '🔷', description: 'أكمل TypeScript بنجاح' },
        nodejs_master: { title: 'سيد Node.js', icon: '🌐', description: 'أكمل Node.js بنجاح' },
        git_master: { title: 'سيد Git', icon: '🔧', description: 'أكمل Git بنجاح' },
        dart_master: { title: 'سيد Dart', icon: '🎯', description: 'أكمل Dart بنجاح' },
        flutter_master: { title: 'سيد Flutter', icon: '🦋', description: 'أكمل Flutter بنجاح' },
        vue_master: { title: 'سيد Vue.js', icon: '💚', description: 'أكمل Vue.js بنجاح' },
        angular_master: { title: 'سيد Angular', icon: '🔴', description: 'أكمل Angular بنجاح' },
        laravel_master: { title: 'سيد Laravel', icon: '🔥', description: 'أكمل Laravel بنجاح' },
        django_master: { title: 'سيد Django', icon: '🟢', description: 'أكمل Django بنجاح' },
        web_developer: { title: 'مطور ويب', icon: '🌐', description: 'أكمل لغات الويب الأساسية' },
        frontend_expert: { title: 'خبير الواجهة الأمامية', icon: '🎨', description: 'أكمل أطر عمل الواجهة الأمامية' },
        backend_expert: { title: 'خبير الخلفية', icon: '⚙️', description: 'أكمل لغات البرمجة الخلفية' },
        fullstack_expert: { title: 'خبير متكامل', icon: '🔄', description: 'أكمل أطر عمل الخلفية' },
        mobile_developer: { title: 'مطور تطبيقات', icon: '📱', description: 'أكمل تقنيات تطوير التطبيقات' },
        devops_expert: { title: 'خبير DevOps', icon: '🔧', description: 'أكمل أدوات التطوير' },
        polyglot: { title: 'متعدد اللغات', icon: '🌍', description: 'أكمل جميع اللغات' },
        perfect: { title: 'مثالي', icon: '⭐', description: 'احصل على نقاط كاملة في لعبة واحدة' }
    };
    return achievementsData[achievementId];
}

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
        },
        {
            question: "كيف يتم إنشاء قائمة غير مرتبة؟",
            options: ["<ul>", "<ol>", "<li>", "<list>"],
            correct: 0,
            explanation: "العنصر <ul> يستخدم لإنشاء قائمة غير مرتبة"
        },
        {
            question: "ما هو العنصر المستخدم لإنشاء عنوان فرعي؟",
            options: ["<h2>", "<subtitle>", "<title>", "<header>"],
            correct: 0,
            explanation: "العنصر <h2> يستخدم لإنشاء عنوان فرعي"
        },
        {
            question: "كيف يتم إضافة رابط خارجي؟",
            options: ["<a href='url' target='_blank'>", "<link href='url'>", "<url href='url'>", "<external href='url'>"],
            correct: 0,
            explanation: "target='_blank' يفتح الرابط في نافذة جديدة"
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
        },
        {
            question: "كيف يتم إضافة ظل للنص؟",
            options: ["text-shadow", "shadow", "box-shadow", "font-shadow"],
            correct: 0,
            explanation: "text-shadow تستخدم لإضافة ظل للنص"
        },
        {
            question: "كيف يتم تدوير عنصر؟",
            options: ["transform: rotate()", "rotate()", "rotation()", "spin()"],
            correct: 0,
            explanation: "transform: rotate() تستخدم لتدوير العنصر"
        },
        {
            question: "ما هي الخاصية المستخدمة لتغيير شفافية العنصر؟",
            options: ["opacity", "transparency", "alpha", "visibility"],
            correct: 0,
            explanation: "opacity تستخدم لتغيير شفافية العنصر"
        },
        {
            question: "كيف يتم إضافة انتقال سلس؟",
            options: ["transition", "animation", "smooth", "ease"],
            correct: 0,
            explanation: "transition تستخدم لإضافة انتقال سلس"
        }
    ],
    python: [
        {
            question: "كيف يتم طباعة نص في Python؟",
            options: ["print('Hello')", "echo('Hello')", "console.log('Hello')", "printf('Hello')"],
            correct: 0,
            explanation: "print() تستخدم لطباعة النص في Python"
        },
        {
            question: "كيف يتم تعريف متغير في Python؟",
            options: ["var x = 5", "let x = 5", "x = 5", "const x = 5"],
            correct: 2,
            explanation: "في Python لا نحتاج لتعريف نوع المتغير"
        },
        {
            question: "ما هو الرمز المستخدم للتعليق في Python؟",
            options: ["//", "/* */", "#", "<!-- -->"],
            correct: 2,
            explanation: "# تستخدم للتعليق في Python"
        },
        {
            question: "كيف يتم إنشاء دالة في Python؟",
            options: ["function myFunction():", "def myFunction():", "func myFunction():", "create myFunction():"],
            correct: 1,
            explanation: "def تستخدم لإنشاء الدوال في Python"
        },
        {
            question: "ما هي الدالة المستخدمة لمعرفة طول النص؟",
            options: ["length()", "len()", "size()", "count()"],
            correct: 1,
            explanation: "len() تستخدم لمعرفة طول النص أو المصفوفة"
        },
        {
            question: "كيف يتم إنشاء قائمة في Python؟",
            options: ["list[]", "[]", "new List()", "array()"],
            correct: 1,
            explanation: "[] تستخدم لإنشاء قائمة جديدة"
        },
        {
            question: "ما هي الدالة المستخدمة لإضافة عنصر في القائمة؟",
            options: ["add()", "append()", "push()", "insert()"],
            correct: 1,
            explanation: "append() تستخدم لإضافة عنصر في نهاية القائمة"
        },
        {
            question: "كيف يتم التحقق من وجود عنصر في قائمة؟",
            options: ["in", "contains", "exists", "has"],
            correct: 0,
            explanation: "in تستخدم للتحقق من وجود عنصر في قائمة"
        },
        {
            question: "كيف يتم إنشاء dictionary في Python؟",
            options: ["{}", "dict()", "dictionary()", "map()"],
            correct: 0,
            explanation: "{} تستخدم لإنشاء dictionary"
        },
        {
            question: "ما هي الدالة المستخدمة لمعرفة نوع البيانات؟",
            options: ["type()", "typeof()", "kind()", "class()"],
            correct: 0,
            explanation: "type() تستخدم لمعرفة نوع البيانات"
        },
        {
            question: "كيف يتم إنشاء class في Python؟",
            options: ["class MyClass:", "def MyClass:", "create MyClass:", "new MyClass:"],
            correct: 0,
            explanation: "class تستخدم لإنشاء class في Python"
        },
        {
            question: "ما هي الدالة المستخدمة لفتح ملف؟",
            options: ["open()", "file()", "read()", "load()"],
            correct: 0,
            explanation: "open() تستخدم لفتح ملف في Python"
        }
    ],
    php: [
        {
            question: "كيف يتم طباعة نص في PHP؟",
            options: ["echo 'Hello';", "print('Hello');", "console.log('Hello');", "printf('Hello');"],
            correct: 0,
            explanation: "echo تستخدم لطباعة النص في PHP"
        },
        {
            question: "كيف يتم تعريف متغير في PHP؟",
            options: ["var $x = 5;", "$x = 5;", "let $x = 5;", "const $x = 5;"],
            correct: 1,
            explanation: "المتغيرات في PHP تبدأ بـ $"
        },
        {
            question: "ما هو الرمز المستخدم للتعليق في PHP؟",
            options: ["//", "/* */", "#", "<!-- -->"],
            correct: 0,
            explanation: "// تستخدم للتعليق في سطر واحد في PHP"
        },
        {
            question: "كيف يتم إنشاء دالة في PHP؟",
            options: ["function myFunction()", "def myFunction()", "func myFunction()", "create myFunction()"],
            correct: 0,
            explanation: "function تستخدم لإنشاء الدوال في PHP"
        },
        {
            question: "ما هي الدالة المستخدمة لمعرفة طول النص؟",
            options: ["length()", "strlen()", "size()", "count()"],
            correct: 1,
            explanation: "strlen() تستخدم لمعرفة طول النص في PHP"
        },
        {
            question: "كيف يتم إنشاء مصفوفة في PHP؟",
            options: ["array()", "[]", "new Array()", "list()"],
            correct: 0,
            explanation: "array() تستخدم لإنشاء مصفوفة في PHP"
        },
        {
            question: "ما هي الدالة المستخدمة لإضافة عنصر في المصفوفة؟",
            options: ["add()", "push()", "array_push()", "insert()"],
            correct: 2,
            explanation: "array_push() تستخدم لإضافة عنصر في المصفوفة"
        },
        {
            question: "كيف يتم الاتصال بقاعدة البيانات في PHP؟",
            options: ["mysql_connect()", "mysqli_connect()", "pdo_connect()", "db_connect()"],
            correct: 1,
            explanation: "mysqli_connect() تستخدم للاتصال بقاعدة البيانات"
        },
        {
            question: "كيف يتم إنشاء session في PHP؟",
            options: ["session_start()", "start_session()", "session()", "create_session()"],
            correct: 0,
            explanation: "session_start() تستخدم لبدء session"
        },
        {
            question: "ما هي الدالة المستخدمة لمعالجة النماذج؟",
            options: ["$_POST", "$_GET", "$_REQUEST", "$_FORM"],
            correct: 0,
            explanation: "$_POST تستخدم لمعالجة النماذج المرسلة"
        },
        {
            question: "كيف يتم إنشاء cookie في PHP؟",
            options: ["setcookie()", "cookie()", "create_cookie()", "make_cookie()"],
            correct: 0,
            explanation: "setcookie() تستخدم لإنشاء cookie"
        },
        {
            question: "ما هي الدالة المستخدمة لتحويل النص إلى أحرف صغيرة؟",
            options: ["strtolower()", "lower()", "tolower()", "lowercase()"],
            correct: 0,
            explanation: "strtolower() تستخدم لتحويل النص إلى أحرف صغيرة"
        }
    ],
    sql: [
        {
            question: "ما هو الأمر المستخدم لاستخراج البيانات من قاعدة البيانات؟",
            options: ["EXTRACT", "SELECT", "GET", "FETCH"],
            correct: 1,
            explanation: "SELECT يستخدم لاستخراج البيانات من قاعدة البيانات"
        },
        {
            question: "كيف يتم إضافة بيانات جديدة في قاعدة البيانات؟",
            options: ["ADD", "INSERT", "CREATE", "NEW"],
            correct: 1,
            explanation: "INSERT يستخدم لإضافة بيانات جديدة"
        },
        {
            question: "كيف يتم تحديث البيانات الموجودة؟",
            options: ["CHANGE", "UPDATE", "MODIFY", "EDIT"],
            correct: 1,
            explanation: "UPDATE يستخدم لتحديث البيانات الموجودة"
        },
        {
            question: "كيف يتم حذف البيانات من قاعدة البيانات؟",
            options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
            correct: 1,
            explanation: "DELETE يستخدم لحذف البيانات من قاعدة البيانات"
        },
        {
            question: "ما هو الأمر المستخدم لإنشاء جدول جديد؟",
            options: ["CREATE TABLE", "NEW TABLE", "BUILD TABLE", "MAKE TABLE"],
            correct: 0,
            explanation: "CREATE TABLE يستخدم لإنشاء جدول جديد"
        },
        {
            question: "كيف يتم ترتيب النتائج تصاعدياً؟",
            options: ["ORDER BY ASC", "SORT ASC", "ARRANGE ASC", "ORDER ASC"],
            correct: 0,
            explanation: "ORDER BY ASC يستخدم لترتيب النتائج تصاعدياً"
        },
        {
            question: "ما هو الرمز المستخدم للمقارنة المتساوية في SQL؟",
            options: ["==", "=", "===", "EQUALS"],
            correct: 1,
            explanation: "= يستخدم للمقارنة المتساوية في SQL"
        },
        {
            question: "كيف يتم تحديد عدد النتائج المراد عرضها؟",
            options: ["LIMIT", "TOP", "MAX", "COUNT"],
            correct: 0,
            explanation: "LIMIT تستخدم لتحديد عدد النتائج المراد عرضها"
        },
        {
            question: "كيف يتم ربط جدولين؟",
            options: ["JOIN", "LINK", "CONNECT", "MERGE"],
            correct: 0,
            explanation: "JOIN تستخدم لربط جدولين"
        },
        {
            question: "ما هو الأمر المستخدم لحذف جدول؟",
            options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "CLEAR TABLE"],
            correct: 0,
            explanation: "DROP TABLE يستخدم لحذف جدول"
        },
        {
            question: "كيف يتم تجميع النتائج؟",
            options: ["GROUP BY", "COLLECT BY", "GATHER BY", "SET BY"],
            correct: 0,
            explanation: "GROUP BY تستخدم لتجميع النتائج"
        },
        {
            question: "ما هو الأمر المستخدم لإنشاء index؟",
            options: ["CREATE INDEX", "MAKE INDEX", "BUILD INDEX", "NEW INDEX"],
            correct: 0,
            explanation: "CREATE INDEX يستخدم لإنشاء index"
        }
    ],
    react: [
        {
            question: "كيف يتم إنشاء مكون في React؟",
            options: ["function Component()", "class Component", "component Component()", "create Component()"],
            correct: 0,
            explanation: "function Component() تستخدم لإنشاء مكون وظيفي في React"
        },
        {
            question: "ما هو الرمز المستخدم لتمرير البيانات بين المكونات؟",
            options: ["props", "state", "data", "info"],
            correct: 0,
            explanation: "props تستخدم لتمرير البيانات بين المكونات"
        },
        {
            question: "كيف يتم إدارة الحالة المحلية في المكون؟",
            options: ["useState()", "useEffect()", "useContext()", "useReducer()"],
            correct: 0,
            explanation: "useState() تستخدم لإدارة الحالة المحلية في المكون"
        },
        {
            question: "ما هو الرمز المستخدم لتنفيذ تأثيرات جانبية؟",
            options: ["useEffect()", "useState()", "useContext()", "useMemo()"],
            correct: 0,
            explanation: "useEffect() تستخدم لتنفيذ تأثيرات جانبية"
        },
        {
            question: "كيف يتم عرض مكون في React؟",
            options: ["render()", "return()", "display()", "show()"],
            correct: 1,
            explanation: "return() تستخدم لعرض مكون في React"
        },
        {
            question: "ما هو الرمز المستخدم للتعليق في JSX؟",
            options: ["//", "/* */", "{/* */}", "<!-- -->"],
            correct: 2,
            explanation: "{/* */} تستخدم للتعليق في JSX"
        },
        {
            question: "كيف يتم إضافة حدث النقر في React؟",
            options: ["onClick", "onclick", "click", "handleClick"],
            correct: 0,
            explanation: "onClick تستخدم لإضافة حدث النقر في React"
        },
        {
            question: "ما هو الرمز المستخدم لتمرير البيانات من المكون الأب إلى الابن؟",
            options: ["props", "state", "context", "ref"],
            correct: 0,
            explanation: "props تستخدم لتمرير البيانات من المكون الأب إلى الابن"
        },
        {
            question: "كيف يتم استخدام Context في React؟",
            options: ["useContext()", "useContext", "Context()", "context()"],
            correct: 0,
            explanation: "useContext() تستخدم لاستخدام Context"
        },
        {
            question: "ما هو الرمز المستخدم لتحسين الأداء؟",
            options: ["useMemo()", "useEffect()", "useState()", "useCallback()"],
            correct: 0,
            explanation: "useMemo() تستخدم لتحسين الأداء"
        },
        {
            question: "كيف يتم إنشاء custom hook؟",
            options: ["useMyHook()", "function useMyHook()", "hook useMyHook()", "custom useMyHook()"],
            correct: 1,
            explanation: "function useMyHook() تستخدم لإنشاء custom hook"
        },
        {
            question: "ما هو الرمز المستخدم للتنقل بين الصفحات؟",
            options: ["useNavigate()", "useRouter()", "useHistory()", "useRoute()"],
            correct: 0,
            explanation: "useNavigate() تستخدم للتنقل بين الصفحات"
        }
    ],
    cpp: [
        {
            question: "كيف يتم طباعة نص في C++؟",
            options: ["cout << 'Hello';", "print('Hello');", "console.log('Hello');", "printf('Hello');"],
            correct: 0,
            explanation: "cout << تستخدم لطباعة النص في C++"
        },
        {
            question: "كيف يتم تعريف متغير في C++؟",
            options: ["int x = 5;", "var x = 5;", "x = 5;", "let x = 5;"],
            correct: 0,
            explanation: "int تستخدم لتعريف متغير عدد صحيح في C++"
        },
        {
            question: "ما هو الرمز المستخدم للتعليق في C++؟",
            options: ["//", "/* */", "#", "<!-- -->"],
            correct: 0,
            explanation: "// تستخدم للتعليق في سطر واحد في C++"
        },
        {
            question: "كيف يتم إنشاء دالة في C++؟",
            options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
            correct: 2,
            explanation: "void تستخدم لإنشاء دالة في C++"
        },
        {
            question: "ما هي المكتبة المستخدمة للإدخال والإخراج في C++؟",
            options: ["iostream", "stdio.h", "stdlib.h", "string.h"],
            correct: 0,
            explanation: "iostream تستخدم للإدخال والإخراج في C++"
        },
        {
            question: "كيف يتم إنشاء مصفوفة في C++؟",
            options: ["int arr[] = {1,2,3};", "array arr = [1,2,3];", "list arr = [1,2,3];", "vector arr = [1,2,3];"],
            correct: 0,
            explanation: "int arr[] تستخدم لإنشاء مصفوفة في C++"
        },
        {
            question: "ما هو الرمز المستخدم لاستخراج البيانات من cin؟",
            options: [">>", "<<", "->", "=>"],
            correct: 0,
            explanation: ">> تستخدم لاستخراج البيانات من cin"
        },
        {
            question: "كيف يتم إنشاء كائن من class في C++؟",
            options: ["new MyClass()", "MyClass obj;", "create MyClass()", "object MyClass()"],
            correct: 1,
            explanation: "MyClass obj; تستخدم لإنشاء كائن من class"
        }
    ],
    java: [
        {
            question: "كيف يتم طباعة نص في Java؟",
            options: ["System.out.println('Hello');", "print('Hello');", "console.log('Hello');", "printf('Hello');"],
            correct: 0,
            explanation: "System.out.println() تستخدم لطباعة النص في Java"
        },
        {
            question: "كيف يتم تعريف متغير في Java؟",
            options: ["int x = 5;", "var x = 5;", "x = 5;", "let x = 5;"],
            correct: 0,
            explanation: "int تستخدم لتعريف متغير عدد صحيح في Java"
        },
        {
            question: "ما هو الرمز المستخدم للتعليق في Java؟",
            options: ["//", "/* */", "#", "<!-- -->"],
            correct: 0,
            explanation: "// تستخدم للتعليق في سطر واحد في Java"
        },
        {
            question: "كيف يتم إنشاء class في Java؟",
            options: ["class MyClass", "function MyClass", "def MyClass", "create MyClass"],
            correct: 0,
            explanation: "class تستخدم لإنشاء class في Java"
        },
        {
            question: "ما هي الكلمة المفتاحية المستخدمة لإنشاء كائن جديد؟",
            options: ["new", "create", "make", "build"],
            correct: 0,
            explanation: "new تستخدم لإنشاء كائن جديد في Java"
        },
        {
            question: "كيف يتم إنشاء مصفوفة في Java؟",
            options: ["int[] arr = {1,2,3};", "array arr = [1,2,3];", "list arr = [1,2,3];", "vector arr = [1,2,3];"],
            correct: 0,
            explanation: "int[] تستخدم لإنشاء مصفوفة في Java"
        },
        {
            question: "ما هي الكلمة المفتاحية المستخدمة للوراثة؟",
            options: ["extends", "inherits", "implements", "super"],
            correct: 0,
            explanation: "extends تستخدم للوراثة في Java"
        },
        {
            question: "كيف يتم تعريف دالة في Java؟",
            options: ["public void myFunction()", "function myFunction()", "def myFunction()", "void myFunction()"],
            correct: 0,
            explanation: "public void تستخدم لتعريف دالة في Java"
        }
    ],
    typescript: [
        {
            question: "كيف يتم تعريف نوع البيانات في TypeScript؟",
            options: ["let x: number = 5;", "var x = 5;", "x = 5;", "let x = 5;"],
            correct: 0,
            explanation: ": number تستخدم لتعريف نوع البيانات في TypeScript"
        },
        {
            question: "ما هو الرمز المستخدم لتعريف interface؟",
            options: ["interface", "class", "type", "struct"],
            correct: 0,
            explanation: "interface تستخدم لتعريف interface في TypeScript"
        },
        {
            question: "كيف يتم تعريف array مع نوع محدد؟",
            options: ["let arr: number[] = [1,2,3];", "let arr = [1,2,3];", "array arr = [1,2,3];", "let arr = Array(1,2,3);"],
            correct: 0,
            explanation: "number[] تستخدم لتعريف array مع نوع محدد"
        },
        {
            question: "ما هو الرمز المستخدم لتعريف union type؟",
            options: ["|", "&", "||", "&&"],
            correct: 0,
            explanation: "| تستخدم لتعريف union type في TypeScript"
        },
        {
            question: "كيف يتم تعريف optional property؟",
            options: ["name?: string;", "name: string?;", "name: optional string;", "name: string | undefined;"],
            correct: 0,
            explanation: "? تستخدم لتعريف optional property"
        },
        {
            question: "ما هو الرمز المستخدم لتعريف generic type؟",
            options: ["<T>", "<>", "T", "generic"],
            correct: 0,
            explanation: "<T> تستخدم لتعريف generic type"
        },
        {
            question: "كيف يتم تعريف enum في TypeScript؟",
            options: ["enum Color {Red, Green, Blue}", "const Color = {Red, Green, Blue}", "type Color = {Red, Green, Blue}", "interface Color {Red, Green, Blue}"],
            correct: 0,
            explanation: "enum تستخدم لتعريف enum في TypeScript"
        },
        {
            question: "ما هو الرمز المستخدم لتعريف readonly property؟",
            options: ["readonly name: string;", "name: readonly string;", "const name: string;", "name: string readonly;"],
            correct: 0,
            explanation: "readonly تستخدم لتعريف readonly property"
        }
    ],
    nodejs: [
        {
            question: "كيف يتم إنشاء خادم HTTP في Node.js؟",
            options: ["const http = require('http');", "import http from 'http';", "var http = require('http');", "let http = require('http');"],
            correct: 0,
            explanation: "require('http') تستخدم لاستيراد وحدة HTTP"
        },
        {
            question: "كيف يتم تشغيل ملف Node.js؟",
            options: ["node app.js", "npm start", "node run app.js", "js app.js"],
            correct: 0,
            explanation: "node app.js تستخدم لتشغيل ملف Node.js"
        },
        {
            question: "ما هو ملف package.json؟",
            options: ["ملف تكوين المشروع", "ملف JavaScript", "ملف HTML", "ملف CSS"],
            correct: 0,
            explanation: "package.json هو ملف تكوين المشروع في Node.js"
        },
        {
            question: "كيف يتم تثبيت حزمة في Node.js؟",
            options: ["npm install package-name", "node install package-name", "js install package-name", "npm add package-name"],
            correct: 0,
            explanation: "npm install تستخدم لتثبيت حزمة في Node.js"
        },
        {
            question: "ما هي الدالة المستخدمة لقراءة ملف في Node.js؟",
            options: ["fs.readFile()", "file.read()", "read.file()", "fs.read()"],
            correct: 0,
            explanation: "fs.readFile() تستخدم لقراءة ملف في Node.js"
        },
        {
            question: "كيف يتم إنشاء مجلد في Node.js؟",
            options: ["fs.mkdir()", "mkdir()", "folder.create()", "fs.createFolder()"],
            correct: 0,
            explanation: "fs.mkdir() تستخدم لإنشاء مجلد في Node.js"
        },
        {
            question: "ما هو Express.js؟",
            options: ["إطار عمل للويب", "محرر نصوص", "قاعدة بيانات", "لغة برمجة"],
            correct: 0,
            explanation: "Express.js هو إطار عمل للويب في Node.js"
        },
        {
            question: "كيف يتم تعريف route في Express؟",
            options: ["app.get('/path', callback)", "route.get('/path')", "get('/path')", "app.route('/path')"],
            correct: 0,
            explanation: "app.get() تستخدم لتعريف route في Express"
        }
    ],
    git: [
        {
            question: "كيف يتم تهيئة repository جديد في Git؟",
            options: ["git init", "git create", "git new", "git start"],
            correct: 0,
            explanation: "git init تستخدم لتهيئة repository جديد"
        },
        {
            question: "كيف يتم إضافة ملف إلى staging area؟",
            options: ["git add filename", "git stage filename", "git commit filename", "git push filename"],
            correct: 0,
            explanation: "git add تستخدم لإضافة ملف إلى staging area"
        },
        {
            question: "كيف يتم حفظ التغييرات في Git؟",
            options: ["git commit -m 'message'", "git save -m 'message'", "git push -m 'message'", "git store -m 'message'"],
            correct: 0,
            explanation: "git commit تستخدم لحفظ التغييرات"
        },
        {
            question: "كيف يتم رفع التغييرات إلى remote repository؟",
            options: ["git push", "git upload", "git send", "git transfer"],
            correct: 0,
            explanation: "git push تستخدم لرفع التغييرات إلى remote"
        },
        {
            question: "كيف يتم سحب التغييرات من remote repository؟",
            options: ["git pull", "git fetch", "git download", "git get"],
            correct: 0,
            explanation: "git pull تستخدم لسحب التغييرات من remote"
        },
        {
            question: "كيف يتم إنشاء branch جديد؟",
            options: ["git branch branchname", "git create branchname", "git new branchname", "git make branchname"],
            correct: 0,
            explanation: "git branch تستخدم لإنشاء branch جديد"
        },
        {
            question: "كيف يتم الانتقال إلى branch آخر؟",
            options: ["git checkout branchname", "git switch branchname", "git go branchname", "git move branchname"],
            correct: 0,
            explanation: "git checkout تستخدم للانتقال إلى branch آخر"
        },
        {
            question: "كيف يتم دمج branch في branch آخر؟",
            options: ["git merge branchname", "git combine branchname", "git join branchname", "git unite branchname"],
            correct: 0,
            explanation: "git merge تستخدم لدمج branch في branch آخر"
        }
    ],
    dart: [
        {
            question: "كيف يتم تعريف متغير في Dart؟",
            options: ["var x = 5;", "int x = 5;", "x = 5;", "let x = 5;"],
            correct: 0,
            explanation: "var تستخدم لتعريف متغير في Dart"
        },
        {
            question: "كيف يتم طباعة نص في Dart؟",
            options: ["print('Hello');", "console.log('Hello');", "echo('Hello');", "printf('Hello');"],
            correct: 0,
            explanation: "print() تستخدم لطباعة النص في Dart"
        },
        {
            question: "كيف يتم إنشاء دالة في Dart؟",
            options: ["void myFunction() {}", "function myFunction() {}", "def myFunction() {}", "func myFunction() {}"],
            correct: 0,
            explanation: "void تستخدم لإنشاء دالة في Dart"
        },
        {
            question: "ما هو الرمز المستخدم للتعليق في Dart؟",
            options: ["//", "/* */", "#", "<!-- -->"],
            correct: 0,
            explanation: "// تستخدم للتعليق في سطر واحد في Dart"
        },
        {
            question: "كيف يتم إنشاء قائمة في Dart؟",
            options: ["List<int> numbers = [1,2,3];", "list numbers = [1,2,3];", "array numbers = [1,2,3];", "numbers = [1,2,3];"],
            correct: 0,
            explanation: "List تستخدم لإنشاء قائمة في Dart"
        },
        {
            question: "كيف يتم إنشاء class في Dart؟",
            options: ["class MyClass {}", "function MyClass {}", "def MyClass {}", "create MyClass {}"],
            correct: 0,
            explanation: "class تستخدم لإنشاء class في Dart"
        },
        {
            question: "ما هي الكلمة المفتاحية المستخدمة للوراثة؟",
            options: ["extends", "inherits", "implements", "super"],
            correct: 0,
            explanation: "extends تستخدم للوراثة في Dart"
        },
        {
            question: "كيف يتم إنشاء كائن جديد؟",
            options: ["new MyClass()", "MyClass()", "create MyClass()", "object MyClass()"],
            correct: 0,
            explanation: "new تستخدم لإنشاء كائن جديد في Dart"
        }
    ],
    flutter: [
        {
            question: "كيف يتم إنشاء widget في Flutter؟",
            options: ["Widget build(BuildContext context) {}", "function build() {}", "def build() {}", "create widget() {}"],
            correct: 0,
            explanation: "Widget build() تستخدم لإنشاء widget في Flutter"
        },
        {
            question: "ما هو Widget المستخدم للنص؟",
            options: ["Text()", "String()", "Label()", "Paragraph()"],
            correct: 0,
            explanation: "Text() تستخدم لعرض النص في Flutter"
        },
        {
            question: "كيف يتم إنشاء زر في Flutter؟",
            options: ["ElevatedButton()", "Button()", "ClickButton()", "PressButton()"],
            correct: 0,
            explanation: "ElevatedButton() تستخدم لإنشاء زر في Flutter"
        },
        {
            question: "ما هو Widget المستخدم للحاوية؟",
            options: ["Container()", "Box()", "Div()", "Wrapper()"],
            correct: 0,
            explanation: "Container() تستخدم كحاوية في Flutter"
        },
        {
            question: "كيف يتم ترتيب العناصر عمودياً؟",
            options: ["Column()", "Vertical()", "Stack()", "List()"],
            correct: 0,
            explanation: "Column() تستخدم لترتيب العناصر عمودياً"
        },
        {
            question: "كيف يتم ترتيب العناصر أفقياً؟",
            options: ["Row()", "Horizontal()", "Line()", "Array()"],
            correct: 0,
            explanation: "Row() تستخدم لترتيب العناصر أفقياً"
        },
        {
            question: "ما هو Widget المستخدم للقائمة؟",
            options: ["ListView()", "List()", "ArrayView()", "ItemList()"],
            correct: 0,
            explanation: "ListView() تستخدم لإنشاء قائمة في Flutter"
        },
        {
            question: "كيف يتم إضافة padding للعنصر؟",
            options: ["Padding()", "Margin()", "Space()", "Gap()"],
            correct: 0,
            explanation: "Padding() تستخدم لإضافة padding للعنصر"
        }
    ],
    vue: [
        {
            question: "كيف يتم إنشاء مكون في Vue.js؟",
            options: ["Vue.component()", "component()", "createComponent()", "new Component()"],
            correct: 0,
            explanation: "Vue.component() تستخدم لإنشاء مكون في Vue.js"
        },
        {
            question: "كيف يتم ربط البيانات في Vue.js؟",
            options: ["v-model", "v-bind", "v-data", "v-connect"],
            correct: 0,
            explanation: "v-model تستخدم لربط البيانات في Vue.js"
        },
        {
            question: "كيف يتم عرض نص في Vue.js؟",
            options: ["{{ text }}", "{{text}}", "{{ text }}", "{{text}}"],
            correct: 0,
            explanation: "{{ }} تستخدم لعرض النص في Vue.js"
        },
        {
            question: "كيف يتم إضافة حدث النقر؟",
            options: ["@click", "v-click", "onClick", "click"],
            correct: 0,
            explanation: "@click تستخدم لإضافة حدث النقر في Vue.js"
        },
        {
            question: "كيف يتم إنشاء computed property؟",
            options: ["computed: {}", "computed() {}", "function computed() {}", "get computed() {}"],
            correct: 0,
            explanation: "computed: {} تستخدم لإنشاء computed property"
        },
        {
            question: "كيف يتم إنشاء watcher؟",
            options: ["watch: {}", "watch() {}", "function watch() {}", "observe() {}"],
            correct: 0,
            explanation: "watch: {} تستخدم لإنشاء watcher"
        },
        {
            question: "ما هو الرمز المستخدم للشرط؟",
            options: ["v-if", "v-show", "v-condition", "v-check"],
            correct: 0,
            explanation: "v-if تستخدم للشرط في Vue.js"
        },
        {
            question: "كيف يتم التكرار في Vue.js؟",
            options: ["v-for", "v-repeat", "v-loop", "v-iterate"],
            correct: 0,
            explanation: "v-for تستخدم للتكرار في Vue.js"
        }
    ],
    angular: [
        {
            question: "كيف يتم إنشاء مكون في Angular؟",
            options: ["ng generate component", "ng create component", "ng new component", "ng make component"],
            correct: 0,
            explanation: "ng generate component تستخدم لإنشاء مكون في Angular"
        },
        {
            question: "كيف يتم ربط البيانات في Angular؟",
            options: ["[(ngModel)]", "[ngModel]", "(ngModel)", "ngModel"],
            correct: 0,
            explanation: "[(ngModel)] تستخدم لربط البيانات في Angular"
        },
        {
            question: "كيف يتم عرض نص في Angular؟",
            options: ["{{ text }}", "{{text}}", "{{ text }}", "{{text}}"],
            correct: 0,
            explanation: "{{ }} تستخدم لعرض النص في Angular"
        },
        {
            question: "كيف يتم إضافة حدث النقر؟",
            options: ["(click)", "@click", "onClick", "click"],
            correct: 0,
            explanation: "(click) تستخدم لإضافة حدث النقر في Angular"
        },
        {
            question: "كيف يتم إنشاء service؟",
            options: ["ng generate service", "ng create service", "ng new service", "ng make service"],
            correct: 0,
            explanation: "ng generate service تستخدم لإنشاء service"
        },
        {
            question: "ما هو الرمز المستخدم للشرط؟",
            options: ["*ngIf", "*ngShow", "*ngCondition", "*ngCheck"],
            correct: 0,
            explanation: "*ngIf تستخدم للشرط في Angular"
        },
        {
            question: "كيف يتم التكرار في Angular؟",
            options: ["*ngFor", "*ngRepeat", "*ngLoop", "*ngIterate"],
            correct: 0,
            explanation: "*ngFor تستخدم للتكرار في Angular"
        },
        {
            question: "كيف يتم إنشاء pipe؟",
            options: ["ng generate pipe", "ng create pipe", "ng new pipe", "ng make pipe"],
            correct: 0,
            explanation: "ng generate pipe تستخدم لإنشاء pipe"
        }
    ],
    laravel: [
        {
            question: "كيف يتم إنشاء controller في Laravel؟",
            options: ["php artisan make:controller", "php artisan create:controller", "php artisan new:controller", "php artisan generate:controller"],
            correct: 0,
            explanation: "php artisan make:controller تستخدم لإنشاء controller"
        },
        {
            question: "كيف يتم إنشاء model في Laravel؟",
            options: ["php artisan make:model", "php artisan create:model", "php artisan new:model", "php artisan generate:model"],
            correct: 0,
            explanation: "php artisan make:model تستخدم لإنشاء model"
        },
        {
            question: "كيف يتم إنشاء migration؟",
            options: ["php artisan make:migration", "php artisan create:migration", "php artisan new:migration", "php artisan generate:migration"],
            correct: 0,
            explanation: "php artisan make:migration تستخدم لإنشاء migration"
        },
        {
            question: "كيف يتم تشغيل migration؟",
            options: ["php artisan migrate", "php artisan run:migration", "php artisan execute:migration", "php artisan start:migration"],
            correct: 0,
            explanation: "php artisan migrate تستخدم لتشغيل migration"
        },
        {
            question: "كيف يتم إنشاء route في Laravel؟",
            options: ["Route::get()", "Route::post()", "Route::put()", "Route::delete()"],
            correct: 0,
            explanation: "Route::get() تستخدم لإنشاء route"
        },
        {
            question: "كيف يتم إنشاء middleware؟",
            options: ["php artisan make:middleware", "php artisan create:middleware", "php artisan new:middleware", "php artisan generate:middleware"],
            correct: 0,
            explanation: "php artisan make:middleware تستخدم لإنشاء middleware"
        },
        {
            question: "كيف يتم إنشاء seeder؟",
            options: ["php artisan make:seeder", "php artisan create:seeder", "php artisan new:seeder", "php artisan generate:seeder"],
            correct: 0,
            explanation: "php artisan make:seeder تستخدم لإنشاء seeder"
        },
        {
            question: "كيف يتم تشغيل seeder؟",
            options: ["php artisan db:seed", "php artisan run:seed", "php artisan execute:seed", "php artisan start:seed"],
            correct: 0,
            explanation: "php artisan db:seed تستخدم لتشغيل seeder"
        }
    ],
    django: [
        {
            question: "كيف يتم إنشاء مشروع Django؟",
            options: ["django-admin startproject", "django startproject", "python manage.py startproject", "django create project"],
            correct: 0,
            explanation: "django-admin startproject تستخدم لإنشاء مشروع Django"
        },
        {
            question: "كيف يتم إنشاء app في Django؟",
            options: ["python manage.py startapp", "django startapp", "python startapp", "django-admin startapp"],
            correct: 0,
            explanation: "python manage.py startapp تستخدم لإنشاء app"
        },
        {
            question: "كيف يتم إنشاء model في Django؟",
            options: ["class MyModel(models.Model):", "def MyModel(models.Model):", "model MyModel():", "create MyModel():"],
            correct: 0,
            explanation: "class MyModel(models.Model): تستخدم لإنشاء model"
        },
        {
            question: "كيف يتم إنشاء migration؟",
            options: ["python manage.py makemigrations", "django makemigrations", "python makemigrations", "django-admin makemigrations"],
            correct: 0,
            explanation: "python manage.py makemigrations تستخدم لإنشاء migration"
        },
        {
            question: "كيف يتم تشغيل migration؟",
            options: ["python manage.py migrate", "django migrate", "python migrate", "django-admin migrate"],
            correct: 0,
            explanation: "python manage.py migrate تستخدم لتشغيل migration"
        },
        {
            question: "كيف يتم إنشاء view في Django؟",
            options: ["def my_view(request):", "class my_view:", "view my_view():", "create my_view():"],
            correct: 0,
            explanation: "def my_view(request): تستخدم لإنشاء view"
        },
        {
            question: "كيف يتم إنشاء URL pattern؟",
            options: ["path('url/', view)", "url('url/', view)", "route('url/', view)", "link('url/', view)"],
            correct: 0,
            explanation: "path('url/', view) تستخدم لإنشاء URL pattern"
        },
        {
            question: "كيف يتم تشغيل خادم التطوير؟",
            options: ["python manage.py runserver", "django runserver", "python runserver", "django-admin runserver"],
            correct: 0,
            explanation: "python manage.py runserver تستخدم لتشغيل خادم التطوير"
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
        },
        {
            question: "كيف يتم إنشاء كائن في JavaScript؟",
            options: ["{}", "new Object()", "object()", "create()"],
            correct: 0,
            explanation: "{} تستخدم لإنشاء كائن جديد"
        },
        {
            question: "ما هي الدالة المستخدمة لتحويل النص إلى عدد؟",
            options: ["parseInt()", "toNumber()", "convert()", "number()"],
            correct: 0,
            explanation: "parseInt() تستخدم لتحويل النص إلى عدد"
        },
        {
            question: "كيف يتم إنشاء دالة سهمية؟",
            options: ["() => {}", "function() {}", "arrow() {}", "=>() {}"],
            correct: 0,
            explanation: "() => {} تستخدم لإنشاء دالة سهمية"
        },
        {
            question: "ما هي الدالة المستخدمة لتنفيذ كود بعد وقت محدد؟",
            options: ["setTimeout()", "delay()", "wait()", "pause()"],
            correct: 0,
            explanation: "setTimeout() تستخدم لتنفيذ كود بعد وقت محدد"
        }
    ]
};

// Initialize game
function initGame() {
    initAchievements();
    showMenu();
}

// Show main menu
function showMenu() {
    document.querySelector('.game-menu').style.display = 'grid';
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('achievementsScreen').style.display = 'none';
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
        javascript: 'تعلم JavaScript',
        python: 'تعلم Python',
        php: 'تعلم PHP',
        sql: 'تعلم SQL',
        react: 'تعلم React',
        cpp: 'تعلم C++',
        java: 'تعلم Java',
        typescript: 'تعلم TypeScript',
        nodejs: 'تعلم Node.js',
        git: 'تعلم Git',
        dart: 'تعلم Dart',
        flutter: 'تعلم Flutter',
        vue: 'تعلم Vue.js',
        angular: 'تعلم Angular',
        laravel: 'تعلم Laravel',
        django: 'تعلم Django'
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
    
    // تحديث عنوان اللعبة ليشمل المستوى
    const currentLevel = Math.floor(currentQuestionIndex / 3) + 1;
    const maxLevel = Math.ceil(questions.length / 3);
    document.getElementById('gameTitle').textContent = `تعلم ${getLanguageTitle(currentLanguage)} - المستوى ${currentLevel}/${maxLevel}`;
    
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

// دالة مساعدة للحصول على عنوان اللغة
function getLanguageTitle(language) {
    const titles = {
        'html': 'HTML',
        'css': 'CSS',
        'javascript': 'JavaScript',
        'python': 'Python',
        'php': 'PHP',
        'sql': 'SQL',
        'react': 'React',
        'cpp': 'C++',
        'java': 'Java',
        'typescript': 'TypeScript',
        'nodejs': 'Node.js',
        'git': 'Git',
        'dart': 'Dart',
        'flutter': 'Flutter',
        'vue': 'Vue.js',
        'angular': 'Angular',
        'laravel': 'Laravel',
        'django': 'Django'
    };
    return titles[language] || language.toUpperCase();
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
        achievements.correctAnswers++;
        consecutiveCorrect++;
        updateScore();
        showMessage('إجابة صحيحة! 🎉', 'success');
    } else {
        consecutiveCorrect = 0;
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
    
    // التحقق من الانتقال لمستوى جديد
    const newLevel = Math.floor(currentQuestionIndex / 3) + 1;
    if (newLevel > level) {
        level = newLevel;
        updateScore();
        
        // رسالة تهنئة عند الانتقال للمستوى التالي
        const maxLevel = Math.ceil(questions.length / 3);
        if (level <= maxLevel) {
            showMessage(`🎉 تهانينا! انتقلت للمستوى ${level}`, 'success');
        }
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
    
    // Update achievements
    achievements.totalScore += score;
    achievements.gamesPlayed++;
    achievements.consecutiveCorrect = Math.max(achievements.consecutiveCorrect, consecutiveCorrect);
    
    // Add completed language
    if (!achievements.languagesCompleted.includes(currentLanguage)) {
        achievements.languagesCompleted.push(currentLanguage);
    }
    
    // Check for new achievements
    checkAchievements();
    
    // Save achievements
    saveAchievements();
    
    // Show result screen
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    
    // Update final score with more details
    const maxScore = questions.length * 10;
    const percentage = Math.round((score / maxScore) * 100);
    const maxLevel = Math.ceil(questions.length / 3);
    
    document.getElementById('finalScore').textContent = `${score}/${maxScore} (${percentage}%)`;
    
    // إضافة معلومات المستويات المكتملة
    const resultScreen = document.getElementById('resultScreen');
    const levelInfo = document.createElement('div');
    levelInfo.className = 'level-info';
    levelInfo.innerHTML = `
        <h4>📊 إحصائيات اللعبة:</h4>
        <p>المستويات المكتملة: ${level}/${maxLevel}</p>
        <p>الإجابات الصحيحة: ${Math.floor(score / 10)}/${questions.length}</p>
        <p>نسبة النجاح: ${percentage}%</p>
    `;
    levelInfo.style.cssText = `
        background: rgba(255, 255, 255, 0.1);
        padding: 15px;
        border-radius: 10px;
        margin: 15px 0;
        text-align: center;
    `;
    
    // إضافة معلومات المستوى قبل النجوم
    const starsContainer = document.getElementById('stars');
    starsContainer.parentNode.insertBefore(levelInfo, starsContainer);
    
    // Show stars based on score
    starsContainer.innerHTML = '';
    
    const starCount = Math.floor((score / maxScore) * 5);
    
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.textContent = i < starCount ? '⭐' : '☆';
        star.style.fontSize = '2rem';
        star.style.margin = '0 5px';
        starsContainer.appendChild(star);
    }
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

// Show achievements screen
function showAchievements() {
    document.querySelector('.game-menu').style.display = 'none';
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('achievementsScreen').style.display = 'block';
    
    displayAchievements();
}

// Display all achievements
function displayAchievements() {
    const achievementsGrid = document.getElementById('achievementsGrid');
    achievementsGrid.innerHTML = '';
    
    const allAchievements = [
        // Score achievements
        'beginner', 'first_50', 'century', 'quarter_master', 'master', 'expert_master', 'legend', 'grandmaster',
        // Games played achievements
        'starter', 'dedicated', 'regular', 'persistent', 'veteran', 'addict',
        // Correct answers achievements
        'first_steps', 'learner', 'intermediate', 'scholar', 'expert', 'genius', 'savant',
        // Consecutive correct achievements
        'warm_up', 'streak', 'hot_streak', 'fire_streak', 'unstoppable',
        // Language specific achievements
        'html_master', 'css_master', 'js_master', 'python_master', 'php_master', 'sql_master', 'react_master',
        'cpp_master', 'java_master', 'typescript_master', 'nodejs_master', 'git_master', 'dart_master',
        'flutter_master', 'vue_master', 'angular_master', 'laravel_master', 'django_master',
        // Category achievements
        'web_developer', 'frontend_expert', 'backend_expert', 'fullstack_expert', 'mobile_developer', 'devops_expert',
        // Special achievements
        'polyglot', 'perfect'
    ];
    
    allAchievements.forEach(achievementId => {
        const achievement = getAchievementData(achievementId);
        const isUnlocked = achievements.unlockedAchievements.includes(achievementId);
        
        const achievementElement = document.createElement('div');
        achievementElement.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
        
        let progress = 0;
        let progressText = '';
        
        // Calculate progress for each achievement
        switch(achievementId) {
            case 'beginner':
                progress = Math.min(100, (achievements.totalScore / 25) * 100);
                progressText = `${achievements.totalScore}/25`;
                break;
            case 'first_50':
                progress = Math.min(100, (achievements.totalScore / 50) * 100);
                progressText = `${achievements.totalScore}/50`;
                break;
            case 'century':
                progress = Math.min(100, (achievements.totalScore / 100) * 100);
                progressText = `${achievements.totalScore}/100`;
                break;
            case 'quarter_master':
                progress = Math.min(100, (achievements.totalScore / 250) * 100);
                progressText = `${achievements.totalScore}/250`;
                break;
            case 'master':
                progress = Math.min(100, (achievements.totalScore / 500) * 100);
                progressText = `${achievements.totalScore}/500`;
                break;
            case 'expert_master':
                progress = Math.min(100, (achievements.totalScore / 750) * 100);
                progressText = `${achievements.totalScore}/750`;
                break;
            case 'legend':
                progress = Math.min(100, (achievements.totalScore / 1000) * 100);
                progressText = `${achievements.totalScore}/1000`;
                break;
            case 'grandmaster':
                progress = Math.min(100, (achievements.totalScore / 2000) * 100);
                progressText = `${achievements.totalScore}/2000`;
                break;
            case 'starter':
                progress = Math.min(100, (achievements.gamesPlayed / 3) * 100);
                progressText = `${achievements.gamesPlayed}/3`;
                break;
            case 'dedicated':
                progress = Math.min(100, (achievements.gamesPlayed / 5) * 100);
                progressText = `${achievements.gamesPlayed}/5`;
                break;
            case 'regular':
                progress = Math.min(100, (achievements.gamesPlayed / 10) * 100);
                progressText = `${achievements.gamesPlayed}/10`;
                break;
            case 'persistent':
                progress = Math.min(100, (achievements.gamesPlayed / 20) * 100);
                progressText = `${achievements.gamesPlayed}/20`;
                break;
            case 'veteran':
                progress = Math.min(100, (achievements.gamesPlayed / 50) * 100);
                progressText = `${achievements.gamesPlayed}/50`;
                break;
            case 'addict':
                progress = Math.min(100, (achievements.gamesPlayed / 100) * 100);
                progressText = `${achievements.gamesPlayed}/100`;
                break;
            case 'first_steps':
                progress = Math.min(100, (achievements.correctAnswers / 5) * 100);
                progressText = `${achievements.correctAnswers}/5`;
                break;
            case 'learner':
                progress = Math.min(100, (achievements.correctAnswers / 10) * 100);
                progressText = `${achievements.correctAnswers}/10`;
                break;
            case 'intermediate':
                progress = Math.min(100, (achievements.correctAnswers / 25) * 100);
                progressText = `${achievements.correctAnswers}/25`;
                break;
            case 'scholar':
                progress = Math.min(100, (achievements.correctAnswers / 50) * 100);
                progressText = `${achievements.correctAnswers}/50`;
                break;
            case 'expert':
                progress = Math.min(100, (achievements.correctAnswers / 100) * 100);
                progressText = `${achievements.correctAnswers}/100`;
                break;
            case 'genius':
                progress = Math.min(100, (achievements.correctAnswers / 200) * 100);
                progressText = `${achievements.correctAnswers}/200`;
                break;
            case 'savant':
                progress = Math.min(100, (achievements.correctAnswers / 500) * 100);
                progressText = `${achievements.correctAnswers}/500`;
                break;
            case 'warm_up':
                progress = Math.min(100, (achievements.consecutiveCorrect / 3) * 100);
                progressText = `${achievements.consecutiveCorrect}/3`;
                break;
            case 'streak':
                progress = Math.min(100, (achievements.consecutiveCorrect / 5) * 100);
                progressText = `${achievements.consecutiveCorrect}/5`;
                break;
            case 'hot_streak':
                progress = Math.min(100, (achievements.consecutiveCorrect / 8) * 100);
                progressText = `${achievements.consecutiveCorrect}/8`;
                break;
            case 'fire_streak':
                progress = Math.min(100, (achievements.consecutiveCorrect / 12) * 100);
                progressText = `${achievements.consecutiveCorrect}/12`;
                break;
            case 'unstoppable':
                progress = Math.min(100, (achievements.consecutiveCorrect / 20) * 100);
                progressText = `${achievements.consecutiveCorrect}/20`;
                break;
            case 'html_master':
                progress = achievements.languagesCompleted.includes('html') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('html') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'css_master':
                progress = achievements.languagesCompleted.includes('css') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('css') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'js_master':
                progress = achievements.languagesCompleted.includes('javascript') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('javascript') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'python_master':
                progress = achievements.languagesCompleted.includes('python') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('python') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'php_master':
                progress = achievements.languagesCompleted.includes('php') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('php') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'sql_master':
                progress = achievements.languagesCompleted.includes('sql') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('sql') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'react_master':
                progress = achievements.languagesCompleted.includes('react') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('react') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'cpp_master':
                progress = achievements.languagesCompleted.includes('cpp') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('cpp') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'java_master':
                progress = achievements.languagesCompleted.includes('java') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('java') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'typescript_master':
                progress = achievements.languagesCompleted.includes('typescript') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('typescript') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'nodejs_master':
                progress = achievements.languagesCompleted.includes('nodejs') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('nodejs') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'git_master':
                progress = achievements.languagesCompleted.includes('git') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('git') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'dart_master':
                progress = achievements.languagesCompleted.includes('dart') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('dart') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'flutter_master':
                progress = achievements.languagesCompleted.includes('flutter') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('flutter') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'vue_master':
                progress = achievements.languagesCompleted.includes('vue') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('vue') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'angular_master':
                progress = achievements.languagesCompleted.includes('angular') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('angular') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'laravel_master':
                progress = achievements.languagesCompleted.includes('laravel') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('laravel') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'django_master':
                progress = achievements.languagesCompleted.includes('django') ? 100 : 0;
                progressText = achievements.languagesCompleted.includes('django') ? 'مكتمل' : 'غير مكتمل';
                break;
            case 'web_developer':
                const webLanguages = ['html', 'css', 'javascript'];
                const webCompleted = webLanguages.filter(lang => achievements.languagesCompleted.includes(lang)).length;
                progress = (webCompleted / webLanguages.length) * 100;
                progressText = `${webCompleted}/${webLanguages.length}`;
                break;
            case 'frontend_expert':
                const webFrameworks = ['react', 'vue', 'angular'];
                const frontendCompleted = webFrameworks.filter(framework => achievements.languagesCompleted.includes(framework)).length;
                progress = (frontendCompleted / webFrameworks.length) * 100;
                progressText = `${frontendCompleted}/${webFrameworks.length}`;
                break;
            case 'backend_expert':
                const backendLanguages = ['python', 'php', 'java', 'cpp'];
                const backendCompleted = backendLanguages.filter(lang => achievements.languagesCompleted.includes(lang)).length;
                progress = (backendCompleted / backendLanguages.length) * 100;
                progressText = `${backendCompleted}/${backendLanguages.length}`;
                break;
            case 'fullstack_expert':
                const backendFrameworks = ['laravel', 'django', 'nodejs'];
                const fullstackCompleted = backendFrameworks.filter(framework => achievements.languagesCompleted.includes(framework)).length;
                progress = (fullstackCompleted / backendFrameworks.length) * 100;
                progressText = `${fullstackCompleted}/${backendFrameworks.length}`;
                break;
            case 'mobile_developer':
                const mobileDev = ['dart', 'flutter'];
                const mobileCompleted = mobileDev.filter(tech => achievements.languagesCompleted.includes(tech)).length;
                progress = (mobileCompleted / mobileDev.length) * 100;
                progressText = `${mobileCompleted}/${mobileDev.length}`;
                break;
            case 'devops_expert':
                const tools = ['git', 'sql', 'typescript'];
                const toolsCompleted = tools.filter(tool => achievements.languagesCompleted.includes(tool)).length;
                progress = (toolsCompleted / tools.length) * 100;
                progressText = `${toolsCompleted}/${tools.length}`;
                break;
            case 'polyglot':
                progress = Math.min(100, (achievements.languagesCompleted.length / 18) * 100);
                progressText = `${achievements.languagesCompleted.length}/18`;
                break;
            case 'perfect':
                progress = 0; // This is a special achievement that can't be tracked
                progressText = 'إنجاز خاص';
                break;
        }
        
        achievementElement.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-title">${achievement.title}</div>
            <div class="achievement-description">${achievement.description}</div>
            <div class="achievement-progress">
                <div class="progress-bar">
                    <div class="progress" style="width: ${progress}%"></div>
                </div>
                <div class="progress-text">${progressText}</div>
            </div>
        `;
        
        achievementsGrid.appendChild(achievementElement);
    });
} 