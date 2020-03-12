import React, { Component } from 'react';
import styles from './SearchCard.module.scss';
import SmallButton from '../../../../../Utility/Buttons/SmallButton';

export default class SearchCard extends Component {
    render() {
        return (
            <section className={styles.searchWrapper}>
                <div className={styles.artistIMG}><img src={this.props.Releases.ArtistProfileImage} className={styles.image} /></div>
                <div className={styles.infoWrapper}>
                    <div className={styles.textarea}>
                        <div className={styles.artistname}>{this.props.Releases.Artist}</div>
                        <div className={styles.Bio}>Small Bio</div>
                    </div>
                    <SmallButton text={"Follow"} />
                </div>
            </section>
        )
    }
}