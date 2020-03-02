import React, {Component} from "react";
import styles from "./ReleaseCardContainers.module.scss"

class ReleaseCardContainers extends Component {
    render() {
        return(
           <section className = {styles.upcomingReleases}>
               <h2>Upcoming Releases</h2>
               {/* Release cards to be added and css grid styling to be completed  */}
               <div>Release cards to be added</div>
           </section>
        )
    }
}

export default ReleaseCardContainers;