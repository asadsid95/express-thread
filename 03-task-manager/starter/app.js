// const express = require('express')
// const app = express()
// const tasks = require('./routes/tasks')

// // middleware
// app.use(express.json())

// app.get('/api/v1/tasks', (req, res) => {
//     res.send('get Tasks')
// })

// app.use('/api/v1/tasks', tasks)

// app.put('/api/v1/tasks', (req, res) => {
//     res.send('At /api/v1/tasks')
// })
// app.get('/api/v1/tasks/:id', (req, res) => {
//     res.send('At /api/v1/tasks')
// })
// app.delete('/api/v1/tasks/:id', (req, res) => {
//     res.send('delete')
// })
// app.patch('/api/v1/tasks/:id', (req, res) => {
//     res.send('patach')
// })

// console.log('Task Manager App')

// app.listen(3000, function () { console.log('listening at port 3000') })


const express = require('express');
const route = express.Router();


route.get('/', (req, res) => {
    res.status(200).send('hi')
})

route.post('/item/:id', (req, res) => {
    const { id } = req.params;

    if (!id) {
        res.status(401).send({
            info: 'please put the ids'
        })
    }

    res.send({ id });
});

// module.exports = route;
// const express = require('express');
const app = express();
const PORT = 8000;
// const route = require('./routes/route');


app.use(express.json());
app.use(route);

app.listen(PORT, () => console.log("app is running"));
