const express = require('express');

const {authenticator, logger, myBodyParser } = require('./middleware');

const {userApp} = require('./routes/user')
const {todoApp} = require('./routes/todoitem')


// initial app
const app = express();

// custom body parser middleware
app.use(myBodyParser)
app.use(logger)
app.use(authenticator)


// routes!
app.use('/user', userApp);
app.use('/todoitem', todoApp);


app.use((req, res) => {
    res.status(404).json({
        message: 'page not found',
    })
})



app.listen(3000, () => {
    console.log('now listening to...port: ', 3000)
});
