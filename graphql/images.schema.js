exports.allJPGImagesSchema = `{
  allImageSharp(
    filter: {
      id: {
        regex: "/.jpg/"
      }
    }
  ) {
    edges {
      node {
        id
        sizes {
          aspectRatio
          src
          sizes
        }
      }
    }
  }
}`;
