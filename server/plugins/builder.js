const path = require('path')
const Model = require('digital-form-builder-engine/model')
const config = require('../config')
const { getState, mergeState } = require('../db')
const dataFilePath = path.join(__dirname, '../govsite.fish.json')
const data = require(dataFilePath)
const relativeTo = __dirname
const defaultPageController = './pages'

const model = new Model(data, {
  getState,
  mergeState,
  relativeTo,
  defaultPageController
})

module.exports = [{
  plugin: require('digital-form-builder-engine'),
  options: { model, ordnanceSurveyKey: config.ordnanceSurveyKey }
}, {
  plugin: require('digital-form-builder-designer'),
  options: { path: dataFilePath }
}]
