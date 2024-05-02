import requireContext from "require-context";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export const images = importAll(
  requireContext("./images", false, /\.(png|jpe?g|svg)$/),
);
