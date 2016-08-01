import postcss from 'postcss';
    import test    from 'ava';
    import plugin from './';
    function run( t, input, output, opts = { } ) {
    return postcss( [ plugin( opts ) ] ).process( input )
        .then( function ( result ) {
        t.deepEqual( result.css, output );
            t.deepEqual( result.warnings( ).length, 0 );
        } );
    }

// Test replacing

    test( 'replace pattern from #) to 1)', function ( t ) {
    return run( t, '/* #) */', '/* 1) */', { } );
    } );