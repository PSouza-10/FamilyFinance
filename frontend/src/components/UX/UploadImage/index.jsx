import React from 'react'

import { UploadPhotoIcon, Container, ImagePreview } from './styles'

export default function UploadImage({ file, setFile }) {
  const handleChange = ({ target }) => {
    let selectedFile = target.files[0]
    if (selectedFile) {
      let reader = new FileReader()
      reader.readAsDataURL(selectedFile)
      reader.onloadend = () => {
        setFile(reader.result)
      }
    }
  }

  return (
    <>
      <Container>
        <p>Adicionar Foto (Opcional)</p>

        <input type='file' onChange={handleChange} accept='image/*' />
        {file ? (
          <ImagePreview src={file} alt='Selecione Uma Imagem' />
        ) : (
          <UploadPhotoIcon />
        )}
      </Container>
    </>
  )
}
