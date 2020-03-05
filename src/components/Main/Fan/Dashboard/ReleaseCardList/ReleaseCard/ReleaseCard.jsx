import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ReleaseCard.module.scss";
import Card from "react-bootstrap/Card";
import { Link } from "@reach/router";

class ReleaseCard extends Component {
    render() {
        return (
            <Card className={styles.cardWrapper}>
                <Card.Title className={styles.artistName}>
                    {this.props.cardData.artistName}
                </Card.Title>
                <Link to="preview">
                    <Card.Img variant="top" src={this.props.cardData.picture} />
                </Link>
                <Card.Body>
                    <Card.Text>{this.props.cardData.countDown}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ReleaseCard;
