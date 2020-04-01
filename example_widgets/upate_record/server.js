(function() {
    /* populate the 'data' object */
    /* e.g., data.table = $sp.getValue('table'); */
      data.incident = [];
      var myIncident = new GlideRecord('incident');
      myIncident.addQuery('active', true);
      myIncident.setLimit(10);
      myIncident.query();
      while(myIncident.next()){
          var myRecord = {};
          myRecord.number = myIncident.getValue('number');
          myRecord.sys_id = myIncident.getValue('sys_id');
            data.incident.push(myRecord);
      }
      
      if(input){
          var updatedIncident = new GlideRecord('incident');
          updatedIncident.get(input.updatedIncident.sys_id);
          if(!updatedIncident)
              return;
          
          updatedIncident.setValue('number', input.updatedIncident.number);
          var response = updatedIncident.update();
          
          if(response)
              gs.addInfoMessage("Record updated!");
      }
  
  })();