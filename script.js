class ProgrammingGame {
    constructor() {
        this.currentLanguage = null;
        this.currentLevel = 1;
        this.stars = 0;
        
        // حماية إضافية
        this.setupProtection();
        
        this.gameData = {
            html: {
                title: "تعلم HTML",
                icon: "🌐",
                levels: [
            {
                        question: "اكتب عنوان رئيسي باستخدام علامة &lt;h1&gt;",
                solution: "<h1>مرحباً بالعالم</h1>",
                        stars: 3,
                        hint: "استخدم علامة h1 مع النص المطلوب"
            },
            {
                question: "اكتب عنوان فرعي باستخدام علامة &lt;h2&gt;",
                        solution: "<h2>عنوان فرعي</h2>",
                        stars: 2,
                        hint: "استخدم علامة h2 بدلاً من h1"
            },
            {
                question: "اكتب فقرة باستخدام علامة &lt;p&gt;",
                        solution: "<p>هذه فقرة نصية</p>",
                        stars: 2,
                        hint: "استخدم علامة p للنصوص العادية"
            },
            {
                        question: "اكتب رابط باستخدام علامة &lt;a&gt; مع href",
                        solution: "<a href='https://www.example.com'>رابط المثال</a>",
                        stars: 3,
                        hint: "استخدم علامة a مع خاصية href"
            },
            {
                        question: "اكتب قائمة غير مرتبة باستخدام &lt;ul&gt; و &lt;li&gt;",
                        solution: "<ul><li>عنصر أول</li><li>عنصر ثاني</li></ul>",
                        stars: 3,
                        hint: "استخدم ul للقائمة و li للعناصر"
                    },
                    {
                        question: "اكتب صورة باستخدام علامة &lt;img&gt; مع src و alt",
                        solution: "<img src='image.jpg' alt='وصف الصورة'>",
                        stars: 3,
                        hint: "استخدم علامة img مع src و alt"
                    },
                    {
                        question: "اكتب جدول بسيط باستخدام &lt;table&gt;, &lt;tr&gt;, &lt;td&gt;",
                        solution: "<table><tr><td>خلية 1</td><td>خلايا 2</td></tr></table>",
                        stars: 4,
                        hint: "استخدم table للجدول و tr للصفوف و td للخلايا"
                    },
                    {
                        question: "اكتب نموذج بسيط باستخدام &lt;form&gt; و &lt;input&gt;",
                        solution: "<form><input type='text' placeholder='اكتب هنا'></form>",
                        stars: 4,
                        hint: "استخدم form للنموذج و input للحقل"
                    },
                    {
                        question: "اكتب زر باستخدام علامة &lt;button&gt;",
                        solution: "<button>اضغط هنا</button>",
                        stars: 2,
                        hint: "استخدم علامة button للزر"
            },
            {
                        question: "اكتب قسم باستخدام علامة &lt;div&gt; مع محتوى",
                        solution: "<div>هذا قسم منفصل</div>",
                        stars: 2,
                        hint: "استخدم علامة div لتقسيم المحتوى"
                    }
                ]
            },
            css: {
                title: "تعلم CSS",
                icon: "🎨",
                levels: [
                    {
                        question: "اكتب CSS لتغيير لون النص إلى أزرق",
                        solution: "color: blue;",
                        stars: 2,
                        hint: "استخدم خاصية color"
                    },
                    {
                        question: "اكتب CSS لتغيير حجم الخط إلى 20px",
                        solution: "font-size: 20px;",
                        stars: 2,
                        hint: "استخدم خاصية font-size"
                    },
                    {
                        question: "اكتب CSS لتغيير لون خلفية العنصر إلى أحمر",
                        solution: "background-color: red;",
                        stars: 2,
                        hint: "استخدم خاصية background-color"
                    },
                    {
                        question: "اكتب CSS لإضافة حدود للعنصر",
                        solution: "border: 2px solid black;",
                        stars: 3,
                        hint: "استخدم خاصية border"
                    },
                    {
                        question: "اكتب CSS لتوسيط النص",
                        solution: "text-align: center;",
                        stars: 2,
                        hint: "استخدم خاصية text-align"
            },
            {
                        question: "اكتب CSS لإضافة padding للعنصر",
                        solution: "padding: 10px;",
                        stars: 2,
                        hint: "استخدم خاصية padding"
                    },
                    {
                        question: "اكتب CSS لإضافة margin للعنصر",
                        solution: "margin: 15px;",
                        stars: 2,
                        hint: "استخدم خاصية margin"
                    },
                    {
                        question: "اكتب CSS لتغيير نوع الخط",
                        solution: "font-family: Arial, sans-serif;",
                        stars: 3,
                        hint: "استخدم خاصية font-family"
                    },
                    {
                        question: "اكتب CSS لإضافة تأثير hover للزر",
                        solution: "button:hover { background-color: green; }",
                        stars: 4,
                        hint: "استخدم :hover مع خاصية background-color"
            },
            {
                        question: "اكتب CSS لجعل العنصر دائري",
                        solution: "border-radius: 50%;",
                        stars: 3,
                        hint: "استخدم خاصية border-radius"
                    }
                ]
            },
            javascript: {
                title: "تعلم JavaScript",
                icon: "⚡",
                levels: [
                    {
                        question: "اكتب متغير باسم 'name' وقيمته 'أحمد'",
                        solution: "let name = 'أحمد';",
                        stars: 2,
                        hint: "استخدم let لإنشاء متغير"
            },
            {
                        question: "اكتب دالة بسيطة باسم 'greet' ترجع 'مرحباً'",
                        solution: "function greet() { return 'مرحباً'; }",
                        stars: 3,
                        hint: "استخدم function لإنشاء دالة"
            },
            {
                        question: "اكتب شرط if للتحقق من أن العمر أكبر من 18",
                        solution: "if (age > 18) { console.log('بالغ'); }",
                        stars: 3,
                        hint: "استخدم if مع علامة >"
                    },
                    {
                        question: "اكتب حلقة for لطباعة الأرقام من 1 إلى 5",
                        solution: "for (let i = 1; i <= 5; i++) { console.log(i); }",
                        stars: 4,
                        hint: "استخدم for مع متغير i"
                    },
                    {
                        question: "اكتب مصفوفة تحتوي على 3 عناصر",
                        solution: "let array = ['أول', 'ثاني', 'ثالث'];",
                        stars: 3,
                        hint: "استخدم [] لإنشاء مصفوفة"
                    },
                    {
                        question: "اكتب كائن بسيط باسم 'person' مع خاصية 'name'",
                        solution: "let person = { name: 'أحمد' };",
                        stars: 3,
                        hint: "استخدم {} لإنشاء كائن"
                    },
                    {
                        question: "اكتب حدث click على زر",
                        solution: "button.addEventListener('click', function() { alert('تم النقر!'); });",
                        stars: 4,
                        hint: "استخدم addEventListener مع 'click'"
                    },
                    {
                        question: "اكتب دالة arrow function",
                        solution: "const multiply = (a, b) => a * b;",
                        stars: 4,
                        hint: "استخدم => لإنشاء arrow function"
                    },
                    {
                        question: "اكتب try-catch لمعالجة الأخطاء",
                        solution: "try { riskyCode(); } catch (error) { console.log(error); }",
                        stars: 4,
                        hint: "استخدم try و catch لمعالجة الأخطاء"
                    },
                    {
                        question: "اكتب Promise بسيط",
                        solution: "let promise = new Promise((resolve, reject) => { resolve('نجح!'); });",
                        stars: 5,
                        hint: "استخدم new Promise مع resolve"
            }
                ]
            }
        };
        
        this.userProgress = this.loadProgress();
        this.initializeGame();
        this.setupEventListeners();
    }

    setupProtection() {
        // حماية إضافية من النسخ والسرقة
        (function() {
            'use strict';
            
            // منع فحص الكود
            const originalLog = console.log;
            console.log = function() {};
            
            // منع فتح وحدة تحكم المطور
            setInterval(() => {
                if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
                    document.body.innerHTML = '<div style="text-align: center; padding: 50px; font-size: 24px; color: red;">⚠️ تم اكتشاف محاولة فتح وحدة تحكم المطور<br><br>هذا المحتوى محمي من النسخ والسرقة<br><br>© Codinza - جميع الحقوق محفوظة</div>';
                }
            }, 1000);
            
            // منع النسخ
            document.addEventListener('copy', (e) => {
                e.preventDefault();
                alert('⚠️ النسخ غير مسموح\n\n© Codinza - جميع الحقوق محفوظة');
            });
            
            // منع اللصق
            document.addEventListener('paste', (e) => {
                e.preventDefault();
            });
            
            // منع القص
            document.addEventListener('cut', (e) => {
                e.preventDefault();
            });
            
            // منع فحص الكود المصدري
            document.addEventListener('keydown', (e) => {
                if (e.ctrlKey && (e.key === 'u' || e.key === 's')) {
                    e.preventDefault();
                    alert('⚠️ هذا المحتوى محمي من النسخ والسرقة\n\n© Codinza - جميع الحقوق محفوظة');
                }
            });
        })();
    }

    loadProgress() {
        const saved = localStorage.getItem('programmingGameProgress');
        return saved ? JSON.parse(saved) : {
            html: { completed: 0, totalStars: 0 },
            css: { completed: 0, totalStars: 0 },
            javascript: { completed: 0, totalStars: 0 }
        };
    }

    saveProgress() {
        localStorage.setItem('programmingGameProgress', JSON.stringify(this.userProgress));
    }

    initializeGame() {
        this.updateProgressDisplay();
        this.updateLevelDisplay();
        this.updateChallenge();
    }

    setupEventListeners() {
        // أزرار اختيار اللغة - تحسين للهواتف المحمولة
        document.querySelectorAll('.language-card').forEach(card => {
            // إضافة معالج النقر الأساسي
            card.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const language = card.dataset.language;
                this.selectLanguage(language);
            });
            
            // تحسين التفاعل مع اللمس للهواتف المحمولة
            let touchStartTime = 0;
            let touchStartY = 0;
            
            card.addEventListener('touchstart', (e) => {
                e.preventDefault();
                touchStartTime = Date.now();
                touchStartY = e.touches[0].clientY;
                card.style.transform = 'scale(0.98)';
                card.style.transition = 'transform 0.1s ease';
            });
            
            card.addEventListener('touchmove', (e) => {
                e.preventDefault();
                const touchY = e.touches[0].clientY;
                const deltaY = Math.abs(touchY - touchStartY);
                
                // إذا كان المستخدم يمرر بدلاً من النقر، أزل التأثير
                if (deltaY > 10) {
                    card.style.transform = '';
                }
            });
            
            card.addEventListener('touchend', (e) => {
                e.preventDefault();
                const touchEndTime = Date.now();
                const touchDuration = touchEndTime - touchStartTime;
                
                card.style.transform = '';
                card.style.transition = '';
                
                // إذا كان النقر قصيراً (أقل من 300ms)، اعتبره نقراً صحيحاً
                if (touchDuration < 300) {
                    const language = card.dataset.language;
                    this.selectLanguage(language);
                }
            });
            
            // منع النقر على العناصر الداخلية من إيقاف النقر على البطاقة
            card.querySelectorAll('*').forEach(element => {
                element.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
                
                element.addEventListener('touchstart', (e) => {
                    e.stopPropagation();
                });
                
                element.addEventListener('touchend', (e) => {
                    e.stopPropagation();
                });
            });
        });

        // زر العودة للقائمة الرئيسية
        const backToMenuButton = document.getElementById('back-to-menu');
        if (backToMenuButton) {
            backToMenuButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.showMainMenu();
            });
            
            // تحسين التفاعل مع اللمس
            this.addTouchSupport(backToMenuButton);
        }

        // أزرار اللعبة
        const checkButton = document.getElementById('check-button');
        if (checkButton) {
            checkButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.checkSolution();
            });
            this.addTouchSupport(checkButton);
        }

        const showSolutionButton = document.getElementById('show-solution');
        if (showSolutionButton) {
            showSolutionButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSolution();
            });
            this.addTouchSupport(showSolutionButton);
        }

        const backButton = document.getElementById('back-button');
        if (backButton) {
            backButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.goBack();
            });
            this.addTouchSupport(backButton);
        }

        const nextButton = document.getElementById('next-button');
        if (nextButton) {
            nextButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextLevel();
            });
            this.addTouchSupport(nextButton);
        }

        // زر مسح الكود
        const clearCodeButton = document.getElementById('clear-code');
        if (clearCodeButton) {
            clearCodeButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.clearCode();
            });
            this.addTouchSupport(clearCodeButton);
        }

        // تحديث الكود الملون عند الكتابة
        const userCode = document.getElementById('user-code');
        if (userCode) {
            userCode.addEventListener('input', () => this.highlightCode());
            
            // تحسين الكتابة على الهواتف
            userCode.addEventListener('focus', () => {
                // تأخير قصير لضمان ظهور لوحة المفاتيح
                setTimeout(() => {
                    userCode.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            });
            
            // تحسين التفاعل مع اللمس على منطقة الكود
            userCode.addEventListener('touchstart', (e) => {
                e.stopPropagation();
            });
        }
        
        // منع التكبير على الهواتف
        this.preventZoom();
        
        // إضافة معالج للتحقق من أن الصفحة محملة بشكل صحيح
        window.addEventListener('load', () => {
            console.log('تم تحميل الصفحة بنجاح');
            this.updateProgressDisplay();
        });
    }

    addTouchSupport(element) {
        element.addEventListener('touchstart', (e) => {
            e.preventDefault();
            element.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('touchend', (e) => {
            e.preventDefault();
            element.style.transform = '';
        });
    }

    preventZoom() {
        // منع التكبير على الهواتف
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (event) => {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }

    selectLanguage(language) {
        this.currentLanguage = language;
        this.currentLevel = 1;
        this.stars = 0;
        
        // إخفاء الصفحة الرئيسية وإظهار صفحة اللعبة
        document.querySelector('.game-container').style.display = 'none';
        document.querySelector('.game-page').style.display = 'block';
        
        // تحديث عنوان اللغة مع إضافة شعار Codinza
        const languageTitle = document.getElementById('language-title');
        languageTitle.textContent = this.gameData[language].title;
        
        // إضافة تأثير للشعار
        const brandLogo = document.querySelector('.brand-logo');
        if (brandLogo) {
            brandLogo.style.animation = 'logoPulse 0.5s ease-in-out';
            setTimeout(() => {
                brandLogo.style.animation = 'logoPulse 2s ease-in-out infinite';
            }, 500);
        }
        
        this.updateLevelDisplay();
        this.updateChallenge();
        this.updateStarsDisplay();
    }

    showMainMenu() {
        document.querySelector('.game-page').style.display = 'none';
        document.querySelector('.game-container').style.display = 'block';
        this.updateProgressDisplay();
    }

    updateProgressDisplay() {
        Object.keys(this.userProgress).forEach(language => {
            const card = document.querySelector(`[data-language="${language}"]`);
            if (card) {
                const progressText = card.querySelector('.progress-text');
                const progressFill = card.querySelector('.progress-fill');
                const completed = this.userProgress[language].completed;
                const total = this.gameData[language].levels.length;
                const percentage = (completed / total) * 100;
                
                progressText.textContent = `${completed}/${total} مستويات مكتملة`;
                progressFill.style.width = `${percentage}%`;
            }
        });
    }

    updateLevelDisplay() {
        const levelElement = document.querySelector('.level');
        const levelNumber = document.querySelector('.level-number');
        
        if (levelElement) {
            levelElement.textContent = `مستوى ${this.currentLevel}`;
        }
        
        if (levelNumber) {
            levelNumber.textContent = this.currentLevel;
        }
    }

    updateChallenge() {
        const challengeText = document.querySelector('.challenge-text');
        if (challengeText && this.currentLanguage) {
            const currentLevelData = this.gameData[this.currentLanguage].levels[this.currentLevel - 1];
            challengeText.innerHTML = currentLevelData.question;
        }
    }

    updateStarsDisplay() {
        const stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            if (index < this.stars) {
                star.style.color = '#fdd835';
            } else {
                star.style.color = '#bb86fc';
            }
        });
    }

    highlightCode() {
        const codePreview = document.querySelector('.code-preview');
        const code = document.getElementById('user-code').value;
        
        if (!codePreview) return;
        
        // تحليل الكود وإضافة العلامات المناسبة
        let highlightedCode = code;
        
        if (this.currentLanguage === 'html') {
            highlightedCode = highlightedCode.replace(/<([a-z][a-z0-9]*)\b[^>]*>/gi, '<span class="tag">$&</span>');
            highlightedCode = highlightedCode.replace(/<\/([a-z][a-z0-9]*)\b[^>]*>/gi, '<span class="tag">$&</span>');
            highlightedCode = highlightedCode.replace(/"[^"]*"/g, '<span class="string">$&</span>');
        } else if (this.currentLanguage === 'css') {
            highlightedCode = highlightedCode.replace(/([a-z-]+):/g, '<span class="property">$1:</span>');
            highlightedCode = highlightedCode.replace(/:\s*([^;]+);/g, ': <span class="value">$1;</span>');
        } else if (this.currentLanguage === 'javascript') {
            highlightedCode = highlightedCode.replace(/\b(function|let|const|var|return|if|else|for|while)\b/gi, '<span class="keyword">$&</span>');
            highlightedCode = highlightedCode.replace(/"[^"]*"/g, '<span class="string">$&</span>');
            highlightedCode = highlightedCode.replace(/'[^']*'/g, '<span class="string">$&</span>');
        }
        
        codePreview.innerHTML = highlightedCode;
    }

    showSolution() {
        if (!this.currentLanguage) return;
        
        const currentLevelData = this.gameData[this.currentLanguage].levels[this.currentLevel - 1];
        const userCode = document.getElementById('user-code');
        userCode.value = currentLevelData.solution;
        
        const resultElement = document.querySelector('.result');
        resultElement.className = 'result success';
        resultElement.textContent = 'تم عرض الحل! يمكنك تعديله أو استخدامه كما هو.';
        resultElement.style.display = 'block';
        
        setTimeout(() => {
            resultElement.style.display = 'none';
        }, 3000);
    }

    goBack() {
        if (this.currentLevel > 1) {
            this.currentLevel--;
            this.updateLevelDisplay();
            this.updateChallenge();
            document.getElementById('user-code').value = '';
            
            const resultElement = document.querySelector('.result');
            resultElement.className = 'result success';
            resultElement.textContent = 'تم العودة إلى المستوى السابق';
            resultElement.style.display = 'block';
            
            setTimeout(() => {
                resultElement.style.display = 'none';
            }, 3000);
        } else {
            const resultElement = document.querySelector('.result');
            resultElement.className = 'result error';
            resultElement.textContent = 'أنت في المستوى الأول';
            resultElement.style.display = 'block';
            
            setTimeout(() => {
                resultElement.style.display = 'none';
            }, 3000);
        }
    }

    nextLevel() {
        if (this.currentLevel < this.gameData[this.currentLanguage].levels.length) {
            this.currentLevel++;
            this.updateLevelDisplay();
            this.updateChallenge();
            document.getElementById('user-code').value = '';
            document.getElementById('next-button').style.display = 'none';
        }
    }

    checkSolution() {
        if (!this.currentLanguage) return;
        
        const userCode = document.getElementById('user-code').value.trim();
        const currentLevelData = this.gameData[this.currentLanguage].levels[this.currentLevel - 1];
        const solution = currentLevelData.solution;
        const resultElement = document.querySelector('.result');
        
        if (userCode === solution) {
            resultElement.className = 'result success';
            resultElement.textContent = 'ممتاز! لقد نجحت في هذا المستوى!';
            
            // تحديث التقدم
            this.userProgress[this.currentLanguage].completed = Math.max(
                this.userProgress[this.currentLanguage].completed,
                this.currentLevel
            );
            this.userProgress[this.currentLanguage].totalStars += currentLevelData.stars;
            this.saveProgress();

            // إظهار زر المستوى التالي
            if (this.currentLevel < this.gameData[this.currentLanguage].levels.length) {
                document.getElementById('next-button').style.display = 'inline-block';
            } else {
                resultElement.textContent = 'تهانينا! لقد أكملت جميع مستويات ' + this.gameData[this.currentLanguage].title + '!';
            }
        } else {
            resultElement.className = 'result error';
            resultElement.textContent = 'المحاولة غير صحيحة. حاول مرة أخرى! تلميح: ' + currentLevelData.hint;
        }
        
        resultElement.style.display = 'block';
        setTimeout(() => {
            resultElement.style.display = 'none';
        }, 5000);
    }

    clearCode() {
        const userCode = document.getElementById('user-code');
        if (userCode) {
            userCode.value = '';
            this.highlightCode();
            
            const resultElement = document.querySelector('.result');
            resultElement.className = 'result success';
            resultElement.textContent = 'تم مسح الكود!';
            resultElement.style.display = 'block';
            
            setTimeout(() => {
                resultElement.style.display = 'none';
            }, 2000);
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ProgrammingGame();
});
