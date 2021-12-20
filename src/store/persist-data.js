const init = [
  {
    id: "ade0deac-855d-401d-9846-a13b2f7cac0b",
    ordered: true,
    title: "the 'Five Pillars' are the fundemental principles of Wikipedia",
    nodes: [
      "Wikipedia is an encyclopedia",
      "Wikipedia is written from a neutral point of view",
      "Wikipedia is free content that anyone can use, edit and distribute",
      "Editros should treat each other with respect and civlity",
      "Wikipedia has no firm rules",
    ],
  },
  {
    id: "4113b736-5a1e-4543-991a-4f92bd08669f",
    ordered: false,
    title: "Wikipedia useful pages",
    nodes: [
      "help with editing: http://en.wikipedia.org/wiki/Help:Editing",
      "Wikipedia guidlines: http://en.wikipedia.org/wiki/Wikipedia:List_of_guidelines",
      "Wikipedia policies: http://en.wikipedia.org/wiki/Wikipedia:List_of_policies",
      "Wikipedia manual of style: http://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style",
      "Guide to notability: http://en.wikipedia.org/wiki/Wikipedia:Notability",
      "Wikipedia help desk: http://en.wikipedia.org/wiki/Wikipedia:Help_desk",
      "Comprehensive list of useful links: http://en.wikipedia.org/wiki/User:A._B./Useful_Wikipedia_links",
    ],
  },
];

/* eslint-disable */
// get stored data from local storage
const getData = () => {
  try {
    const serializedData = localStorage.getItem("cells");

    if (serializedData) return JSON.parse(serializedData);

    return init;
  } catch (err) {
    return init;
  }
};
// store state of application in local storage
const setData = (value) => {
  try {
    const serializedData = JSON.stringify(value);

    localStorage.setItem("cells", serializedData);
  } catch (err) {
    // just prevent app from crashing
  }
};
/* eslint-disable */

export { getData, setData };
