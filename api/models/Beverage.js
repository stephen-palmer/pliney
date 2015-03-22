/**
* Beverage.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    // All kegs that contain this beverage
    kegs: {
      collection: 'keg',
      via: 'contents'
    },

    type: {
      type: 'string',
      enum: ['beer'],
      required: true
    },

    producer: {
      type: 'string'
    },

    origin: {
      type: 'string'
    },

    name: {
      type: 'string',
      required: true
    },

    description: {
      type: 'string'
    },

    srm: {
      type: 'string'
    },

    ibu: {
      type: 'string'
    },

    og: {
      type: 'float'
    },

    fg: {
      type: 'float'
    },

    abv: {
      type: 'float'
    }
  }
};

