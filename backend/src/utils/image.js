const cloudinary = require('cloudinary').v2

const uploadImage = async base64Img => {
  try {
    const { public_id, secure_url } = await cloudinary.uploader.upload(
      base64Img,
      {}
    )

    return {
      public_id,
      imageSrc: secure_url
    }
  } catch (error) {
    console.error('Error on cloudinary upload')
    return {
      public_id: '',
      imageSrc: undefined
    }
  }
}

const deleteImage = async (previousImg_id = null) => {
  try {
    await cloudinary.uploader.destroy(previousImg_id)
  } catch (error) {
    console.error('Error on cloudinary delete')
  }
}

module.exports = { uploadImage, deleteImage }
