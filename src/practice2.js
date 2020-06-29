export { inject };
const inject = function (item, sections) {
  let res = [];
  let sectionsIndex = 0;
  let itemIndex = 0;
  let sectionInjectCounter = 0;
  for (let index = 0; index < item.length + sections.length; index++) {
    if (
      sectionsIndex < sections.length &&
      index === sections[sectionsIndex].index + sectionInjectCounter
    ) {
      res[index] = sections[sectionsIndex].content;
      sectionsIndex++;
      sectionInjectCounter++;
    } else {
      res[index] = item[itemIndex++];
    }
  }
  return res;
};
