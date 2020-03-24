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
            .collection("Releases")
            .get()
            .then(query => {
                const releases = query.docs.map(doc => {
                    return Object.assign(doc.data(), { releaseId: doc.id });
                });
                this.setState({
                    releases,
                    artists: releases
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
                if (!artist.Artist) return false;
                return artist.Artist.toUpperCase().includes(
                    this.state.searchText.toUpperCase()
                );
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
                    <ReleaseCardList releases={this.state.releases} />
                </section>
            );
        }
    }
}

export default Dashboard;
