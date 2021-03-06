
import React, {Component} from 'react';
import styles from './app.css';
import {connect} from 'dva';
import { withRouter } from 'dva/router'

class App extends Component{
  render(){
    return(
      <div className={styles.container}>
        {this.props.children}
      </div>
    )
  }
}
export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App));
