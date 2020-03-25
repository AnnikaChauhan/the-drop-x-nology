import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import SearchBar from "../../../../components/Utility/SearchBar";
import Header from "../../../../components/Utility/Header";
import ReleaseCardList from "../../../../components/Main/Fan/Dashboard/ReleaseCardList";
import SearchList from "../../../../components/Main/Fan/Dashboard/SearchList";
import { firestore } from "../../../../firebase";

class Dashboard extends Component {
    state = {
        searchFocused: false,
        searchText: "",
        releases: [],
        artists: [],
        filteredArtists: []
    };

    componentDidMount() {
        firestore
            .collection("Artists")
            .get()
            .then(query => {
                const artists = query.docs.map(doc => doc.data());
                this.setState({ artists });
            });

        firestore
            .collection("Releases")
            .get()
            .then(query => {
                const releases = query.docs.map(doc => {
                    const artist = this.state.artists.find(
                        artist => artist.uid === doc.data().uid
                    );
                    return Object.assign(doc.data(), {
                        artistName: artist.artistName,
                        releaseId: doc.id
                    });
                });
                releases.sort(
                    (a, b) =>
                        a.startDateReleases.seconds -
                        b.startDateReleases.seconds
                );
                this.setState({
                    releases
                });
            });
    }

    setSearchText = event => {
        const searchText = event.target.value;
        this.setState({ searchText }, this.filteredArtists);
    };

    filteredArtists = () => {
        if (this.state.searchText.length === 0) {
            let filteredArtists = [];
            this.setState({ filteredArtists });
        } else {
            let filteredArtists = this.state.artists.filter(artist => {
                return artist.artistName
                    .toUpperCase()
                    .includes(this.state.searchText.toUpperCase());
            });
            this.setState({ filteredArtists });
        }
    };

    searchFocus = () => {
        this.setState({ searchFocused: true });
    };

    searchBlur = () => {
        if (this.state.searchText.length === 0) {
            this.setState({ searchFocused: false });
        }
    };

    render() {
        if (this.state.searchFocused) {
            return (
                <section className={styles.Dashboard}>
                    <Header
                        title={"Search Results"}
                        subtitle={"Search for Artists to follow"}
                    />
                    <SearchBar
                        onFocus={this.searchFocus}
                        onBlur={this.searchBlur}
                        searchText={this.state.searchText}
                        onChange={this.setSearchText}
                        placeHolder={"Search Artists..."}
                    />
                    <SearchList artists={this.state.filteredArtists} />
                </section>
            );
        } else {
            return (
                <section className={styles.Dashboard}>
                    <Header
                        title={"Releases"}
                        subtitle={"Below is a list of upcoming releases"}
                    />
                    <SearchBar
                        onFocus={this.searchFocus}
                        onBlur={this.searchBlur}
                        placeHolder={"Search Artists..."}
                    />
                    <ReleaseCardList releases={this.state.releases} artist={this.state.artists} />
                </section>
            );
        }
    }
}

export default Dashboard;
