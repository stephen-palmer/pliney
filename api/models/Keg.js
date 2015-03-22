/**
* Keg.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
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

