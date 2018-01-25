import Jquery from 'jquery'

export default {

    'requestCrossDomain' : function(onSuccess) {

        Jquery.ajax({ 
            url: 'http://10.172.50.100:8089/js/data.json', 
            type: 'GET', 
            dataType:"jsonp",    
            jsonp:"callback", 
            jsonpCallback:"success_jsonp",     
            dataFilter:function(json){    
                console.log("jsonp.filter:"+json);    
                return json;    
            },    
            success:function(json,textStatus){    
                // console.log(json.orderList);
                // self.orderList=json.orderList;

                onSuccess && onSuccess(json);

            },    
            error:function(XMLHttpRequest,textStatus,errorThrown){    
                console.log("jsonp.error:"+textStatus);    
            }  
        })


    } 

}