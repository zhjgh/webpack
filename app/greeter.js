import React, {Component} from 'react';
import config from './config.json';
import styles from './greeter.css';

class Greeter extends Component{
    render(){
        return (
            <div className={styles.title}> {
                config.greetText
            } </div>
        )
    }
}

export default Greeter;