import { mount } from "@vue/test-utils";
import TheNav from "@/components/TheNav.vue";

describe("TheNav", () => {
  it("Shows the name of the site", () => {
    const data = mount(TheNav);
    expect(data.text()).toMatch("Job Finder");
  });
  it("Links for navigation", () => {
    const data = mount(TheNav);
    const linkItems = data.findAll("[nav-test='thenav-list-item']");
    const linkItemstexts = linkItems.map((link) => link.text()); // prettier-ignore
    expect(linkItemstexts).toEqual([
      "Locations",
      "Application process",
      "Available jobs",
    ]);
  });
});
