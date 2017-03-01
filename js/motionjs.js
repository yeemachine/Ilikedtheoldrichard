$(document).ready(function() {

// 			var showText = function (target, message, index, interval) {
// 			  if (index < message.length) {
// 			    $(target).append(message[index++]);
// 			    setTimeout(function () { showText(target, message, index, interval); }, interval);
// 			  }
// 				if (index >= message.length){
//       index = 0;
// 			$(target).text("");
//
// }
// 			}
//
// 			$(function () {
//
// 			  showText("#blurb", "2lhl2i3uhf874yg57127y70owriyuyuhjfh3oir7t5467t3uy4gk4hti5oytiq47g1uyh342kiuhglrw8ty743t5gyukjgrjhi437ytgkiuhg2lhl2i3uhf874yg57127y70owriyuyuhjfh3oir7t5467t3uy4gk4hti5oytiq47g1uyh342kiuhglrw8ty743t5gyukjgrjhi437ytgkiuhg2lhl2i3uhf874yg57127y70owriyuyuhjfh3oir7t5467t3uy4gk4hti5oytiq47g1uyh342kiuhglrw8ty743t5gyukjgrjhi437ytgkiuhg2lhl2i3uhf874yg57127y70owriyuyuhjfh3oir7t5467t3uy4gk4hti5oytiq47g1uyh342kiuhglrw8ty743t5gyukjgrjhi437ytgkiuhg2lhl2i3uhf874yg57127y70owriyuyuhjfh3oir7t5467t3uy4gk4hti5oytiq47g1uyh342kiuhglrw8ty743t5gyukjgrjhi437ytgkiuhg2lhl2i3uhf874yg57127y70owriyuyuhjfh3oir7t5467t3uy4gk4hti5oytiq47g1uyh342kiuhglrw8ty743t5gyukjgrjhi437ytgkiuhg2lhl2i3uhf874yg57127y70owriyuyuhjfh3oir7t5467t3uy4gk4hti5oytiq47g1uyh342kiuhglrw8ty743t5gyukjgrjhi437ytgkiuhg4587692o753459", 0, 30);
//
// 			});





  var volumeTicker = 0

$(".start").click(function() {
  $(".start").addClass("hide");
  $(".start").removeClass("start");

  volumeTicker = 1;
});

$("#container").click(function() {

  $(".hide").addClass("start");
  $(".hide").removeClass("hide");
  volumeTicker = 0;


});
container = document.getElementById('container');

  // var gui = new dat.GUI();

  var scene = new THREE.Scene();
  var clock = new THREE.Clock();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, .1, 2000000 );
  var analyser1

  scene.background = new THREE.Color( 0xff0000 );
  // scene.fog = new THREE.Fog(0x191937, 200, 500);
  scene.fog = new THREE.Fog(0x000000, 400, 1700);

  camera.position.z = 800;

  var renderer = new THREE.WebGLRenderer( { antialias: true, alpha:false} );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0x000000, 0 )
  // renderer.setClearColor( 0x000000 );
container.appendChild( renderer.domElement );

  var listener = new THREE.AudioListener();
          camera.add(listener);

      // 	texture = new THREE.TextureLoader().load( "img/daniil.jpg" );
        var texture = THREE.ImageUtils.loadTexture('../img/daniil.png')
        var material = new THREE.MeshLambertMaterial({
           map: texture,
          morphTargets: true,
          // color: 0xffffff,
          wireframe: false,
          wireframeLinewidth: 2,
          wireframeLinejoin:'bevel',
          transparent: true,
          side: THREE.DoubleSide
          // emissive:'#ffffff'
        });
        var Tormaterial = new THREE.MeshLambertMaterial({
           map: THREE.ImageUtils.loadTexture('../img/daniil2.png'),
          // color: 0xffffff,
          wireframe: false,
          wireframeLinewidth: 2,
          wireframeLinejoin:'bevel',
          transparent: true,
          opacity: 0.2,
          side: THREE.DoubleSide
          // emissive:'#ffffff'
        });

        // var isMobile = window.matchMedia("only screen and (max-width: 760px)");
        //       if (isMobile.matches) {
        //         controls = new THREE.VRControls( camera );
        //         effect = new THREE.VREffect( renderer );
        //
        //
        //       } else {
                var controls = new THREE.FirstPersonControls(camera, renderer.domElement);

                controls.movementSpeed = 100;
                controls.lookSpeed = .1;
                controls.noFly = true;
                controls.lookVertical = false;
                controls.lon = 270;
              // }



  // controls = new THREE.TrackballControls( camera, renderer.domElement );
  //
  // 	controls.rotateSpeed = 2.0;
  // 	controls.zoomSpeed = 1.2;
  // 	controls.panSpeed = 0.8;
  //
  // 	controls.noZoom = false;
  // 	controls.noPan = false;
  //
  // 	controls.staticMoving = true;
  // 	controls.dynamicDampingFactor = 0;





  var ambientLight = new THREE.AmbientLight( 0x404040 );
  scene.add( ambientLight );

  var lightsphere = new THREE.Object3D();
  var points = [];
  for ( var i = 0; i < 10; i ++ ) {
  	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
  }
    var geometry = new THREE.SphereGeometry( 2.5, 32, 32 );
    var Torgeometry = new THREE.TorusKnotGeometry( 10, 1, 100, 16 );
    var sphere = new THREE.OctahedronGeometry(1,0);;



  var lights = [];
  var lightcolor1 =  Math.random() * 0xffffff
  var lightcolor2 =  Math.random() * 0xffffff
  var lightcolor3 =  Math.random() * 0xffffff
  light1 = new THREE.PointLight( lightcolor1, 10, 40,1 );
  light2 = new THREE.PointLight( lightcolor2, 10, 30,1 );
  light3 = new THREE.PointLight( lightcolor3, 10, 30,1);

  lights.push(light1, light2, light3);



  light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: lightcolor1, transparent:true,opacity:.2} ) ) );
  light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: lightcolor2, transparent:true,opacity:.2 } ) ) );
  light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: lightcolor3, transparent:true,opacity:.2 } ) ) );

  // light1.add( new THREE.Mesh( sphere, Tormaterial ));
  // light2.add( new THREE.Mesh( sphere, Tormaterial ));
  // light3.add( new THREE.Mesh( sphere, Tormaterial ));

  light1.position.set( 0, 20, 0 );
  light2.position.set( 0, -10 , -20 );
  light3.position.set(0, -10, 20 );

  lightsphere.add( lights[ 0 ] );
  lightsphere.add( lights[ 1 ] );
  lightsphere.add( lights[ 2 ] );






  var mesh = new THREE.Mesh( geometry, material );
  mesh.position.x=0
  mesh.rotation.z= Math.PI/2
  // mesh.rotation.y= Math.PI/2

var meshcontainer = new THREE.Object3D();
meshcontainer.add( mesh );





var sky = new THREE.Mesh( geometry, material );
sky.position.x=0
sky.rotation.z= Math.PI/2
sky.rotation.y= -Math.PI/2
skylight1 = new THREE.PointLight( lightcolor1, 10, 18000,1 );
skylight2 = new THREE.PointLight( lightcolor2, 10, 18000,1 );
skylight3 = new THREE.PointLight( lightcolor3, 10, 18000,1 );

skylight1.position.set( 0, 15000, 0 );
skylight2.position.set( -15000, -7500, 0 );
skylight3.position.set( 15000, -7500,  0);

scene.add(skylight1,skylight2,skylight3);
var skysphere = new THREE.Object3D();
skysphere.add(sky);

skysphere.scale.set(500,500,500);
scene.add(skysphere)

  var Tor = new THREE.Mesh( Torgeometry, Tormaterial );
  Tor.position.x=0
  Tor.rotation.y = Math.PI/2;

  // Tor.rotation.z=(Math.PI / 2)

  var Tor2 = new THREE.Mesh( Torgeometry, Tormaterial );
  Tor2.position.x=0

  Tor2.rotation.x=1
  Tor2.rotation.y = Math.PI/2;

  // Tor2.rotation.z=(Math.PI / 2)

  var Tor3 = new THREE.Mesh( Torgeometry, Tormaterial );
  Tor3.position.x=0

  Tor3.rotation.x=-1
  Tor3.rotation.y = Math.PI/2;

  // Tor3.rotation.z=(Math.PI / 2)




  // var heartShape = new THREE.Shape();
  //
  // heartShape.moveTo( 0, 20  );
  // heartShape.moveTo(-20, -10  );
  // heartShape.moveTo( 20, -10  );
  //
  //
  // var heartgeometry = new THREE.ShapeGeometry( heartShape );
  //
  // var heart = new THREE.Mesh( heartgeometry, material ) ;


  lightsphere.add( meshcontainer );
  lightsphere.add( Tor , Tor2, Tor3 );

  console.log(lightsphere)
  //
  // lightsphere.position.x = 50;
  var pivots = [];
  var clones = [];
  for (var i = 0; i < 5; i++) {
    var lightsphereclone = lightsphere.clone();
    lightsphereclone.position.x = (Math.random() - 0.5) * 1000;
    lightsphereclone.position.y = (Math.random() - 0.5) * 1000;
    lightsphereclone.position.z = (Math.random() - 0.5) * 1000;
    lightsphereclone.rotation.z = (Math.random() - 0.5) * 5;
    lightsphereclone.rotation.y = (Math.random() - 0.5) * 5;
    lightsphereclone.rotation.x = (Math.random() - 0.5) * 5;
    var sound1 = new THREE.PositionalAudio(listener);
        sound1.load('../sounds/bloop.ogg');
        sound1.setRefDistance(20);
        sound1.autoplay = true;
        sound1.setLoop(true);
        lightsphereclone.add(sound1);
        // lightsphereclone.scale.set( 5, 5, 5 );

        clones.push(lightsphereclone);


  var pivot = new THREE.Object3D();
  pivot.add( lightsphereclone );
  pivot.position.x = (Math.random() - 0.5) * 50;
  pivot.position.y = (Math.random() - 0.5) * 50;
  pivot.position.z = (Math.random() - 0.5) * 50;
  pivot.rotation.z = (Math.random() - 0.5) * 5;
  pivot.rotation.y = (Math.random() - 0.5) * 5;
  pivot.rotation.x = (Math.random() - 0.5) * 5;
  scene.add( pivot );
  pivots.push(pivot);
  scene.add( lightsphere );

  }
  for (var i = 0; i < 4; i++) {
    var lightsphereclone = lightsphere.clone();
    lightsphereclone.position.x = (Math.random() - 0.5) * 1000;
    lightsphereclone.position.y = (Math.random() - 0.5) * 1000;
    lightsphereclone.position.z = (Math.random() - 0.5) * 1000;
    lightsphereclone.rotation.z = (Math.random() - 0.5) * 5;
    lightsphereclone.rotation.y = (Math.random() - 0.5) * 5;
    lightsphereclone.rotation.x = (Math.random() - 0.5) * 5;
    var sound1 = new THREE.PositionalAudio(listener);
        sound1.load('../sounds/kuma1.ogg');
        sound1.setRefDistance(20);
        sound1.autoplay = true;
        sound1.setLoop(true);
        lightsphereclone.add(sound1);
        // lightsphereclone.scale.set( 10, 10, 10 );

        clones.push(lightsphereclone);


  var pivot = new THREE.Object3D();
  pivot.add( lightsphereclone );
  pivot.position.x = (Math.random() - 0.5) * 50;
  pivot.position.y = (Math.random() - 0.5) * 50;
  pivot.position.z = (Math.random() - 0.5) * 50;
  pivot.rotation.z = (Math.random() - 0.5) * 5;
  pivot.rotation.y = (Math.random() - 0.5) * 5;
  pivot.rotation.x = (Math.random() - 0.5) * 5;
  scene.add( pivot );
  pivots.push(pivot);
  scene.add( lightsphere );

  }
  for (var i = 0; i < 4; i++) {
    var lightsphereclone = lightsphere.clone();
    lightsphereclone.position.x = (Math.random() - 0.5) * 1000;
    lightsphereclone.position.y = (Math.random() - 0.5) * 1000;
    lightsphereclone.position.z = (Math.random() - 0.5) * 1000;
    lightsphereclone.rotation.z = (Math.random() - 0.5) * 5;
    lightsphereclone.rotation.y = (Math.random() - 0.5) * 5;
    lightsphereclone.rotation.x = (Math.random() - 0.5) * 5;
    var sound1 = new THREE.PositionalAudio(listener);
        sound1.load('../sounds/shimakaze.ogg');
        sound1.setRefDistance(20);
        sound1.autoplay = true;
        sound1.setLoop(true);
        lightsphereclone.add(sound1);
        // lightsphereclone.scale.set( 20, 20, 20 );

        clones.push(lightsphereclone);


  var pivot = new THREE.Object3D();
  pivot.add( lightsphereclone );
  pivot.position.x = (Math.random() - 0.5) * 50;
  pivot.position.y = (Math.random() - 0.5) * 50;
  pivot.position.z = (Math.random() - 0.5) * 50;
  pivot.rotation.z = (Math.random() - 0.5) * 5;
  pivot.rotation.y = (Math.random() - 0.5) * 5;
  pivot.rotation.x = (Math.random() - 0.5) * 5;
  scene.add( pivot );
  pivots.push(pivot);
  scene.add( lightsphere );

  }
  for (var i = 0; i < 4; i++) {
    var lightsphereclone = lightsphere.clone();
    lightsphereclone.position.x = (Math.random() - 0.5) * 1000;
    lightsphereclone.position.y = (Math.random() - 0.5) * 1000;
    lightsphereclone.position.z = (Math.random() - 0.5) * 1000;
    lightsphereclone.rotation.z = (Math.random() - 0.5) * 5;
    lightsphereclone.rotation.y = (Math.random() - 0.5) * 5;
    lightsphereclone.rotation.x = (Math.random() - 0.5) * 5;
    var sound1 = new THREE.PositionalAudio(listener);
        sound1.load('../sounds/halp.ogg');
        sound1.setRefDistance(20);
        sound1.autoplay = true;
        sound1.setLoop(true);
        lightsphereclone.add(sound1);
        clones.push(lightsphereclone);


  var pivot = new THREE.Object3D();
  pivot.add( lightsphereclone );
  pivot.position.x = (Math.random() - 0.5) * 20;
  pivot.position.y = (Math.random() - 0.5) * 20;
  pivot.position.z = (Math.random() - 0.5) * 20;
  pivot.rotation.z = (Math.random() - 0.5) * 5;
  pivot.rotation.y = (Math.random() - 0.5) * 5;
  pivot.rotation.x = (Math.random() - 0.5) * 5;
  scene.add( pivot );
  pivots.push(pivot);
  scene.add( lightsphere );

  }

  console.log(clones);
  console.log(clones[0].children[0])
  console.log(lightsphereclone.childobject)


  var sound2 = new THREE.PositionalAudio(listener);
      sound2.load('../sounds/Hiei2.ogg');
      sound2.setRefDistance(20);
      sound2.autoplay = true;
      sound2.setLoop(true);
      lightsphere.add(sound2);
  scene.add(lightsphere);
  generateMorphTargets( mesh, geometry );
  updateMorphs(mesh, material);
  updateMorphs(sky, material);


  analyser1 = new THREE.AudioAnalyser(sound1, 32);

  // var prevFog = false;

  var render = function () {

    requestAnimationFrame( render );
    var delta = clock.getDelta();
    var time = Date.now() * 0.001;

    // var isMobile = window.matchMedia("only screen and (max-width: 760px)");
    //       if (isMobile.matches) {
    //
    //         effect.render( scene, camera );
    //         if(camera.position.z>50){
    //           camera.position.z-=1
    //         }
    //         if(camera.position.z<-50){
    //           camera.position.z+=1
    //         }
    //         if(camera.position.x>0){
    //           camera.position.x-=1
    //         }
    //         if(camera.position.x>0){
    //           camera.position.x+=1
    //         }
    //
    //
    //       } else {
            controls.update(delta);
            if (volumeTicker === 1) {
            listener.setMasterVolume(1);
              controls.movementSpeed = 100;
              controls.lookSpeed = .1;
              lightsphere.children[3].rotation.y += Math.sin(time*3)/3;
              lightsphere.children[3].rotation.x += Math.sin(time*5)/3;
              clones.forEach(function(lightsphereclone) {
              lightsphereclone.children[3].rotation.y += Math.sin(time*Math.random()*5)/3;
              lightsphereclone.children[3].rotation.x += Math.sin(time*Math.random()*5)/3;
            });

            }
            if (volumeTicker === 0) {
              listener.setMasterVolume(0);
              controls.movementSpeed = 0;
              // controls.lookSpeed = 0;
              if(camera.position.z>20){
                camera.position.z-=1
              }
              if(camera.position.z<-20){
                camera.position.z+=1
              }
              if(camera.position.x>20){
                camera.position.x-=1
              }
              if(camera.position.x<-20){
                camera.position.x+=1
              }
              meshcontainer.lookAt(camera.position);
              // camera.lookAt(meshcontainer.position);

              clones.forEach(function(lightsphereclone) {
              lightsphereclone.children[3].lookAt(camera.position);
              lightsphereclone.children[3].lookAt(camera.position);
              });


            }
          // }

// var CameraVect  = THREE.Vector3(camera.position.x,camera.position.y,0)



          // lightsphere.children[3].rotation.x += 0.01;
          // lightsphere.children[3].rotation.y += 0.01;
          lightsphere.children[4].rotation.x += 0.01;
          lightsphere.children[4].rotation.y += 0.01;
          lightsphere.children[5].rotation.x +=0.01;
          lightsphere.children[5].rotation.y +=0.01;
          lightsphere.children[6].rotation.x += 0.01;
          lightsphere.children[6].rotation.y += 0.01;
          lightsphere.rotation.y = Math.PI/2;


    pivots.forEach(function(pivot) {
      var random = Math.random()
      pivot.rotation.x += 0.001;
      pivot.rotation.y += 0.001;
    });
    clones.forEach(function(lightsphereclone) {
      var random = Math.random()
      // lightsphereclone.rotation.x += 0.01;
      // lightsphereclone.rotation.y += 0.01;

      lightsphereclone.children[4].rotation.x += random * 0.05;
      lightsphereclone.children[4].rotation.y += random * 0.05;
      lightsphereclone.children[5].rotation.x += random * 0.05;
      lightsphereclone.children[5].rotation.y += random * 0.05;
      lightsphereclone.children[6].rotation.x += random * 0.05;
      lightsphereclone.children[6].rotation.y += random * 0.05;
      lightsphereclone.children[7].rotation.x += random * 0.05;
      lightsphereclone.children[7].rotation.y += random * 0.05;
    });

    // lightsphere.rotation.x += 0.01;
    // lightsphere.rotation.y += 0.01;

    var randomnumber = Math.random();
      lights[ 0 ].position.y+= Math.sin(time*7)/3
      lights[ 1 ].position.z-= Math.sin(time*7)/3
      lights[ 1 ].position.y-= Math.sin(time*7)/3
      lights[ 2 ].position.z+= Math.sin(time*7)/3
      lights[ 2 ].position.y-= Math.sin(time*7)/3

clones.forEach(function(lightsphereclone) {
      lightsphereclone.children[0].position.y+= Math.sin(time*7)/3
      lightsphereclone.children[1].position.x-= Math.sin(time*7)/3
      lightsphereclone.children[1].position.y-= Math.sin(time*7)/3
      lightsphereclone.children[2].position.x+= Math.sin(time*7)/3
      lightsphereclone.children[2].position.y-= Math.sin(time*7)/3
  });

    if(randomnumber>.75){

      lights[ 0 ].intensity = 0
      lights[ 1 ].intensity = 0
      lights[ 2 ].intensity = 0
      // lights[ 0 ].materials.opacity = 0
      clones.forEach(function(lightsphereclone) {
        lightsphereclone.children[0].intensity = 0
        lightsphereclone.children[1].intensity = 0
        lightsphereclone.children[2].intensity = 0

      });



      // listener.setMasterVolume(0);

      // lights[0].visible = false;
      // lights[1].visible = false;
      // lights[2].visible = false;
}else{
      // lights[0].visible = true;
      // lights[1].visible = true;
      // lights[2].visible = true;
      lights[ 0 ].intensity = 10
      lights[ 1 ].intensity = 10
      lights[ 2 ].intensity = 10
      // lights[ 0 ].materials.opacity = 1

      clones.forEach(function(lightsphereclone) {
        lightsphereclone.children[0].intensity = 10
        lightsphereclone.children[1].intensity = 10
        lightsphereclone.children[2].intensity = 10
      });
      // listener.setMasterVolume(1);

    }


    mesh.morphTargetInfluences[ 0 ] = ( 1 + Math.sin( 8 * time ) ) / 2;

    sky.morphTargetInfluences[ 0 ] = ( 1 + Math.sin( 2 * time ) ) / 2;

    renderer.context.getProgramInfoLog = function () { return '' };

    renderer.render( scene, camera );

  };

  window.addEventListener( 'resize', function () {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

  }, false );

  render();
});
