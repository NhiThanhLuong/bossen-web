module.exports = {
  hooks: {
    readPackage,
  },
};

function readPackage(pkg) {
  if (pkg.name === "supertokens-auth-react") {
    delete pkg.dependencies["@emotion/react"];
  }
  if (pkg.name === "react-select") {
    delete pkg.dependencies["@emotion/react"];
  }

  return pkg;
}
