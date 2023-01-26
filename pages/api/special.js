export default function handler(req, res) {
    res.setHeader('x-custom-header', 'åpple')
    res.status(200).json({ name: 'Special' })
  }