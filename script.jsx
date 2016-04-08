
      // To get started with this tutorial running your own code, simply remove
      // the script tag loading scripts/example.js and start writing code here.
      // tutorial1.js
        var SampleBox = React.createClass({
     
        render: function() {
            return (
                <div className="box">
                    <div className="innerContent">
                    Test
                    </div>
                </div>
            );
            }
        });
        
        ReactDOM.render(
        <div>
            <SampleBox />          
        </div>,
        document.getElementById('content')
        );