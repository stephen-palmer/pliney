/**
* Keg.js
*
* @description :: A consumable amount of a particular beverage
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    contents: {
      model: 'beverage',
      required: true
    },

    volumeUnits: {
      type: 'string'
    },

    volumeAmtTotal: {
      type: 'float'
    },

    volumeAmtCurrent: {
      type: 'float'
    },

    status: {
      type: 'string',
      enum: ['Conditioning', 'Tapped', 'Empty'],
      defaultsTo: 'Conditioning'
    },

    createdOn: {
      type: 'datetime',
      defaultsTo: function () {
        return new Date();
      }
    },

    tappedOn: {
      type: 'datetime'
    },

    emptiedOn: {
      type: 'datetime'
    }
  },

  beforeCreate: refreshDates,
  beforeUpdate: refreshDates
};

function refreshDates(values, cb) {
  switch(values.status) {
    case 'Conditioning':
      values.tappedOn = null;
      values.emptiedOn = null;
      break;
    case 'Tapped':
      values.tappedOn = new Date();
      values.emptiedOn = null;
      break;
    case 'Empty':
      if(!values.tappedOn) {
        values.tappedOn = new Date();
      }
      values.emptiedOn = new Date();
      break;
  }

  cb();
}

