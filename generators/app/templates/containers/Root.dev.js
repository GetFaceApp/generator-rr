import React, {PropTypes} from 'react'
import {Provider} from 'react-redux'
import routes from '../routes'
import {Router} from 'react-router'
import DevTools from '../containers/DevTools'

export default class Root extends React.Component {
    render() {
        const {store, history} = this.props
        return (
            <Provider store={store}>
                <div>
                    <Router history={history} routes={routes}/>
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}
