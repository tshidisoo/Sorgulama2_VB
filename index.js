const questions = [
    {
        type: "multiple",
        question: "Çoklu tablolardan sorgulama yaparken hangi JOIN türü her iki tabloda da eşleşen kayıtları getirir?",
        options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
        correct: 2
    },
    {
        type: "multiple",
        question: "Aşağıdaki hangi ifade doğrudur?",
        options: [
            "UNION işlemi tablolardan sütun bazlı birleştirme yapar",
            "JOIN işlemi tablolardan satır bazlı birleştirme yapar", 
            "UNION işlemi tablolardan satır bazlı birleştirme yapar",
            "INTERSECT işlemi sütun bazlı birleştirme yapar"
        ],
        correct: 2
    },
    {
        type: "multiple",
        question: "LEFT JOIN işleminde hangi durum geçerlidir?",
        options: [
            "Sağdaki tablonun tüm kayıtları gelir",
            "Soldaki tablonun tüm kayıtları gelir",
            "Sadece eşleşen kayıtlar gelir",
            "Hiçbir kayıt gelmez"
        ],
        correct: 1
    },
    {
        type: "multiple",
        question: "UNION işleminde tekrarlanan kayıtların da gelmesi için hangi anahtar kelime kullanılır?",
        options: ["DISTINCT", "ALL", "UNIQUE", "DUPLICATE"],
        correct: 1
    },
    {
        type: "multiple",
        question: "VIEW nedir?",
        options: [
            "Fiziksel bir tablo",
            "Sanal tablo",
            "Index türü",
            "Veri tipi"
        ],
        correct: 1
    },
    {
        type: "multiple",
        question: "INTERSECT işlemi hangi matematiksel işleme karşılık gelir?",
        options: ["Birleşim", "Kesişim", "Fark", "Kartezyen çarpım"],
        correct: 1
    },
    {
        type: "multiple",
        question: "Aşağıdaki hangi ifade EXCEPT işlemini doğru açıklar?",
        options: [
            "İki tablonun birleşimini bulur",
            "İki tablonun kesişimini bulur",
            "Birinci tabloda olup ikinci tabloda olmayanları bulur",
            "Her iki tabloda da olan kayıtları bulur"
        ],
        correct: 2
    },
    {
        type: "multiple",
        question: "Tablo adları için takma isim kullanırken hangi anahtar kelime kullanılır?",
        options: ["ALIAS", "AS", "NAME", "RENAME"],
        correct: 1
    },
    {
        type: "multiple",
        question: "CASE WHEN yapısında varsayılan durumu belirtmek için hangi anahtar kelime kullanılır?",
        options: ["DEFAULT", "ELSE", "OTHERWISE", "WHEN"],
        correct: 1
    },
    {
        type: "multiple",
        question: "IIF fonksiyonu hangi veritabanı sistemine özgüdür?",
        options: ["MySQL", "PostgreSQL", "MSSQL", "Oracle"],
        correct: 2
    },
    {
        type: "multiple",
        question: "MySQL'de koşullu ifade yazmak için hangi fonksiyon kullanılır?",
        options: ["IIF", "IF", "CASE", "WHEN"],
        correct: 1
    },
    {
        type: "multiple",
        question: "SELECT INTO ifadesi hangi veritabanı sistemine özgüdür?",
        options: ["MySQL", "PostgreSQL", "MSSQL", "Oracle"],
        correct: 2
    },
    {
        type: "multiple",
        question: "INDEX neden kullanılır?",
        options: [
            "Veri güvenliği için",
            "Arama performansını artırmak için",
            "Veri bütünlüğü için",
            "Veri sıkıştırmak için"
        ],
        correct: 1
    },
    {
        type: "multiple",
        question: "Hangi alanlar otomatik olarak INDEX'tir?",
        options: [
            "VARCHAR alanlar",
            "INT alanlar",
            "PRIMARY KEY ve UNIQUE alanlar",
            "DATE alanlar"
        ],
        correct: 2
    },
    {
        type: "multiple",
        question: "FULL JOIN ne yapar?",
        options: [
            "Sadece soldaki tablonun kayıtlarını getirir",
            "Sadece sağdaki tablonun kayıtlarını getirir",
            "Her iki tablonun tüm kayıtlarını getirir",
            "Sadece eşleşen kayıtları getirir"
        ],
        correct: 2
    },
    {
        type: "multiple",
        question: "Product işlemi (Kartezyen çarpım) sonucunda kaç kayıt elde edilir?",
        options: [
            "İlk tablonun kayıt sayısı",
            "İkinci tablonun kayıt sayısı",
            "İki tablonun kayıt sayılarının toplamı",
            "İki tablonun kayıt sayılarının çarpımı"
        ],
        correct: 3
    },
    {
        type: "multiple",
        question: "Theta-Join işlemi nasıl gerçekleştirilir?",
        options: [
            "Önce UNION sonra SELECT",
            "Önce Product sonra WHERE",
            "Önce WHERE sonra Product",
            "Sadece JOIN kullanılır"
        ],
        correct: 1
    },
    {
        type: "multiple",
        question: "INSERT INTO SELECT ifadesi ne yapar?",
        options: [
            "Yeni tablo oluşturur",
            "Tabloyu siler",
            "Bir tablodan veri kopyalayıp başka tabloya ekler",
            "Tablonun yapısını değiştirir"
        ],
        correct: 2
    },
    {
        type: "multiple",
        question: "VIEW silindiğinde gerçek tablolara ne olur?",
        options: [
            "Gerçek tablolar da silinir",
            "Gerçek tablolar etkilenmez",
            "Gerçek tabloların verileri silinir",
            "Gerçek tabloların yapısı bozulur"
        ],
        correct: 1
    },
    {
        type: "multiple",
        question: "UNION işleminde birleştirilen sorguların kaç alanı olmalıdır?",
        options: [
            "Farklı sayıda alan olabilir",
            "Eşit sayıda alan olmalıdır",
            "İlk sorgu daha fazla alana sahip olmalıdır",
            "İkinci sorgu daha fazla alana sahip olmalıdır"
        ],
        correct: 1
    },
    {
        type: "multiple",
        question: "RIGHT JOIN işleminde hangi tablonun tüm kayıtları gelir?",
        options: [
            "Soldaki tablonun",
            "Sağdaki tablonun",
            "Her iki tablonun",
            "Hiçbirinin"
        ],
        correct: 1
    },
    {
        type: "multiple",
        question: "INDEX oluşturulurken hangi komut kullanılır?",
        options: ["CREATE INDEX", "ADD INDEX", "MAKE INDEX", "BUILD INDEX"],
        correct: 0
    },
    {
        type: "multiple",
        question: "VIEW oluşturmak için hangi komut kullanılır?",
        options: ["CREATE VIEW", "MAKE VIEW", "ADD VIEW", "BUILD VIEW"],
        correct: 0
    },
    {
        type: "multiple",
        question: "Hangi durumlarda INDEX kullanılmamalıdır?",
        options: [
            "Sık arama yapılan alanlarda",
            "PRIMARY KEY alanlarda",
            "Sık INSERT, UPDATE, DELETE yapılan tablolarda",
            "UNIQUE alanlarda"
        ],
        correct: 2
    },
    {
        type: "multiple",
        question: "SELECT INTO ile boş tablo oluşturmak için hangi WHERE koşulu kullanılır?",
        options: ["WHERE 1 = 1", "WHERE 1 = 0", "WHERE TRUE", "WHERE FALSE"],
        correct: 1
    },
    {
        type: "multiple",
        question: "UNION işleminde alan isimleri nereden alınır?",
        options: [
            "İkinci sorgudan",
            "İlk sorgudan",
            "Rastgele",
            "Alfabetik sıraya göre"
        ],
        correct: 1
    },
    {
        type: "multiple",
        question: "Foreign Key tanımlarken hangi seçenek kullanılır?",
        options: ["REFERENCES", "FOREIGN", "CONSTRAINT", "RELATION"],
        correct: 0
    },
    {
        type: "multiple",
        question: "ON DELETE CASCADE ne işe yarar?",
        options: [
            "Silme işlemini engeller",
            "Ana kayıt silinince bağlı kayıtları da siler",
            "Sadece ana kaydı siler",
            "Hiçbir işlem yapmaz"
        ],
        correct: 1
    },
    {
        type: "multiple",
        question: "JOIN işlemlerinde ON anahtar kelimesi ne için kullanılır?",
        options: [
            "Sıralama için",
            "Gruplama için",
            "Birleştirme koşulunu belirtmek için",
            "Filtreleme için"
        ],
        correct: 2
    },
    {
        type: "multiple",
        question: "Aşağıdaki hangi işlem satır bazlı birleştirme yapar?",
        options: ["INNER JOIN", "LEFT JOIN", "UNION", "RIGHT JOIN"],
        correct: 2
    },
    {
        type: "code",
        question: "ÖĞRENCILER ve BÖLÜMLER tablolarını INNER JOIN kullanarak birleştiren ve öğrenci numarası, adı, soyadı ve bölüm adını getiren SQL sorgusunu yazın. Takma isim kullanın.",
        answer: `SELECT O.NUMARA, O.ADI, O.SOYADI, B.[BÖLÜM ADI]
FROM ÖĞRENCILER AS O
INNER JOIN BÖLÜMLER AS B
ON O.BÖLÜM = B.[BÖLÜM KODU];`
    },
    {
        type: "code",
        question: "NOTLAR tablosundaki verileri kullanarak, vize ve final notlarından ortalama hesaplayan ve CASE WHEN kullanarak 75 ve üzeri 'İYİ', 50-74 arası 'GEÇTİ', 50'den küçük 'KALDI' durumunu gösteren SQL sorgusunu yazın.",
        answer: `SELECT [ÖĞRENCİ NO], [DERS KODU], 
VİZE*0.4+FİNAL*0.6 AS ORTALAMA,
CASE
    WHEN VİZE*0.4+FİNAL*0.6 >= 75 THEN 'İYİ'
    WHEN VİZE*0.4+FİNAL*0.6 >= 50 THEN 'GEÇTİ'
    ELSE 'KALDI'
END AS DURUM
FROM NOTLAR;`
    }
];

let currentQuestion = 0;
let userAnswers = [];
let correctAnswers = 0;
let wrongAnswers = 0;

function initializeQuiz() {
    document.getElementById('total-questions').textContent = questions.length;
    showQuestion(currentQuestion);
}

function showQuestion(index) {
    const question = questions[index];
    
    document.getElementById('current-question').textContent = index + 1;
    document.getElementById('question-number').textContent = `Soru ${index + 1}`;
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    const codeArea = document.getElementById('code-area');
    
    if (question.type === 'multiple') {
        codeArea.style.display = 'none';
        optionsContainer.style.display = 'block';
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.onclick = () => selectOption(i);
            
            if (userAnswers[index] === i) {
                optionElement.classList.add('selected');
            }
            
            optionsContainer.appendChild(optionElement);
        });
    } else {
        optionsContainer.style.display = 'none';
        codeArea.style.display = 'block';
        document.getElementById('code-input').value = userAnswers[index] || '';
    }
    
    updateNavigationButtons();
}

function selectOption(optionIndex) {
    userAnswers[currentQuestion] = optionIndex;
    
    const options = document.querySelectorAll('.option');
    options.forEach((option, i) => {
        option.classList.remove('selected');
        if (i === optionIndex) {
            option.classList.add('selected');
        }
    });
    
    updateCounters();
}

function updateCounters() {
    correctAnswers = 0;
    wrongAnswers = 0;
    
    questions.forEach((question, index) => {
        if (userAnswers[index] !== undefined) {
            if (question.type === 'multiple') {
                if (userAnswers[index] === question.correct) {
                    correctAnswers++;
                } else {
                    wrongAnswers++;
                }
            } else {
                // Kod soruları için basit kontrol
                if (userAnswers[index] && userAnswers[index].trim() !== '') {
                    correctAnswers++;
                }
            }
        }
    });
    
    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('wrong-count').textContent = wrongAnswers;
}

function nextQuestion() {
    // Kod soruları için cevabı kaydet
    if (questions[currentQuestion].type === 'code') {
        userAnswers[currentQuestion] = document.getElementById('code-input').value;
        updateCounters();
    }
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        showResults();
    }
}

function prevQuestion() {
    // Kod soruları için cevabı kaydet
    if (questions[currentQuestion].type === 'code') {
        userAnswers[currentQuestion] = document.getElementById('code-input').value;
        updateCounters();
    }
    
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function updateNavigationButtons() {
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    document.getElementById('next-btn').textContent = 
        currentQuestion === questions.length - 1 ? 'Sonuçları Gör' : 'Sonraki →';
}

function showResults() {
    // Son sorunun cevabını kaydet
    if (questions[currentQuestion].type === 'code') {
        userAnswers[currentQuestion] = document.getElementById('code-input').value;
        updateCounters();
    }
    
    // Final hesaplama
    correctAnswers = 0;
    wrongAnswers = 0;
    
    questions.forEach((question, index) => {
        if (userAnswers[index] !== undefined) {
            if (question.type === 'multiple') {
                if (userAnswers[index] === question.correct) {
                    correctAnswers++;
                } else {
                    wrongAnswers++;
                }
            } else {
                // Kod soruları için cevap verilmişse doğru say
                if (userAnswers[index] && userAnswers[index].trim() !== '') {
                    correctAnswers++;
                } else {
                    wrongAnswers++;
                }
            }
        } else {
            wrongAnswers++;
        }
    });
    
    const successRate = Math.round((correctAnswers / questions.length) * 100);
    
    document.getElementById('total-result').textContent = questions.length;
    document.getElementById('correct-result').textContent = correctAnswers;
    document.getElementById('wrong-result').textContent = wrongAnswers;
    document.getElementById('success-rate').textContent = successRate + '%';
    
    document.querySelector('.quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
}

function restartQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    correctAnswers = 0;
    wrongAnswers = 0;
    
    document.querySelector('.quiz-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    
    document.getElementById('correct-count').textContent = '0';
    document.getElementById('wrong-count').textContent = '0';
    
    showQuestion(currentQuestion);
}

// Quiz'i başlat
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
});