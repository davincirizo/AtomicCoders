import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 8000

app.get('/ping', (_req, res) => {
  console.log('Hizo Ping')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server Runing ${PORT}`)
})
