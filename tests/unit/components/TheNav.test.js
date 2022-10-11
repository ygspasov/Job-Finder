import { mount } from "@vue/test-utils";
import TheNav from "@/components/TheNav.vue";

describe("TheNav", () => {
  it("Shows the name of the site", () => {
    const data = mount(TheNav);
    expect(data.text()).toMatch("Job Finder");
  });
});
