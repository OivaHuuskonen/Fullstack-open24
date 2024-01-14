require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

//console.log('connecting to', url)
mongoose.connect(url)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    unique: true
  },
  number: {
    type: String,
    validate: {
      validator: function(v) {
        //return /\d{2,3}-\d{6,}$/.test(v);
        //return /^(02|04|05)\d{8}$/.test(v);
        const parts = v.split('-')
        if (parts.length === 2) {
          const [firstPart, secondPart] = parts
          return (
            (firstPart.length ===2 || firstPart.length === 3) &&
            secondPart.length >= 6 &&
            /^\d+$/.test(firstPart) &&
            /^\d+$/.test(secondPart)
          )
        }
        return false
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
  }
}
)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)