function UnzipEPUBParser() {}
UnzipEPUBParser.prototype.basePath = '';
UnzipEPUBParser.prototype.status = false;
UnzipEPUBParser.prototype.error = null;
UnzipEPUBParser.prototype.navPoint = new Array();
UnzipEPUBParser.prototype.navMap = new Array();
UnzipEPUBParser.prototype.navList = new Array();
UnzipEPUBParser.prototype.metadata = new Array();
UnzipEPUBParser.prototype.getFileContent = function( path ) {
    var ajReq = new XMLHttpRequest();
    try{
        ajReq.open( "GET", path , false);
        ajReq.send(null);
    }catch(err){
        return { 'status':false , 'data':err };
    }
    return { 'status':true , 'data':ajReq.responseText };
};
UnzipEPUBParser.prototype.initWithPath = function( path ) {
    this.basePath = path;

    var parser = new DOMParser();
    var xmlDoc = null ; 
    var obj = null;

    var META_INF_CONTAINER = this.getFileContent( path + '/META-INF/container.xml' );
    if( !META_INF_CONTAINER.status )
    {
        this.status = false;
        this.error = "Cannot open the file: "+path+"/META-INF/container.xml";
        return this.status;
    }
    else if( META_INF_CONTAINER.data == null || META_INF_CONTAINER.data == '' )
    {
        this.status = false;
        this.error =  "empty file: "+path+"/META-INF/container.xml";
        return this.status;
    }

    xmlDoc = parser.parseFromString( META_INF_CONTAINER.data , "text/xml" );    
    if( !( obj = xmlDoc.getElementsByTagName( 'rootfile' )[0] ) || !obj.getAttribute( 'full-path' ) ) {
        this.status = false;
        this.error = "Cannot find the <rootfile> or 'full-path'";
        return this.status;
    }

    var CONTENT_OPF = this.getFileContent( path + '/' + obj.getAttribute( 'full-path' ) );
    if( !CONTENT_OPF.status )
    {
        this.status = false;
        this.error = "Cannot open the file: "+ path + '/' + obj.getAttribute( 'full-path' );
        return this.status;
    }
    else if( CONTENT_OPF.data == null || CONTENT_OPF.data == '' )
    {
        this.status = false;
        this.error =  "empty file: "+path + '/' + obj.getAttribute( 'full-path' );
        return this.status;
    }

    var get_base_path = -1;
    if( ( get_base_path = obj.getAttribute( 'full-path' ).lastIndexOf( '/' ) ) > 0 )
    {
        path += '/' + obj.getAttribute( 'full-path' ).substring( 0 , get_base_path );
        this.basePath = path;
    }

    xmlDoc = parser.parseFromString( CONTENT_OPF.data , "text/xml" );    
    if( !( obj = xmlDoc.getElementsByTagName( 'manifest' )[0] ) || !( obj = obj.getElementsByTagName( 'item' ) ) ){
        this.status = false;
        this.error = "Cannot find the <manifest> or <item>";
        return this.status;
    }

    var ncx_path  = null;
    for( var i=0 , cnt=obj.length ; i<cnt ; ++i ) {
        //console.log( obj[i].getAttribute('id') + "\n"  );
        if( obj[i].getAttribute('id') == 'ncx' )
            ncx_path = obj[i].getAttribute('href');
    }
    if( !ncx_path ) {
        this.status = false;
        this.error = "Cannot find the ncx info";
        return this.status;
    }

    var TOC_NCX = this.getFileContent( path + '/' + ncx_path );
    if( !TOC_NCX.status )
    {
        this.status = false;
        this.error = "Cannot open the file: "+ path + '/' + ncx_path ;
        return this.status;
    }
    else if( TOC_NCX.data == null || TOC_NCX.data == '' )
    {
        this.status = false;
        this.error =  "empty file: "+path + '/' + ncx_path;
        return this.status;
    }
    xmlDoc = parser.parseFromString( TOC_NCX.data , "text/xml" );    
    if( !( obj = xmlDoc.getElementsByTagName( 'navMap' )[0] ) || !( obj = obj.getElementsByTagName( 'navPoint' ) ) ){
        this.status = false;
        this.error = "Cannot find the <navMap> or <navPoint>";
        return this.status;
    }

    for( var i=0 , cnt=obj.length ; i<cnt ; ++i ) {
        //console.log( obj[i].getAttribute('id') + "\n"  );
        //console.log( obj[i].getElementsByTagName( 'text' )[0].childNodes[0].nodeValue );
        if(     obj[i].getElementsByTagName( 'content' )[0] 
            && obj[i].getElementsByTagName( 'content' )[0].getAttribute( 'src' ) 
            && obj[i].getElementsByTagName( 'text' )[0]
            && obj[i].getElementsByTagName( 'text' )[0].childNodes[0].nodeValue
            && obj[i].getAttribute( 'id' )
            && obj[i].getAttribute( 'playOrder' )
        )
        {
            this.navMap[ obj[i].getAttribute( 'id' ) ] = { 
                'id': obj[i].getAttribute( 'id' ) ,
                'title': obj[i].getElementsByTagName( 'text' )[0].childNodes[0].nodeValue , 
                'src': obj[i].getElementsByTagName( 'content' )[0].getAttribute( 'src' )  , 
                'order': obj[i].getAttribute( 'playOrder' )
            };
            this.navPoint.push( this.navMap[ obj[i].getAttribute( 'id' ) ] );
            this.navList.push( obj[i].getAttribute( 'id' ) );
        }
    }
    //console.log( this.navPoint );
    //console.log( this.navMap );
    //console.log( obj );
    //console.log( xmlDoc.getElementsByTagName( 'rootfile' ) );
    this.status = true;
    this.error = null;
    return this.status;

    //console.log( xmlDoc );
    //alert( xmlDoc );
    //alert( xmlDoc['childNodes'] );
    //console.log( xmlDoc['childNodes'] );
};