const returnReadableDate = date => {
  const parsedDate = new Date(date)
  console.log(date)
  const dateString = parsedDate.toLocaleDateString('pt-BR', {
    dateStyle: 'short'
  })
  console.log(dateString)
  const timeString = parsedDate.toLocaleTimeString('pt-BR', {
    timeStyle: 'short'
  })
  const nums = dateString.split('-').reverse().join('/')
  console.log(`${nums} ${timeString}`)
  return `${nums} ${timeString}`
}

module.exports = { returnReadableDate }
