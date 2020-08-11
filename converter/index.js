const gltfPipeline = require('gltf-pipeline');
const fsExtra = require('fs-extra');


const processGltf = gltfPipeline.processGltf;
const gltf = fsExtra.readJsonSync('scene.gltf');
const options = {
    dracoOptions: {
        compressionLevel: 10
    }
};
processGltf(gltf, options)
    .then(function(results) {
        fsExtra.writeJsonSync('model-draco.gltf', results.gltf);
    });