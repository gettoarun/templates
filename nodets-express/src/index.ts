import express from 'express';

const app  = express()
const port = process.env.PORT || 3000

const homeRoute = (req: express.Request, res: express.Response) => {
    res.send('Hello Express World!')
}

//------
// Boot
// -----
app.get('/', homeRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

