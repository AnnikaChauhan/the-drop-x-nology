import React from "react";
import ReleaseCardList from "./ReleaseCardList";

import { mount } from "enzyme";

const mockData = {
    releases: [
        {
            artworkURL:
                "https://firebasestorage.googleapis.com/v0/b/the-drop-x-nology.appspot.com/o/Rich-EP-TAMANGO.jpg?alt=media&token=59b0560c-d29a-4953-9acb-51250432a332",
            artistName: "Sonia Bastos",
            releaseType: "Album",
            title: "Life in London"
        },
        {
            artworkURL:
                "https://firebasestorage.googleapis.com/v0/b/the-drop-x-nology.appspot.com/o/Enzo-Album-A_Decade_Of_Rave.png?alt=media&token=4f16658a-58da-4270-8e43-6bc56983ebd0",
            artistName: "Sergiu Nuta",
            releaseType: "EP",
            title: "Back to London"
        }
    ]
};

describe("ReleaseCardList test", () => {
    let component;

    beforeEach(() => {
        component = mount(<ReleaseCardList releases={mockData.releases} />);
    });

    it("Should render a list containing a section", () => {
        expect(component.find("section").length).toEqual(1);
    });

    it("Should receive data passed as props from parent", () => {
        expect(component.props().releases).toEqual(mockData.releases);
    });

    it("Should render data passed in as props", () => {
        expect(component.text()).toContain(mockData.releases[1].title);
    });
});
