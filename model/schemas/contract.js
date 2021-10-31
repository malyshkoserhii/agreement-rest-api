const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const contractSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'The agreement name is required!'],
    },
    company: {
      type: String,
      required: [true, 'The contragent name is required!'],
    },
    //TODO: Define date not as a String
    date: {
      type: String,
      required: [true, 'Plese enter the date of the contract'],
    },
    expiration: {
      type: String,
      required: [true, 'Please enter the date of conract expiration'],
    },
    description: {
      type: String,
    },
    sum: {
      type: String,
      required: [true, 'The total sum of the contract is reqiured!'],
    },
    currency: {
      type: String,
      default: 'UAH',
      required: [true, 'The currency is reqiured!'],
    },
    type: {
      buyer: {
        type: Boolean,
        default: false,
      },
      seller: {
        type: Boolean,
        default: false,
      },
    },
    manager: [
      {
        type: Array,
        set: (data) => (!data ? [] : data),
        first_name: {
          type: String,
          required: [true, 'Please enter the manager first name'],
        },
        last_name: {
          type: String,
          required: [true, 'Please enter the manager last name'],
        },
        position: {
          type: String,
          required: [true, 'Please enter the manager position'],
        },
        phone: {
          type: String,
          required: [
            true,
            'Please enter the phone number of responsible manager',
          ],
          unique: true,
        },
        email: {
          type: String,
          required: [true, 'Please enter the email of responsible manager'],
          unique: true,
        },
      },
    ],
    original: {
      type: Boolean,
      default: false,
      required: [
        true,
        'Please point out whether the contract is original or scan version',
      ],
    },
  },
  { versionKey: false, timestamps: false }
);

const Contract = model('contract', contractSchema);

module.exports = Contract;
