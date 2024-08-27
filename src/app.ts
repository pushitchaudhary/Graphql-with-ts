import express from 'express'
const app = express()
const PORT = 8000

app.get('/',(req,res)=>{
    res.send('server okk !!!')
})


app.listen(PORT,()=>{
    console.log(`Server has started at ${PORT}`)
})