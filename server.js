const { response } = require('express')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

const bassists = {
  'John Entwistle': {
    'band': 'The Who',
    'genre': 'Rock'
  },
  'Les Claypool': {
    'band': 'Primus',
    'genre': 'Funk Metal'
  },
  'Flea': {
    'band': 'Red Hot Chili Peppers',
    'genre': 'Rock'
  },
  'Geddy Lee': {
    'band': 'Rush',
    'genre': 'Rock'
  },
  'Cliff Burton': {
    'band': 'Metallica',
    'genre': 'Heavy Metal'
  },
  'James Jamerson': {
    'band': 'The Funk Brothers',
    'genre': 'R&B, Soul, Pop, Funk, Jazz'
  },
  'Sting': {
    'band': 'The Police',
    'genre': ' '
  },
  'Roger Waters': {
    'band': 'Pink Floyd',
    'genre': 'Rock'
  },
  'Robert Trujillo': {
    'band': 'Metallica',
    'genre': ' '
  },
  'Jaco Pastorius': {
    'band': 'The Weather Report',
    'genre': 'Jazz'
  },
  'Carol Kaye': {
    'band': 'The Wrecking Crew',
    'genre': 'Rock, Pop'
  },
  'Lemmy': {
    'band': 'Motörhead',
    'genre': 'Rock'
  },
  'Jack Bruce': {
    'band': 'Cream',
    'genre': 'Rock'
  },
  'Victor Wooten': {
    'band': 'Solo artist',
    'genre': 'Jazz Fusion, Jazz Funk, Bluegrass, Pop, Prog Metal'
  },
  'Chris Squire': {
    'band': 'Yes',
    'genre': 'Prog Rock'
  },
  'Steve Harris': {
    'band': 'Iron Maiden',
    'genre': 'Heavy Metal'
  },
  'Geezer Butler': {
    'band': 'Black Sabbath',
    'genre': 'Heavy Metal'
  },
  'John Myung': {
    'band': 'Dream Theater',
    'genre': 'Prog Metal'
  },
  'John Deacon': {
    'band': 'Queen',
    'genre': 'Rock'
  },
  'Bootsy Collins': {
    'band': 'Parliament-Funkadelic',
    'genre': 'R&B, Soul'
  },
  'Charles Mingus': {
    'band': 'Various jazz groups',
    'genre': 'Jazz'
  },
  'Marcus Miller': {
    'band': 'Solo artist',
    'genre': 'Jazz'
  },
  'Stanley Clarke': {
    'band': 'Return to Forever',
    'genre': 'Jazz'
  },
  'Tina Weymouth': {
    'band': 'Talking Heads',
    'genre': 'New Wave, Rock'
  },
  'Larry Graham': {
    'band': 'Graham Central Station and Sly and the Family Stone',
    'genre': 'R&B, Soul'
  },
  'Peter Hook': {
    'band': 'Joy Division',
    'genre': 'Rock'
  },
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
  res.json(bassists)
})

app.get('/api/:bassist', (req, res) => {
  const bassist = req.params.bassist
  if (bassists[bassist]){
    res.json(bassists[bassist])
  } else{
    res.json(bassists['Flea'])
  }
})

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}. You better go catch it.`)
})