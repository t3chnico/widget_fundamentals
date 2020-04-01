(function() {
    /* populate the 'data' object */
    /* e.g., data.table = $sp.getValue('table'); */
      data.incident = [];
      var myIncident = new GlideRecord('incident');
      myIncident.addQuery('active', true);
      myIncident.setLimit(10);
      myIncident.query();
      while(myIncident.next()){
          data.incident.push(myIncident.getValue('number'));
      } 
  })();