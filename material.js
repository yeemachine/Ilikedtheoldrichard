/**
 * @author TatumCreative (Greg Tatum) / http://gregtatum.com/
 */

function generateMorphTargets(mesh, geometry) {

  var vertices = [],
    scale;

  for (var i = 0; i < geometry.vertices.length; i++) {

    vertices.push(geometry.vertices[i].clone());

    scale = 1 + Math.random() * 1;

    vertices[vertices.length - 1].x *= scale;
    vertices[vertices.length - 1].y *= scale;
    vertices[vertices.length - 1].z *= scale;

  }

  geometry.morphTargets.push({
    name: "target1",
    vertices: vertices
  });

  geometry.update

}

function generateMorphTargets2(mesh, geometry) {

  var vertices = [],
    scale;

  for (var i = 0; i < geometry.vertices.length; i++) {

    vertices.push(geometry.vertices[i].clone());

    scale = 1 + Math.random() * 1;

    vertices[vertices.length - 1].x *= scale;
    vertices[vertices.length - 1].y *= scale;
    vertices[vertices.length - 1].z *= scale;

  }

  geometry.morphTargets.push({
    name: "target1",
    vertices: vertices
  });

  geometry.update

}



function updateMorphs(mesh, material) {



    mesh.updateMorphTargets();
    material.needsUpdate = true;


}



function chooseFromHash(mesh, geometry) {

  var selectedMaterial = "morph";
  var material;

  switch (selectedMaterial) {

    case "morph":

      material = new THREE.MeshLambertMaterial({
        color: 0x000000,
        wireframe: true,
        morphTargets: true,
        wireframeLinewidth: 1.5,
        wireframeLinejoin: 'bevel',
        emissive: '#000000'

      });
      // guiMeshBasicMaterial(mesh, material);

      return material;

      break;


  }
}
