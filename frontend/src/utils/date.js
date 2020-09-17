export const formatDate = unformatted => {
  console.log(unformatted)
  const date = unformatted.substring(0, 10).split('/').reverse().join('-')
  const time = unformatted.substring(11, 16)

  return new Date([date, time].join('T')).toISOString().substring(0, 16)
}
