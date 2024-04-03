import express from 'express'
import * as diaryServices from '../services/diaryService'
import toNewDiaryRequest from '../request/diaries'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesSensibility())
})
router.get('/:id', (_req, res) => {
  const entry = diaryServices.findById(Number(_req.params.id))
  return (entry != null)
    ? res.send(entry)
    : res.sendStatus(404)
})

router.post('/', (_req, res) => {
  try {
    const newDiaryEntry = toNewDiaryRequest(_req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
