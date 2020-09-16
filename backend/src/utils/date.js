const returnReadableDate = async date => {
  const parsedDate = new Date(date)
  const dateString = parsedDate.toLocaleDateString('pt-BR', {
    dateStyle: 'short'
  })
  const timeString = parsedDate.toLocaleTimeString('pt-BR', {
    timeStyle: 'short'
  })
  const nums = dateString.split('-').reverse().join('/')

  return `${nums} ${timeString}`
}

module.exports = { returnReadableDate }
