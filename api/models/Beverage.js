/**
* Beverage.js
*
* @description :: Describes a beverage that fills a keg
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

