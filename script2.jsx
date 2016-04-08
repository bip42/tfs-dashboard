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
    },  
     {
        "key" : 123,
        "buildName" : "middle",
        "state" : "green"
    },
    {
        "key":321,
        "buildName" : "unit",
        "state" : "red"
    }, 
     {
        "key" : 123,
        "buildName" : "middle",
        "state" : "green"
    },
    {
        "key":321,
        "buildName" : "unit",
        "state" : "red"
    }, 
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
          
          var innerContentClass="innerContent "+this.props.color
          return (
              <div className="box">
                <div className={innerContentClass}>
            InfoBox {this.props.buildName}
                </div>
             </div>
              
            
          )
          
                   
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
                <div id="wrap">
                  {buildsTable}
                </div>
          )        
      }
      
  }  
);



ReactDOM.render(
   <div >
        <BuildDashBoard buildList={BuildList} />
   
   </div>,
   document.getElementById('content')    
);
