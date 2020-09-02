import React, { useState } from 'react'
import axios from 'axios'
function ImageUpload() {
  const [file, setFile] = useState({
    base64: ''
  })
  const [image, setImage] = useState(false)

  const handleChange = ({ target }) => {
    let selectedFile = target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(selectedFile)
    reader.onloadend = () => {
      setFile({
        base64: reader.result
      })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const body = {
      data: file.base64
    }
    const config = {
      headers: {
        'Content-Type': 'Application/json'
      }
    }

    const res = await axios.post('http://localhost:5000', body, config)

    setImage(res.data.imageUrl)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='file' onChange={handleChange} />
        <button type='submit'>Upload</button>
      </form>
      {image && <img src={image} alt='Sem Imagem' />}
    </>
  )
}
export default ImageUpload
