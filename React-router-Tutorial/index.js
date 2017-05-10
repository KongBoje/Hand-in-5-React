import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './modules/routes'

//browserHistory laver rene URLs, skal dog bare ind i package.json og index.html for at få det til at virke.
render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('app')
)
