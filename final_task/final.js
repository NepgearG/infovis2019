function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth * 0.8,
        height: window.innerHeight,
        targetDom: document.getElementById('display'),
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    var d_color = 0xffffff;
    var surfaces = Isosurfaces( volume, isovalue, screen, d_color);
    screen.scene.add( surfaces );
    
    document.getElementById('label').innerHTML = "Isovalue: " +  isovalue ;
    
    document.getElementById('isovalue').addEventListener('mousemove', function() {
        var isovalue = +document.getElementById('isovalue').value;
        document.getElementById('label').innerHTML = "Isovalue: " +  isovalue ;
    });

    document.getElementById('change-isovalue-button').addEventListener('click', function() {
		screen.scene.remove( surfaces );
        isovalue = +document.getElementById('isovalue').value;
		surfaces = Isosurfaces( volume, isovalue, screen, d_color);
		screen.scene.add( surfaces );
    });
    
    document.getElementById('change-color-button').addEventListener('click', function() {
		screen.scene.remove( surfaces );
        d_color = document.getElementById('d_color').value;
		surfaces = Isosurfaces( volume, isovalue, screen, d_color);
		screen.scene.add( surfaces );
    });
    document.getElementById('reset-button').addEventListener('click',function(){
        screen.scene.remove( surfaces );
        document.getElementById('isovalue').value=128;
        document.getElementById('d_color').value=0xffffff;
        isovalue =128;
        d_color=0xffffff;
        surfaces = Isosurfaces( volume, isovalue, screen, d_color);
        screen.scene.add( surfaces );
    })

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth * 0.8, window.innerHeight ] );
    });

    screen.loop();
}