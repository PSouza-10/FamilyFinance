const { ptBR } = require('date-fns/locale')
const { format, parseISO } = require('date-fns')

module.exports = {
  returnDate: date => format(parseISO(date), 'dd/MM/yyyy k:mm')
}
