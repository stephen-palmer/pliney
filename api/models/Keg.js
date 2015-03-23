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
      type: 'datetime'
    },

    tappedOn: {
      type: 'datetime'
    },

    emptiedOn: {
      type: 'datetime'
    }
  }
};

