function main()
{
    var width = 1000;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 100;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var CubeGeometry = new THREE.Geometry()

    CubeGeometry.vertices.push(new THREE.Vector3(-1,-1,-1));
    CubeGeometry.vertices.push(new THREE.Vector3(1,-1,-1));
    CubeGeometry.vertices.push(new THREE.Vector3(1,1,-1));
    CubeGeometry.vertices.push(new THREE.Vector3(-1,1,-1));
    CubeGeometry.vertices.push(new THREE.Vector3(-1,-1,1));
    CubeGeometry.vertices.push(new THREE.Vector3(1,-1,1));
    CubeGeometry.vertices.push(new THREE.Vector3(1,1,1));
    CubeGeometry.vertices.push(new THREE.Vector3(-1,1,1));
   

    CubeGeometry.faces.push(new THREE.Face3(0,1,2));
    CubeGeometry.faces.push(new THREE.Face3(0,2,3));
    CubeGeometry.faces.push(new THREE.Face3(0,3,4));
    CubeGeometry.faces.push(new THREE.Face3(3,4,7));
    CubeGeometry.faces.push(new THREE.Face3(0,1,4));
    CubeGeometry.faces.push(new THREE.Face3(1,4,5));
    CubeGeometry.faces.push(new THREE.Face3(1,2,5));
    CubeGeometry.faces.push(new THREE.Face3(2,5,6));
    CubeGeometry.faces.push(new THREE.Face3(2,3,7));
    CubeGeometry.faces.push(new THREE.Face3(2,6,7));
    CubeGeometry.faces.push(new THREE.Face3(6,4,5));
    CubeGeometry.faces.push(new THREE.Face3(6,7,5));




    var material = new THREE.MeshBasicMaterial( { color: 0x884898 } );
    material.side=THREE.DoubleSide;
    var cube = new THREE.Mesh( CubeGeometry, material );
    scene.add( cube );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
        renderer.render( scene, camera );
    }
}