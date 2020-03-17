import React from "react";
import ReleaseCard from "./ReleaseCard";

import { mount } from "enzyme";

const mockData = {
    Releases: {
        Artwork:
            "https://firebasestorage.googleapis.com/v0/b/the-drop-x-nology.appspot.com/o/Rich-EP-TAMANGO.jpg?alt=media&token=59b0560c-d29a-4953-9acb-51250432a332",
        Artist: "Sonia Bastos",
        ReleaseType: "Album",
        ReleaseName: "Life in London"
    },
    key: 0
};

describe("ReleaseCard test", () => {
    let component;

    beforeEach(() => {
        component = mount(
            <ReleaseCard Releases={mockData.Releases} index={mockData.key} />
        );
    });

    it("Should render a card containing an article", () => {
        expect(component.find("article").length).toEqual(1);
    });

    it("Should receive data passed as props from parent", () => {
        expect(component.props().Releases).toEqual(mockData.Releases);
    });

    it("Should render data passed in as props", () => {
        expect(component.text()).toContain(mockData.Releases.Artist);
    });
});
