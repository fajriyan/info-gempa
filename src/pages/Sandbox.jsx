const Sandbox = () => {
  function replaceMultipleTexts(originalText, replacements) {
    replacements.forEach(function (replacement) {
      var searchText = replacement[0];
      var replacementText = replacement[1];
      originalText = originalText.replace(
        new RegExp(searchText, "g"),
        replacementText
      );
    });
    return originalText;
  }

  // Contoh penggunaan fungsi
  var originalString = "Ini adalah contoh string yang ingin diubah.";
  var replacements = [
    ["Ini", "cek"],
    ["contoh", "111contoh yang sudah diubah"],
    ["string", "2kalimat"],
    ["ingin", "3sudah ingin"],
  ];

  var newString = replaceMultipleTexts(originalString, replacements);
  console.log(newString);

  return <div>Sandbox</div>;
};

export default Sandbox; // Output: Ini adalah contoh yang sudah diubah kalimat yang sudah ingin diubah.
