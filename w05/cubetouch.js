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
    CubeGeometry.faces.push(new THREE.Face3(7,4,5));
    CubeGeometry.faces.push(new THREE.Face3(6,7,5));




    var material = new THREE.MeshBasicMaterial();
    
    material.vertexColors = THREE.FaceColors;
    material.side=THREE.DoubleSide;
    var i;
    for(i=0; i<12; ++i){
    CubeGeometry.faces[i].color = new THREE.Color( 1,1,1 );
    }
    var cube = new THREE.Mesh( CubeGeometry, material );
    scene.add( cube );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.008;
        cube.rotation.y += 0.008;
        renderer.render( scene, camera );
        document.addEventListener('mousedown', mouse_down_event);
    }
    function mouse_down_event(e)
    {
    var raycaster = new THREE.Raycaster( origin, direction );

    var x_win = event.clientX;
    var y_win = event.clientY;

    var vx = renderer.domElement.offsetLeft;
    var vy = renderer.domElement.offsetTop;
    var vw = renderer.domElement.width;
    var vh = renderer.domElement.height;

    var x_NDC = 2 * ( x_win - vx )/ vw - 1;
    var y_NDC = -( 2 * ( y_win - vy )/ vh - 1);

    var p_NDC = new THREE.Vector3( x_NDC, y_NDC, 1);
    var p_wld = p_NDC.unproject( camera );

    var origin = camera.position;
    var direction = p_wld.sub(camera.position).normalize();

    var raycaster = new THREE.Raycaster( origin, direction );
    var intersects = raycaster.intersectObject( cube );
    if( intersects.length > 0)
    {
        intersects[0].face.color.setRGB( Math.random(),Math.random(),Math.random() );
        intersects[0].object.geometry.colorsNeedUpdate = true;
    }
    }
}