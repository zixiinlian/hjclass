var handle = require('./handle.js');
var ajaxHandle = handle.ajaxHandle;
var renderHandle = handle.renderHandle;



var Notice = function(){
    
}

Notice.prototype = {
    init:function(){
        this.getData();
    },
    getData:function(){
        var data={
            
        }
        renderHandle($('#notice'), $('#notice-T'), data);
    }
}

exports.Notice = Notice;