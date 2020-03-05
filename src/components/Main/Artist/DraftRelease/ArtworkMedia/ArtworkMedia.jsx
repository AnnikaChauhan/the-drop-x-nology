import React, { Component } from "react";
import SmallButton from "../../../../Utility/Buttons/SmallButton/SmallButton";

export default class ArtworkMedia extends Component {
    render() {
        return (
            <>
                <h3>Artwork</h3>
                <SmallButton text={"Upload File"} />
                <h3>Media</h3>
                <SmallButton text={"Upload File"} />
            </>
        );
    }
}
