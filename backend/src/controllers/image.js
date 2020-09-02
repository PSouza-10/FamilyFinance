const cloudinary = require('cloudinary').v2

module.exports = {
  async upload(req, res) {
    try {
      const fileStr = req.body.data

      const uploadResponse = await cloudinary.uploader.upload(fileStr, {})

      return res.json({ imageUrl: uploadResponse.url })
    } catch (error) {
      console.error(error)
    }
  }
}
