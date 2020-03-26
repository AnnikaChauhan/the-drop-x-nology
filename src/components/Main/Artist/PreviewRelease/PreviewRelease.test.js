import React from "react";
import PreviewRelease from "./PreviewRelease";

import { mount } from "enzyme";

const mockData = {
    artworkURL:
        "https://firebasestorage.googleapis.com/v0/b/the-drop-x-nology.appspot.com/o/Seb-Single-Seven_Dials.jpg?alt=media&token=aec57481-2088-4767-b57a-8fae0849f503",
    title: "Seven Dials",
    releaseType: "Single"
};

describe("PreviewRelease test", () => {
    let component;

    beforeEach(() => {
        Object.defineProperty(window, "location", {
            value: {
                pathname: "/release/9v2LyQHHikH5IpTvqcI6"
            }
        });
        component = mount(<PreviewRelease />);
        component.setState({ data: mockData });
    });

    it("Should render a section when it receives data", () => {
        expect(component.find("section").length).toEqual(1);
    });

    it("Should render data passed in from database", () => {
        expect(component.text()).toContain(mockData.releaseType);
    });
});
