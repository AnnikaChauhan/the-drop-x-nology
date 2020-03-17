import React from "react";
import ReleaseCardList from "./ReleaseCardList";

import { mount } from "enzyme";

const mockData = {
    Releases: [
        {
            Artwork:
                "https://firebasestorage.googleapis.com/v0/b/the-drop-x-nology.appspot.com/o/Rich-EP-TAMANGO.jpg?alt=media&token=59b0560c-d29a-4953-9acb-51250432a332",
            Artist: "Sonia Bastos",
            ReleaseType: "Album",
            ReleaseName: "Life in London"
        },
        {
            Artwork:
                "https://firebasestorage.googleapis.com/v0/b/the-drop-x-nology.appspot.com/o/Enzo-Album-A_Decade_Of_Rave.png?alt=media&token=4f16658a-58da-4270-8e43-6bc56983ebd0",
            Artist: "Sergiu Nuta",
            ReleaseType: "EP",
            ReleaseName: "Back to London"
        }
    ]
};

describe("ReleaseCardList test", () => {
    let component;

    beforeEach(() => {
        component = mount(<ReleaseCardList Releases={mockData.Releases} />);
    });

    it("Should render a list containing a section", () => {
        expect(component.find("section").length).toEqual(1);
    });

    it("Should receive data passed as props from parent", () => {
        expect(component.props().Releases).toEqual(mockData.Releases);
    });

    it("Should render data passed in as props", () => {
        expect(component.text()).toContain(mockData.Releases[1].Artist);
    });
});
