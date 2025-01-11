let balance = 1000;
let betChoice = "";
let timer = 45;
let countdownInterval;

document.getElementById('betTai').addEventListener('click', function() {
    betChoice = "Tài";
    updateBetChoice();
});

document.getElementById('betXiu').addEventListener('click', function() {
    betChoice = "Xỉu";
    updateBetChoice();
});

document.getElementById('rollButton').addEventListener('click', function () {
    let betAmount = parseInt(document.getElementById('betAmount').value);

    if (isNaN(betAmount) || betAmount <= 0) {
        alert('Vui lòng nhập số tiền cược hợp lệ!');
        return;
    }

    if (betAmount > balance) {
        alert('Bạn không đủ tiền để đặt cược!');
        return;
    }

    if (!betChoice) {
        alert('Vui lòng chọn Tài hoặc Xỉu!');
        return;
    }

    // Trừ tiền cược
    balance -= betAmount;
    updateBalance();

    // Lắc xí ngầu
    let dice1 = getRandomDice();
    let dice2 = getRandomDice();
    let dice3 = getRandomDice();
    document.getElementById('dice1').textContent = dice1;
    document.getElementById('dice2').textContent = dice2;
    document.getElementById('dice3').textContent = dice3;

    // Tính tổng và kết quả
    let total = dice1 + dice2 + dice3;
    let resultText = total >= 11 ? 'Tài' : 'Xỉu';

    // Xác định thắng hay thua
    if ((resultText === 'Tài' && betChoice === 'Tài') || (resultText === 'Xỉu' && betChoice === 'Xỉu')) {
        let winnings = betAmount * 2;
        balance += winnings;
        alert(`Bạn thắng! Nhận được ${winnings} xu.`);
    } else {
        alert('Bạn thua!');
    }

    updateBalance();
    document.getElementById('result').textContent = `Kết quả: ${total} - ${resultText}`;
});

document.getElementById('allInButton').addEventListener('click', function () {
    document.getElementById('betAmount').value = balance;
});

document.getElementById('helpButton').addEventListener('click', function () {
    let helpText = document.getElementById('helpText');
    helpText.classList.toggle('hidden');
});

function getRandomDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateBalance() {
    document.getElementById('balance').textContent = balance;
}

function updateBetChoice() {
    document.getElementById('betTai').disabled = betChoice === 'Tài';
    document.getElementById('betXiu').disabled = betChoice === 'Xỉu';
}

function startTimer() {
    countdownInterval = setInterval(function() {
        if (timer <= 0) {
            clearInterval(countdownInterval);
            alert("Hết thời gian cược!");
            return;
        }
        document.getElementById('timer').textContent = timer;
        timer--;
    }, 1000);
}

function resetTimer() {
    timer = 45;
    clearInterval(countdownInterval);
    startTimer();
}

startTimer();
