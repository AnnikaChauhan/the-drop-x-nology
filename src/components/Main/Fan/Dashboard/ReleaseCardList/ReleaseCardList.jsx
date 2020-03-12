import React, { Component } from "react";
import styles from "./ReleaseCardList.module.scss";
import ReleaseCard from "./ReleaseCard";
import { firestore } from "../../../../../firebase";


class ReleaseCardList extends Component {
    state = {
        Releases: []
    }

    componentDidMount() {
        firestore
          .collection("Releases")
          .get()
          .then(query => {
            const Releases = query.docs.map(doc => doc.data());
            this.setState({
              Releases: Releases
            });
          });
      }



    render() {
        return (
            <section className={styles.cardListWrapper}>
                {this.state.Releases.map((Release, index) => (
                    <ReleaseCard Release={Release} key={index} />
                ))}
            </section>
        )
    }
}
               
export default ReleaseCardList;