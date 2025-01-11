let balance = 1000;

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
    if ((resultText === 'Tài' && total >= 11) || (resultText === 'Xỉu' && total <= 10)) {
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