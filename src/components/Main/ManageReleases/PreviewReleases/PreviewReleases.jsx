import React, { Component } from "react";
import styles from "./PreviewReleases.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPlay, faMusic, faTshirt, faUser } from '@fortawesome/free-solid-svg-icons';
// import { faTshirt } from '@fortawesome/free-solid-svg-icons';
// import { faMusic } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import {fa-play-circle} from '@fortawesome/free-solid-svg-icons';


export default class PreviewReleases extends Component {

    render() {
        return (
            <section className={styles.wrapper}>
                <div className={styles.navigation}>
                    <div>Manage Release</div>
                    <div>Preview</div>
                </div>
                <div className={styles.video}>
                    <FontAwesomeIcon  className={styles.play}icon={faPlay} size="2x" />
                    <div className={styles.title}> 
                        <h4>Release Title</h4>
                        <p>Type by Artist Name</p>
                    </div>
                </div>
                <div className={styles.information}>
                    <div className={styles.links}>
                        <div>
                            <h4>Drops in</h4>
                            <h1>X Days</h1>
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faSave} size="2x" />
                                <p>Pre-save</p>
                            </div>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faTshirt} size="2x"/>
                                <p>Merch</p>
                            </div>
                            <div  className={styles.icon}>
                                 <FontAwesomeIcon icon={faMusic} size="2x" />
                                 <p>Music Store</p>
                             </div>
                             <div className={styles.icon}>
                                 <FontAwesomeIcon icon={faUser} size="2x" /> 
                                 <p>Artist Profile</p>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.descriptionsection}>
                        <h4>Description</h4>
                        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, consectetur nulla maiores, vitae quisquam dolore minus impedit possimus voluptates id natus consequatur quibusdam quasi dolor. Qui vel deserunt obcaecati eaque.</p>
                    </div>
                </div>
            </section>
        )
    }
}
