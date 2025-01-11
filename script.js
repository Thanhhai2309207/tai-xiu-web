body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: #f7f7f7;
}

.container {
    padding: 20px;
    max-width: 400px;
    margin: auto;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

p {
    font-size: 16px;
    margin: 10px 0;
}

#timer {
    font-size: 30px;
    font-weight: bold;
    color: #ff6347;
    margin-bottom: 20px;
}

.bet-choice {
    margin-bottom: 20px;
}

.bet-button {
    padding: 10px 20px;
    font-size: 18px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
}

.bet-button:hover {
    background-color: #45a049;
}

.bet-section {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}

input[type="number"] {
    width: 60%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ddd;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

.dice-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.dice {
    font-size: 50px;
    margin: 0 5px;
}

.buttons button {
    margin: 5px;
}

.hidden {
    display: none;
}

@media (max-width: 480px) {
    .bet-section {
        flex-direction: column;
    }

    input[type="number"] {
        width: 100%;
        margin-bottom: 10px;
    }
}
