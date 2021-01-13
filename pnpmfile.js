module.exports = {
  hooks: {
    readPackage
  }
}

function readPackage (pkg, context) {
  switch (pkg.name) {
    case 'vue-demi':
      pkg.peerDependencies['@vue/composition-api'] = '^1.0.0-beta.5'

      context.log('vue-demi: add @vue/composition-api as peer dependency')
      break;
  }

  return pkg
}
