import React, { Component } from "react";
import styles from "./ReleaseCard.module.scss";
import Card from "react-bootstrap/Card";

class ReleaseCard extends Component {
    render() {
        return (
            <Card className={styles.cardWrapper}>
                <Card.Img className={styles.image} variant="top" src={this.props.Releases.Artwork} />
                <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.artistName}>{this.props.Releases.ReleaseName}</Card.Title>
                    <Card.Text className={styles.albumName}>{this.props.cardData.album}</Card.Text>
                    <Card.Text className={styles.countDown}>{this.props.cardData.countDown}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ReleaseCard;
