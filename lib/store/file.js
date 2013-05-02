/**
 * Dependencies
 */

var path = require('path'),
    mkdirp = require('mkdirp'),
    descriptor = require('./descriptor');

/**
 * Store
 * File-based store
 */

var store = {

  init: {},

  /**
   * Open up a database at the specified location.
   *
   * Returns the store object.
   */
  open: function (dbPath, cb) {
    this.path = dbPath;
    mkdirp(this.path, function (err, made) {
      return cb(err, this);
    }.bind(this));
    return this;
  },

  /**
   * Get all data from within the specified collection. It calls back with an
   * error, or null, and the collection's data.
   *
   * Returns the store object.
   */
  find: function (collectionName, cb) {
    Object.create(descriptor).init({
      root: this.path,
      name: collectionName,
      type: descriptor.types.collection
    }).find(cb);
    return this;
  },

  /**
   * Get a document by id
   */
  findById: function (collectionName, _id, cb) {
    Object.create(descriptor).init({
      root: this.path,
      name: collectionName,
      type: descriptor.types.collection
    }).findById(_id, cb);
    return this;
  },

  /**
   *
   */
  set: function (collection, _id, data, cb) {
    return cb(null, {});
  }

};

module.exports = store;