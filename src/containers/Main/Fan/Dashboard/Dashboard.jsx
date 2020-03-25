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
        userinfo: null,
        releases: [],
        artists: [],
        filteredArtists: []
    };

    componentDidMount() {
        firestore
            .collection("Fans")
            .where("uid", "==", this.props.user.uid)
            .get()
            .then(query => {
                const userinfo = query.docs.map(doc => Object.assign(doc.data(), {
                    docID: doc.id
                }))
                this.setState({ userinfo : userinfo[0] })
            })
            .then(() => this.dataRetreiver())

        firestore
            .collection("Artists")
            .get()
            .then(query => {
                const artists = query.docs.map(doc => doc.data());
                this.setState({ artists });
        });
    }

    dataRetreiver = () => {
        let followedArtistsObject = this.state.userinfo.followedArtists;
        let releases = [];
        for (let key in followedArtistsObject) {
            releases.push(
            firestore
                .collection("Releases")
                .where("uid", "==", followedArtistsObject[key])
                .get())
        }
        Promise.all(releases)
        .then((querySnapshots) => {
            return querySnapshots.map(qs => qs.docs)
        })
        .then((matchingReleases) => {
            let releaseArray = []
            matchingReleases.forEach(item => item.forEach(item => {
                const artist = this.state.artists.find(
                    artist => artist.uid === item.data().uid
                );
                releaseArray.push(Object.assign(item.data(), {
                    artistName: artist.artistName,
                    releaseId: item.id
                }))
            }))
            return releaseArray
        })
        .then((releaseArray) => this.setState({ releases : releaseArray }))
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
            this.componentDidMount();
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
                    <SearchList update={this.dataRetreiver} userinfo={this.state.userinfo} artists={this.state.filteredArtists} />
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
