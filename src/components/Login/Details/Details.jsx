import React, { Component } from 'react';
import styles from './Details.module.scss';

export default class Details extends Component {
    render() {
        return (
            <section className={styles.maincontainer}>
                
                <div className={styles.leftside}>
                    <div className={styles.logo}></div>
                    <div className={styles.lefttext}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ut unde nam modi repudiandae? Excepturi vero accusamus mollitia doloremque aliquam odit dignissimos quisquam minima sit, aspernatur quis recusandae optio praesentium provident nobis autem non eos vitae voluptates. Fugit, id neque.</div>
                </div>
                <div className={styles.rightside}>
                    {/* <div className={styles.righttext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptas totam quos consectetur aliquid necessitatibus laborum nemo voluptatum qui nobis quam odio, a neque, culpa autem ut molestias debitis assumenda.</div> */}
                </div>
            </section>
        )
    }
}