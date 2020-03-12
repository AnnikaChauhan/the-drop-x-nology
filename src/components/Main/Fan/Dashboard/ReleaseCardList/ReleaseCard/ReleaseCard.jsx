import React, { Component } from "react";
import styles from "./ReleaseCard.module.scss";
import Card from "react-bootstrap/Card";

class ReleaseCard extends Component {
    render() {
        console.log(this.props.Releases)
        return (
            <Card style={{ border: "none" }} className={styles.cardWrapper}>
                <Card.Img className={styles.image} variant="top" src={this.props.Releases.Artwork} />
                <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.artistName}>{this.props.Releases.Artist}</Card.Title>
                    <Card.Text className={styles.albumName}>
                        {this.props.Releases.ReleaseName} <br/>
                        Release Type: {this.props.Releases.ReleaseType}
                        </Card.Text>
                    <Card.Text className={styles.countDown}>{"12 Days"}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ReleaseCard;
