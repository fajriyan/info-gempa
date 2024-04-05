var replacementSources = [
  ["TimurLaut", "Timur Laut"],
  ["BaratLaut", "Barat Laut"],
  ["BaratDaya ", "Barat Daya "],
  ["didarat", "di darat"],
  ["-", " "],
  ["DIY", "DIY"],
];

const textProcessing = (originalText, lower) => {
  replacementSources.forEach(function (replacement) {
    var searchText = replacement[0];
    var replacementText = replacement[1];
    originalText = originalText?.replace(
      new RegExp(searchText, "g"),
      replacementText
    );
  });

  if (!lower) {
    return originalText;
  } else {
    return originalText?.toLowerCase();
  }
};

export default textProcessing;
