"use strict";

var inflection = require('inflection');

exports.pluralize = function pluralizeImpl (x) {
  return inflection.pluralize(x);
};

exports.singularize = function singularizeImpl (x) {
  return inflection.singularize(x);
};

exports.camelizeImpl = function camelizeImpl (x,l) {
  return inflection.camelize(x,l);
};

exports.underscore = function underscoreImpl (x) {
  return inflection.underscore(x);
};

exports.humanizeImpl = function humanizeImpl (x,l) {
  return inflection.humanize(x,l);
};

exports.capitalize = function capitalizeImpl (x) {
  return inflection.capitalize(x);
};

exports.titleize = function titleizeImpl (x) {
  return inflection.titleize(x);
};

exports.tableize = function tableizeImpl (x) {
  return inflection.tableize(x);
};

exports.classify = function classifyImpl (x) {
  return inflection.classify(x);
};

exports.foreignKey = function foreignKeyImpl (x) {
  return inflection.foreign_key(x);
};

exports.ordinalize = function ordinalizeImpl (x) {
  return inflection.ordinalize(x);
};
