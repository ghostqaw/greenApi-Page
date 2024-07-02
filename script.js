async function getSettings() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const responseField = document.getElementById('response');

    try {
        const response = await fetch(`https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`);
        const data = await response.json();
        responseField.value = JSON.stringify(data, null, 2);
    } catch (error) {
        responseField.value = `Error: ${error.message}`;
    }
}

async function getStateInstance() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const responseField = document.getElementById('response');

    try {
        const response = await fetch(`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
        const data = await response.json();
        responseField.value = JSON.stringify(data, null, 2);
    } catch (error) {
        responseField.value = `Error: ${error.message}`;
    }
}

async function sendMessage() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const responseField = document.getElementById('response');
    
    const messageData = {
        "chatId": "YOUR_CHAT_ID", // замените на ваш chatId
        "message": "Hello from GREEN-API!"
    };

    try {
        const response = await fetch(`https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(messageData)
        });
        const data = await response.json();
        responseField.value = JSON.stringify(data, null, 2);
    } catch (error) {
        responseField.value = `Error: ${error.message}`;
    }
}

async function sendFileByUrl() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const responseField = document.getElementById('response');

    const fileData = {
        "chatId": "YOUR_CHAT_ID", // замените на ваш chatId
        "urlFile": "YOUR_FILE_URL", // замените на URL вашего файла
        "fileName": "file.pdf", // замените на имя вашего файла
        "caption": "Here is your file" // необязательно
    };

    try {
        const response = await fetch(`https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fileData)
        });
        const data = await response.json();
        responseField.value = JSON.stringify(data, null, 2);
    } catch (error) {
        responseField.value = `Error: ${error.message}`;
    }
}
