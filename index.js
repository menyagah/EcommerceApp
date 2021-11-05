const express = require('express');
const app = express();

app.get('/',(req, res)=> {
    res.send(`
    <div>
        <form method="POST">
            <input name="email" placeholder="email" />
            <input name="password" placeholder="password" />
            <input name="paswordconfirmation" placeholder="password confirmation" />
            <button>Sign Up</button>
        </form>
    </div>
    `);
});

const bodyParser = (req, res) => {
    req.on('data', data => {
        const parsed = data.toString('utf8').split('&');
        const formData = {}
        for(let pair of parsed){
            const [key, value] = pair.split('=');
            formData[key] = value
        }
        console.log(formData);
    });
}

app.post('/', (req, res)=> {
    
    res.send('Account Created');
});

app.listen(3001, ()=> {
    console.log('listening');
});