var BuildList = [
    {
        "key" : 123,
        "buildName" : "middle",
        "state" : "green"
    },
    {
        "key":321,
        "buildName" : "unit",
        "state" : "red"
    }    
];
    

var BuildInfoBox = React.createClass(
  {
      render : function(){
          return <div style={{background:this.props.color}}>InfoBox {this.props.buildName}</div>          
      }      
  }  
    
);


var BuildDashBoard = React.createClass(
  {
                 
      render : function(){
          var buildsTable=this.props.buildList.map(function(buildDefinition){
             return (
                 <BuildInfoBox buildName={buildDefinition.buildName} color={buildDefinition.state} />                 
             )               
          });
          return (
                <div>
                    {buildsTable}
                </div>  
          )        
      }
      
  }  
);



ReactDOM.render(
   <div id="text">Hellou
        <BuildDashBoard buildList={BuildList} />
   
   </div>,
   document.getElementById('content')    
);
