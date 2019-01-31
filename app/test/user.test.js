// remember: 

const { graphql } = require('graphql')
const { schema } = require('../app')
const actions = require('../actions')
const setUpTest = require('./helpers')

const mutationRegister = `
    mutation Register($)
`